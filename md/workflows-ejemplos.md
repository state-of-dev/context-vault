# 🎯 Workflows Ejemplos Detallados

## 💻 DESARROLLO: "Landing Page SaaS Completa"

### Información General
- **Duración**: 3 semanas (60 horas)
- **Dificultad**: Intermedio
- **Industria**: Desarrollo de Software
- **Tecnologías**: Next.js, TypeScript, shadcn/ui, Vercel

### Fases del Workflow

#### 📋 FASE 1: Planificación y Diseño (Semana 1)
**Duración**: 20 horas | **Color**: #3b82f6

##### Paso 1.1: Research y Competencia (4 horas)
**Objetivo**: Analizar competidores y definir diferenciación

**Prompts**:
1. **Análisis de Competencia** (ChatGPT)
   ```
   Analiza estos 5 competidores de mi SaaS [DESCRIPCIÓN_PRODUCTO]:
   - [COMPETIDOR_1]
   - [COMPETIDOR_2]
   - [COMPETIDOR_3]
   
   Para cada uno, identifica:
   1. Propuesta de valor principal
   2. Pricing strategy
   3. Features destacadas en landing
   4. Puntos débiles de su landing
   5. Oportunidades para diferenciarnos
   
   Variables: DESCRIPCIÓN_PRODUCTO, COMPETIDOR_1, COMPETIDOR_2, COMPETIDOR_3
   Salida esperada: Análisis comparativo con insights accionables
   ```

2. **Buyer Persona Detallado** (Claude)
   ```
   Basándote en el análisis de competencia anterior, crea 2 buyer personas detallados para mi SaaS [DESCRIPCIÓN_PRODUCTO]:
   
   Para cada persona incluye:
   1. Demografia y psicografia
   2. Pain points específicos
   3. Jobs-to-be-done
   4. Objecciones principales
   5. Triggers de compra
   6. Canales preferidos
   
   Variables: DESCRIPCIÓN_PRODUCTO
   Salida esperada: 2 buyer personas con formato detallado
   ```

**Git Commands**:
```bash
# Al inicio del paso
git init landing-saas-project
git checkout -b research/competitive-analysis

# Al finalizar
git add research/
git commit -m "research: análisis competencia y buyer personas"
```

**Deliverables**:
- [ ] Documento de análisis competitivo
- [ ] 2 buyer personas documentados
- [ ] Matriz de diferenciación

**Criterios de Validación**:
- ✅ Al menos 5 competidores analizados
- ✅ Pain points específicos identificados
- ✅ Diferenciación clara definida

##### Paso 1.2: Arquitectura de Información (6 horas)
**Objetivo**: Definir estructura y contenido de la landing

**Prompts**:
1. **Wireframe en Texto** (Claude Code)
   ```
   Crea la arquitectura de información para una landing page de [DESCRIPCIÓN_PRODUCTO] dirigida a [BUYER_PERSONA_PRINCIPAL].
   
   Estructura requerida:
   1. Header con navegación
   2. Hero section con propuesta de valor
   3. Sección de problemas/soluciones
   4. Features principales (3-4)
   5. Social proof / testimonios
   6. Pricing (3 planes)
   7. FAQ (5-6 preguntas)
   8. CTA final
   9. Footer
   
   Para cada sección define:
   - Objetivo específico
   - Contenido principal
   - CTAs secundarios
   - Elementos visuales sugeridos
   
   Variables: DESCRIPCIÓN_PRODUCTO, BUYER_PERSONA_PRINCIPAL
   Salida esperada: Wireframe detallado en texto con rationale
   ```

**Git Commands**:
```bash
git checkout -b design/information-architecture
git add wireframes/
git commit -m "design: wireframes y arquitectura de información"
```

##### Paso 1.3: Copywriting Estratégico (10 horas)
**Objetivo**: Redactar todo el copy persuasivo de la landing

