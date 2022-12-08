import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // console.log(req.headers);
  // console.log(req.cookies.has("refresh_token"));
  // if (url.includes("/admin")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes("/dashboard")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.marketplace.url)) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.profile)) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.abstract)) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.wallet)) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.script)) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect(routes.signin.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.signin.url)) {
  //   if (refresh_token) {
  //     return NextResponse.redirect(routes.home.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.checkEmail)) {
  //   if (refresh_token) {
  //     return NextResponse.redirect(routes.home.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.register)) {
  //   if (refresh_token) {
  //     return NextResponse.redirect(routes.home.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.verifyEmail)) {
  //   if (refresh_token) {
  //     return NextResponse.redirect(routes.home.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.resetPasswordConfirmation)) {
  //   if (refresh_token) {
  //     return NextResponse.redirect(routes.home.permission);
  //   }
  //   return NextResponse.next();
  // } else if (url.includes(routes.forgetPassword)) {
  //   if (refresh_token) {
  //     return NextResponse.redirect(routes.home.permission);
  //   }
  //   return NextResponse.next();
  // }

  return NextResponse.next();
}
