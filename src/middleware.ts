import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Rutas que requieren autenticación
  const protectedRoutes = ['/profile', '/my-prompts', '/create-prompt']
  const isProtectedRoute = protectedRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )

  // Redirigir a login si no está autenticado y trata de acceder a ruta protegida
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL('/api/auth/signin', nextUrl.origin)
    loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
}