**Prompts**:
1. **Hero Section Copy** (ChatGPT)
   ```
   Redacta el copy para el hero section de [DESCRIPCIÓN_PRODUCTO]:
   
   Elementos requeridos:
   1. Headline principal (max 8 palabras, beneficio claro)
   2. Subheadline explicativo (1-2 líneas, problema específico)
   3. CTA primario (texto del botón)
   4. CTA secundario (ver demo/más info)
   5. Social proof short (ej: "Usado por 500+ empresas")
   
   Aplica frameworks:
   - AIDA para estructura
   - PAS para subheadline
   - Urgencia sin presión
   
   Buyer persona objetivo: [BUYER_PERSONA]
   Pain point principal: [PAIN_POINT_PRINCIPAL]
   
   Variables: DESCRIPCIÓN_PRODUCTO, BUYER_PERSONA, PAIN_POINT_PRINCIPAL
   Salida esperada: 3 variaciones del hero section para A/B testing
   ```

**Git Commands**:
```bash
git checkout -b content/copywriting
git add copy/
git commit -m "content: copy completo de landing page"
git push origin content/copywriting
```

#### 🎨 FASE 2: Desarrollo Frontend (Semana 2)
**Duración**: 30 horas | **Color**: #10b981

##### Paso 2.1: Setup y Configuración (4 horas)

**Prompts**:
1. **Configuración Next.js Optimizada** (Cursor)
   ```
   Configura un proyecto Next.js 14 optimizado para una landing page SaaS con:
   
   Requisitos técnicos:
   1. TypeScript estricto
   2. shadcn/ui con tema personalizado
   3. Tailwind CSS con configuración custom
   4. Framer Motion para animaciones
   5. next-seo para SEO
   6. Estructura de carpetas escalable
   
   Configuraciones específicas:
   - next.config.js para performance
   - tailwind.config.js con colores de marca
   - tsconfig.json con paths absolutos
   - ESLint y Prettier configurados
   
   Variables: NOMBRE_PROYECTO, COLORES_MARCA
   Salida esperada: Proyecto base configurado y listo para desarrollo
   ```

**Git Commands**:
```bash
git checkout -b feature/project-setup
npx create-next-app@latest . --typescript --tailwind --app
git add .
git commit -m "feat: configuración inicial proyecto next.js"
```

##### Paso 2.2: Componentes Base (8 horas)

**Prompts**:
1. **Design System Landing** (v0.dev)
   ```
   Crea un design system para landing page SaaS con shadcn/ui:
   
   Componentes necesarios:
   1. Button (primary, secondary, outline, ghost)
   2. Card con variants (feature, testimonial, pricing)
   3. Badge para features y pricing
   4. Input para newsletter/waitlist
   5. Avatar para testimonials
   6. Container con max-width responsive
   
   Especificaciones:
   - Colores: [PALETA_COLORES]
   - Tipografía: Inter + font display opcional
   - Border radius: moderado (8px base)
   - Shadows: sutiles pero presentes
   - Dark mode support
   
   Variables: PALETA_COLORES
   Salida esperada: Componentes shadcn configurados y themed
   ```

**Git Commands**:
```bash
git checkout -b components/design-system
git add components/ui/
git commit -m "components: design system base con shadcn"
```

##### Paso 2.3: Secciones de Landing (18 horas)

**Prompts** (dividido por sección):

1. **Hero Section Responsive** (Claude Code)
   ```
   Desarrolla el hero section para la landing con este copy:
   [HERO_COPY_DEFINIDO]
   
   Requisitos técnicos:
   1. Responsive design (móvil first)
   2. Animaciones de entrada con Framer Motion
   3. CTA buttons con hover states
   4. Background gradient sutil
   5. Typography hierarchy clara
   6. Social proof integrado
   
   Estructura del componente:
   - Container responsive
   - Grid layout para desktop
   - Stack layout para móvil
   - Botones con analytics tracking
   
   Variables: HERO_COPY_DEFINIDO
   Salida esperada: Componente Hero funcional y optimizado
   ```

2. **Features Section Interactive** (Cursor)
   ```
   Crea la sección de features con las características principales:
   [LISTA_FEATURES]
   
   Design pattern: Features con icons y hover effects
   1. Grid responsive (1 col móvil, 2 tablet, 3 desktop)
   2. Icons de Lucide React
   3. Animaciones stagger al scroll
   4. Cards con subtle hover lift
   5. Short descriptions compelling
   
   Variables: LISTA_FEATURES
   Salida esperada: Features section interactiva
   ```

