"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MouseGradient } from "@/components/mouse-gradient";
import {
  PageTransition,
  ScrollReveal,
  StaggerChildren,
  FloatingShapes,
  CursorTrail,
  ParticleSystem,
  GradientMorph,
  CounterAnimation,
  CryptoNetworkBackground,
} from "@/components/animations";
import { 
  Zap, 
  Globe, 
  BarChart3, 
  Lock
} from "lucide-react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { WhitelistForm } from "@/components/WhitelistForm";

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

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-slate-900 text-white relative">
        {/* Background Animations - Layer 1 */}
        <GradientMorph />
        <CryptoNetworkBackground />
        <MouseGradient />
        <FloatingShapes />
        <CursorTrail />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Whitelist Section */}
        <WhitelistForm />

        {/* Features Section */}
        <section className="relative px-4 py-32 md:py-40 z-10">
          <StaggerChildren staggerDelay={0.15}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              {/* Feature 1 */}
              <motion.div variants={cardVariants}>
                <ScrollReveal direction="up" delay={0}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col">
                      <CardHeader className="flex-shrink-0">
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Zap className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300 min-h-[3rem] flex items-center">
                          Maksut 1-2 päivässä
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end">
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
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col overflow-hidden">
                      <CardHeader className="flex-shrink-0 min-w-0">
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Globe className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-lg sm:text-xl text-white group-hover:text-primary transition-colors duration-300 min-h-[3rem] leading-tight break-words">
                          <span className="block sm:inline">Tavoita </span>
                          <span className="inline break-words">
                            <CounterAnimation 
                              start={278000000}
                              end={400000000}
                              duration={3.5}
                              easing="easeOutExpo"
                              className="inline"
                            />
                            <span className="inline whitespace-pre"> + miljoonaa käyttäjää</span>
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end">
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
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col">
                      <CardHeader className="flex-shrink-0">
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <BarChart3 className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300 min-h-[3rem] flex items-center">
                          Automaattinen Procountor-integraatio
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end">
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
                    <Card className="group relative bg-slate-800 border-slate-700 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col">
                      <CardHeader className="flex-shrink-0">
                        <motion.div 
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Lock className="h-7 w-7" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300 min-h-[3rem] flex items-center">
                          GDPR-ystävällinen
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end">
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
      </div>
    </PageTransition>
  );
}
