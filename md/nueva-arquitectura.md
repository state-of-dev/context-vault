# 🏗️ Nueva Arquitectura: Context Vault Workflows

## 📊 Rediseño de Base de Datos

### Schema Principal para Workflows

```sql
-- Tabla principal de workflows
CREATE TABLE workflows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  industry_id UUID REFERENCES industries(id),
  duration_weeks INTEGER, -- Duración estimada en semanas
  difficulty_level difficulty_enum DEFAULT 'intermedio',
  total_phases INTEGER DEFAULT 0,
  total_steps INTEGER DEFAULT 0,
  estimated_hours INTEGER, -- Horas totales estimadas
  success_rate DECIMAL(5,2), -- % de usuarios que completan
  tags TEXT[], -- Array de tags
  is_premium BOOLEAN DEFAULT false,
  author_id UUID REFERENCES users(id),
  status workflow_status_enum DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP
);

-- Fases del workflow (ej: Preproducción, Producción, Post)
CREATE TABLE workflow_phases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id UUID REFERENCES workflows(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  phase_order INTEGER NOT NULL, -- Orden dentro del workflow
  estimated_weeks INTEGER, -- Duración de esta fase
  icon VARCHAR(50), -- Emoji o icon name
  color VARCHAR(7), -- Color hex para UI
  created_at TIMESTAMP DEFAULT NOW()
);

-- Pasos individuales dentro de cada fase
CREATE TABLE workflow_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase_id UUID REFERENCES workflow_phases(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  step_order INTEGER NOT NULL, -- Orden dentro de la fase
  estimated_hours INTEGER, -- Horas estimadas para este paso
  is_optional BOOLEAN DEFAULT false,
  prerequisites TEXT[], -- Array de pre-requisitos
  deliverables TEXT[], -- Array de entregables esperados
  validation_criteria TEXT[], -- Criterios para considerar completo
  created_at TIMESTAMP DEFAULT NOW()
);

-- Prompts específicos para cada paso
CREATE TABLE step_prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  step_id UUID REFERENCES workflow_steps(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  context_description TEXT, -- Explicación del contexto
  expected_output TEXT, -- Qué se espera que genere
  ai_tool_id UUID REFERENCES ai_tools(id),
  prompt_order INTEGER NOT NULL,
  variables JSONB, -- Variables que el usuario debe reemplazar
  example_output TEXT, -- Ejemplo de salida
  created_at TIMESTAMP DEFAULT NOW()
);

-- Comandos Git específicos para cada paso
CREATE TABLE step_git_commands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  step_id UUID REFERENCES workflow_steps(id) ON DELETE CASCADE,
  command TEXT NOT NULL,
  description TEXT NOT NULL,
  when_to_execute git_timing_enum, -- 'inicio' | 'proceso' | 'final' | 'merge'
  context_explanation TEXT,
  command_order INTEGER NOT NULL,
  is_optional BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tracking de progreso del usuario
CREATE TABLE user_workflow_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  workflow_id UUID REFERENCES workflows(id),
  current_phase_id UUID REFERENCES workflow_phases(id),
  current_step_id UUID REFERENCES workflow_steps(id),
  started_at TIMESTAMP DEFAULT NOW(),
  last_activity_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  status progress_status_enum DEFAULT 'started', -- 'started' | 'paused' | 'completed' | 'abandoned'
  completion_percentage DECIMAL(5,2) DEFAULT 0,
  actual_hours_spent INTEGER DEFAULT 0,
  notes TEXT,
  UNIQUE(user_id, workflow_id)
);

-- Tracking de pasos completados
CREATE TABLE user_step_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_progress_id UUID REFERENCES user_workflow_progress(id),
  step_id UUID REFERENCES workflow_steps(id),
  completed_at TIMESTAMP DEFAULT NOW(),
  time_spent_hours DECIMAL(4,2),
  user_notes TEXT,
  deliverables_urls TEXT[], -- Links a archivos/repos del usuario
  UNIQUE(user_progress_id, step_id)
);

-- ENUMs
CREATE TYPE difficulty_enum AS ENUM ('principiante', 'intermedio', 'avanzado');
CREATE TYPE workflow_status_enum AS ENUM ('draft', 'review', 'published', 'deprecated');
CREATE TYPE git_timing_enum AS ENUM ('inicio', 'proceso', 'final', 'merge', 'deploy');
CREATE TYPE progress_status_enum AS ENUM ('started', 'paused', 'completed', 'abandoned');

-- Industrias especializadas
CREATE TABLE industries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  emoji VARCHAR(10),
  color VARCHAR(7),
  workflow_count INTEGER DEFAULT 0
);

-- Datos iniciales de industrias
INSERT INTO industries (name, slug, description, emoji, color) VALUES
('Desarrollo de Software', 'desarrollo', 'Workflows para programadores, DevOps y tecnología', '💻', '#3b82f6'),
('Producción Audiovisual', 'cine', 'Workflows para cineastas, editores y productores', '🎬', '#ef4444'),
('Marketing Digital', 'marketing', 'Workflows para marketers, growth hackers y publicistas', '📈', '#10b981'),
('Diseño y UX', 'diseno', 'Workflows para diseñadores gráficos y UX/UI', '🎨', '#f59e0b'),
('Consultoría de Negocios', 'consultoria', 'Workflows para consultores y analistas', '🏢', '#8b5cf6'),
('Educación Digital', 'educacion', 'Workflows para educadores y creadores de contenido', '🎓', '#06b6d4');
```

