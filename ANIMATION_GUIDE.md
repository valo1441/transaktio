# Transaktio Animation System Guide

## 📦 Installed Libraries

```bash
npm install framer-motion react-intersection-observer react-countup @react-spring/web
```

## 🎨 Available Animation Components

### 1. Page-Wide Animations

#### `PageTransition`
Smooth page load/entrance animation.

```tsx
import { PageTransition } from "@/components/animations";

<PageTransition>
  <YourContent />
</PageTransition>
```

#### `ScrollReveal`
Scroll-triggered reveal animations.

```tsx
import { ScrollReveal } from "@/components/animations";

<ScrollReveal direction="up" delay={0.2}>
  <Card>Content that reveals on scroll</Card>
</ScrollReveal>
```

**Props:**
- `direction`: "up" | "down" | "left" | "right"
- `delay`: number (seconds)
- `className`: string

### 2. Hero Section Animations

#### `TypingEffect`
Typewriter effect for headlines.

```tsx
import { TypingEffect } from "@/components/animations";

<h1>
  <TypingEffect text="Transaktio" speed={50} />
</h1>
```

**Props:**
- `text`: string
- `speed`: number (ms per character)
- `className`: string

#### `FloatingShapes`
Floating background shapes.

```tsx
import { FloatingShapes } from "@/components/animations";

<FloatingShapes />
```

#### `ButtonPulse`
Pulsing glow effect for CTA buttons.

```tsx
import { ButtonPulse } from "@/components/animations";

<ButtonPulse>
  <Button>Aloita nyt</Button>
</ButtonPulse>
```

### 3. Content Section Animations

#### `StaggerChildren`
Staggered reveal for multiple items.

```tsx
import { StaggerChildren } from "@/components/animations";

<StaggerChildren staggerDelay={0.1}>
  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
    Item 1
  </motion.div>
  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
    Item 2
  </motion.div>
</StaggerChildren>
```

#### `CounterAnimation`
Animated number counter.

```tsx
import { CounterAnimation } from "@/components/animations";

<CounterAnimation 
  end={400} 
  prefix="Tavoita " 
  suffix="+ miljoonaa käyttäjää"
  duration={2}
/>
```

**Props:**
- `end`: number
- `duration`: number (seconds)
- `prefix`: string
- `suffix`: string

### 4. Interactive Animations

#### `CursorTrail`
Cursor following particle trail.

```tsx
import { CursorTrail } from "@/components/animations";

<CursorTrail />
```

### 5. Background Animations

#### `ParticleSystem`
Interactive particle network.

```tsx
import { ParticleSystem } from "@/components/animations";

<ParticleSystem />
```

#### `GradientMorph`
Morphing gradient background.

```tsx
import { GradientMorph } from "@/components/animations";

<GradientMorph />
```

## 🎯 Complete Implementation Example

```tsx
"use client";

import { 
  PageTransition,
  ScrollReveal,
  StaggerChildren,
  TypingEffect,
  FloatingShapes,
  ButtonPulse,
  CounterAnimation,
  CursorTrail,
  ParticleSystem,
  GradientMorph
} from "@/components/animations";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AnimatedPage() {
  return (
    <PageTransition>
      {/* Background Animations */}
      <GradientMorph />
      <FloatingShapes />
      <ParticleSystem />
      <CursorTrail />

      {/* Hero Section */}
      <section>
        <h1>
          <TypingEffect text="Transaktio" />
        </h1>
        <ButtonPulse>
          <Button>Aloita nyt</Button>
        </ButtonPulse>
      </section>

      {/* Features Section */}
      <StaggerChildren>
        <ScrollReveal direction="up" delay={0}>
          <Card>Feature 1</Card>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Card>Feature 2</Card>
        </ScrollReveal>
      </StaggerChildren>

      {/* Stats Section */}
      <CounterAnimation end={400} prefix="Tavoita " suffix="+ käyttäjää" />
    </PageTransition>
  );
}
```

## 🎨 Animation Variants

### Card Hover Animation
```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <Card>Content</Card>
</motion.div>
```

### Icon Animation
```tsx
<motion.div
  whileHover={{ scale: 1.15, rotate: 5 }}
  transition={{ type: "spring", stiffness: 400, damping: 15 }}
>
  <Icon />
</motion.div>
```

### Button States
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## ⚡ Performance Tips

1. Use `viewport={{ once: true }}` for scroll animations
2. Limit particle count (50-100 max)
3. Use `will-change` CSS property sparingly
4. Debounce mouse events for cursor trails
5. Use `transform` and `opacity` for animations (GPU accelerated)

## 🎨 Color Integration

All animations use CSS variables:
- Primary color: `hsl(var(--primary))`
- Background: `bg-slate-900`
- Cards: `bg-slate-800`
- Works seamlessly with dark theme

## 📱 Mobile Considerations

- Cursor trails disabled on touch devices
- Reduced particle count on mobile
- Simplified animations for better performance
- Touch-friendly hover states

