import { NextResponse } from 'next/server'
import { deleteSubAdmin, updateSubAdmin } from '@/lib/sub-admins-store'

export const dynamic = 'force-dynamic'

interface Params {
  params: Promise<{ id: string }>
}

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params
  let body: { approved?: boolean }
  try {
    body = (await request.json()) as { approved?: boolean }
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }
  if (typeof body.approved !== 'boolean') {
    return NextResponse.json({ error: 'approved must be boolean' }, { status: 400 })
  }
  const updated = await updateSubAdmin(id, { approved: body.approved })
  if (!updated) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json({
    subAdmin: {
      id: updated.id,
      name: updated.name,
      email: updated.email,
      approved: updated.approved,
    },
  })
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params
  const ok = await deleteSubAdmin(id)
  if (!ok) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
