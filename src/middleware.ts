import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { cookies, url } = req;
  const refresh_token = cookies.get("refresh_token");

  // if (url.includes("/admin")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/dashboard")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/marketplace")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/profile")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/abstract")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/wallet")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/script")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/reviewer")) {
  //   if (!refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/login");
  //   }
  //   return NextResponse.next();
  // }

  // if (url.includes("/login")) {
  //   if (refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/check-email")) {
  //   if (refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/register")) {
  //   if (refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/verify-email")) {
  //   if (refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/reset-password-confirmation")) {
  //   if (refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }
  //   return NextResponse.next();
  // }
  // if (url.includes("/forget-password")) {
  //   if (refresh_token) {
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }
  //   return NextResponse.next();
  // }

  return NextResponse.next();
}
