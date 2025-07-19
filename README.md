# Context Vault 🏛️

Una plataforma de productividad profesional que revoluciona cómo los profesionales ejecutan proyectos complejos mediante workflows estructurados con IA. Transforma metodologías en sistemas ejecutables paso a paso.

## 🎯 Concepto de Negocio

**Context Vault** es una plataforma de productividad profesional 100% gratuita donde:
- **Usuarios anónimos**: Acceso completo a TODOS los workflows sin restricciones
- **Usuarios registrados**: Todo lo anterior + progress tracking y dashboard personalizado
- **Publicidad elegante**: Monetización vía ads contextales y sponsored content
- **Creators**: Monetizan por engagement y calidad, no por ventas

### Industrias Especializadas
- 🎬 **Cineastas**: Workflows completos de producción audiovisual (preproducción → postproducción)
- 💻 **Programadores**: Metodologías de desarrollo de software (diseño → deploy → monitoreo)
- 📈 **Marketers**: Estrategias go-to-market estructuradas (research → launch → optimización)
- 🎨 **Diseñadores**: Procesos de diseño UX/UI end-to-end (research → prototipo → testing)
- 🏢 **Consultores**: Frameworks de consultoría y análisis (diagnóstico → estrategia → implementación)
- 🎓 **Educadores**: Metodologías de creación de contenido educativo (diseño → producción → evaluación)

## 🏗️ Stack Tecnológico

- **Frontend**: Next.js 14 + TypeScript + CSS personalizado
- **Backend**: PostgreSQL + Prisma ORM + APIs REST
- **Componentes**: shadcn/ui components + Lucide React icons
- **Estilos**: CSS personalizado (Tailwind-like utilities)
- **Datos**: Base de datos real con workflows estructurados
- **Arquitectura**: App Router de Next.js 14 + feature-based structure

## 📁 Estructura del Proyecto

```
context-vault/
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos principales
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Homepage con workflows
│   │   ├── workflows/[id]/       # Páginas de workflows
│   │   └── dashboard/            # Panel de usuario
│   ├── features/                 # Arquitectura feature-based
│   │   ├── home/components/      # Componentes homepage
│   │   ├── workflow-details/     # Componentes workflow
│   │   ├── workflow-execution/   # Componentes ejecución
│   │   └── shared/components/    # Componentes compartidos
│   ├── components/ui/
│   │   ├── button.tsx            # Componente Button de shadcn
│   │   ├── terminal.tsx          # Componente Terminal
│   │   └── workflow-progress.tsx # Progress tracking
│   ├── lib/
│   │   ├── utils.ts              # Utilidades
│   │   └── prisma.ts             # Cliente Prisma
│   └── types/
│       └── index.ts              # Tipos de workflows
├── prisma/
│   ├── schema.prisma             # Schema de base de datos
│   └── migrations/               # Migraciones
├── md/                           # Documentación del proyecto
└── package.json                  # Dependencias
```

## 🎨 Componentes Principales

### 1. **Workflow Execution Engine**
```typescript
// Sistema de ejecución paso a paso
<WorkflowExecutor workflow={workflow}>
  <PhaseProgress phases={phases} />
  <StepExecutor step={currentStep} />
  <GitIntegration commands={gitCommands} />
</WorkflowExecutor>

// Progress tracking visual
<WorkflowProgress 
  totalSteps={workflow.totalSteps}
  completedSteps={completedSteps}
  currentPhase={currentPhase}
/>
```

### 2. **Workflow Cards**
- Vista de estructura de workflow (fases y pasos)
- Estimaciones de tiempo y dificultad
- Progress tracking para usuarios registrados
- Métricas de completion rate y success rate

### 3. **Páginas Implementadas**
- **Homepage** (`/`): Grid de workflows por industria
- **Workflow Details** (`/workflows/[id]`): Estructura completa del workflow
- **Workflow Execution** (`/workflows/[id]/execute`): Ejecución paso a paso
- **Dashboard** (`/dashboard`): Progress tracking personal

## 📊 Tipos de Datos

