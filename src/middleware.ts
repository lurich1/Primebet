import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ADMIN_COOKIE, isValidSessionCookie } from '@/lib/admin-auth'

/**
 * Gate the /admin dashboard. The admin API routes already verify the session
 * cookie server-side, but the pages rendered nothing to stop an unauthenticated
 * visitor from loading the shell — this redirects them to the login screen.
 *
 * Runs on the Edge runtime; isValidSessionCookie uses crypto.subtle which is
 * available there.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // The login page must stay reachable while logged out.
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  const cookie = request.cookies.get(ADMIN_COOKIE)?.value
  if (await isValidSessionCookie(cookie)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/admin/login'
  url.searchParams.set('next', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  // Guard the admin pages only (not /api/admin/* — those self-verify).
  matcher: ['/admin', '/admin/:path*'],
}