**Git Commands**:
```bash
git checkout -b sections/landing-components
git add app/components/sections/
git commit -m "sections: hero, features, pricing y testimonials"
git push origin sections/landing-components
```

#### 🚀 FASE 3: Optimización y Deploy (Semana 3)
**Duración**: 10 horas | **Color**: #f59e0b

##### Paso 3.1: SEO y Performance (4 horas)

**Prompts**:
1. **SEO Completo** (ChatGPT)
   ```
   Optimiza el SEO para la landing page de [DESCRIPCIÓN_PRODUCTO]:
   
   Elementos requeridos:
   1. Meta tags optimizados (title, description, og)
   2. Structured data schema.org
   3. Keywords strategy para copy
   4. URL structure y slugs
   5. Alt texts para imágenes
   6. Sitemap y robots.txt
   
   Target keywords principales: [KEYWORDS_OBJETIVO]
   Competidores ranking: [COMPETIDORES_SEO]
   
   Variables: DESCRIPCIÓN_PRODUCTO, KEYWORDS_OBJETIVO, COMPETIDORES_SEO
   Salida esperada: Plan SEO completo + implementación técnica
   ```

**Git Commands**:
```bash
git checkout -b optimization/seo-performance
git add seo/
git commit -m "seo: meta tags, structured data y optimización"
```

##### Paso 3.2: Deploy y Monitoreo (6 horas)

**Prompts**:
1. **Deploy Vercel Optimizado** (GitHub Copilot CLI)
   ```
   Configura deploy automático en Vercel para la landing page:
   
   Configuración requerida:
   1. Vercel project setup
   2. Environment variables para analytics
   3. Custom domain configuration
   4. Performance monitoring
   5. Analytics setup (Google Analytics + Vercel Analytics)
   6. Error tracking con Sentry (opcional)
   
   CI/CD pipeline:
   - Deploy preview en PRs
   - Deploy production en merge a main
   - Build cache optimization
   - Lighthouse CI en PRs
   
   Salida esperada: Deploy funcional con monitoreo completo
   ```

**Git Commands**:
```bash
git checkout main
git merge sections/landing-components
git tag v1.0.0
git push origin main --tags
```

**Deliverables Finales**:
- [ ] Landing page funcional en producción
- [ ] Performance score >90 en Lighthouse
- [ ] SEO score >95
- [ ] Analytics configurado
- [ ] A/B testing setup listo

---

## 🎬 CINE: "Cortometraje de 10 Minutos"

### Información General
- **Duración**: 8 semanas (120 horas)
- **Dificultad**: Intermedio
- **Industria**: Producción Audiovisual
- **Formato**: Cortometraje narrativo 10 min

### Fases del Workflow

#### 📝 FASE 1: Desarrollo y Preproducción (Semanas 1-3)

##### Paso 1.1: Concepto y Tratamiento (8 horas)

**Prompts**:
1. **Generación de Concepto** (ChatGPT)
   ```
   Genera 5 conceptos para cortometraje de 10 minutos con estos parámetros:
   
   Restricciones de producción:
   - Presupuesto: [PRESUPUESTO]
   - Locaciones disponibles: [LOCACIONES]
   - Equipo técnico: [EQUIPO_DISPONIBLE]
   - Número de actores: máximo [NUM_ACTORES]
   
   Géneros preferidos: [GÉNEROS]
   Temáticas de interés: [TEMÁTICAS]
   
   Para cada concepto incluye:
   1. Logline (1 frase)
   2. Sinopsis (1 párrafo)
   3. Conflicto principal
   4. Arco del protagonista
   5. Twist o momento climático
   6. Recursos de producción necesarios
   
   Variables: PRESUPUESTO, LOCACIONES, EQUIPO_DISPONIBLE, NUM_ACTORES, GÉNEROS, TEMÁTICAS
   Salida esperada: 5 conceptos viables con análisis de factibilidad
   ```

