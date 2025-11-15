"use client";

import { Button } from "@/components/ui/button";
import { TypingEffect, ButtonPulse } from "@/components/animations";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  const handleWhitelistClick = (): void => {
    console.log('Button clicked, scrolling to whitelist-form'); // Debug logging
    // Wait 200ms to ensure ScrollReveal has completed (reduced since scroll is slower)
    setTimeout(() => {
      scrollTo('whitelist-form', 50);
    }, 200);
  };

  return (
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
              className="h-14 px-10 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={handleWhitelistClick}
            >
              Liity ensimmäisten joukossa - katso hyödyt
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ButtonPulse>
        </motion.div>
      </motion.div>
    </section>
  );
}

