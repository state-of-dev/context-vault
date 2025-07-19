declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      image?: string
      isPremium?: boolean
      username?: string
    }
  }

  interface User {
    id: string
    email: string
    name: string
    image?: string
    isPremium?: boolean
    username?: string
  }
}