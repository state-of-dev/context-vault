import { auth } from "../../auth"
import { redirect } from "next/navigation"
import { prisma } from "../../lib/prisma"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Mail, Calendar, Crown, Heart, Copy, FileText } from "lucide-react"

export default async function ProfilePage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/api/auth/signin')
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      prompts: {
        include: {
          _count: {
            select: {
              likes: true,
              copies: true
            }
          }
        }
      },
      favorites: {
        include: {
          prompt: true
        }
      }
    }
  })

  if (!user) {
    redirect('/api/auth/signin')
  }

  const totalLikes = user.prompts.reduce((sum, prompt) => sum + prompt._count.likes, 0)
  const totalCopies = user.prompts.reduce((sum, prompt) => sum + prompt._count.copies, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header del perfil */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.image || ''} alt={user.username || ''} />
                <AvatarFallback className="text-2xl">
                  {user.username?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <CardTitle className="text-2xl">{user.username || user.name}</CardTitle>
                  {user.isPremium && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      <Crown className="h-4 w-4 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
                <CardDescription className="flex items-center space-x-4 text-base">
                  <span className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span>{user.email}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Miembro desde {new Date(user.createdAt).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}</span>
                  </span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Prompts Creados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span className="text-2xl font-bold">{user.prompts.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Likes Recibidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-rose-500" />
                <span className="text-2xl font-bold">{totalLikes}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Copias Totales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Copy className="h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold">{totalCopies}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Favoritos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-amber-500" />
                <span className="text-2xl font-bold">{user.favorites.length}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Prompts recientes */}
        <Card>
          <CardHeader>
            <CardTitle>Mis Prompts Recientes</CardTitle>
            <CardDescription>Tus últimos prompts publicados</CardDescription>
          </CardHeader>
          <CardContent>
            {user.prompts.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Aún no has creado ningún prompt. ¡Empieza a compartir tus ideas!
              </p>
            ) : (
              <div className="space-y-4">
                {user.prompts.slice(0, 3).map((prompt) => (
                  <div key={prompt.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-medium">{prompt.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{prompt.description}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-rose-500" />
                        <span>{prompt._count.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Copy className="h-4 w-4 text-green-500" />
                        <span>{prompt._count.copies}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}