## 🔧 Nuevas APIs para Workflows

### API Endpoints Principales

```typescript
// APIs de Workflows
GET /api/workflows                    // Lista workflows con filtros
GET /api/workflows/[id]               // Workflow completo con fases/pasos
POST /api/workflows                   // Crear nuevo workflow
PUT /api/workflows/[id]               // Actualizar workflow
DELETE /api/workflows/[id]            // Eliminar workflow

// APIs de Industrias
GET /api/industries                   // Lista todas las industrias
GET /api/industries/[slug]/workflows  // Workflows de una industria

// APIs de Progreso de Usuario
GET /api/users/me/workflows           // Workflows del usuario
POST /api/workflows/[id]/start        // Iniciar un workflow
PUT /api/workflows/[id]/progress      // Actualizar progreso
POST /api/workflows/[id]/steps/[stepId]/complete // Marcar paso como completo

// APIs de Fases y Pasos
GET /api/workflows/[id]/phases        // Fases de un workflow
GET /api/phases/[id]/steps            // Pasos de una fase
GET /api/steps/[id]/prompts           // Prompts de un paso
GET /api/steps/[id]/git-commands      // Comandos Git de un paso
```

### Tipos TypeScript Actualizados

```typescript
// Tipos principales
export interface Workflow {
  id: string;
  title: string;
  description: string;
  industry: Industry;
  durationWeeks: number;
  difficulty: 'principiante' | 'intermedio' | 'avanzado';
  totalPhases: number;
  totalSteps: number;
  estimatedHours: number;
  successRate: number;
  tags: string[];
  isPremium: boolean;
  author: User;
  status: 'draft' | 'review' | 'published' | 'deprecated';
  phases: WorkflowPhase[];
  createdAt: Date;
  publishedAt?: Date;
}

export interface WorkflowPhase {
  id: string;
  workflowId: string;
  title: string;
  description: string;
  phaseOrder: number;
  estimatedWeeks: number;
  icon: string;
  color: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  stepOrder: number;
  estimatedHours: number;
  isOptional: boolean;
  prerequisites: string[];
  deliverables: string[];
  validationCriteria: string[];
  prompts: StepPrompt[];
  gitCommands: GitCommand[];
}

export interface StepPrompt {
  id: string;
  stepId: string;
  content: string;
  contextDescription: string;
  expectedOutput: string;
  aiTool: AITool;
  promptOrder: number;
  variables: PromptVariable[];
  exampleOutput?: string;
}

export interface GitCommand {
  id: string;
  stepId: string;
  command: string;
  description: string;
  whenToExecute: 'inicio' | 'proceso' | 'final' | 'merge' | 'deploy';
  contextExplanation: string;
  commandOrder: number;
  isOptional: boolean;
}

export interface PromptVariable {
  name: string;
  description: string;
  example: string;
  required: boolean;
}

export interface UserWorkflowProgress {
  id: string;
  userId: string;
  workflowId: string;
  currentPhase?: WorkflowPhase;
  currentStep?: WorkflowStep;
  startedAt: Date;
  lastActivityAt: Date;
  completedAt?: Date;
  status: 'started' | 'paused' | 'completed' | 'abandoned';
  completionPercentage: number;
  actualHoursSpent: number;
  notes?: string;
  stepCompletions: StepCompletion[];
}

export interface StepCompletion {
  id: string;
  stepId: string;
  completedAt: Date;
  timeSpentHours: number;
  userNotes?: string;
  deliverablesUrls: string[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  emoji: string;
  color: string;
  workflowCount: number;
}
```

