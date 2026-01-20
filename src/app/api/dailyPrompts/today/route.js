import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST() {
  try {
    const now = new Date();
    const todayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const todayDateString = todayUTC.toISOString().split("T")[0]; // "YYYY-MM-DD"

    const prompt = await prisma.dailyPrompt.findUnique({
      where: {
        promptDate: todayDateString, // string comparison
      },
    });

    return NextResponse.json(prompt);
  } catch (error) {
    console.error("Error fetching today's prompt:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
