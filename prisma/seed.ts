import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpiar datos existentes
  await prisma.favorite.deleteMany();
  await prisma.userActivity.deleteMany();
  await prisma.collectionPrompt.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.collection.deleteMany();
  await prisma.prompt.deleteMany();
  await prisma.subcategory.deleteMany();
  await prisma.category.deleteMany();
  await prisma.aITool.deleteMany();
  await prisma.user.deleteMany();

  // Crear usuarios creators realistas
  const users = await Promise.all([
    prisma.user.create({
      data: {
        id: 'user1',
        email: 'alex.frontend@contextvaul.com',
        username: 'AlexReactMaster',
        name: 'Alejandro Rodríguez',
        isPremium: true,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-12-01')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user2',
        email: 'maria.filmmaker@contextvaul.com',
        username: 'MariaIndieFilm',
        name: 'María Santos',
        isPremium: false,
        createdAt: new Date('2024-02-20'),
        updatedAt: new Date('2024-11-30')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user3',
        email: 'david.growth@contextvaul.com',
        username: 'DavidGrowthHack',
        name: 'David Chen',
        isPremium: true,
        createdAt: new Date('2024-03-10'),
        updatedAt: new Date('2024-12-01')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user4',
        email: 'ana.uxdesign@contextvaul.com',
        username: 'AnaUXPro',
        name: 'Ana García',
        isPremium: false,
        createdAt: new Date('2024-04-05'),
        updatedAt: new Date('2024-11-28')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user5',
        email: 'carlos.devops@contextvaul.com',
        username: 'CarlosCloudNative',
        name: 'Carlos López',
        isPremium: true,
        createdAt: new Date('2024-05-12'),
        updatedAt: new Date('2024-12-02')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user6',
        email: 'sofia.airesearch@contextvaul.com',
        username: 'SofiaAIEducator',
        name: 'Sofía Martínez',
        isPremium: false,
        createdAt: new Date('2024-06-18'),
        updatedAt: new Date('2024-11-29')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user7',
        email: 'miguel.backend@contextvaul.com',
        username: 'MiguelAPIGuru',
        name: 'Miguel Fernández',
        isPremium: true,
        createdAt: new Date('2024-07-22'),
        updatedAt: new Date('2024-12-03')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user8',
        email: 'lucia.contentcreator@contextvaul.com',
        username: 'LuciaContentQueen',
        name: 'Lucía Morales',
        isPremium: false,
        createdAt: new Date('2024-08-14'),
        updatedAt: new Date('2024-11-27')
      }
    })
  ]);

  // Crear herramientas AI completas basadas en nuestra investigación
  const aiTools = await Promise.all([
    // GitHub Marketplace Models
    prisma.aITool.create({
      data: {
        id: 'gpt-4-1',
        name: 'GPT-4.1',
        type: 'chatbot',
        description: 'Modelo avanzado de OpenAI que supera GPT-4o en coding, instruction following y long-context',
        website: 'https://platform.openai.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'deepseek-v3',
        name: 'DeepSeek-V3-0324',
        type: 'chatbot',
        description: 'Modelo con mejoras en reasoning, function calling y superior code generation',
        website: 'https://deepseek.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'llama-4-scout',
        name: 'Llama 4 Scout 17B',
        type: 'chatbot',
        description: 'Excelente para multi-document summarization y reasoning sobre large codebases',
        website: 'https://ai.meta.com',
        isActive: true
      }
    }),

    // Hugging Face Trending Models
    prisma.aITool.create({
      data: {
        id: 'llama-3-1-8b',
        name: 'Meta Llama 3.1 8B Instruct',
        type: 'chatbot',
        description: '8B parameters, 7.6M downloads, excellent instruction following',
        website: 'https://huggingface.co/meta-llama',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'deepseek-r1',
        name: 'DeepSeek R1',
        type: 'chatbot',
        description: '684B parameters, massive scale reasoning for complex problems',
        website: 'https://huggingface.co/deepseek-ai',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'flux-1-dev',
        name: 'FLUX.1-dev',
        type: 'generative',
        description: 'Text-to-image model by Black Forest Labs, 1.4M downloads, high-quality generation',
        website: 'https://huggingface.co/black-forest-labs',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'kokoro-82m',
        name: 'Kokoro-82M',
        type: 'audio',
        description: 'Text-to-speech model, 1.5M downloads, high-quality voice synthesis',
        website: 'https://huggingface.co/hexgrad',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'glm-4-1v-9b',
        name: 'GLM-4.1V-9B-Thinking',
        type: 'multimodal',
        description: 'Image-text-to-text model with visual reasoning capabilities',
        website: 'https://huggingface.co/THUDM',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'kimi-k2-instruct',
        name: 'Kimi-K2-Instruct',
        type: 'chatbot',
        description: 'Trending instruction-following model by Moonshot AI',
        website: 'https://huggingface.co/moonshot',
        isActive: true
      }
    }),

    // Traditional Popular Tools
    prisma.aITool.create({
      data: {
        id: 'chatgpt',
        name: 'ChatGPT',
        type: 'chatbot',
        description: 'Modelo de lenguaje conversacional de OpenAI, el más popular',
        website: 'https://chat.openai.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'claude',
        name: 'Claude',
        type: 'chatbot',
        description: 'Asistente de IA conversacional de Anthropic, excelente para análisis',
        website: 'https://claude.ai',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'claude-code',
        name: 'Claude Code',
        type: 'cli',
        description: 'Claude optimizado para desarrollo y programming workflows',
        website: 'https://docs.anthropic.com/claude-code',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'gemini',
        name: 'Gemini',
        type: 'multimodal',
        description: 'Modelo multimodal de Google con capacidades avanzadas',
        website: 'https://gemini.google.com',
        isActive: true
      }
    }),

    // Development Tools
    prisma.aITool.create({
      data: {
        id: 'cursor',
        name: 'Cursor',
        type: 'ide',
        description: 'Editor de código impulsado por IA, fork de VS Code',
        website: 'https://cursor.sh',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        type: 'ide',
        description: 'Asistente de programación integrado en VS Code',
        website: 'https://github.com/features/copilot',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'windsurf',
        name: 'Windsurf',
        type: 'ide',
        description: 'IDE completo con IA integrada para desarrollo',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'codeium',
        name: 'Codeium',
        type: 'ide',
        description: 'Code completion y chat AI gratuito para desarrolladores',
        website: 'https://codeium.com',
        isActive: true
      }
    }),

    // Creative Tools
    prisma.aITool.create({
      data: {
        id: 'midjourney',
        name: 'Midjourney',
        type: 'generative',
        description: 'Generación de imágenes artísticas de alta calidad',
        website: 'https://midjourney.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'dalle-3',
        name: 'DALL-E 3',
        type: 'generative',
        description: 'Generación de imágenes fotorealistas de OpenAI',
        website: 'https://openai.com/dall-e-3',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        type: 'generative',
        description: 'Modelo open-source para generación de imágenes',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'runway',
        name: 'Runway',
        type: 'generative',
        description: 'Suite de herramientas AI para video y creatividad',
        website: 'https://runway.com',
        isActive: true
      }
    }),

    // Specialized Tools
    prisma.aITool.create({
      data: {
        id: 'notion-ai',
        name: 'Notion AI',
        type: 'specialized',
        description: 'Asistente de escritura integrado en Notion',
        website: 'https://notion.so',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'figma-ai',
        name: 'Figma AI',
        type: 'specialized',
        description: 'Herramientas AI integradas en Figma para diseño',
        website: 'https://figma.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'canva-ai',
        name: 'Canva AI',
        type: 'specialized',
        description: 'Suite AI de Canva para diseño automático',
        website: 'https://canva.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'perplexity',
        name: 'Perplexity',
        type: 'specialized',
        description: 'Motor de búsqueda AI con fuentes y research',
        website: 'https://perplexity.ai',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'v0-dev',
        name: 'v0.dev',
        type: 'specialized',
        description: 'Generador de componentes React con shadcn/ui',
        website: 'https://v0.dev',
        isActive: true
      }
    })
  ]);

  // Crear categorías actualizadas para workflows
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        id: 'cat1',
        name: 'Desarrollo de Software',
        emoji: '💻',
        description: 'Workflows completos para programadores, desde diseño hasta deploy',
        promptCount: 4567
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat2',
        name: 'Producción Audiovisual',
        emoji: '🎬',
        description: 'Workflows end-to-end para cineastas, desde script hasta post-producción',
        promptCount: 2341
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat3',
        name: 'Marketing Digital',
        emoji: '📈',
        description: 'Metodologías de marketing, desde research hasta conversión',
        promptCount: 3124
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat4',
        name: 'Diseño y UX',
        emoji: '🎨',
        description: 'Procesos de diseño completos, desde research hasta implementación',
        promptCount: 1987
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat5',
        name: 'Consultoría de Negocios',
        emoji: '🏢',
        description: 'Frameworks de consultoría, desde diagnóstico hasta implementación',
        promptCount: 1456
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat6',
        name: 'Educación Digital',
        emoji: '🎓',
        description: 'Metodologías educativas, desde curriculum hasta evaluación',
        promptCount: 1234
      }
    })
  ]);

  // Crear subcategorías especializadas
  const subcategories = await Promise.all([
    // Desarrollo de Software
    prisma.subcategory.create({
      data: {
        id: 'frontend',
        name: 'Frontend Development',
        categoryId: 'cat1',
        description: 'React, Vue, Angular, Next.js workflows',
        promptCount: 1234
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'backend',
        name: 'Backend & APIs',
        categoryId: 'cat1',
        description: 'Node.js, Python, Go, database workflows',
        promptCount: 987
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'mobile',
        name: 'Mobile Development',
        categoryId: 'cat1',
        description: 'React Native, Flutter, Swift workflows',
        promptCount: 654
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'devops',
        name: 'DevOps & Cloud',
        categoryId: 'cat1',
        description: 'CI/CD, Docker, AWS, Kubernetes workflows',
        promptCount: 543
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'ai-ml',
        name: 'AI & Machine Learning',
        categoryId: 'cat1',
        description: 'ML models, data science, AI integration workflows',
        promptCount: 432
      }
    }),

    // Producción Audiovisual
    prisma.subcategory.create({
      data: {
        id: 'preproduccion',
        name: 'Preproducción',
        categoryId: 'cat2',
        description: 'Script, storyboard, casting workflows',
        promptCount: 567
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'produccion',
        name: 'Producción',
        categoryId: 'cat2',
        description: 'Shooting, directing, cinematography workflows',
        promptCount: 432
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'postproduccion',
        name: 'Postproducción',
        categoryId: 'cat2',
        description: 'Editing, VFX, color grading, audio workflows',
        promptCount: 654
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'documentales',
        name: 'Documentales',
        categoryId: 'cat2',
        description: 'Documentary research, interviews, storytelling workflows',
        promptCount: 321
      }
    }),

    // Marketing Digital
    prisma.subcategory.create({
      data: {
        id: 'growth-hacking',
        name: 'Growth Hacking',
        categoryId: 'cat3',
        description: 'User acquisition, retention, viral growth workflows',
        promptCount: 789
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'content-marketing',
        name: 'Content Marketing',
        categoryId: 'cat3',
        description: 'Content strategy, creation, distribution workflows',
        promptCount: 654
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'paid-advertising',
        name: 'Paid Advertising',
        categoryId: 'cat3',
        description: 'Google Ads, Facebook Ads, campaign optimization workflows',
        promptCount: 543
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'email-marketing',
        name: 'Email Marketing',
        categoryId: 'cat3',
        description: 'Email campaigns, automation, segmentation workflows',
        promptCount: 432
      }
    }),

    // Diseño y UX
    prisma.subcategory.create({
      data: {
        id: 'ux-research',
        name: 'UX Research',
        categoryId: 'cat4',
        description: 'User research, personas, journey mapping workflows',
        promptCount: 456
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'ui-design',
        name: 'UI Design',
        categoryId: 'cat4',
        description: 'Interface design, prototyping, design systems workflows',
        promptCount: 567
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'visual-identity',
        name: 'Visual Identity',
        categoryId: 'cat4',
        description: 'Branding, logo design, visual identity workflows',
        promptCount: 345
      }
    }),

    // Consultoría de Negocios
    prisma.subcategory.create({
      data: {
        id: 'strategy-consulting',
        name: 'Strategy Consulting',
        categoryId: 'cat5',
        description: 'Business strategy, market analysis, transformation workflows',
        promptCount: 345
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'data-analysis',
        name: 'Data Analysis',
        categoryId: 'cat5',
        description: 'Business intelligence, analytics, reporting workflows',
        promptCount: 234
      }
    }),

    // Educación Digital
    prisma.subcategory.create({
      data: {
        id: 'course-creation',
        name: 'Course Creation',
        categoryId: 'cat6',
        description: 'Online course development, curriculum design workflows',
        promptCount: 234
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'educational-content',
        name: 'Educational Content',
        categoryId: 'cat6',
        description: 'Learning materials, assessments, interactive content workflows',
        promptCount: 345
      }
    })
  ]);

  // Crear workflows realistas y completos
  const prompts = await Promise.all([
    // 1. Frontend React Workflow Avanzado
    prisma.prompt.create({
      data: {
        id: 'workflow1',
        title: 'Desarrollo SaaS Frontend Completo',
        description: 'Workflow end-to-end para crear un SaaS frontend con React, TypeScript, y mejores prácticas',
        content: `# WORKFLOW: Desarrollo SaaS Frontend Completo
## Duración: 3-4 semanas | Dificultad: Intermedio-Avanzado

### FASE 1: Setup y Arquitectura (Semana 1)

#### Paso 1.1: Project Setup con Vite + React + TypeScript
**AI Tool**: Claude Code
**Prompt**: 
\`\`\`
Configura un proyecto React moderno para un SaaS con:
- Vite como bundler (más rápido que CRA)
- TypeScript estricto con configuración avanzada
- ESLint + Prettier + Husky para code quality
- Estructura de carpetas escalable para equipos
- Path aliases para imports limpios
- Configuración de desarrollo optimizada

Proyecto: [NOMBRE_SAAS]
Stack adicional: [STACK_REQUIREMENTS]
Team size: [TEAM_SIZE]
\`\`\`

**Git Commands**:
\`\`\`bash
git init saas-frontend
cd saas-frontend
npm create vite@latest . -- --template react-ts
git add .
git commit -m "feat: initial project setup with vite + react + typescript"
git branch -M main
git remote add origin [REPO_URL]
git push -u origin main
\`\`\`

#### Paso 1.2: Design System Setup con Tailwind + shadcn/ui
**AI Tool**: v0.dev
**Prompt**:
\`\`\`
Implementa un design system completo para SaaS usando:
- Tailwind CSS con configuración custom
- shadcn/ui como base de componentes
- Tema personalizado con brand colors
- Dark/light mode automático
- Responsive design mobile-first
- Componentes base: Button, Input, Card, Modal, etc.

Brand colors: [PRIMARY_COLOR], [SECONDARY_COLOR]
Typography: [FONT_FAMILY]
\`\`\`

### FASE 2: Componentes Core (Semana 2)

#### Paso 2.1: Authentication Flow
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Desarrolla sistema de autenticación completo:
- Login/Register forms con validación
- Password reset flow
- Email verification
- JWT token management
- Protected routes con React Router
- Estado global con Zustand/Context
- Integration con [AUTH_PROVIDER]

Incluye:
1. Componentes de UI (forms, modals)
2. Hooks personalizados (useAuth, useLogin)
3. Utils de validación y security
4. Types de TypeScript
5. Tests unitarios con Vitest
\`\`\`

#### Paso 2.2: Dashboard Layout & Navigation
**AI Tool**: Claude
**Prompt**:
\`\`\`
Crea layout de dashboard profesional:
- Sidebar responsive y collapsible
- Header con user menu y notifications
- Breadcrumb navigation
- Main content area flexible
- Mobile-first navigation (drawer)
- Search global functionality
- Keyboard shortcuts (⌘K search)

Features específicas:
- [DASHBOARD_FEATURES]
- Navigation items: [NAV_ITEMS]
\`\`\`

### FASE 3: Features Principales (Semana 3)

#### Paso 3.1: Data Management con React Query
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Implementa data management robusto:
- React Query para server state
- API client con axios/fetch
- Error handling centralizado
- Loading states y skeletons
- Optimistic updates
- Cache management
- Offline support básico

APIs a integrar:
- [API_ENDPOINTS]
- Error scenarios: [ERROR_HANDLING]
\`\`\`

#### Paso 3.2: Feature Específicas del SaaS
**AI Tool**: Cursor
**Prompt**:
\`\`\`
Desarrolla las features core del SaaS:

Feature 1: [FEATURE_NAME]
- Componentes necesarios
- Estado local y global
- API integrations
- Validaciones
- UX patterns específicos

Feature 2: [FEATURE_NAME_2]
- [REQUIREMENTS]

Incluye testing completo con React Testing Library
\`\`\`

### FASE 4: Optimización y Deploy (Semana 4)

#### Paso 4.1: Performance Optimization
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Optimiza performance del SaaS:
- Code splitting por rutas y features
- Lazy loading de componentes pesados
- Image optimization y loading
- Bundle analysis y tree shaking
- Core Web Vitals optimization
- Lighthouse score >90

Herramientas:
- Vite bundle analyzer
- React DevTools Profiler
- Lighthouse CI integration
\`\`\`

#### Paso 4.2: CI/CD y Deploy
**AI Tool**: GitHub Copilot CLI
**Prompt**:
\`\`\`
Configura pipeline de deployment:
- GitHub Actions para CI/CD
- Testing automático (unit + e2e)
- Build optimization
- Deploy a Vercel/Netlify
- Environment variables management
- Preview deployments para PRs

Include:
1. .github/workflows/ci.yml
2. .github/workflows/deploy.yml
3. Environment setup
4. Deploy scripts
\`\`\`

### DELIVERABLES:
✅ SaaS frontend completamente funcional
✅ Design system implementado
✅ Authentication flow completo
✅ Dashboard responsive
✅ Features core desarrolladas
✅ Performance optimizado (>90 Lighthouse)
✅ CI/CD pipeline activo
✅ Documentación técnica

### TECH STACK FINAL:
- React 18 + TypeScript
- Vite + Tailwind CSS
- shadcn/ui + Radix UI
- React Router + React Query
- Zustand/Context API
- React Testing Library + Vitest
- GitHub Actions + Vercel

### TIEMPO ESTIMADO: 60-80 horas`,
        preview: 'Workflow completo para desarrollar el frontend de un SaaS con React, TypeScript, autenticación, dashboard responsive, optimización de performance y CI/CD...',
        categoryId: 'cat1',
        subcategoryId: 'frontend',
        aiToolId: 'claude-code',
        authorId: 'user1',
        isPublic: true,
        isPremium: false,
        tags: ['react', 'typescript', 'saas', 'frontend', 'vite', 'tailwind', 'workflow'],
        likes: 1247,
        copies: 3456,
        views: 8934,
        createdAt: new Date('2024-11-01'),
        updatedAt: new Date('2024-12-15')
      }
    }),

    // 2. Film Production Workflow
    prisma.prompt.create({
      data: {
        id: 'workflow2',
        title: 'Producción de Cortometraje Independiente',
        description: 'Workflow completo desde concepto hasta distribución para cortometrajes indie',
        content: `# WORKFLOW: Producción de Cortometraje Independiente
## Duración: 8-12 semanas | Dificultad: Intermedio | Presupuesto: €2,000-€8,000

### FASE 1: Desarrollo y Preproducción (Semanas 1-3)

#### Paso 1.1: Desarrollo del Concepto
**AI Tool**: ChatGPT
**Prompt**:
\`\`\`
Desarrolla concepto para cortometraje independiente:

Parámetros:
- Duración objetivo: [DURATION] minutos
- Presupuesto: €[BUDGET]
- Locaciones disponibles: [LOCATIONS]
- Género preferido: [GENRE]
- Tema/mensaje: [THEME]

Incluye:
1. Logline compelling (1 frase)
2. Sinopsis detallada (2-3 párrafos)
3. Perfil de personajes principales
4. Arco narrativo en 3 actos
5. Elementos visuales únicos
6. Análisis de viabilidad con recursos

Inspiraciones: [REFERENCE_FILMS]
\`\`\`

#### Paso 1.2: Guión Técnico
**AI Tool**: Claude
**Prompt**:
\`\`\`
Convierte el concepto en guión cinematográfico profesional:

Formato: Final Draft estándar
Estructura:
- Página 1-2: Setup del mundo y personaje
- Página 3: Inciting incident
- Página 4-7: Desarrollo y obstáculos
- Página 8-9: Clímax y resolución
- Página 10: Nuevo equilibrio

Especificaciones:
- Diálogos naturales y específicos por personaje
- Descripciones visuales cinematográficas
- Subtext en los diálogos
- Ritmo y pacing apropiado
- Transiciones fluidas entre escenas

Character voice: [CHARACTER_DESCRIPTIONS]
\`\`\`

**Git Commands**:
\`\`\`bash
git init cortometraje-[TITLE]
git add script/
git commit -m "script: primera versión del guión"
git branch -M main
\`\`\`

#### Paso 1.3: Storyboard Visual
**AI Tool**: FLUX.1-dev + Midjourney
**Prompt**:
\`\`\`
Crea storyboard detallado para planificación visual:

Por cada escena clave incluye:
- Composición del frame (rule of thirds, leading lines)
- Tipo de plano (wide, medium, close-up, extreme close-up)
- Movimiento de cámara (static, pan, tilt, dolly, handheld)
- Iluminación básica (natural, artificial, mood)
- Props y vestuario visibles
- Continuidad entre shots

Escenas prioritarias:
1. Opening shot (establecer mood)
2. Character introduction
3. Conflicto principal
4. Momento climático
5. Resolución visual

Estilo visual: [VISUAL_STYLE]
Referencias: [REFERENCE_IMAGES]
\`\`\`

### FASE 2: Preproducción Avanzada (Semanas 4-5)

#### Paso 2.1: Casting y Dirección de Actores
**AI Tool**: ChatGPT
**Prompt**:
\`\`\`
Desarrolla proceso de casting y dirección:

Casting:
- Perfil específico por personaje
- Sides para audiciones (2-3 escenas)
- Criterios de evaluación
- Backup options por rol

Dirección de actores:
- Character backstory detallado
- Motivaciones y objetivos por escena
- Coaching notes para emociones específicas
- Ensayos y table reads schedule

Personajes: [CHARACTER_LIST]
Casting budget: €[CASTING_BUDGET]
\`\`\`

#### Paso 2.2: Planificación Técnica
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Crea plan técnico detallado:

Shot List optimizada:
- Agrupar por locación y setup de iluminación
- Tiempo estimado por shot
- Equipment requirements específico
- Crew assignments
- Contingency plans

Schedule de rodaje:
- Day 1: [SCENES_DAY_1]
- Day 2: [SCENES_DAY_2]
- Buffer time para imprevistos (20%)

Equipment list:
- Cámara: [CAMERA_SPECS]
- Lentes: [LENS_LIST]
- Audio: [AUDIO_SETUP]
- Iluminación: [LIGHTING_KIT]

Budget breakdown detallado por departamento
\`\`\`

### FASE 3: Producción (Semanas 6-7)

#### Paso 3.1: Shooting Days Organization
**AI Tool**: Notion AI
**Prompt**:
\`\`\`
Organiza días de rodaje eficientemente:

Call sheets diarios:
- Crew call times
- Location details y parking
- Weather backup plans
- Contact information
- Safety protocols

Daily schedule:
- Setup time por location
- Shot order optimizado
- Meal breaks strategic
- Wrap time realistic

Communication:
- WhatsApp group protocols
- Emergency contacts
- Equipment check-in/out
- Progress reporting

Contingencias:
- Plan B para weather
- Equipment backup
- Talent replacement
\`\`\`

### FASE 4: Postproducción (Semanas 8-10)

#### Paso 4.1: Editing Workflow
**AI Tool**: Claude
**Prompt**:
\`\`\`
Diseña workflow de postproducción:

Editing strategy:
- Software: [EDITING_SOFTWARE]
- Proxy workflow para performance
- Color coding system para footage
- Assembly cut → Rough cut → Fine cut
- Pacing y rhythm específico por escena

Audio post:
- Dialogue editing y cleanup
- Sound design elements
- Music composition/licensing
- Mix balanceado para cinema y streaming

Color grading:
- LUT aplicación para consistency
- Mood específico por secuencia
- Skin tone correction
- Final export specs

Timeline:
- Week 1: Assembly cut
- Week 2: Rough cut + feedback
- Week 3: Fine cut + audio
- Week 4: Color + final master
\`\`\`

#### Paso 4.2: Sound Design y Music
**AI Tool**: Kokoro-82M + Suno
**Prompt**:
\`\`\`
Desarrolla audio post completo:

Sound design:
- Foley específico por escena
- Ambiente y room tone
- Sound effects library
- Spatial audio para immersion

Music:
- Compositional style: [MUSIC_STYLE]
- Key emotional moments
- Tempo y dynamics map
- Integration con dialogue
- Licensing vs original composition

Technical specs:
- Sample rate: 48kHz
- Bit depth: 24-bit
- Surround vs stereo mix
- Loudness standards (-23 LUFS)

Budget: €[AUDIO_BUDGET]
\`\`\`

### FASE 5: Distribución (Semanas 11-12)

#### Paso 5.1: Festival Strategy
**AI Tool**: Perplexity
**Prompt**:
\`\`\`
Desarrolla estrategia de festivales:

Festival research:
- Tier 1: [MAJOR_FESTIVALS] (Cannes, Sundance, etc.)
- Tier 2: [SPECIALIZED_FESTIVALS] por género
- Tier 3: [REGIONAL_FESTIVALS] locales
- Online festivals y streaming platforms

Submission strategy:
- Timeline de deadlines
- Entry fees budget (€[FESTIVAL_BUDGET])
- Required materials (DCP, screeners, etc.)
- Press kit development

Marketing materials:
- One-sheet poster
- EPK (Electronic Press Kit)
- Behind-the-scenes content
- Director statement
- Production stills

Distribution options:
- Festival circuit → Sales agent
- Direct streaming platform submissions
- Educational distribution
- Online release strategy
\`\`\`

**Git Commands**:
\`\`\`bash
git add distribution/
git commit -m "distribution: festival submission materials"
git tag v1.0-festival-ready
git push origin main --tags
\`\`\`

### DELIVERABLES FINALES:
✅ Cortometraje finalizado (10-15 min)
✅ Master files múltiples formatos
✅ Color graded y audio mixed
✅ Festival submission package
✅ Marketing materials completos
✅ EPK y production stills
✅ Distribution strategy
✅ Project documentation

### BUDGET BREAKDOWN TÍPICO:
- Preproducción: 15% (€300-€1,200)
- Producción: 45% (€900-€3,600)
- Postproducción: 25% (€500-€2,000)
- Distribución: 15% (€300-€1,200)

### TIEMPO ESTIMADO: 120-200 horas`,
        preview: 'Workflow completo para producir un cortometraje independiente desde el concepto inicial hasta la distribución en festivales, incluyendo guión, storyboard, casting, rodaje y postproducción...',
        categoryId: 'cat2',
        subcategoryId: 'preproduccion',
        aiToolId: 'chatgpt',
        authorId: 'user2',
        isPublic: true,
        isPremium: false,
        tags: ['cine', 'cortometraje', 'produccion', 'indie', 'festival', 'workflow'],
        likes: 892,
        copies: 1567,
        views: 4321,
        createdAt: new Date('2024-10-20'),
        updatedAt: new Date('2024-12-10')
      }
    }),

    // 3. Growth Marketing Workflow
    prisma.prompt.create({
      data: {
        id: 'workflow3',
        title: 'Growth Hacking para SaaS B2B',
        description: 'Metodología completa de growth marketing para escalar un SaaS B2B de 0 a $1M ARR',
        content: `# WORKFLOW: Growth Hacking para SaaS B2B
## Duración: 6 meses | Dificultad: Avanzado | Objetivo: 0 → $1M ARR

### FASE 1: Foundation & Research (Mes 1)

#### Paso 1.1: Market Intelligence Profundo
**AI Tool**: GPT-4.1 + Perplexity
**Prompt**:
\`\`\`
Realiza market research exhaustivo para SaaS B2B:

TAM/SAM/SOM Analysis:
- Total Addressable Market para [PRODUCT_CATEGORY]
- Serviceable Addressable Market específico
- Serviceable Obtainable Market realista
- Market growth rate y trends

Competitive Intelligence:
- Top 10 competidores directos e indirectos
- Pricing strategies análisis
- Feature comparison matrix
- Marketing channels utilizados
- Customer acquisition costs estimados
- Funding y growth trajectory

Customer Research:
- ICP (Ideal Customer Profile) detallado
- Jobs-to-be-done framework
- Pain points cuantificados
- Buying process mapping
- Decision maker personas

Product: [SAAS_DESCRIPTION]
Industry: [TARGET_INDUSTRY]
\`\`\`

#### Paso 1.2: Growth Model Design
**AI Tool**: Claude
**Prompt**:
\`\`\`
Diseña growth model data-driven:

North Star Metric:
- Primary: [MAIN_METRIC] (ej: Monthly Recurring Revenue)
- Secondary metrics: [SUPPORTING_METRICS]

Funnel Architecture:
1. Awareness: [AWARENESS_CHANNELS]
2. Acquisition: [ACQUISITION_TACTICS]
3. Activation: [ACTIVATION_CRITERIA]
4. Retention: [RETENTION_STRATEGY]
5. Revenue: [MONETIZATION_STRATEGY]
6. Referral: [VIRAL_MECHANISMS]

Unit Economics:
- Customer Acquisition Cost (CAC): €[TARGET_CAC]
- Customer Lifetime Value (LTV): €[TARGET_LTV]
- LTV:CAC ratio objective: 3:1 minimum
- Payback period: [PAYBACK_MONTHS] months

Growth levers prioritized:
1. [TOP_GROWTH_LEVER]
2. [SECOND_GROWTH_LEVER]
3. [THIRD_GROWTH_LEVER]
\`\`\`

**Git Commands**:
\`\`\`bash
git init growth-strategy-[COMPANY]
git add research/
git commit -m "research: market intelligence y growth model"
\`\`\`

### FASE 2: Content & Demand Generation (Mes 2)

#### Paso 2.1: Content Marketing Engine
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Crea content marketing engine escalable:

Content Pillars Strategy:
1. Educational (40%): [EDUCATIONAL_TOPICS]
2. Product-focused (20%): [PRODUCT_CONTENT]
3. Industry insights (25%): [INDUSTRY_CONTENT]
4. Company culture (15%): [CULTURE_CONTENT]

Content Calendar (12 semanas):
- Blog posts: 3/semana
- LinkedIn posts: 5/semana
- Case studies: 1/mes
- Whitepapers: 1/quarter
- Webinars: 2/mes

SEO Strategy:
- Primary keywords: [PRIMARY_KEYWORDS]
- Long-tail opportunities: [LONGTAIL_KEYWORDS]
- Content cluster architecture
- Internal linking strategy
- Technical SEO audit

Content distribution:
- Owned channels: [OWNED_CHANNELS]
- Earned channels: [PR_STRATEGY]
- Paid amplification: [PAID_STRATEGY]

Target: [TARGET_AUDIENCE]
Content budget: €[CONTENT_BUDGET]/mes
\`\`\`

#### Paso 2.2: Lead Generation Machine
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Construye lead generation system:

Lead Magnets:
1. Industry Report: "[REPORT_TITLE]"
   - 25-30 pages research
   - Original data y insights
   - Gated content con email capture

2. Interactive Tools:
   - ROI Calculator: [CALCULATOR_TYPE]
   - Assessment: [ASSESSMENT_TYPE]
   - Template Library: [TEMPLATE_TYPES]

3. Educational Content:
   - Ultimate Guide: "[GUIDE_TITLE]"
   - Video Course: [COURSE_OUTLINE]
   - Email Series: [EMAIL_SERIES_TOPICS]

Capture Mechanisms:
- Landing pages optimizadas (A/B tested)
- Exit-intent popups
- Content upgrades
- Social media lead ads
- Webinar registrations

Lead Scoring:
- Demographic fit: [SCORING_CRITERIA]
- Behavioral engagement: [BEHAVIOR_POINTS]
- Intent signals: [INTENT_INDICATORS]

Target: 500+ qualified leads/mes
\`\`\`

### FASE 3: Acquisition Channels (Mes 3-4)

#### Paso 3.1: Paid Acquisition Strategy
**AI Tool**: ChatGPT
**Prompt**:
\`\`\`
Desarrolla paid acquisition multichannel:

Google Ads Strategy:
- Search campaigns: [SEARCH_KEYWORDS]
- Display remarketing: [AUDIENCE_SEGMENTS]
- YouTube ads: [VIDEO_STRATEGY]
- Budget allocation: €[GOOGLE_BUDGET]/mes

LinkedIn Ads (B2B focus):
- Sponsored content: [CONTENT_STRATEGY]
- Message ads: [INMIAL_STRATEGY]
- Event promotion: [EVENT_STRATEGY]
- Audience targeting: [LINKEDIN_TARGETING]
- Budget: €[LINKEDIN_BUDGET]/mes

Facebook/Instagram:
- Lookalike audiences: [LOOKALIKE_STRATEGY]
- Interest targeting: [INTEREST_CATEGORIES]
- Creative testing: [CREATIVE_VARIANTS]
- Budget: €[FACEBOOK_BUDGET]/mes

Channel Testing:
- Capterra/G2 listings optimization
- Podcast sponsorships: [PODCAST_LIST]
- Industry newsletters: [NEWSLETTER_LIST]
- Influencer partnerships: [INFLUENCER_STRATEGY]

Total paid budget: €[TOTAL_PAID_BUDGET]/mes
Target CAC: €[TARGET_CAC]
\`\`\`

#### Paso 3.2: Partnership & Referral Program
**AI Tool**: Claude
**Prompt**:
\`\`\`
Construye partnership ecosystem:

Integration Partners:
- Tier 1: [MAJOR_INTEGRATIONS] (Zapier, Slack, etc.)
- Tier 2: [INDUSTRY_TOOLS] específicos
- API partnership strategy
- Co-marketing opportunities

Referral Program:
- Customer referrals: [REFERRAL_INCENTIVE]
- Partner referrals: [PARTNER_COMMISSION]
- Affiliate program: [AFFILIATE_STRUCTURE]
- Tracking y attribution system

Channel Partner Program:
- Partner tiers: [PARTNER_LEVELS]
- Commission structure: [COMMISSION_RATES]
- Partner enablement: [TRAINING_MATERIALS]
- Co-selling process: [SALES_PROCESS]

Community Building:
- User community: [COMMUNITY_PLATFORM]
- Expert network: [EXPERT_PROGRAM]
- Events program: [EVENT_STRATEGY]

Target: 30% of leads from partnerships
\`\`\`

### FASE 4: Conversion & Retention (Mes 5)

#### Paso 4.1: Conversion Rate Optimization
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Optimiza conversion funnel completo:

Landing Page Optimization:
- Hero section variants: [HERO_VARIANTS]
- Social proof placement: [SOCIAL_PROOF_STRATEGY]
- CTA optimization: [CTA_VARIANTS]
- Form optimization: [FORM_STRATEGY]
- Mobile experience: [MOBILE_OPTIMIZATION]

Trial/Demo Experience:
- Onboarding flow: [ONBOARDING_STEPS]
- Time to value: [TTV_STRATEGY]
- Product tour: [TOUR_ELEMENTS]
- Success milestones: [MILESTONE_TRACKING]

Sales Process:
- Lead qualification: [QUALIFICATION_CRITERIA]
- Demo script: [DEMO_STRUCTURE]
- Objection handling: [OBJECTION_RESPONSES]
- Proposal templates: [PROPOSAL_FRAMEWORK]
- Follow-up sequences: [FOLLOWUP_STRATEGY]

A/B Testing Roadmap:
- Week 1-2: Landing page hero
- Week 3-4: Pricing page
- Week 5-6: Trial signup flow
- Week 7-8: Demo booking process

Target conversions:
- Landing page: [LP_CONVERSION]%
- Trial signup: [TRIAL_CONVERSION]%
- Trial to paid: [TRIAL_TO_PAID]%
\`\`\`

#### Paso 4.2: Retention & Expansion
**AI Tool**: Claude
**Prompt**:
\`\`\`
Construye retention engine:

Customer Success Program:
- Onboarding playbook: [ONBOARDING_CHECKLIST]
- Health score tracking: [HEALTH_METRICS]
- Risk identification: [CHURN_SIGNALS]
- Intervention workflows: [INTERVENTION_TACTICS]

Product Adoption:
- Feature adoption tracking: [ADOPTION_METRICS]
- In-app guidance: [GUIDANCE_STRATEGY]
- Training programs: [TRAINING_CURRICULUM]
- Certification program: [CERTIFICATION_LEVELS]

Expansion Strategy:
- Upsell triggers: [UPSELL_CRITERIA]
- Cross-sell opportunities: [CROSSSELL_PRODUCTS]
- Usage-based pricing: [USAGE_TIERS]
- Enterprise sales: [ENTERPRISE_STRATEGY]

Retention Metrics:
- Monthly churn rate: <[CHURN_TARGET]%
- Net revenue retention: >[NRR_TARGET]%
- Customer satisfaction: >[CSAT_TARGET]
- Net Promoter Score: >[NPS_TARGET]

Loyalty Program:
- Advocate program: [ADVOCATE_BENEFITS]
- User-generated content: [UGC_STRATEGY]
- Community rewards: [COMMUNITY_REWARDS]
\`\`\`

### FASE 5: Scale & Optimize (Mes 6)

#### Paso 5.1: Growth Experimentation
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Implementa growth experimentation framework:

Experiment Backlog (prioritized):
1. [EXPERIMENT_1]: [HYPOTHESIS] - Impact: [HIGH/MED/LOW]
2. [EXPERIMENT_2]: [HYPOTHESIS] - Impact: [HIGH/MED/LOW]
3. [EXPERIMENT_3]: [HYPOTHESIS] - Impact: [HIGH/MED/LOW]

Testing Framework:
- Statistical significance: 95%
- Minimum sample size: [SAMPLE_SIZE]
- Test duration: [TEST_DURATION]
- Success metrics: [SUCCESS_CRITERIA]

Growth Loops:
- Viral loop: [VIRAL_MECHANISM]
- Content loop: [CONTENT_FLYWHEEL]
- Product loop: [PRODUCT_NETWORK_EFFECTS]

International Expansion:
- Market selection: [TARGET_MARKETS]
- Localization strategy: [LOCALIZATION_PLAN]
- Local partnerships: [LOCAL_PARTNERS]
- Regulatory compliance: [COMPLIANCE_REQUIREMENTS]

Automation & Scale:
- Marketing automation: [AUTOMATION_TOOLS]
- Sales automation: [SALES_TOOLS]
- Customer success automation: [CS_TOOLS]
- Analytics stack: [ANALYTICS_SETUP]
\`\`\`

**Git Commands**:
\`\`\`bash
git add experiments/
git commit -m "growth: experimentation framework y scale strategy"
git tag v1.0-growth-engine
git push origin main --tags
\`\`\`

### DELIVERABLES FINALES:
✅ Complete growth strategy document
✅ Multi-channel acquisition engine
✅ Content marketing machine
✅ Lead generation system
✅ Conversion optimization playbook
✅ Retention & expansion programs
✅ Analytics & experimentation framework
✅ $1M ARR growth trajectory

### KEY METRICS DASHBOARD:
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Monthly churn rate
- Net revenue retention
- Lead conversion rates
- Channel attribution
- Experiment results

### GROWTH STACK:
- Analytics: Mixpanel + Google Analytics
- CRM: HubSpot/Salesforce
- Email: Mailchimp/Klaviyo
- Landing pages: Unbounce/Leadpages
- A/B testing: Optimizely/VWO
- Customer success: Intercom/Zendesk
- Automation: Zapier/Make

### TIEMPO ESTIMADO: 200-300 horas across 6 months`,
        preview: 'Metodología completa de growth hacking para SaaS B2B, desde research hasta escalamiento, incluyendo acquisition multicanal, conversion optimization, retention strategies y experimentación data-driven para alcanzar $1M ARR...',
        categoryId: 'cat3',
        subcategoryId: 'growth-hacking',
        aiToolId: 'gpt-4-1',
        authorId: 'user3',
        isPublic: true,
        isPremium: false,
        tags: ['growth-hacking', 'saas', 'b2b', 'marketing', 'acquisition', 'retention', 'workflow'],
        likes: 1567,
        copies: 2890,
        views: 6543,
        createdAt: new Date('2024-11-05'),
        updatedAt: new Date('2024-12-18')
      }
    }),

    // 4. UX Design Workflow
    prisma.prompt.create({
      data: {
        id: 'workflow4',
        title: 'Diseño UX/UI para Aplicación Móvil',
        description: 'Proceso completo de diseño UX/UI desde research hasta handoff para una app móvil',
        content: `# WORKFLOW: Diseño UX/UI para Aplicación Móvil
## Duración: 8 semanas | Dificultad: Intermedio | Deliverable: App design ready for development

### FASE 1: Research & Discovery (Semanas 1-2)

#### Paso 1.1: User Research Profundo
**AI Tool**: ChatGPT
**Prompt**:
\`\`\`
Diseña comprehensive user research plan:

Research Objectives:
- Understand user behaviors for [APP_CATEGORY]
- Identify pain points en [CURRENT_SOLUTIONS]
- Validate assumptions about [TARGET_USER_GROUP]
- Discover unmet needs y opportunities

Research Methods:
1. User interviews (8-12 participants)
   - Screening criteria: [USER_CRITERIA]
   - Interview script: [INTERVIEW_TOPICS]
   - Duration: 45-60 minutes each

2. Competitive analysis
   - Direct competitors: [DIRECT_COMPETITORS]
   - Indirect competitors: [INDIRECT_COMPETITORS]
   - Feature analysis matrix
   - UX heuristic evaluation

3. Survey (100+ responses)
   - Demographics y usage patterns
   - Pain points quantification
   - Feature prioritization
   - Price sensitivity analysis

App concept: [APP_DESCRIPTION]
Target users: [USER_DEMOGRAPHICS]
Platform: [IOS/ANDROID/BOTH]
\`\`\`

#### Paso 1.2: Insights Synthesis
**AI Tool**: Claude
**Prompt**:
\`\`\`
Synthesize research findings into actionable insights:

User Personas (2-3 primary):
- Demographics, psychographics
- Goals, motivations, frustrations
- Technology comfort level
- Usage patterns y contexts
- Quote highlights from interviews

Jobs-to-be-Done Framework:
- Functional jobs: [FUNCTIONAL_NEEDS]
- Emotional jobs: [EMOTIONAL_NEEDS]
- Social jobs: [SOCIAL_NEEDS]

Key Insights:
1. [INSIGHT_1] - Impact: High/Medium/Low
2. [INSIGHT_2] - Impact: High/Medium/Low
3. [INSIGHT_3] - Impact: High/Medium/Low

Opportunity Areas:
- [OPPORTUNITY_1]: [DESCRIPTION]
- [OPPORTUNITY_2]: [DESCRIPTION]
- [OPPORTUNITY_3]: [DESCRIPTION]

Design Principles (3-5):
1. [PRINCIPLE_1]: [EXPLANATION]
2. [PRINCIPLE_2]: [EXPLANATION]
3. [PRINCIPLE_3]: [EXPLANATION]
\`\`\`

**Git Commands**:
\`\`\`bash
git init mobile-app-design-[PROJECT]
git add research/
git commit -m "research: user research y synthesis completo"
\`\`\`

### FASE 2: Strategy & Information Architecture (Semana 3)

#### Paso 2.1: Product Strategy
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Define product strategy y feature roadmap:

Value Proposition:
- Core value: [CORE_VALUE]
- Unique differentiator: [DIFFERENTIATION]
- Target outcome: [USER_OUTCOME]

Feature Prioritization (MoSCoW):
Must Have:
- [MUST_FEATURE_1]: [JUSTIFICATION]
- [MUST_FEATURE_2]: [JUSTIFICATION]

Should Have:
- [SHOULD_FEATURE_1]: [JUSTIFICATION]
- [SHOULD_FEATURE_2]: [JUSTIFICATION]

Could Have:
- [COULD_FEATURE_1]: [JUSTIFICATION]

Won't Have (this version):
- [WONT_FEATURE_1]: [REASON]

MVP Definition:
- Core user flow: [PRIMARY_FLOW]
- Essential features: [MVP_FEATURES]
- Success metrics: [SUCCESS_METRICS]

Business Model:
- Monetization: [REVENUE_MODEL]
- Key partnerships: [PARTNERSHIPS]
- Growth strategy: [GROWTH_PLAN]
\`\`\`

#### Paso 2.2: Information Architecture
**AI Tool**: Claude
**Prompt**:
\`\`\`
Diseña information architecture y navigation:

Site Map:
- Main sections: [MAIN_SECTIONS]
- Sub-sections: [SUB_SECTIONS]
- Content hierarchy: [HIERARCHY]
- Cross-links: [NAVIGATION_LINKS]

User Flows (key scenarios):
1. Onboarding flow: [ONBOARDING_STEPS]
2. Core task flow: [CORE_TASK_STEPS]
3. Settings management: [SETTINGS_FLOW]
4. Help/support flow: [SUPPORT_FLOW]

Navigation Patterns:
- Primary navigation: [PRIMARY_NAV]
- Secondary navigation: [SECONDARY_NAV]
- Contextual navigation: [CONTEXTUAL_NAV]
- Search functionality: [SEARCH_STRATEGY]

Content Strategy:
- Tone of voice: [TONE]
- Microcopy guidelines: [MICROCOPY_RULES]
- Error message patterns: [ERROR_PATTERNS]
- Success state messaging: [SUCCESS_PATTERNS]

Accessibility Considerations:
- Screen reader compatibility
- Color contrast compliance
- Touch target sizes
- Font size flexibility
\`\`\`

### FASE 3: Wireframing & Prototyping (Semanas 4-5)

#### Paso 3.1: Low-Fidelity Wireframes
**AI Tool**: Claude
**Prompt**:
\`\`\`
Crea low-fidelity wireframes estructura:

Screen Inventory (key screens):
1. Splash/Loading: [LOADING_STRATEGY]
2. Onboarding: [ONBOARDING_SCREENS]
3. Login/Signup: [AUTH_FLOW]
4. Dashboard/Home: [HOME_LAYOUT]
5. Core feature screens: [FEATURE_SCREENS]
6. Profile/Settings: [SETTINGS_SCREENS]
7. Search/Browse: [SEARCH_LAYOUT]

Layout Principles:
- Mobile-first approach
- Thumb-friendly design
- Single-handed usage consideration
- Content priority hierarchy
- Visual weight distribution

Interaction Patterns:
- Navigation paradigms: [NAV_PATTERNS]
- Gesture interactions: [GESTURES]
- Feedback mechanisms: [FEEDBACK_TYPES]
- State changes: [STATE_TRANSITIONS]

Content Blocks:
- Header patterns: [HEADER_TYPES]
- List item templates: [LIST_PATTERNS]
- Card designs: [CARD_LAYOUTS]
- Form patterns: [FORM_DESIGNS]
- Modal designs: [MODAL_PATTERNS]

Platform: [IOS/ANDROID]
Screen sizes: [SCREEN_SIZES]
\`\`\`

#### Paso 3.2: Interactive Prototype
**AI Tool**: Figma AI
**Prompt**:
\`\`\`
Desarrolla interactive prototype en Figma:

Prototype Fidelity:
- Medium-fidelity wireframes
- Interactive transitions
- Realistic content (no lorem ipsum)
- Actual screen flows
- Touch/click interactions

Key Interactions:
1. User onboarding flow complete
2. Primary task completion
3. Navigation between sections
4. Form submissions
5. Error state handling
6. Loading states

Micro-interactions:
- Button press feedback
- Form validation
- Loading animations
- Success confirmations
- Swipe gestures
- Pull-to-refresh

Testing Scenarios:
- Happy path completion
- Error recovery paths
- Edge cases handling
- Accessibility testing
- Performance consideration

Prototype URL: [FIGMA_PROTOTYPE_LINK]
Test script: [TESTING_SCRIPT]
\`\`\`

### FASE 4: Visual Design (Semanas 6-7)

#### Paso 4.1: Design System Creation
**AI Tool**: Midjourney + Figma AI
**Prompt**:
\`\`\`
Crea comprehensive design system:

Brand Identity:
- Logo integration: [LOGO_USAGE]
- Color palette: [COLOR_STRATEGY]
  - Primary: [PRIMARY_COLORS]
  - Secondary: [SECONDARY_COLORS]
  - Neutral: [NEUTRAL_COLORS]
  - Semantic: [SEMANTIC_COLORS]
- Typography: [FONT_CHOICES]
  - Heading hierarchy: [H1-H6_SPECS]
  - Body text: [BODY_TEXT_SPECS]
  - UI text: [UI_TEXT_SPECS]

Visual Style:
- Design language: [STYLE_DIRECTION]
- Iconography: [ICON_STYLE]
- Illustration style: [ILLUSTRATION_APPROACH]
- Photography style: [PHOTO_TREATMENT]
- Spacing system: [SPACING_SCALE]

UI Components:
- Buttons (primary, secondary, text)
- Form elements (inputs, selectors, checkboxes)
- Navigation elements
- Cards y containers
- Modals y overlays
- Loading states
- Empty states
- Error states

Dark Mode:
- Color adaptations
- Contrast maintenance
- Brand consistency
- User preference detection

Brand personality: [BRAND_ATTRIBUTES]
Target aesthetic: [AESTHETIC_GOALS]
\`\`\`

#### Paso 4.2: High-Fidelity Screens
**AI Tool**: Figma AI
**Prompt**:
\`\`\`
Desarrolla high-fidelity visual designs:

Screen Designs (complete):
1. Onboarding sequence (3-4 screens)
2. Authentication flow (login, signup, recovery)
3. Main dashboard/home screen
4. Core feature screens (5-8 screens)
5. Profile y settings screens
6. Search y browsing screens
7. Detail screens (content-specific)
8. Error y empty states

Visual Hierarchy:
- Clear information hierarchy
- Consistent spacing system
- Proper contrast ratios (WCAG AA)
- Visual weight distribution
- Reading patterns (Z or F pattern)

Responsive Considerations:
- iPhone SE to iPhone Pro Max
- Android phones (various sizes)
- Tablet adaptations (if applicable)
- Landscape orientation handling

Image Strategy:
- Placeholder patterns
- Photo treatments
- Icon consistency
- Illustration integration
- Brand asset usage

Quality Assurance:
- Pixel-perfect alignment
- Consistent component usage
- Color accuracy
- Typography consistency
- Interactive state designs
\`\`\`

### FASE 5: Testing & Handoff (Semana 8)

#### Paso 5.1: Usability Testing
**AI Tool**: ChatGPT
**Prompt**:
\`\`\`
Planifica y ejecuta usability testing:

Testing Protocol:
- Participants: 6-8 users (matching target personas)
- Testing method: [REMOTE/IN_PERSON]
- Duration: 45-60 minutes per session
- Recording: [RECORDING_SETUP]

Test Scenarios:
1. First-time user onboarding
2. Core task completion: [PRIMARY_TASK]
3. Secondary task: [SECONDARY_TASK]
4. Information finding: [SEARCH_TASK]
5. Account management: [ACCOUNT_TASK]

Success Metrics:
- Task completion rate: >80%
- Time to completion: [TARGET_TIME]
- Error rate: <10%
- User satisfaction: >4/5
- System Usability Scale: >68

Testing Script:
- Welcome y context setting
- Background questions
- Task instructions (no leading)
- Think-aloud protocol
- Post-task questions
- Overall feedback collection

Analysis Framework:
- Quantitative metrics tracking
- Qualitative insights categorization
- Pain point prioritization
- Design iteration recommendations
\`\`\`

#### Paso 5.2: Developer Handoff
**AI Tool**: Claude Code
**Prompt**:
\`\`\`
Prepara comprehensive developer handoff:

Design Specs:
- Figma developer mode setup
- Component specifications
- Interaction details
- Animation specifications
- Asset export guidelines

Technical Documentation:
- Design system implementation guide
- Component library structure
- State management requirements
- API integration points
- Performance considerations

Asset Preparation:
- Icon exports (SVG, PNG @1x, @2x, @3x)
- Image optimization
- Font file licensing
- Color code documentation
- Spacing measurements

Implementation Notes:
- Platform-specific guidelines
- Accessibility requirements
- Edge case handling
- Error state implementations
- Loading state specifications

Quality Assurance:
- Design QA checklist
- Cross-device testing plan
- Accessibility audit
- Performance benchmarks
- Post-launch design review process

Developer Resources:
- Design system Figma file
- Component library access
- Style guide documentation
- Implementation examples
- Ongoing design support process
\`\`\`

**Git Commands**:
\`\`\`bash
git add design-final/
git commit -m "design: final high-fidelity designs y developer handoff"
git tag v1.0-design-complete
git push origin main --tags
\`\`\`

### DELIVERABLES FINALES:
✅ User research insights y personas
✅ Information architecture y user flows
✅ Interactive prototype (medium-fidelity)
✅ Complete design system
✅ High-fidelity screen designs
✅ Usability testing results
✅ Developer handoff package
✅ Design QA documentation

### DESIGN TOOLS STACK:
- Research: [RESEARCH_TOOLS]
- Wireframing: Figma/Sketch
- Prototyping: Figma/Principle
- User Testing: [TESTING_PLATFORM]
- Collaboration: Figma + Slack
- Handoff: Figma Dev Mode
- Version Control: Git + Abstract

### SUCCESS METRICS:
- User satisfaction: >4.5/5
- Task completion: >90%
- Developer handoff efficiency: <2 weeks implementation
- Design system adoption: 100% component usage
- Accessibility compliance: WCAG AA
- Performance: <3s load time

### TIEMPO ESTIMADO: 150-200 horas`,
        preview: 'Proceso completo de diseño UX/UI para aplicación móvil, desde user research y wireframing hasta high-fidelity designs y developer handoff, incluyendo design system y usability testing...',
        categoryId: 'cat4',
        subcategoryId: 'ui-design',
        aiToolId: 'figma-ai',
        authorId: 'user4',
        isPublic: true,
        isPremium: false,
        tags: ['ux', 'ui', 'mobile', 'app-design', 'figma', 'user-research', 'workflow'],
        likes: 1123,
        copies: 2456,
        views: 5432,
        createdAt: new Date('2024-11-08'),
        updatedAt: new Date('2024-12-12')
      }
    }),

    // 5. DevOps Pipeline Workflow
    prisma.prompt.create({
      data: {
        id: 'workflow5',
        title: 'DevOps CI/CD Pipeline Enterprise',
        description: 'Setup completo de pipeline DevOps con Docker, Kubernetes, y monitoring para aplicaciones enterprise',
        content: `# WORKFLOW: DevOps CI/CD Pipeline Enterprise
## Duración: 4 semanas | Dificultad: Avanzado | Scope: Production-ready infrastructure

### FASE 1: Infrastructure as Code (Semana 1)

#### Paso 1.1: Cloud Architecture Design
**AI Tool**: Claude Code
**Prompt**:
\`\`\`
Diseña cloud architecture enterprise-grade:

Infrastructure Requirements:
- Cloud provider: [AWS/GCP/AZURE]
- Expected traffic: [TRAFFIC_ESTIMATES]
- Compliance: [COMPLIANCE_REQUIREMENTS]
- Budget constraints: €[MONTHLY_BUDGET]
- Scalability needs: [SCALING_REQUIREMENTS]

Architecture Components:
1. Network Design:
   - VPC/Virtual Network setup
   - Subnets (public, private, database)
   - Security groups y NACLs
   - Load balancer configuration
   - CDN integration

2. Compute Resources:
   - Container orchestration: [KUBERNETES/ECS]
   - Node group configurations
   - Auto-scaling policies
   - Spot instances strategy

3. Data Layer:
   - Database selection: [DATABASE_TYPE]
   - Read replicas strategy
   - Backup y disaster recovery
   - Data encryption at rest/transit

4. Security Layer:
   - IAM roles y policies
   - Secret management: [SECRETS_MANAGER]
   - Certificate management
   - WAF configuration

Application: [APP_DESCRIPTION]
Team size: [TEAM_SIZE]
Deployment frequency: [DEPLOY_FREQUENCY]
\`\`\`

#### Paso 1.2: Terraform Infrastructure
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Implementa Infrastructure as Code con Terraform:

Terraform Structure:
\`\`\`
infrastructure/
├── environments/
│   ├── dev/
│   ├── staging/
│   └── production/
├── modules/
│   ├── networking/
│   ├── compute/
│   ├── database/
│   └── security/
├── shared/
│   └── backend.tf
└── scripts/
    └── deploy.sh
\`\`\`

Core Modules:
1. Networking Module:
   - VPC, subnets, routing
   - NAT gateway, internet gateway
   - Security groups
   - Network ACLs

2. Compute Module:
   - EKS/GKE cluster setup
   - Node groups configuration
   - Auto-scaling groups
   - Load balancers

3. Database Module:
   - RDS/CloudSQL setup
   - Read replicas
   - Backup configuration
   - Parameter groups

4. Security Module:
   - IAM roles y policies
   - KMS keys
   - Secrets manager
   - SSL certificates

Environment-specific variables:
- [DEV_VARIABLES]
- [STAGING_VARIABLES]
- [PROD_VARIABLES]

State Management:
- Remote backend: [S3/GCS]
- State locking: [DYNAMODB/CLOUD_STORAGE]
- Workspace strategy per environment
\`\`\`

**Git Commands**:
\`\`\`bash
git init devops-pipeline-[PROJECT]
git add infrastructure/
git commit -m "infrastructure: terraform modules y environments"
git branch -M main
\`\`\`

### FASE 2: Container Strategy (Semana 2)

#### Paso 2.1: Docker Optimization
**AI Tool**: Cursor
**Prompt**:
\`\`\`
Crea optimized Docker strategy:

Multi-stage Dockerfile:
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

Optimization Strategies:
1. Layer optimization:
   - Dependency caching
   - Multi-stage builds
   - .dockerignore configuration
   - Base image selection

2. Security hardening:
   - Non-root user
   - Minimal base images
   - Security scanning integration
   - Secrets management

3. Performance tuning:
   - Build cache optimization
   - Image size reduction
   - Startup time optimization
   - Resource constraints

Application type: [APP_TYPE]
Runtime: [RUNTIME_VERSION]
Dependencies: [MAIN_DEPENDENCIES]
\`\`\`

#### Paso 2.2: Kubernetes Manifests
**AI Tool**: Claude Code
**Prompt**:
\`\`\`
Desarrolla Kubernetes deployment strategy:

Manifest Structure:
\`\`\`
k8s/
├── base/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   └── ingress.yaml
├── overlays/
│   ├── development/
│   ├── staging/
│   └── production/
└── monitoring/
    ├── servicemonitor.yaml
    └── prometheusrule.yaml
\`\`\`

Deployment Configuration:
1. Deployment spec:
   - Replica management
   - Rolling update strategy
   - Resource requests/limits
   - Health checks (liveness, readiness)
   - Security context

2. Service mesh integration:
   - Istio/Linkerd configuration
   - Traffic management
   - Security policies
   - Observability

3. ConfigMap y Secrets:
   - Environment-specific config
   - Secret rotation strategy
   - External secret operator
   - Config validation

4. Ingress configuration:
   - TLS termination
   - Rate limiting
   - Path-based routing
   - CORS configuration

Environment specifications:
- Dev: [DEV_SPECS]
- Staging: [STAGING_SPECS]
- Production: [PROD_SPECS]

Scaling requirements:
- HPA configuration
- VPA considerations
- Cluster autoscaling
- Cost optimization
\`\`\`

### FASE 3: CI/CD Pipeline (Semana 3)

#### Paso 3.1: GitHub Actions Pipeline
**AI Tool**: GitHub Copilot CLI
**Prompt**:
\`\`\`
Implementa comprehensive CI/CD pipeline:

Pipeline Structure:
\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
      - name: Setup Node.js
      - name: Install dependencies
      - name: Run tests
      - name: Code coverage
      - name: Security scan
      - name: Lint check

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build Docker image
      - name: Security scan image
      - name: Push to registry

  deploy-dev:
    needs: build
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to development

  deploy-staging:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
      - name: Run E2E tests

  deploy-production:
    needs: deploy-staging
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to production
      - name: Health check
      - name: Notify team
\`\`\`

Pipeline Features:
1. Quality Gates:
   - Unit test coverage >80%
   - Integration test suite
   - Security vulnerability scanning
   - Code quality metrics
   - Performance testing

2. Deployment Strategy:
   - Blue-green deployments
   - Canary releases
   - Automated rollback
   - Database migrations
   - Feature flags integration

3. Notifications:
   - Slack integration
   - Email alerts
   - Deployment status
   - Failure notifications

Security Integration:
- SAST scanning: [SAST_TOOL]
- DAST scanning: [DAST_TOOL]
- Dependency scanning
- Container security scanning
- Infrastructure security validation
\`\`\`

#### Paso 3.2: GitOps Implementation
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Implementa GitOps workflow con ArgoCD:

GitOps Structure:
\`\`\`
gitops-config/
├── applications/
│   ├── dev/
│   ├── staging/
│   └── production/
├── infrastructure/
│   ├── monitoring/
│   ├── logging/
│   └── security/
└── shared/
    └── base-applications/
\`\`\`

ArgoCD Applications:
1. Application manifests:
   - Source repository configuration
   - Destination cluster/namespace
   - Sync policies (manual/automatic)
   - Health checks
   - Rollback capabilities

2. Progressive delivery:
   - Canary deployments
   - Blue-green strategy
   - Traffic splitting
   - Automated analysis
   - Rollback triggers

3. Multi-environment management:
   - Environment promotion
   - Configuration drift detection
   - Policy enforcement
   - Compliance validation

Repository Strategy:
- Application code: [APP_REPO]
- Infrastructure code: [INFRA_REPO]
- GitOps config: [GITOPS_REPO]
- Security policies: [POLICY_REPO]

Sync Policies:
- Automatic sync: [AUTO_SYNC_RULES]
- Manual approval: [APPROVAL_GATES]
- Prune resources: [PRUNE_POLICY]
- Self-heal: [HEAL_POLICY]
\`\`\`

### FASE 4: Observability & Security (Semana 4)

#### Paso 4.1: Monitoring Stack
**AI Tool**: Claude
**Prompt**:
\`\`\`
Implementa comprehensive monitoring:

Monitoring Architecture:
1. Metrics (Prometheus + Grafana):
   - Application metrics
   - Infrastructure metrics
   - Business metrics
   - Custom metrics
   - Alert manager configuration

2. Logging (ELK/Loki):
   - Centralized logging
   - Log aggregation
   - Search y analysis
   - Log retention policies
   - Alert on logs

3. Tracing (Jaeger/Zipkin):
   - Distributed tracing
   - Service dependency mapping
   - Performance analysis
   - Error tracking
   - User journey tracking

4. APM Integration:
   - [APM_TOOL] implementation
   - Real user monitoring
   - Synthetic monitoring
   - Performance budgets
   - SLI/SLO tracking

Dashboard Strategy:
- Infrastructure overview
- Application performance
- Business metrics
- Security dashboard
- Cost optimization

Alert Configuration:
- Critical alerts: [CRITICAL_CRITERIA]
- Warning alerts: [WARNING_CRITERIA]
- Alert routing: [ALERT_ROUTING]
- Escalation policies: [ESCALATION_RULES]
- Alert fatigue prevention
\`\`\`

#### Paso 4.2: Security Implementation
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Implementa security best practices:

Security Layers:
1. Network Security:
   - Network policies
   - Service mesh security
   - WAF configuration
   - DDoS protection
   - VPN access

2. Container Security:
   - Image scanning
   - Runtime security
   - Admission controllers
   - Pod security policies
   - Network segmentation

3. Application Security:
   - OWASP integration
   - Secret management
   - Authentication/authorization
   - Input validation
   - Security headers

4. Data Security:
   - Encryption at rest
   - Encryption in transit
   - Key management
   - Data classification
   - Backup encryption

Compliance Framework:
- SOC 2 compliance: [SOC2_REQUIREMENTS]
- GDPR compliance: [GDPR_REQUIREMENTS]
- PCI DSS: [PCI_REQUIREMENTS]
- Industry specific: [INDUSTRY_REQUIREMENTS]

Security Monitoring:
- SIEM integration
- Threat detection
- Incident response
- Forensics capability
- Security metrics

Vulnerability Management:
- Regular scanning
- Patch management
- Risk assessment
- Remediation tracking
- Security reporting
\`\`\`

**Git Commands**:
\`\`\`bash
git add monitoring/ security/
git commit -m "observability: monitoring stack y security implementation"
git tag v1.0-production-ready
git push origin main --tags
\`\`\`

### DELIVERABLES FINALES:
✅ Infrastructure as Code (Terraform)
✅ Containerized application (Docker)
✅ Kubernetes manifests (Kustomize)
✅ CI/CD pipeline (GitHub Actions)
✅ GitOps configuration (ArgoCD)
✅ Monitoring stack (Prometheus/Grafana)
✅ Logging solution (ELK/Loki)
✅ Security implementation
✅ Documentation completa

### DEVOPS STACK:
- IaC: Terraform + Terragrunt
- Containers: Docker + Kubernetes
- CI/CD: GitHub Actions + ArgoCD
- Monitoring: Prometheus + Grafana
- Logging: ELK Stack / Loki
- Security: Falco + OPA Gatekeeper
- Service Mesh: Istio / Linkerd
- Registry: Harbor / ECR

### METRICS & SLIs:
- Deployment frequency: [TARGET_FREQUENCY]
- Lead time: <[TARGET_LEADTIME]
- MTTR: <[TARGET_MTTR]
- Change failure rate: <[TARGET_FAILURE_RATE]
- Availability: >[TARGET_AVAILABILITY]%
- Performance: <[TARGET_RESPONSE_TIME]ms

### TIEMPO ESTIMADO: 120-160 horas`,
        preview: 'Setup completo de pipeline DevOps enterprise con Infrastructure as Code, containerización, Kubernetes, CI/CD con GitOps, monitoring stack completo y security best practices...',
        categoryId: 'cat1',
        subcategoryId: 'devops',
        aiToolId: 'claude-code',
        authorId: 'user5',
        isPublic: true,
        isPremium: false,
        tags: ['devops', 'kubernetes', 'cicd', 'terraform', 'docker', 'monitoring', 'workflow'],
        likes: 967,
        copies: 1834,
        views: 4123,
        createdAt: new Date('2024-10-25'),
        updatedAt: new Date('2024-12-08')
      }
    }),

    // 6. AI/ML Model Development Workflow
    prisma.prompt.create({
      data: {
        id: 'workflow6',
        title: 'Desarrollo de Modelo AI/ML End-to-End',
        description: 'Workflow completo para desarrollar, entrenar y deploar un modelo de machine learning en producción',
        content: `# WORKFLOW: Desarrollo de Modelo AI/ML End-to-End
## Duración: 6-8 semanas | Dificultad: Avanzado | Deliverable: Production ML model

### FASE 1: Problem Definition & Data Strategy (Semana 1)

#### Paso 1.1: Business Problem Analysis
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Define ML problem y business case:

Business Context:
- Problem description: [BUSINESS_PROBLEM]
- Current solution: [CURRENT_APPROACH]
- Success metrics: [SUCCESS_CRITERIA]
- Impact estimation: [BUSINESS_IMPACT]
- Stakeholders: [STAKEHOLDER_LIST]

ML Problem Formulation:
- Problem type: [CLASSIFICATION/REGRESSION/CLUSTERING/OTHER]
- Input features: [FEATURE_DESCRIPTION]
- Target variable: [TARGET_DESCRIPTION]
- Performance requirements: [PERFORMANCE_REQUIREMENTS]
- Constraints: [MODEL_CONSTRAINTS]

Success Definition:
- Primary metric: [PRIMARY_METRIC]
- Secondary metrics: [SECONDARY_METRICS]
- Baseline performance: [BASELINE_PERFORMANCE]
- Target improvement: [TARGET_IMPROVEMENT]
- Business ROI: [ROI_EXPECTATIONS]

Feasibility Assessment:
- Data availability: [DATA_STATUS]
- Technical complexity: [COMPLEXITY_LEVEL]
- Resource requirements: [RESOURCE_NEEDS]
- Timeline constraints: [TIME_CONSTRAINTS]
- Risk factors: [RISK_ASSESSMENT]

Domain: [APPLICATION_DOMAIN]
Use case: [SPECIFIC_USE_CASE]
\`\`\`

#### Paso 1.2: Data Strategy & Collection
**AI Tool**: Claude
**Prompt**:
\`\`\`
Desarrolla comprehensive data strategy:

Data Sources:
1. Internal data: [INTERNAL_SOURCES]
   - Database tables: [TABLE_LIST]
   - API endpoints: [API_LIST]
   - File systems: [FILE_SOURCES]
   - Logs y events: [LOG_SOURCES]

2. External data: [EXTERNAL_SOURCES]
   - Public datasets: [PUBLIC_DATA]
   - Third-party APIs: [API_PROVIDERS]
   - Purchased data: [COMMERCIAL_DATA]
   - Web scraping: [SCRAPING_TARGETS]

Data Quality Assessment:
- Completeness: [COMPLETENESS_ANALYSIS]
- Accuracy: [ACCURACY_METRICS]
- Consistency: [CONSISTENCY_CHECKS]
- Timeliness: [FRESHNESS_REQUIREMENTS]
- Relevance: [RELEVANCE_SCORE]

Data Pipeline Design:
- Ingestion layer: [INGESTION_TOOLS]
- Storage layer: [STORAGE_SOLUTION]
- Processing layer: [PROCESSING_FRAMEWORK]
- Validation layer: [VALIDATION_RULES]
- Monitoring layer: [MONITORING_SETUP]

Privacy & Compliance:
- PII handling: [PII_STRATEGY]
- GDPR compliance: [GDPR_REQUIREMENTS]
- Data retention: [RETENTION_POLICY]
- Anonymization: [ANONYMIZATION_METHODS]
- Audit trail: [AUDIT_REQUIREMENTS]

Expected data volume: [DATA_VOLUME]
Update frequency: [UPDATE_FREQUENCY]
\`\`\`

**Git Commands**:
\`\`\`bash
git init ml-project-[PROJECT_NAME]
git add data-strategy/ business-case/
git commit -m "project: initial data strategy y business case"
\`\`\`

### FASE 2: Data Engineering & EDA (Semanas 2-3)

#### Paso 2.1: Data Pipeline Implementation
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Implementa robust data pipeline:

Pipeline Architecture:
\`\`\`python
# Data pipeline structure
src/
├── data/
│   ├── ingestion/
│   │   ├── extract.py
│   │   ├── validators.py
│   │   └── connectors/
│   ├── processing/
│   │   ├── transform.py
│   │   ├── clean.py
│   │   └── feature_engineering.py
│   ├── storage/
│   │   ├── warehouse.py
│   │   └── versioning.py
│   └── monitoring/
│       ├── quality_checks.py
│       └── alerting.py
\`\`\`

Data Ingestion:
1. Extract methods:
   - Database connectors (PostgreSQL, MongoDB)
   - API clients (REST, GraphQL)
   - File processors (CSV, JSON, Parquet)
   - Stream processors (Kafka, Kinesis)

2. Validation framework:
   - Schema validation
   - Data type checking
   - Range validation
   - Business rule validation
   - Anomaly detection

3. Error handling:
   - Retry mechanisms
   - Dead letter queues
   - Data quarantine
   - Alert notifications
   - Recovery procedures

Data Transformation:
1. Cleaning operations:
   - Missing value imputation
   - Outlier detection/handling
   - Duplicate removal
   - Format standardization
   - Noise reduction

2. Feature engineering:
   - Feature extraction
   - Feature selection
   - Feature scaling/normalization
   - Categorical encoding
   - Time-based features

Technology Stack:
- Orchestration: [AIRFLOW/PREFECT/DAGSTER]
- Processing: [PANDAS/DASK/SPARK]
- Storage: [DATA_WAREHOUSE_SOLUTION]
- Monitoring: [MONITORING_TOOLS]
\`\`\`

#### Paso 2.2: Exploratory Data Analysis
**AI Tool**: ChatGPT
**Prompt**:
\`\`\`
Realiza comprehensive EDA:

Statistical Analysis:
1. Descriptive statistics:
   - Distribution analysis
   - Central tendency measures
   - Variability metrics
   - Correlation analysis
   - Missing data patterns

2. Visual exploration:
   - Histograms y distribution plots
   - Box plots para outliers
   - Correlation heatmaps
   - Scatter plots
   - Time series plots

3. Data quality assessment:
   - Missing value analysis
   - Duplicate detection
   - Outlier identification
   - Data consistency checks
   - Schema validation

Feature Analysis:
1. Univariate analysis:
   - Feature distributions
   - Outlier detection
   - Missing value patterns
   - Data type validation
   - Value range analysis

2. Bivariate analysis:
   - Feature correlations
   - Target variable relationships
   - Feature interactions
   - Conditional distributions
   - Association tests

3. Multivariate analysis:
   - Principal component analysis
   - Clustering analysis
   - Feature importance
   - Dimensionality assessment
   - Pattern recognition

Business Insights:
- [INSIGHT_1]: [BUSINESS_IMPLICATION]
- [INSIGHT_2]: [BUSINESS_IMPLICATION]
- [INSIGHT_3]: [BUSINESS_IMPLICATION]

Data size: [DATASET_SIZE]
Features: [FEATURE_COUNT]
Target: [TARGET_VARIABLE]
\`\`\`

### FASE 3: Model Development (Semanas 4-5)

#### Paso 3.1: Model Selection & Training
**AI Tool**: Claude Code
**Prompt**:
\`\`\`
Desarrolla model training pipeline:

Model Experimentation:
\`\`\`python
# Model training framework
src/
├── models/
│   ├── baseline/
│   │   └── simple_model.py
│   ├── classical/
│   │   ├── linear_models.py
│   │   ├── tree_models.py
│   │   └── ensemble_models.py
│   ├── deep_learning/
│   │   ├── neural_networks.py
│   │   ├── cnn_models.py
│   │   └── transformer_models.py
│   └── evaluation/
│       ├── metrics.py
│       ├── cross_validation.py
│       └── model_selection.py
\`\`\`

Model Candidates:
1. Baseline models:
   - Simple heuristics
   - Linear regression/classification
   - Decision trees
   - Random baseline

2. Classical ML:
   - Linear models (Ridge, Lasso, ElasticNet)
   - Tree-based (Random Forest, XGBoost, LightGBM)
   - SVM models
   - Ensemble methods

3. Deep Learning (if applicable):
   - Neural networks (MLPs)
   - CNNs (for image/spatial data)
   - RNNs/LSTMs (for sequential data)
   - Transformers (for text/sequence data)

Training Strategy:
1. Data splitting:
   - Train/validation/test splits
   - Time-based splitting (if temporal)
   - Stratified sampling
   - Cross-validation strategy

2. Hyperparameter optimization:
   - Grid search
   - Random search
   - Bayesian optimization
   - Early stopping

3. Model evaluation:
   - Performance metrics: [EVALUATION_METRICS]
   - Cross-validation scores
   - Learning curves
   - Feature importance analysis

Problem type: [ML_PROBLEM_TYPE]
Data characteristics: [DATA_CHARACTERISTICS]
\`\`\`

#### Paso 3.2: Model Optimization & Validation
**AI Tool**: DeepSeek-V3
**Prompt**:
\`\`\`
Implementa model optimization y validation:

Hyperparameter Optimization:
\`\`\`python
# HPO framework
import optuna
from sklearn.model_selection import cross_val_score

def objective(trial):
    # Define hyperparameter search space
    params = {
        'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
        'max_depth': trial.suggest_int('max_depth', 3, 10),
        'n_estimators': trial.suggest_int('n_estimators', 100, 1000),
        'subsample': trial.suggest_float('subsample', 0.7, 1.0)
    }
    
    model = create_model(**params)
    score = cross_val_score(model, X_train, y_train, cv=5)
    return score.mean()

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)
\`\`\`

Model Validation:
1. Performance validation:
   - Cross-validation results
   - Hold-out test performance
   - Statistical significance tests
   - Confidence intervals
   - Bootstrap sampling

2. Robustness testing:
   - Data drift simulation
   - Adversarial examples
   - Noise injection
   - Edge case testing
   - Stress testing

3. Fairness assessment:
   - Bias detection
   - Fairness metrics
   - Subgroup analysis
   - Demographic parity
   - Equal opportunity

Feature Engineering:
1. Feature selection:
   - Univariate selection
   - Recursive feature elimination
   - L1 regularization
   - Tree-based importance
   - Mutual information

2. Feature transformation:
   - Polynomial features
   - Interaction terms
   - Binning/discretization
   - Encoding strategies
   - Scaling methods

Model Interpretation:
- SHAP values
- LIME explanations
- Feature importance plots
- Partial dependence plots
- Model-agnostic methods

Target performance: [PERFORMANCE_TARGET]
Validation strategy: [VALIDATION_APPROACH]
\`\`\`

### FASE 4: Model Deployment (Semana 6)

#### Paso 4.1: Model Serving Infrastructure
**AI Tool**: Cursor
**Prompt**:
\`\`\`
Implementa model serving solution:

Serving Architecture:
\`\`\`python
# Model serving structure
deployment/
├── model_server/
│   ├── api/
│   │   ├── endpoints.py
│   │   ├── schemas.py
│   │   └── middleware.py
│   ├── models/
│   │   ├── model_loader.py
│   │   ├── preprocessor.py
│   │   └── postprocessor.py
│   ├── monitoring/
│   │   ├── metrics.py
│   │   ├── logging.py
│   │   └── alerting.py
│   └── utils/
│       ├── validation.py
│       └── caching.py
├── infrastructure/
│   ├── docker/
│   │   └── Dockerfile
│   ├── kubernetes/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── terraform/
│       └── model_serving.tf
\`\`\`

API Development:
1. RESTful API (FastAPI):
   - Model prediction endpoints
   - Health check endpoints
   - Model metadata endpoints
   - Batch prediction support
   - Async request handling

2. Input validation:
   - Schema validation (Pydantic)
   - Data type checking
   - Range validation
   - Business rule validation
   - Error handling

3. Response formatting:
   - Prediction confidence
   - Model version info
   - Processing time
   - Feature explanations
   - Status codes

Containerization:
1. Docker setup:
   - Multi-stage builds
   - Dependency optimization
   - Security hardening
   - Health checks
   - Resource limits

2. Model packaging:
   - Model serialization (pickle/joblib/ONNX)
   - Version management
   - Model registry integration
   - Artifact storage
   - Dependency management

Deployment Strategy:
- Serving platform: [KUBERNETES/CLOUD_ML/SAGEMAKER]
- Scaling strategy: [AUTO_SCALING_CONFIG]
- Load balancing: [LB_CONFIGURATION]
- Caching layer: [CACHING_STRATEGY]
\`\`\`

#### Paso 4.2: MLOps Pipeline
**AI Tool**: Claude Code
**Prompt**:
\`\`\`
Implementa comprehensive MLOps pipeline:

CI/CD for ML:
\`\`\`yaml
# .github/workflows/ml-pipeline.yml
name: ML Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  data-validation:
    runs-on: ubuntu-latest
    steps:
      - name: Validate data schema
      - name: Check data quality
      - name: Detect data drift

  model-training:
    needs: data-validation
    runs-on: ubuntu-latest
    steps:
      - name: Train model
      - name: Evaluate model
      - name: Compare with baseline
      - name: Model validation tests

  model-deployment:
    needs: model-training
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Package model
      - name: Deploy to staging
      - name: Integration tests
      - name: Deploy to production
\`\`\`

Model Monitoring:
1. Performance monitoring:
   - Prediction accuracy tracking
   - Latency monitoring
   - Throughput metrics
   - Error rate tracking
   - Resource utilization

2. Data monitoring:
   - Input data drift detection
   - Feature distribution changes
   - Data quality metrics
   - Schema violations
   - Anomaly detection

3. Model drift detection:
   - Performance degradation
   - Concept drift
   - Covariate shift
   - Prior probability shift
   - Automated retraining triggers

Model Management:
1. Model registry:
   - Model versioning
   - Metadata tracking
   - Performance metrics
   - Approval workflows
   - Rollback capabilities

2. Experiment tracking:
   - Hyperparameter logging
   - Metric tracking
   - Artifact storage
   - Reproducibility
   - Collaboration features

3. Model governance:
   - Model approval process
   - Compliance checks
   - Audit trails
   - Risk assessment
   - Documentation requirements

Tools Integration:
- Experiment tracking: [MLFLOW/WANDB/NEPTUNE]
- Model registry: [MLFLOW/SAGEMAKER/VERTEX]
- Monitoring: [EVIDENTLY/WHYLABS/FIDDLER]
- Orchestration: [KUBEFLOW/AIRFLOW/PREFECT]
\`\`\`

### FASE 5: Production Optimization (Semanas 7-8)

#### Paso 5.1: Performance Optimization
**AI Tool**: GPT-4.1
**Prompt**:
\`\`\`
Optimiza model performance en producción:

Inference Optimization:
1. Model optimization:
   - Model quantization
   - Pruning techniques
   - Knowledge distillation
   - ONNX conversion
   - TensorRT optimization

2. Hardware acceleration:
   - GPU utilization
   - TPU deployment
   - Edge deployment
   - Batch processing
   - Parallel inference

3. Caching strategies:
   - Feature caching
   - Prediction caching
   - Model caching
   - Redis integration
   - Cache invalidation

Scalability Solutions:
1. Auto-scaling:
   - CPU-based scaling
   - Custom metrics scaling
   - Predictive scaling
   - Load testing
   - Capacity planning

2. Load balancing:
   - Request routing
   - Model ensemble
   - A/B testing
   - Canary deployments
   - Blue-green deployments

3. Resource optimization:
   - Memory management
   - CPU optimization
   - I/O optimization
   - Network optimization
   - Cost optimization

Performance Targets:
- Latency: <[TARGET_LATENCY]ms
- Throughput: >[TARGET_RPS] requests/second
- Availability: >[TARGET_AVAILABILITY]%
- Resource utilization: <[TARGET_CPU]% CPU

Monitoring Setup:
- Real-time dashboards
- Performance alerts
- SLA monitoring
- Cost tracking
- Usage analytics
\`\`\`

#### Paso 5.2: Model Maintenance & Retraining
**AI Tool**: Claude
**Prompt**:
\`\`\`
Implementa model maintenance strategy:

Automated Retraining:
\`\`\`python
# Retraining pipeline
class ModelRetrainingPipeline:
    def __init__(self, config):
        self.config = config
        self.drift_detector = DriftDetector()
        self.model_trainer = ModelTrainer()
        
    def check_retraining_triggers(self):
        triggers = {
            'performance_degradation': self.check_performance(),
            'data_drift': self.drift_detector.detect_drift(),
            'scheduled_retrain': self.check_schedule(),
            'manual_trigger': self.check_manual_trigger()
        }
        return any(triggers.values())
    
    def retrain_model(self):
        # Data preparation
        new_data = self.prepare_training_data()
        
        # Model training
        new_model = self.model_trainer.train(new_data)
        
        # Model validation
        if self.validate_new_model(new_model):
            self.deploy_new_model(new_model)
            self.archive_old_model()
        else:
            self.alert_failure()
\`\`\`

Maintenance Schedule:
1. Regular maintenance:
   - Weekly data quality checks
   - Monthly performance reviews
   - Quarterly model audits
   - Yearly architecture reviews

2. Trigger-based maintenance:
   - Performance degradation: [DEGRADATION_THRESHOLD]
   - Data drift detection: [DRIFT_THRESHOLD]
   - Business rule changes: [RULE_UPDATES]
   - External factor changes: [EXTERNAL_TRIGGERS]

3. Proactive maintenance:
   - Feature engineering updates
   - Algorithm improvements
   - Infrastructure upgrades
   - Security patches

Model Lifecycle Management:
1. Version control:
   - Semantic versioning
   - Backward compatibility
   - Migration strategies
   - Rollback procedures

2. Documentation:
   - Model cards
   - API documentation
   - Deployment guides
   - Troubleshooting guides

3. Compliance:
   - Regulatory requirements
   - Audit trails
   - Risk assessments
   - Ethical guidelines

Continuous Improvement:
- A/B testing framework
- Champion/challenger models
- Feedback loop integration
- Business metric tracking
- ROI measurement
\`\`\`

**Git Commands**:
\`\`\`bash
git add deployment/ mlops/
git commit -m "deployment: production model serving y mlops pipeline"
git tag v1.0-production
git push origin main --tags
\`\`\`

### DELIVERABLES FINALES:
✅ Business case y problem definition
✅ Data pipeline y engineering
✅ Exploratory data analysis
✅ Trained y validated model
✅ Model serving infrastructure
✅ MLOps pipeline completo
✅ Monitoring y alerting system
✅ Documentation completa
✅ Performance optimization
✅ Maintenance strategy

### ML STACK:
- Data Processing: Pandas, Dask, Spark
- ML Frameworks: Scikit-learn, XGBoost, TensorFlow/PyTorch
- Experimentation: MLflow, Weights & Biases
- Serving: FastAPI, Kubernetes, Docker
- Monitoring: Evidently, Prometheus, Grafana
- Orchestration: Airflow, Kubeflow
- Infrastructure: AWS/GCP/Azure ML services

### SUCCESS METRICS:
- Model accuracy: >[MODEL_ACCURACY_TARGET]
- Inference latency: <[LATENCY_TARGET]ms
- System availability: >[AVAILABILITY_TARGET]%
- Data freshness: <[FRESHNESS_TARGET] hours
- Cost efficiency: <€[COST_TARGET]/month
- Business impact: [BUSINESS_METRICS]

### TIEMPO ESTIMADO: 200-300 horas`,
        preview: 'Workflow end-to-end para desarrollar modelo de machine learning desde definición del problema hasta deployment en producción, incluyendo data engineering, model training, MLOps pipeline y monitoring...',
        categoryId: 'cat1',
        subcategoryId: 'ai-ml',
        aiToolId: 'deepseek-v3',
        authorId: 'user7',
        isPublic: true,
        isPremium: false,
        tags: ['machine-learning', 'ai', 'mlops', 'data-science', 'python', 'deployment', 'workflow'],
        likes: 1456,
        copies: 2123,
        views: 5876,
        createdAt: new Date('2024-11-20'),
        updatedAt: new Date('2024-12-20')
      }
    })
  ]);

  console.log('✅ Seed actualizado completo!');
  console.log(`Created ${users.length} users`);
  console.log(`Created ${aiTools.length} AI tools`);
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${subcategories.length} subcategories`);
  console.log(`Created ${prompts.length} workflows`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });