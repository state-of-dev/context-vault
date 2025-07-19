"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Heart, Copy, Check, Loader2 } from "lucide-react"
import { Button } from "./button"
import { cn } from "../../lib/utils"

interface PromptActionsProps {
  promptId: string
  initialIsFavorite?: boolean
  initialCopies?: number
  onCopySuccess?: (newCopies: number) => void
  onFavoriteToggle?: (isFavorite: boolean) => void
  className?: string
}

export function PromptActions({
  promptId,
  initialIsFavorite = false,
  initialCopies = 0,
  onCopySuccess,
  onFavoriteToggle,
  className
}: PromptActionsProps) {
  const { data: session } = useSession()
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)
  const [copies, setCopies] = useState(initialCopies)
  const [copied, setCopied] = useState(false)
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false)
  const [isCopying, setIsCopying] = useState(false)

  const handleFavoriteToggle = async () => {
    if (!session?.user) return
    
    setIsTogglingFavorite(true)
    try {
      const method = isFavorite ? 'DELETE' : 'POST'
      const response = await fetch(`/api/prompts/${promptId}/favorite`, {
        method
      })

      if (response.ok) {
        const newFavoriteState = !isFavorite
        setIsFavorite(newFavoriteState)
        onFavoriteToggle?.(newFavoriteState)
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
    } finally {
      setIsTogglingFavorite(false)
    }
  }

  const handleCopy = async (content: string) => {
    if (!session?.user) return
    
    setIsCopying(true)
    try {
      // Copiar al clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content)
      } else {
        // Fallback para contextos no seguros
        const textArea = document.createElement('textarea')
        textArea.value = content
        textArea.style.position = 'absolute'
        textArea.style.left = '-999999px'
        document.body.prepend(textArea)
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
      }

      // Incrementar contador en el servidor
      const response = await fetch(`/api/prompts/${promptId}/copy`, {
        method: 'POST'
      })

      if (response.ok) {
        const data = await response.json()
        setCopies(data.copies)
        onCopySuccess?.(data.copies)
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error copying prompt:', error)
    } finally {
      setIsCopying(false)
    }
  }

  if (!session?.user) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Button variant="outline" size="sm" disabled>
          <Heart className="h-4 w-4 mr-1" />
          Favorito
        </Button>
        <Button variant="outline" size="sm" disabled>
          <Copy className="h-4 w-4 mr-1" />
          Copiar
        </Button>
        <span className="text-xs text-muted-foreground">
          Inicia sesión para interactuar
        </span>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant={isFavorite ? "default" : "outline"}
        size="sm"
        onClick={handleFavoriteToggle}
        disabled={isTogglingFavorite}
      >
        {isTogglingFavorite ? (
          <Loader2 className="h-4 w-4 mr-1 animate-spin" />
        ) : (
          <Heart className={cn("h-4 w-4 mr-1", isFavorite && "fill-current")} />
        )}
        {isFavorite ? "Guardado" : "Guardar"}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopy("/* Placeholder for prompt content */")}
        disabled={isCopying}
      >
        {isCopying ? (
          <Loader2 className="h-4 w-4 mr-1 animate-spin" />
        ) : copied ? (
          <Check className="h-4 w-4 mr-1 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 mr-1" />
        )}
        {copied ? "Copiado!" : "Copiar"}
      </Button>
      
      <span className="text-xs text-muted-foreground">
        {copies.toLocaleString()} copias
      </span>
    </div>
  )
}