import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  try {
    const { prompt, promptDescription, promptDate } = await req.json();

    if (!prompt || !promptDate) {
      return NextResponse.json(
        { error: "prompt and promptDate are required" },
        { status: 400 }
      );
    }

    // 🔒 Force UTC midnight (date-only)
    const date = new Date(`${promptDate}T00:00:00.000Z`);

    const updated = await prisma.dailyPrompt.update({
      where: { id: params.id },
      data: {
        prompt,
        promptDescription,
        promptDate: date,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating prompt:", error);

    // Handle duplicate date constraint (if promptDate is unique)
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Another prompt already exists for this date" },
        { status: 409 }
      );
    }

    // Handle not found
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Prompt not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Failed to update prompt" },
      { status: 500 }
    );
  }
}