**Git Commands**:
```bash
git init cortometraje-proyecto
git checkout -b development/concepto-inicial
git add concepts/
git commit -m "development: conceptos iniciales y tratamiento"
```

##### Paso 1.2: Guión Técnico (20 horas)

**Prompts**:
1. **Escaleta Detallada** (Claude)
   ```
   Desarrolla la escaleta completa para el concepto seleccionado:
   [CONCEPTO_ELEGIDO]
   
   Estructura narrativa:
   1. Planteamiento (min 0-2): Setup del mundo y personaje
   2. Conflicto incitante (min 2): Evento que desencadena la historia
   3. Desarrollo (min 2-7): Progresión del conflicto
   4. Clímax (min 7-9): Momento de máxima tensión
   5. Resolución (min 9-10): Desenlace y nuevo equilibrio
   
   Para cada secuencia define:
   - Objetivo dramático
   - Conflicto específico
   - Estado emocional del protagonista
   - Elementos visuales clave
   - Transición a la siguiente secuencia
   
   Variables: CONCEPTO_ELEGIDO
   Salida esperada: Escaleta con timing preciso y estructura sólida
   ```

2. **Guión en Formato Profesional** (WriterDuet AI)
   ```
   Convierte la escaleta en guión cinematográfico formato estándar:
   
   Especificaciones técnicas:
   - Formato Fountain o Final Draft
   - 1 página = aproximadamente 1 minuto
   - Target: 10-12 páginas máximo
   - Diálogos concisos y naturales
   - Descripciones visuales precisas
   
   Elementos a incluir:
   1. Encabezados de escena (INT./EXT. LUGAR - TIEMPO)
   2. Descripciones de acción (presente, activo)
   3. Nombres de personajes (MAYÚSCULAS primera vez)
   4. Diálogos con subtexto
   5. Paréntesis solo cuando sea esencial
   6. Transiciones mínimas
   
   Salida esperada: Guión listo para pre-producción
   ```

**Git Commands**:
```bash
git checkout -b script/guion-completo
git add script/
git commit -m "script: guión técnico completado v1.0"
```

#### 🎥 FASE 2: Producción Visual (Semanas 4-6)

##### Paso 2.1: Storyboard y Planificación Visual (12 horas)

**Prompts**:
1. **Storyboard Detallado** (Midjourney + manual)
   ```
   Crea storyboard completo para el cortometraje basado en el guión:
   
   Especificaciones por viñeta:
   1. Encuadre específico (close-up, medium shot, wide shot, etc.)
   2. Movimiento de cámara (static, pan, tilt, dolly, etc.)
   3. Composición visual (rule of thirds, leading lines, etc.)
   4. Iluminación básica (key light direction, mood)
   5. Elementos importantes en frame
   
   Escenas prioritarias para storyboard:
   - Secuencias de acción
   - Momentos emocionales clave
   - Transiciones importantes
   - Shots complejos técnicamente
   
   Variables: GUIÓN_COMPLETO
   Salida esperada: Storyboard visual con notas técnicas
   ```

**Git Commands**:
```bash
git checkout -b preproduction/storyboard
git add storyboard/
git commit -m "preproduction: storyboard completo con notas técnicas"
```

##### Paso 2.2: Shot List y Plan de Rodaje (10 horas)

**Prompts**:
1. **Shot List Técnica** (ChatGPT)
   ```
   Crea shot list técnica optimizada para el rodaje:
   
   Para cada toma incluye:
   1. Número de escena y toma
   2. Descripción del shot
   3. Tipo de plano y movimiento
   4. Lente recomendado
   5. Configuración de cámara estimada
   6. Tiempo estimado de setup
   7. Notas especiales (FX, props, etc.)
   
   Optimización del plan:
   - Agrupar por locación
   - Agrupar por configuración de iluminación
   - Considerar continuidad de vestuario/maquillaje
   - Buffer time para imprevistos
   
   Variables: STORYBOARD_COMPLETO, LOCACIONES_CONFIRMADAS
   Salida esperada: Shot list optimizada para eficiencia de rodaje
   ```

