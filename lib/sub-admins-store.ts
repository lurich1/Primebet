import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID, randomInt } from 'crypto'
import type { SubAdmin } from '@/lib/types'

const DATA_DIR = path.join(process.cwd(), 'data')
const FILE = path.join(DATA_DIR, 'sub-admins.json')

const REF_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
  try {
    await fs.access(FILE)
  } catch {
    await fs.writeFile(FILE, '[]', 'utf-8')
  }
}

export async function readSubAdmins(): Promise<SubAdmin[]> {
  await ensureFile()
  const raw = await fs.readFile(FILE, 'utf-8')
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as SubAdmin[]) : []
  } catch {
    return []
  }
}

async function writeSubAdmins(all: SubAdmin[]): Promise<void> {
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf-8')
}

function generateReferralCode(): string {
  let s = ''
  for (let i = 0; i < 6; i++) s += REF_ALPHABET[randomInt(0, REF_ALPHABET.length)]
  return s
}

export async function generateUniqueReferralCode(): Promise<string> {
  const all = await readSubAdmins()
  const used = new Set(all.map((s) => s.referralCode))
  for (let i = 0; i < 20; i++) {
    const code = generateReferralCode()
    if (!used.has(code)) return code
  }
  let code = ''
  do {
    code = ''
    for (let i = 0; i < 8; i++) code += REF_ALPHABET[randomInt(0, REF_ALPHABET.length)]
  } while (used.has(code))
  return code
}

export async function findSubAdminByEmail(email: string): Promise<SubAdmin | null> {
  const all = await readSubAdmins()
  const lower = email.toLowerCase()
  return all.find((s) => s.email.toLowerCase() === lower) ?? null
}

export async function findSubAdminById(id: string): Promise<SubAdmin | null> {
  const all = await readSubAdmins()
  return all.find((s) => s.id === id) ?? null
}

export async function findSubAdminByReferralCode(code: string): Promise<SubAdmin | null> {
  const all = await readSubAdmins()
  const upper = code.toUpperCase()
  return all.find((s) => s.referralCode === upper) ?? null
}

export async function addSubAdmin(
  input: Omit<SubAdmin, 'id' | 'createdAt' | 'commissionBalance' | 'totalCommissionEarned'>,
): Promise<SubAdmin> {
  const all = await readSubAdmins()
  const sa: SubAdmin = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    commissionBalance: 0,
    totalCommissionEarned: 0,
  }
  all.unshift(sa)
  await writeSubAdmins(all)
  return sa
}

export async function updateSubAdmin(
  id: string,
  patch: Partial<SubAdmin>,
): Promise<SubAdmin | null> {
  const all = await readSubAdmins()
  const idx = all.findIndex((s) => s.id === id)
  if (idx === -1) return null
  // Don't allow id changes via patch
  const { id: _id, ...rest } = patch
  void _id
  const next: SubAdmin = { ...all[idx], ...rest, id: all[idx].id }
  all[idx] = next
  await writeSubAdmins(all)
  return next
}

export async function creditCommission(
  id: string,
  amount: number,
): Promise<SubAdmin | null> {
  const all = await readSubAdmins()
  const idx = all.findIndex((s) => s.id === id)
  if (idx === -1) return null
  all[idx] = {
    ...all[idx],
    commissionBalance: +(all[idx].commissionBalance + amount).toFixed(2),
    totalCommissionEarned: +(all[idx].totalCommissionEarned + amount).toFixed(2),
  }
  await writeSubAdmins(all)
  return all[idx]
}

export async function deleteSubAdmin(id: string): Promise<boolean> {
  const all = await readSubAdmins()
  const next = all.filter((s) => s.id !== id)
  if (next.length === all.length) return false
  await writeSubAdmins(next)
  return true
}
