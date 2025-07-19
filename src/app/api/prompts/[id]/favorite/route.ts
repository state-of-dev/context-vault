import { NextRequest, NextResponse } from 'next/server'
import { auth } from '../../../../../auth'
import { prisma } from '../../../../../lib/prisma'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    
    // Verificar que el prompt existe
    const prompt = await prisma.prompt.findUnique({
      where: { id }
    })

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })
    }

    // Verificar si ya está en favoritos
    const existingFavorite = await prisma.favoritePrompt.findUnique({
      where: {
        userId_promptId: {
          userId: session.user.id,
          promptId: id
        }
      }
    })

    if (existingFavorite) {
      return NextResponse.json({ error: 'Already in favorites' }, { status: 400 })
    }

    // Agregar a favoritos
    await prisma.favoritePrompt.create({
      data: {
        userId: session.user.id,
        promptId: id
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error adding to favorites:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    // Remover de favoritos
    await prisma.favoritePrompt.delete({
      where: {
        userId_promptId: {
          userId: session.user.id,
          promptId: id
        }
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing from favorites:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}