## 🎨 Nuevos Componentes UI

### 1. Workflow Card Component
```typescript
interface WorkflowCardProps {
  workflow: Workflow;
  userProgress?: UserWorkflowProgress;
}

// Muestra: título, industria, duración, dificultad, progreso del usuario
```

### 2. Phase Progress Component
```typescript
interface PhaseProgressProps {
  phases: WorkflowPhase[];
  currentPhaseId?: string;
  completedPhases: string[];
}

// Timeline horizontal con fases completadas/actuales/pendientes
```

### 3. Step Detail Component
```typescript
interface StepDetailProps {
  step: WorkflowStep;
  isActive: boolean;
  isCompleted: boolean;
  onComplete: (notes: string, deliverables: string[]) => void;
}

// Vista detallada con prompts, comandos git, deliverables
```

### 4. Git Command Component
```typescript
interface GitCommandProps {
  command: GitCommand;
  onExecute: () => void;
}

// Comando copyable con explicación y timing
```

### 5. Prompt Executor Component
```typescript
interface PromptExecutorProps {
  prompt: StepPrompt;
  variables: Record<string, string>;
  onVariableChange: (name: string, value: string) => void;
}

// Editor de prompt con variables, copia a clipboard, link a AI tool
```

## 📱 Nuevas Páginas

### 1. Workflow Library (`/workflows`)
- Grid de workflows por industria
- Filtros avanzados
- Búsqueda por tags/título
- Ordenamiento por popularidad/dificultad

### 2. Workflow Detail (`/workflows/[id]`)
- Overview del workflow completo
- Timeline de fases
- Estimaciones y requisitos
- Botón "Iniciar Workflow"

### 3. Workflow Execution (`/workflows/[id]/execute`)
- Vista paso a paso
- Progress sidebar
- Panel de prompts activo
- Git commands integrados
- Notes y deliverables tracking

### 4. User Dashboard (`/dashboard`)
- Workflows en progreso
- Workflows completados
- Tiempo total invertido
- Achievements/badges

### 5. Industry Pages (`/industries/[slug]`)
- Workflows específicos de la industria
- Templates populares
- Community highlights

## 🚀 Migración de Datos Existentes

### Script de Migración
```sql
-- Convertir prompts existentes en workflows simples
INSERT INTO workflows (title, description, industry_id, difficulty_level, author_id)
SELECT 
  title,
  description,
  (SELECT id FROM industries WHERE slug = 
    CASE 
      WHEN category_id = 'programmers' THEN 'desarrollo'
      WHEN category_id = 'filmmakers' THEN 'cine'
      WHEN category_id = 'marketers' THEN 'marketing'
      ELSE 'desarrollo'
    END
  ),
  'intermedio',
  author_id
FROM prompts;

-- Crear fase única para cada prompt convertido
INSERT INTO workflow_phases (workflow_id, title, description, phase_order)
SELECT id, 'Implementación', 'Paso único de implementación', 1
FROM workflows;

-- Crear paso único para cada fase
INSERT INTO workflow_steps (phase_id, title, description, step_order, estimated_hours)
SELECT p.id, w.title, w.description, 1, 2
FROM workflow_phases p
JOIN workflows w ON p.workflow_id = w.id;

-- Convertir contenido de prompts en step_prompts
INSERT INTO step_prompts (step_id, content, ai_tool_id, prompt_order)
SELECT s.id, pr.content, pr.ai_tool_id, 1
FROM workflow_steps s
JOIN workflow_phases p ON s.phase_id = p.id
JOIN workflows w ON p.workflow_id = w.id
JOIN prompts pr ON pr.title = w.title;
```

Esta nueva arquitectura transforma completamente Context Vault en una plataforma de workflows estructurados y ejecutables.