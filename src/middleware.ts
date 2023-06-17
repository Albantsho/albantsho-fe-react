import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import routes from "utils/routes";

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken");
  const accessToken = request.cookies.get("refreshToken");

  //* registration routes
  if (request.nextUrl.pathname.startsWith(routes.register.url)) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith(routes.resetPassword.url)) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith(routes.checkEmail.url)) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith(routes.resetPasswordConfirmation.url)) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith(routes.signin.url)) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith(routes.verifyEmail.url)) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }










  if (request.nextUrl.pathname.startsWith("/authentication")) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }

  // return NextResponse.rewrite(new URL('/dashboard/user', request.url));

  return NextResponse.next();
}
