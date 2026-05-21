import { promises as fs } from 'fs'
import path from 'path'
import { randomInt } from 'crypto'
import type { PlacedBet } from '@/lib/types'

export type { PlacedBet }

// Avoid visually-confusing chars (0, O, 1, I, L)
const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

function generateCode(length = 6): string {
  let s = ''
  for (let i = 0; i < length; i++) {
    s += CODE_ALPHABET[randomInt(0, CODE_ALPHABET.length)]
  }
  return s
}

export async function generateUniqueCode(): Promise<string> {
  const existing = new Set((await readBets()).map((b) => b.code))
  for (let i = 0; i < 20; i++) {
    const code = generateCode()
    if (!existing.has(code)) return code
  }
  // Fall back to longer code if 6-char collision after 20 tries
  return generateCode(8)
}

export async function findBetByCode(code: string): Promise<PlacedBet | null> {
  const all = await readBets()
  const upper = code.toUpperCase()
  return all.find((b) => b.code === upper) ?? null
}

const DATA_DIR = path.join(process.cwd(), 'data')
const BETS_FILE = path.join(DATA_DIR, 'bets.json')

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
  try {
    await fs.access(BETS_FILE)
  } catch {
    await fs.writeFile(BETS_FILE, '[]', 'utf-8')
  }
}

export async function readBets(): Promise<PlacedBet[]> {
  await ensureFile()
  const raw = await fs.readFile(BETS_FILE, 'utf-8')
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return []
  }
  if (!Array.isArray(parsed)) return []

  // Backfill missing booking codes (for bets placed before the code field existed)
  let mutated = false
  const used = new Set<string>()
  const bets = parsed as PlacedBet[]
  for (const b of bets) {
    if (b.code) used.add(b.code)
  }
  for (const b of bets) {
    if (!b.code) {
      let code = ''
      do {
        code = ''
        for (let i = 0; i < 6; i++) code += CODE_ALPHABET[randomInt(0, CODE_ALPHABET.length)]
      } while (used.has(code))
      used.add(code)
      b.code = code
      mutated = true
    }
  }
  if (mutated) {
    await fs.writeFile(BETS_FILE, JSON.stringify(bets, null, 2), 'utf-8')
  }
  return bets
}

export async function addBet(bet: PlacedBet): Promise<void> {
  const all = await readBets()
  all.unshift(bet)
  await fs.writeFile(BETS_FILE, JSON.stringify(all.slice(0, 200), null, 2), 'utf-8')
}

export async function updateBet(
  id: string,
  patch: Partial<Pick<PlacedBet, 'status' | 'settledAt' | 'payout'>>,
): Promise<PlacedBet | null> {
  const all = await readBets()
  const idx = all.findIndex((b) => b.id === id)
  if (idx === -1) return null
  const updated: PlacedBet = { ...all[idx], ...patch }
  all[idx] = updated
  await fs.writeFile(BETS_FILE, JSON.stringify(all, null, 2), 'utf-8')
  return updated
}

export async function deleteBet(id: string): Promise<boolean> {
  const all = await readBets()
  const next = all.filter((b) => b.id !== id)
  if (next.length === all.length) return false
  await fs.writeFile(BETS_FILE, JSON.stringify(next, null, 2), 'utf-8')
  return true
}
