import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/lib/prisma'
import { authOptions } from '@/lib/authOptions'

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { id } = params
  const body = await req.json()
  const { 
    title, 
    data,           // The JSON stringified grid array
    gridSize,       // The integer size (e.g., 32)
    imageUrl,       // The PNG preview
    addToTodaysPixelArts,       // Maps to 'Add to Today's Pixel Arts'
    editable,       // Maps to 'Allow others to edit'
    dailyPromptId
  } = body;

  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email }
    })

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    const existingPixelArt = await prisma.pixelArt.findUnique({
      where: { id },
      select: { profileId: true }
    })

    if (!existingPixelArt || existingPixelArt.profileId !== profile.id) {
      return NextResponse.json({ error: 'Unauthorized to edit this pixel art' }, { status: 403 })
    }

    const updatedPixelArt = await prisma.pixelArt.update({
      where: { id },
      data: {
        title,
        data,
        gridSize: parseInt(gridSize),
        imageUrl,
        addToTodaysPixelArts: !!addToTodaysPixelArts,
        editable: !!editable,
        dailyPromptId,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true, doodle: updatedPixelArt })
  } catch (error) {
    console.error('Error updating doodle:', error)
    return NextResponse.json({ error: 'Failed to update doodle' }, { status: 500 })
  }
}