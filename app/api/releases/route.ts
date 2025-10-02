import { NextResponse } from "next/server";
import releases from "@/data/releases.json";

export async function GET() {
  return NextResponse.json(releases);
}
