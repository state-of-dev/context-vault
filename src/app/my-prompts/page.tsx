import { auth } from "../../auth"
import { redirect } from "next/navigation"
import { prisma } from "../../lib/prisma"
import { MyPromptsClient } from "../../features/my-prompts/components/my-prompts-client"

export default async function MyPromptsPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/api/auth/signin')
  }

  // Obtener prompts creados por el usuario
  const createdPrompts = await prisma.prompt.findMany({
    where: { authorId: session.user.id },
    include: {
      author: true,
      category: true,
      subcategory: true,
      aiTool: true,
      _count: {
        select: {
          likes: true,
          copies: true
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  })

  // Obtener prompts favoritos del usuario
  const favoritePrompts = await prisma.favoritePrompt.findMany({
    where: { userId: session.user.id },
    include: {
      prompt: {
        include: {
          author: true,
          category: true,
          subcategory: true,
          aiTool: true,
          _count: {
            select: {
              likes: true,
              copies: true
            }
          }
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mis Prompts</h1>
          <p className="text-muted-foreground">
            Gestiona tus prompts creados y favoritos
          </p>
        </div>

        <MyPromptsClient 
          createdPrompts={createdPrompts}
          favoritePrompts={favoritePrompts.map(f => f.prompt)}
        />
      </div>
    </div>
  )
}