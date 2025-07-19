"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Heart, Copy, Star, Edit, Trash2, Eye } from "lucide-react"
import { PromptPreview } from "../../../components/ui/terminal"
import Link from "next/link"

interface PromptWithCounts {
  id: string
  title: string
  description: string
  preview: string
  categoryId: string
  aiToolId: string
  author: {
    id: string
    username: string | null
    name: string | null
  }
  category: {
    id: string
    name: string
  }
  aiTool: {
    id: string
    name: string
  }
  _count: {
    likes: number
    copies: number
  }
  createdAt: Date
}

interface MyPromptsClientProps {
  createdPrompts: PromptWithCounts[]
  favoritePrompts: PromptWithCounts[]
}

export function MyPromptsClient({ createdPrompts, favoritePrompts }: MyPromptsClientProps) {
  const [activeTab, setActiveTab] = useState("created")

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  }

  const renderPromptCard = (prompt: PromptWithCounts, showActions: boolean = false) => (
    <motion.div key={prompt.id} {...fadeInUp}>
      <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
        <CardHeader>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                {prompt.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {prompt.description}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-amber-400" />
              {showActions && (
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/prompt/${prompt.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
              {prompt.category.name}
            </Badge>
            <Badge variant="outline" className="border-purple-200 text-purple-700 dark:border-purple-700 dark:text-purple-400">
              {prompt.aiTool.name}
            </Badge>
          </div>

          <PromptPreview 
            preview={prompt.preview}
            isLoggedIn={true}
            className="mb-4"
          />
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center space-x-1 text-rose-500">
                <Heart className="h-4 w-4" />
                <span>{prompt._count.likes.toLocaleString()}</span>
              </span>
              <span className="flex items-center space-x-1 text-green-500">
                <Copy className="h-4 w-4" />
                <span>{prompt._count.copies.toLocaleString()}</span>
              </span>
            </div>
            <span className="text-xs">
              {new Date(prompt.createdAt).toLocaleDateString('es-ES')}
            </span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="created" className="flex items-center space-x-2">
          <Edit className="h-4 w-4" />
          <span>Creados ({createdPrompts.length})</span>
        </TabsTrigger>
        <TabsTrigger value="favorites" className="flex items-center space-x-2">
          <Heart className="h-4 w-4" />
          <span>Favoritos ({favoritePrompts.length})</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="created" className="mt-6">
        {createdPrompts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Edit className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No has creado ningún prompt</h3>
              <p className="text-muted-foreground mb-4">
                Empieza a compartir tus ideas con la comunidad
              </p>
              <Button>
                Crear mi primer prompt
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {createdPrompts.map(prompt => renderPromptCard(prompt, true))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="favorites" className="mt-6">
        {favoritePrompts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No tienes prompts favoritos</h3>
              <p className="text-muted-foreground mb-4">
                Explora y guarda los prompts que más te gusten
              </p>
              <Button asChild>
                <Link href="/">
                  Explorar prompts
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favoritePrompts.map(prompt => renderPromptCard(prompt, false))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}