### Principales Interfaces
```typescript
interface Workflow {
  id: string;
  title: string;
  description: string;
  industry: Industry;
  durationWeeks: number;
  difficulty: 'principiante' | 'intermedio' | 'avanzado';
  phases: WorkflowPhase[];
  totalSteps: number;
  estimatedHours: number;
  successRate: number;
  author: User;
  tags: string[];
  isPremium: boolean;
}

interface WorkflowPhase {
  id: string;
  title: string;
  description: string;
  estimatedWeeks: number;
  steps: WorkflowStep[];
  phaseOrder: number;
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  prompts: StepPrompt[];
  gitCommands: GitCommand[];
  deliverables: string[];
  validationCriteria: string[];
  estimatedHours: number;
}

interface GitCommand {
  command: string;
  description: string;
  whenToExecute: 'inicio' | 'proceso' | 'final' | 'merge';
  contextExplanation: string;
}
```

## 🚀 Para Retomar el Desarrollo

### 1. **Estado Actual**
- ✅ Homepage con grid de contenido
- ✅ Base de datos PostgreSQL con Prisma
- ✅ APIs REST funcionales
- ✅ Componente Terminal
- ✅ Sistema de categorías/industrias
- ✅ Arquitectura feature-based
- ✅ Estilos CSS completos
- ✅ Responsive design

### 2. **Iniciar el Proyecto**
```bash
cd context-vault
npm install
npm run dev

# Base de datos
npx prisma migrate dev
npx prisma studio
npm run db:seed
```

### 3. **Próximas Funcionalidades a Implementar**

#### **Workflow Execution Engine** (Prioridad ALTA)
- [ ] Sistema de ejecución paso a paso
- [ ] Progress tracking en tiempo real
- [ ] Validación automática entre pasos
- [ ] Git integration nativa

#### **Workflow Builder** (Prioridad ALTA)
- [ ] Editor visual de workflows
- [ ] Sistema de plantillas
- [ ] Versionado de workflows
- [ ] Collaborative editing

#### **Analytics y Insights**
- [ ] Métricas de completion rate
- [ ] Time tracking por paso
- [ ] Bottleneck identification
- [ ] Success patterns analysis

#### **Dashboard Avanzado**
- [ ] Workflows en progreso
- [ ] Historial de proyectos completados
- [ ] Métricas de productividad personal
- [ ] Recomendaciones de workflows

#### **Monetización**
- [ ] Workflows premium
- [ ] Suscripciones empresariales
- [ ] Marketplace de metodologías
- [ ] Certificaciones de completion

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run lint         # Linter

# Base de datos
npx prisma migrate dev      # Crear nueva migración
npx prisma studio          # GUI para base de datos
npm run db:seed            # Poblar con datos de ejemplo
npx prisma generate        # Generar cliente Prisma
```

## 🎯 Objetivos de la Plataforma

1. **Transformar metodologías** en workflows ejecutables
2. **Acelerar la productividad** profesional mediante IA estructurada
3. **Estandarizar procesos** complejos en pasos validables
4. **Crear ecosistema** de metodologías probadas
5. **Generar insights** sobre patrones de éxito profesional

## 🔧 Problemas Conocidos

- **Tailwind v4 vs v3**: Actualmente usando CSS personalizado
- **Permisos WSL**: Problemas con npm install en algunos entornos
- **Node version**: Requiere Node 18+ (recomendado Node 20+)

## 📝 Datos de Ejemplo

El proyecto incluye workflows de ejemplo:
- Workflow de desarrollo: "Landing Page SaaS Completa"
- Workflow de cine: "Cortometraje de 10 Minutos"  
- Workflow de marketing: "Lanzamiento de Producto Digital"
- 6 industrias especializadas con subcategorías
- 20+ herramientas de IA categorizadas

## 🎨 Diseño y UX

- **Color scheme**: Azul profesional con acentos púrpura y verde
- **Tipografía**: System fonts modernas
- **Iconos**: Lucide React para clarity
- **Layout**: Mobile-first responsive design
- **Workflow theme**: Progress indicators y step-by-step UI
- **Terminal theme**: Fondo negro con texto verde para comandos

---