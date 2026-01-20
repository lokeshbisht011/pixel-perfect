import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { prompt, promptDescription, promptDate } = await req.json();

    if (!prompt || !promptDate) {
      return NextResponse.json(
        { error: "prompt and promptDate are required" },
        { status: 400 }
      );
    }

    // Ensure the date is in YYYY-MM-DD format
    const dateString = promptDate; // assume client sends "YYYY-MM-DD"

    const newPrompt = await prisma.dailyPrompt.create({
      data: {
        prompt,
        promptDescription,
        promptDate: dateString, // store as string
      },
    });

    return NextResponse.json(newPrompt);
  } catch (error) {
    console.error("Error adding prompt:", error);

    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Prompt already exists for this date" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to add prompt" },
      { status: 500 }
    );
  }
}
