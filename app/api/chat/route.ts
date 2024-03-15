import { getAllChatsFilterByDate } from "@/app/utils/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await getAllChatsFilterByDate();

  return NextResponse.json(data, {
    status: 200,
  });
}
