import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();

    if (!userId) return new NextResponse("Unaithorized", { status: 401 });

    const query = await db.company.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json(query);
  } catch (err) {
    console.log("[COMPANY POST]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
