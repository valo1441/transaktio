"use client";

/**
 * ENHANCED TRANSACTIO PAGE WITH COMPREHENSIVE ANIMATIONS
 * 
 * This is an example file showing how to integrate all animation components.
 * Copy patterns from this file to enhance your main page.tsx
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  GradientMorph,
} from "@/components/animations";
import { MouseGradient } from "@/components/mouse-gradient";
import { 
  Zap, 
  Globe, 
  BarChart3, 
  Lock,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function EnhancedHome() {
  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-slate-900 text-white relative">
        {/* Background Animations - Layer 1 */}
        <GradientMorph />
        <MouseGradient />
        <FloatingShapes />
        <ParticleSystem />
        <CursorTrail />

        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center overflow-hidden z-10">
          <motion.div 
            className="relative mx-auto max-w-5xl space-y-10 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <TypingEffect text="Transaktio" speed={100} />
              </h1>
              <motion.p 
                className="text-xl font-medium text-gray-300 sm:text-2xl md:text-3xl lg:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                Maksupalvelu Tulevaisuudesta
              </motion.p>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-400 sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Vastaanota kryptomaksuja — Saat euroja pankkiisi
            </motion.p>
            
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <ButtonPulse>
                <Button 
                  size="lg" 
                  className="h-14 px-10 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Aloita nyt
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ButtonPulse>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="relative px-4 py-32 md:py-40 z-10">
          <StaggerChildren staggerDelay={0.15}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <motion.div variants={cardVariants}>
                <ScrollReveal direction="up" delay={0}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                      <CardHeader>
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Zap className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                          Maksut 1-2 päivässä
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">
                          Perinteisesti 3-7 päivää
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={cardVariants}>
                <ScrollReveal direction="up" delay={0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                      <CardHeader>
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Globe className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                          Tavoita{" "}
                          <CounterAnimation 
                            end={400} 
                            suffix="+ miljoonaa käyttäjää"
                            duration={2}
                            className="inline"
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">
                          Laaja kryptovaluuttayhteisö
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={cardVariants}>
                <ScrollReveal direction="up" delay={0.2}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                      <CardHeader>
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <BarChart3 className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                          Automaattinen Procountor-integraatio
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">
                          Saumaton kirjanpito
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              </motion.div>

              {/* Feature 4 */}
              <motion.div variants={cardVariants}>
                <ScrollReveal direction="up" delay={0.3}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                      <CardHeader>
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Lock className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                          GDPR-ystävällinen
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">
                          Vähemmän henkilötietoja
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              </motion.div>
            </div>
          </StaggerChildren>
        </section>

        {/* Whitelist Section */}
        <section className="relative px-4 py-32 md:py-40 z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto max-w-3xl"
            >
              <Card className="border-2 border-primary/30 shadow-2xl bg-slate-800 transition-all duration-500">
                <CardHeader className="text-center space-y-3 pb-6">
                  <CardTitle className="text-3xl md:text-4xl text-white">
                    Liity odotuslistalle
                  </CardTitle>
                  <p className="text-gray-400 text-base md:text-lg">
                    Ota yhteyttä, kun palvelumme käynnistyy
                  </p>
                </CardHeader>
                <CardContent className="pb-8">
                  <form className="flex flex-col gap-4 sm:flex-row">
                    <motion.div
                      className="flex-1"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Input
                        type="email"
                        placeholder="Sähköpostiosoite"
                        className="h-12 text-base bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                        required
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button type="submit" size="lg" className="whitespace-nowrap h-12 px-8 w-full sm:w-auto transition-transform duration-300">
                        Liity odotuslistalle
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
}

