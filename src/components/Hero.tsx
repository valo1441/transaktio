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
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:py-24 md:py-32 text-center overflow-hidden z-10">
      <motion.div 
        className="relative mx-auto max-w-5xl space-y-6 sm:space-y-8 md:space-y-10 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="space-y-4 sm:space-y-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight text-white">
            <TypingEffect text="Transaktio" speed={100} />
          </h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Maksupalvelu Tulevaisuudesta
          </motion.p>
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 max-w-3xl mx-auto leading-tight sm:leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          Vastaanota kryptomaksuja — Saat euroja pankkiisi
        </motion.p>
        
        <motion.div 
          className="pt-6 sm:pt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <ButtonPulse>
            <Button 
              size="lg" 
              className="h-12 px-4 sm:h-14 sm:px-6 md:px-10 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-normal text-center"
              onClick={handleWhitelistClick}
            >
              <span className="block sm:inline">Liity ensimmäisten joukossa</span>
              <span className="block sm:inline"> - katso hyödyt</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </Button>
          </ButtonPulse>
        </motion.div>
      </motion.div>
    </section>
  );
}

