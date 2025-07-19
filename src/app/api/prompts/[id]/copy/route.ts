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

    // Incrementar contador de copias
    const updatedPrompt = await prisma.prompt.update({
      where: { id },
      data: {
        copies: {
          increment: 1
        }
      }
    })

    // Registrar la copia (opcional, para analytics)
    await prisma.promptCopy.create({
      data: {
        promptId: id,
        userId: session.user.id
      }
    })

    return NextResponse.json({ 
      success: true, 
      copies: updatedPrompt.copies 
    })
  } catch (error) {
    console.error('Error copying prompt:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}