import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, arg: {
  params: {
    authRoutes: string[]
  }
}) {
  const params = arg.params.authRoutes;
  console.log(params);
  return NextResponse.json({
    message: "Hello world"
  })
}