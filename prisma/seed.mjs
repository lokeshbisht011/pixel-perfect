import { BADGES } from "../src/lib/badges.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const DAILY_PROMPTS = [
  {
    prompt: "Pixel your breakfast",
    promptDescription: "Draw your favorite breakfast item in pixels.",
  },
  {
    prompt: "Create a night scene",
    promptDescription:
      "Use dark colors and lights to make a nighttime pixel scene.",
  },
  {
    prompt: "Draw your pet",
    promptDescription:
      "Create a pixel art version of your pet or favorite animal.",
  },
  {
    prompt: "Abstract shapes",
    promptDescription: "Play with colors and shapes for an abstract pixel art.",
  },
  {
    prompt: "Pixel a plant",
    promptDescription: "Draw a plant, flower, or tree in pixel art style.",
  },
  {
    prompt: "Retro icon",
    promptDescription: "Design a retro-inspired icon or logo in pixels.",
  },
  {
    prompt: "Fantasy creature",
    promptDescription: "Create a mythical or fantasy creature in pixel art.",
  },
  {
    prompt: "Emoji in pixels",
    promptDescription: "Recreate your favorite emoji as pixel art.",
  },
  {
    prompt: "Pixel vehicle",
    promptDescription: "Draw a car, bike, or spaceship in pixel style.",
  },
  {
    prompt: "Pixel self-portrait",
    promptDescription: "Try making a pixel art version of yourself.",
  },
];

async function seedDailyPrompts() {
  const today = new Date();

  for (let i = 0; i < DAILY_PROMPTS.length; i++) {
    const promptDateObj = new Date(today);
    promptDateObj.setDate(today.getDate() + i); // today + i days

    // Convert to YYYY-MM-DD string
    const promptDate = promptDateObj.toISOString().split("T")[0];

    const { prompt, promptDescription } = DAILY_PROMPTS[i];

    await prisma.dailyPrompt.upsert({
      where: { promptDate }, // string match
      update: {},
      create: {
        prompt,
        promptDescription,
        promptDate, // store as string, not Date
      },
    });
  }

  console.log("Daily prompts seeded for the next days!");
}


async function main() {
  // Seed badges
  for (const badgeData of Object.values(BADGES)) {
    await prisma.badge.upsert({
      where: { id: badgeData.id },
      update: {},
      create: {
        id: badgeData.id,
        name: badgeData.name,
        description: badgeData.description,
        icon: badgeData.icon,
        requirement: badgeData.requirement,
        type: badgeData.type,
        tier: badgeData.tier,
      },
    });
  }

  console.log("Badges seeded successfully!");

  // Seed daily prompts
  await seedDailyPrompts();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
