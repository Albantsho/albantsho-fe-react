import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import routes from "utils/routes";

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken");
  const accessToken = request.cookies.get("accessToken");
  const tokenPayload: any = jwt.decode(refreshToken?.value || "");

  console.log(request.nextUrl.pathname);


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

  //* writer routes
  if (request.nextUrl.pathname.includes(routes.writerDashboard.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
    if (tokenPayload && tokenPayload.userType !== "writer") {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.includes(routes.abstract.pathname)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
    if (tokenPayload && tokenPayload.userType !== "writer") {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }
  if (request.nextUrl.pathname.includes(routes.script.pathname)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
    if (tokenPayload && tokenPayload.userType !== "writer") {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }

  //* producer routes
  if (request.nextUrl.pathname.includes(routes.producerDashboard.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));

    }
    if (tokenPayload && tokenPayload.userType !== "producer") {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }

  //* reviewer routes
  if (request.nextUrl.pathname.includes(routes.reviewerDashboard.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));

    }
    if (tokenPayload && tokenPayload.userType !== "reviewer") {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }

  //* admin routes
  if (request.nextUrl.pathname.includes(routes.adminDashboard.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));

    }
    if (tokenPayload && tokenPayload.userType !== "admin") {
      return NextResponse.rewrite(new URL(routes.home.url, request.url));
    }
  }

  //* authorized routes
  if (request.nextUrl.pathname.includes(routes.wallet.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.signin.url, request.url));

    }
  }
  if (request.nextUrl.pathname.includes(routes.invites.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.signin.url, request.url));

    }
  }
  if (request.nextUrl.pathname.includes(routes.aiEditor.url)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.signin.url, request.url));

    }
  }
  if (request.nextUrl.pathname.includes(routes.marketplaceOneScript.pathname)) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL(routes.signin.url, request.url));

    }
  }

  return NextResponse.next();
}
