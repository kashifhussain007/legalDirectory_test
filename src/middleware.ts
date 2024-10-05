import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;
  console.log("req", req);
  // Allow public routes (e.g., login, landing page)
  if (pathname === "/" || pathname.startsWith("/public")) {
    return NextResponse.next();
  }

  // If no token, redirect to the landing page
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Role-based redirection (admin, editor, user)
  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/editor") && token.role !== "editor") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/user") && token.role !== "user") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If authenticated, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/aadmin/:path*", "/eeditor/:path*", "/uuser/:path*"],
};