**Git Commands**:
```bash
git checkout -b production/shot-list
git add production-plan/
git commit -m "production: shot list y plan de rodaje optimizado"
```

#### ✂️ FASE 3: Postproducción (Semanas 7-8)

##### Paso 3.1: Edición Narrativa (20 horas)

**Prompts**:
1. **Estrategia de Edición** (Claude)
   ```
   Define la estrategia de postproducción para el cortometraje:
   
   Elementos narrativos:
   1. Ritmo y pacing por secuencia
   2. Transiciones entre escenas
   3. Uso de música y sound design
   4. Color grading mood por secuencia
   5. Efectos especiales necesarios
   
   Workflow técnico:
   1. Organización de material en [SOFTWARE_EDICIÓN]
   2. Proxy workflow para performance
   3. Bins y naming convention
   4. Secuencia de timeline principal
   5. Timeline de audio separado
   
   Variables: SOFTWARE_EDICIÓN, MATERIAL_RODADO
   Salida esperada: Plan completo de postproducción
   ```

**Git Commands**:
```bash
git checkout -b post/editing-strategy
git add post-production/
git commit -m "post: estrategia de edición y workflow técnico"
```

**Deliverables Finales**:
- [ ] Cortometraje finalizado (10 min)
- [ ] Color grading profesional
- [ ] Audio mix balanceado
- [ ] Subtítulos si es necesario
- [ ] Versiones para diferentes plataformas
- [ ] EPK (Electronic Press Kit) básico

---

## 📈 MARKETING: "Lanzamiento de Producto Digital"

### Información General
- **Duración**: 6 semanas (90 horas)
- **Dificultad**: Avanzado
- **Industria**: Marketing Digital
- **Objetivo**: Go-to-Market Strategy completa

### Fases del Workflow

#### 🎯 FASE 1: Research y Estrategia (Semana 1)

##### Paso 1.1: Market Research Profundo (12 horas)

**Prompts**:
1. **Análisis de Mercado TAM/SAM/SOM** (ChatGPT + Perplexity)
   ```
   Realiza análisis de mercado completo para [PRODUCTO_DIGITAL]:
   
   Métricas a calcular:
   1. TAM (Total Addressable Market)
   2. SAM (Serviceable Addressable Market)  
   3. SOM (Serviceable Obtainable Market)
   
   Research específico:
   1. Tamaño del mercado global y local
   2. Tasa de crecimiento anual (CAGR)
   3. Segmentos principales del mercado
   4. Barreras de entrada
   5. Regulaciones relevantes
   6. Trends tecnológicos impactando el mercado
   
   Fuentes requeridas:
   - Reports de investigación (Gartner, Forrester, etc.)
   - Datos gubernamentales
   - Studies académicos
   - Competitor financial reports
   
   Variables: PRODUCTO_DIGITAL, MERCADO_GEOGRÁFICO
   Salida esperada: Market sizing con datos cuantitativos respaldados
   ```

**Git Commands**:
```bash
git init marketing-campaign-[PRODUCTO]
git checkout -b research/market-analysis
git add market-research/
git commit -m "research: análisis TAM/SAM/SOM y market sizing"
```

##### Paso 1.2: Competitive Intelligence (10 horas)

**Prompts**:
1. **Análisis Competitivo 360°** (Claude)
   ```
   Realiza competitive intelligence para estos competidores directos:
   [LISTA_COMPETIDORES_DIRECTOS]
   
   Para cada competidor analiza:
   
   Producto y Pricing:
   1. Feature comparison matrix
   2. Pricing strategy y tiers
   3. Value propositions
   4. Strengths y weaknesses
   
   Marketing y Sales:
   1. Canales de adquisición principales
   2. Messaging y positioning
   3. Content marketing strategy
   4. Partnership strategy
   5. Sales process (self-serve vs sales-led)
   
   Performance estimada:
   1. Traffic metrics (SimilarWeb data)
   2. Social media presence
   3. Review scores y sentiment
   4. Funding y growth trajectory
   
   Variables: LISTA_COMPETIDORES_DIRECTOS, PRODUCTO_DIGITAL
   Salida esperada: Competitive analysis con opportunities gaps
   ```

