"use client";
// @ts-nocheck

import { motion } from 'framer-motion';
import { TrendingUp, Heart, Sparkles, User, LogOut, Plus } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ThemeToggle } from '../../../components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export function Header() {
  const { data: session, status } = useSession();

  return (
    <motion.header 
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl">ContextVault</span>
            </motion.div>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Navegación solo para usuarios logueados */}
          {session && (
            <nav className="flex items-center space-x-6">
              <Link
                href="/explore"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center space-x-1"
              >
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span>Explorar</span>
              </Link>
              <Link
                href="/my-prompts"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center space-x-1"
              >
                <Heart className="h-4 w-4 text-rose-500" />
                <span>Mis Workflows</span>
              </Link>
            </nav>
          )}
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            {status === "loading" ? (
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
            ) : session ? (
              // Usuario logueado - Dropdown menu
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                      <AvatarFallback>
                        {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{session.user?.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {session.user?.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Mi Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-prompts?tab=favorites" className="flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Favoritos</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-prompts?tab=created" className="flex items-center">
                      <Plus className="mr-2 h-4 w-4" />
                      <span>Creados por mí</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Usuario no logueado - Botones de login/registro
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => signIn()}
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">Iniciar Sesión</span>
                </Button>
                <Button 
                  size="sm"
                  onClick={() => signIn()}
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">Registrarse</span>
                  <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}