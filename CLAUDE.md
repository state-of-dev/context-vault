# CLAUDE.md - Guía Técnica para Desarrollo

## 📋 Resumen Ejecutivo para Claude

Esto es **Context Vault**, una plataforma de productividad profesional que revoluciona cómo los profesionales ejecutan proyectos complejos mediante workflows estructurados con IA. El proyecto está al 80% completado y listo para la transformación a workflows.

### Estado Actual ✅
- Homepage con grid de contenido y categorías
- Página de detalles con sistema de restricción
- Componente Terminal para mostrar código y comandos
- Sistema completo de tipos TypeScript
- Base de datos PostgreSQL con Prisma
- APIs REST funcionales
- CSS personalizado completamente funcional
- Responsive design
- **NUEVO:** Arquitectura feature-based implementada
- **NUEVO:** Componentes separados por funcionalidad

### Lo Que Funciona
```bash
npm run dev  # Servidor en http://localhost:3000
```

## 🎯 Concepto de Negocio

**Plataforma de productividad profesional** que ofrece workflows ejecutables organizados por industrias:
- **Cineastas** 🎬: Workflows de producción audiovisual completos
- **Programadores** 💻: Metodologías de desarrollo de software
- **Marketers** 📈: Estrategias de go-to-market estructuradas
- **Diseñadores** 🎨: Procesos de diseño y UX end-to-end
- **Consultores** 🏢: Frameworks de consultoría y análisis
- **Educadores** 🎓: Metodologías de creación de contenido educativo

### Modelo de Usuario
- **Anónimos**: Solo ven estructura de workflows
- **Registrados**: Acceso a workflows básicos completos
- **Premium**: Workflows avanzados con soporte y actualizaciones

## 🏗️ Arquitectura Técnica

### Stack
- **Next.js 14** con App Router
- **TypeScript** + tipos completos
- **PostgreSQL** con Prisma ORM
- **CSS personalizado** (Tailwind-style utilities)
- **shadcn/ui** componentes
- **Lucide React** iconos

### Archivos Clave
```
src/
├── app/
│   ├── page.tsx              # Homepage ✅ 
│   ├── workflows/[id]/       # Workflows details ✅
│   └── globals.css           # Estilos CSS ✅
├── features/                 # 🆕 Estructura feature-based
│   ├── home/components/      # Componentes homepage ✅
│   ├── workflow-details/     # Componentes workflow ✅
│   ├── workflow-execution/   # Componentes ejecución 🔄
│   └── shared/components/    # Componentes compartidos ✅
├── components/ui/
│   ├── terminal.tsx          # Componente principal ✅
│   ├── workflow-progress.tsx # Progress tracking 🔄
│   └── step-executor.tsx     # Ejecución pasos 🔄
├── types/index.ts            # Interfaces workflows ✅
└── prisma/schema.prisma      # Base de datos ✅
```

## 🎨 Componentes Clave

### Terminal Component
```typescript
// Para mostrar prompts y comandos Git
<Terminal title="Step 2.1: Frontend Setup">
  {stepContent}
</Terminal>

// Para comandos Git específicos
<GitCommand 
  command="git checkout -b feature/landing-page"
  description="Crear rama para desarrollo de landing"
  timing="inicio"
/>
```

### Workflow Execution Components
```typescript
// Progress tracking
<WorkflowProgress 
  phases={workflow.phases}
  currentStep={currentStep}
  completedSteps={completedSteps}
/>

// Step executor
<StepExecutor
  step={currentStep}
  onComplete={handleStepComplete}
  onSkip={handleStepSkip}
/>
```

Características:
- Fondo negro con header de terminal (círculos rojo/amarillo/verde)
- Texto verde estilo código para comandos
- Progress tracking visual
- Git integration nativa
- Validation entre pasos

## 📊 Datos y Tipos

### Workflow Interface
```typescript
interface Workflow {
  id: string;
  title: string;
  description: string;
  industry: Industry;
  durationWeeks: number;
  difficulty: 'principiante' | 'intermedio' | 'avanzado';
  phases: WorkflowPhase[];
  author: User;
  tags: string[];
  isPremium: boolean;
}

interface WorkflowStep {
  id: string;
  title: string;
  prompts: StepPrompt[];
  gitCommands: GitCommand[];
  deliverables: string[];
  validationCriteria: string[];
  estimatedHours: number;
}
```

### Database Schema
- Base de datos PostgreSQL con Prisma
- Estructura jerárquica: workflows → phases → steps → prompts/commands
- Progress tracking por usuario
- 6 industrias especializadas

## 🚀 Próximas Funcionalidades Prioritarias

### 1. Workflow Execution Engine
- Sistema de ejecución paso a paso
- Progress tracking en tiempo real
- Validación automática entre pasos
- Git integration nativa

### 2. Workflow Builder
- Editor visual de workflows
- Sistema de plantillas
- Versionado de workflows
- Colaboración en equipos

### 3. Analytics y Insights
- Métricas de completion rate
- Time tracking por paso
- Bottleneck identification
- Success patterns analysis

### 4. Dashboard Avanzado
- Workflows en progreso
- Historial de proyectos completados
- Métricas de productividad personal
- Recomendaciones de workflows

## 🛠️ Comandos de Desarrollo

```bash
# Iniciar proyecto
cd context-vault
npm install
npm run dev

# Base de datos
npx prisma migrate dev
npx prisma studio
npm run db:seed

# Verificar tipos
npx tsc --noEmit
```

## 🔧 Problemas Conocidos

- **Tailwind v4 conflicto**: Resuelto con CSS personalizado
- **WSL permisos**: No afecta funcionalidad core
- **Build errors**: Relacionados con entorno, código correcto

## 📁 Navegación de URLs

- `/` - Homepage con grid de workflows
- `/workflows/[id]` - Detalles del workflow
- `/workflows/[id]/execute` - Ejecución paso a paso
- `/dashboard` - Panel de usuario con progreso
- `/industries/[slug]` - Workflows por industria

## 🎨 Diseño System

### Colores
- **Primary**: Azul #2563eb
- **Secondary**: Púrpura #9333ea  
- **Accent**: Verde #16a34a
- **Terminal**: Negro #111827 con verde #34d399

### Layout
- Max-width: 80rem (1280px)
- Mobile-first responsive
- Grid: 1 col mobile, 2 col tablet, 3 col desktop

---

## Para Claude: Cómo Continuar

1. **Lee la nueva documentación** en `/md` para entender workflows
2. **Revisa la arquitectura** de base de datos en `nueva-arquitectura.md`
3. **Ejecuta** `npm run dev` para ver funcionalidad actual
4. **Implementa workflow execution engine** como próxima prioridad
5. **Desarrolla iterativamente** manteniendo la nueva filosofía

El proyecto está **transformándose** en una plataforma de productividad profesional. ¡Listo para workflows ejecutables! 🚀