**Git Commands**:
```bash
git checkout -b research/competitive-intelligence
git add competitive-analysis/
git commit -m "research: competitive intelligence completo"
```

#### 📋 FASE 2: Strategy y Positioning (Semana 2)

##### Paso 2.1: Buyer Personas y ICP (8 horas)

**Prompts**:
1. **ICP (Ideal Customer Profile) B2B** (ChatGPT)
   ```
   Define el ICP para [PRODUCTO_DIGITAL] basado en el market research:
   
   Firmographics:
   1. Industry sectors prioritarios
   2. Company size (employees, revenue)
   3. Geographic markets
   4. Technology stack requirements
   5. Organizational structure
   
   Behavioral patterns:
   1. Buying process y decision makers
   2. Budget allocation patterns
   3. Implementation timelines
   4. Success metrics importantes
   5. Pain points específicos
   
   Technographics:
   1. Current tools using
   2. Integration requirements
   3. Security y compliance needs
   4. Scalability requirements
   
   Variables: PRODUCTO_DIGITAL, MARKET_RESEARCH_DATA
   Salida esperada: ICP detallado con targeting criteria
   ```

**Git Commands**:
```bash
git checkout -b strategy/buyer-personas
git add personas/
git commit -m "strategy: ICP y buyer personas definidos"
```

##### Paso 2.2: Go-to-Market Strategy (12 horas)

**Prompts**:
1. **GTM Strategy Framework** (Claude)
   ```
   Desarrolla go-to-market strategy usando framework de [METODOLOGÍA_GTM]:
   
   Componentes del GTM:
   
   1. Market Entry Strategy:
      - Beachhead market selection
      - Expansion sequence
      - Geographic rollout plan
   
   2. Channel Strategy:
      - Primary channels (direct, partner, etc.)
      - Channel partner requirements
      - Sales model (PLG, sales-led, hybrid)
   
   3. Pricing Strategy:
      - Pricing model justification
      - Competitive pricing analysis
      - Value-based pricing tiers
      - Freemium vs paid consideration
   
   4. Launch Timeline:
      - Pre-launch (buzz building)
      - Launch (coordinated campaign)
      - Post-launch (growth optimization)
   
   Variables: METODOLOGÍA_GTM, ICP_DEFINIDO, COMPETITIVE_ANALYSIS
   Salida esperada: GTM strategy documento ejecutivo
   ```

**Git Commands**:
```bash
git checkout -b strategy/go-to-market
git add gtm-strategy/
git commit -m "strategy: go-to-market framework completo"
git push origin strategy/go-to-market
```

#### 📝 FASE 3: Content y Creative (Semanas 3-4)

##### Paso 3.1: Content Strategy y Calendar (16 horas)

**Prompts**:
1. **Content Pillar Strategy** (Jasper AI)
   ```
   Crea content strategy para el launch de [PRODUCTO_DIGITAL]:
   
   Content Pillars (4 principales):
   1. Educational content (thought leadership)
   2. Product-focused content (features, benefits)
   3. Customer success content (social proof)
   4. Industry insights content (trends, analysis)
   
   Para cada pilar define:
   - Objetivos específicos
   - Audience targeting
   - Content formats prioritarios
   - KPIs de performance
   - Distribution channels
   
   Content Calendar (8 semanas pre-launch + 4 semanas post):
   - 3 posts por semana por channel
   - Mix de formatos (blog, video, infographic, etc.)
   - Cadence optimizada por platform
   - Seasonal y event-based content
   
   Variables: PRODUCTO_DIGITAL, ICP_DEFINIDO, LAUNCH_DATE
   Salida esperada: Content strategy + 12-week calendar
   ```

**Git Commands**:
```bash
git checkout -b content/strategy-calendar
git add content-strategy/
git commit -m "content: strategy framework y calendar 12 semanas"
```

##### Paso 3.2: Creative Assets Development (20 horas)

