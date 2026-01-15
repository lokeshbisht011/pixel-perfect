import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dateStr = searchParams.get('date');
  const limit = parseInt(searchParams.get('limit') || '12', 10);

  try {
    const whereClause = {
      addToTodaysPixelArts: true, // Only fetch arts the users agreed to share
    };

    // If a date is provided, filter for that specific 24-hour window
    if (dateStr) {
      const startOfDay = new Date(dateStr);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(dateStr);
      endOfDay.setHours(23, 59, 59, 999);

      whereClause.createdAt = {
        gte: startOfDay,
        lte: endOfDay,
      };
    }

    const pixelArts = await prisma.pixelArt.findMany({
      where: whereClause,
      orderBy: [
        {
          likes: {
            _count: 'desc', // Rank popular pixel arts first
          },
        },
        {
          createdAt: 'desc', // Then show newest
        },
      ],
      include: {
        profile: {
          select: {
            id: true,
            username: true,
            avatarConfig: true,
          },
        },
        _count: {
          select: { 
            likes: true, 
            comments: true 
          },
        },
        // We include specific comments but limit them to keep the response light
        comments: {
          take: 3,
          orderBy: { createdAt: "desc" },
          include: {
            profile: {
              select: {
                username: true,
                avatarConfig: true,
              },
            },
          },
        },
      },
      take: limit,
    });

    return NextResponse.json(doodles);
  } catch (error) {
    console.error('Error fetching pixel arts:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}