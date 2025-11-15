"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal, CounterAnimation, ButtonPulse, CryptoProgressBar } from "@/components/animations";
import { 
  CheckCircle,
  Clock, 
  CreditCard,
  Mail,
  Gift,
  Calendar,
  Settings,
  Lock,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export function WhitelistForm() {
  return (
    // IMPORTANT: Ensure this div is the main container and has the ID
    <div id="whitelist-form" className="whitelist-form-container">
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
                  <ButtonPulse>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="whitespace-nowrap h-12 px-8 w-full sm:w-auto transition-all duration-300
                        bg-gradient-to-r from-primary to-primary/80
                        hover:from-primary/90 hover:to-primary/70
                        shadow-lg hover:shadow-xl hover:shadow-primary/50"
                    >
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        Liity odotuslistalle
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </ButtonPulse>
                </form>
                <motion.p
                  className="text-center text-gray-400 text-sm mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block"
                  >
                    <CheckCircle className="h-5 w-5 inline mr-2" />
                  </motion.span> Yli 350 yritystä jo odotuslistalla
                </motion.p>
                {/* Enhanced Crypto Progress Bar */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <CryptoProgressBar
                    current={352}
                    total={500}
                    label={
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        <CounterAnimation 
                          end={352} 
                          suffix=" / 500 yritystä"
                          duration={2.5}
                          easing="easeInOutCubic"
                          className="inline font-medium"
                        />
                      </span>
                    }
                    showPercentage={true}
                    duration={2.5}
                  />
                  <p className="text-center text-gray-400 text-xs mt-2">
                    <CounterAnimation 
                      end={15} 
                      suffix=" uutta viime viikolla"
                      duration={2}
                      className="inline"
                    />
                  </p>
                </motion.div>
                {/* Enhanced Trust Badges */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  {[
                    { icon: Lock, text: "Tietosuoja", color: "text-green-400", delay: 0 },
                    { icon: CreditCard, text: "Ei korttia", color: "text-blue-400", delay: 0.1 },
                    { icon: Mail, text: "Ei roskapostia", color: "text-purple-400", delay: 0.2 },
                  ].map((badge, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        bg-slate-700/50 border border-slate-600/50
                        hover:border-primary/50 hover:bg-slate-700
                        transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + badge.delay, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      <badge.icon className={`h-4 w-4 ${badge.color}`} />
                      <span className="text-gray-300 text-xs font-medium">
                        {badge.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="flex flex-col items-center justify-center gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <motion.span
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block"
                    >
                      <Gift className="h-5 w-5 inline mr-2" />
                    </motion.span> Vain 1.5% palvelumaksu (lopullinen)
                  </motion.span>
                  <motion.span
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block"
                    >
                      <Calendar className="h-5 w-5 inline mr-2" />
                    </motion.span> Ensimmäisten joukossa
                  </motion.span>
                  <motion.span
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block"
                    >
                      <Settings className="h-5 w-5 inline mr-2" />
                    </motion.span> Vaikuta kehitykseen
                  </motion.span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      </section>
    </div>
  );
}

