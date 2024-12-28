import { NextResponse } from "next/server";

let cnt = 0;
export function middleware(){
  cnt++;
  const res = NextResponse.next();
  console.log(cnt)
  return res;
}

export const config = {
  matcher: '/api/:path*'
}