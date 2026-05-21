import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import type { Match } from '@/lib/types'

const DATA_DIR = path.join(process.cwd(), 'data')
const FILE = path.join(DATA_DIR, 'custom-matches.json')

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
  try {
    await fs.access(FILE)
  } catch {
    await fs.writeFile(FILE, '[]', 'utf-8')
  }
}

export async function readCustomMatches(): Promise<Match[]> {
  await ensureFile()
  const raw = await fs.readFile(FILE, 'utf-8')
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Match[]) : []
  } catch {
    return []
  }
}

export async function readCustomMatchesForSport(sport: string): Promise<Match[]> {
  const all = await readCustomMatches()
  const s = sport.toLowerCase()
  return all.filter((m) => (m.sport ?? 'football').toLowerCase() === s)
}

export async function addCustomMatch(
  input: Omit<Match, 'id' | 'custom'> & { sport: string },
): Promise<Match> {
  const all = await readCustomMatches()
  const match: Match = {
    ...input,
    id: `custom-${randomUUID()}`,
    custom: true,
  }
  all.unshift(match)
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf-8')
  return match
}

export async function updateCustomMatch(
  id: string,
  patch: Partial<Match>,
): Promise<Match | null> {
  const all = await readCustomMatches()
  const idx = all.findIndex((m) => m.id === id)
  if (idx === -1) return null
  // id and custom flag are not editable
  const { id: _id, custom: _custom, ...rest } = patch
  void _id
  void _custom
  const next: Match = { ...all[idx], ...rest, id: all[idx].id, custom: true }
  all[idx] = next
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf-8')
  return next
}

export async function deleteCustomMatch(id: string): Promise<boolean> {
  const all = await readCustomMatches()
  const next = all.filter((m) => m.id !== id)
  if (next.length === all.length) return false
  await fs.writeFile(FILE, JSON.stringify(next, null, 2), 'utf-8')
  return true
}