**Prompts**:
1. **Landing Page Copy Framework** (ChatGPT)
   ```
   Desarrolla copy framework para landing page de launch:
   
   Page Structure:
   1. Hero Section:
      - Headline (value prop en <10 palabras)
      - Subheadline (beneficio específico)
      - CTA primary
   
   2. Problem/Solution Section:
      - Problem statement (pain point principal)
      - Solution positioning
      - Differentiation vs competitors
   
   3. Features Section:
      - 3 features principales con benefits
      - Technical specs relevantes
      - Use cases específicos
   
   4. Social Proof Section:
      - Customer testimonials
      - Logos y case studies
      - Usage statistics
   
   5. Pricing Section:
      - Tiers justification
      - Feature comparison
      - Value demonstration
   
   Copy requirements:
   - Conversion-optimized language
   - SEO keywords integration
   - Mobile-first readability
   - A/B testing variants
   
   Variables: PRODUCTO_DIGITAL, VALUE_PROPOSITION, TARGET_AUDIENCE
   Salida esperada: Complete landing page copy + variants
   ```

**Git Commands**:
```bash
git checkout -b creative/landing-page-copy
git add creative-assets/
git commit -m "creative: landing page copy framework completo"
```

#### 🚀 FASE 4: Campaign Execution (Semanas 5-6)

##### Paso 4.1: Multi-Channel Campaign Setup (15 horas)

**Prompts**:
1. **Paid Advertising Strategy** (ChatGPT)
   ```
   Diseña paid advertising strategy para el product launch:
   
   Channel Mix y Budget Allocation:
   1. Google Ads (Search + Display): [%_BUDGET]
      - Keyword research y targeting
      - Ad copy variants
      - Landing page matching
   
   2. LinkedIn Ads (B2B targeting): [%_BUDGET]
      - Audience targeting criteria
      - Sponsored content strategy
      - InMail campaigns
   
   3. Facebook/Instagram (broader reach): [%_BUDGET]
      - Lookalike audiences
      - Creative testing plan
      - Retargeting sequences
   
   Campaign Structure:
   - Campaign objectives por channel
   - Audience segmentation
   - Creative rotation schedule
   - Budget optimization rules
   - Attribution modeling
   
   Variables: TOTAL_AD_BUDGET, ICP_DEFINIDO, CREATIVE_ASSETS
   Salida esperada: Multi-channel paid strategy con implementation plan
   ```

**Git Commands**:
```bash
git checkout -b campaigns/paid-advertising
git add campaign-setup/
git commit -m "campaigns: multi-channel paid strategy configurado"
```

##### Paso 4.2: Launch Sequence Automation (12 horas)

**Prompts**:
1. **Email Marketing Automation** (Mailchimp AI)
   ```
   Crea email automation sequences para product launch:
   
   Pre-Launch Sequence (4 semanas antes):
   1. Announcement email (launch date reveal)
   2. Feature preview series (3 emails)
   3. Early access invitation
   4. Launch countdown (final week)
   
   Launch Week Sequence:
   1. Launch announcement
   2. Feature spotlight
   3. Customer success story
   4. Limited-time offer
   
   Post-Launch Nurture:
   1. Welcome series para nuevos users
   2. Onboarding educational content
   3. Feature adoption campaigns
   4. Renewal/upgrade sequences
   
   Email specs:
   - Subject line testing variants
   - Personalization variables
   - Mobile optimization
   - CTA optimization
   - Segmentation rules
   
   Variables: PRODUCTO_DIGITAL, LAUNCH_DATE, EMAIL_LIST_SIZE
   Salida esperada: Complete email automation flows con copy
   ```

**Git Commands**:
```bash
git checkout -b automation/email-sequences
git add email-marketing/
git commit -m "automation: email sequences completas configuradas"
git push origin automation/email-sequences
```

**Deliverables Finales**:
- [ ] Go-to-market strategy ejecutada
- [ ] Multi-channel campaign running
- [ ] Landing page optimizada live
- [ ] Email automation sequences activas
- [ ] Analytics y tracking configurado
- [ ] Performance dashboard setup
- [ ] Post-launch optimization plan

---

Esta estructura de workflows transforma Context Vault en una plataforma de **metodologías ejecutables** que van mucho más allá de prompts simples.