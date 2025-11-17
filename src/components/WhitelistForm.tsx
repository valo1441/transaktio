"use client";

import { useState } from "react";
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
  ArrowRight,
  AlertCircle,
  Copy
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  companyName: string;
  message: string;
}

export function WhitelistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const formatEmailBody = (data: FormData): string => {
    return `Whitelist Application Submission

Name: ${data.name || "Not provided"}
Email: ${data.email || "Not provided"}
Company Name: ${data.companyName || "Not provided"}

Message:
${data.message || "No additional message provided"}

---
Submitted via Transaktio Whitelist Form`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowFallback(false);

    // Basic validation
    if (!formData.email) {
      setError("Sähköpostiosoite on pakollinen");
      return;
    }

    // Format email content
    const subject = encodeURIComponent("Whitelist Application");
    const body = encodeURIComponent(formatEmailBody(formData));
    const recipient = "whitelist@transakt.io";
    
    // Create mailto link
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Try to open email client
    try {
      window.location.href = mailtoLink;
      
      // Show success message after a short delay
      // Note: We can't reliably detect if email client opened, so we assume success
      setTimeout(() => {
        setIsSubmitted(true);
        // Reset form after showing success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            companyName: "",
            message: "",
          });
          setIsSubmitted(false);
        }, 5000);
      }, 500);
    } catch (err) {
      setError("Sähköpostiohjelman avaaminen epäonnistui. Kopioi tiedot alla olevasta tekstistä.");
      setShowFallback(true);
    }
  };

  const copyToClipboard = async () => {
    const emailContent = `To: whitelist@transakt.io\nSubject: Whitelist Application\n\n${formatEmailBody(formData)}`;
    
    try {
      await navigator.clipboard.writeText(emailContent);
      setShowFallback(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          companyName: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Kopiointi epäonnistui. Kopioi tiedot manuaalisesti.");
    }
  };

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
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block mb-4"
                      >
                        <CheckCircle className="h-16 w-16 text-green-400" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        Kiitos hakemuksestasi!
                      </h3>
                      <p className="text-gray-400">
                        Olemme vastaanottaneet hakemuksesi. Olemme yhteydessä pian.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="md:col-span-2"
                        >
                          <Input
                            type="text"
                            placeholder="Nimi *"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="h-12 text-base bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                            required
                          />
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                        >
                          <Input
                            type="email"
                            placeholder="Sähköpostiosoite *"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="h-12 text-base bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                            required
                          />
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                        >
                          <Input
                            type="text"
                            placeholder="Yrityksen nimi (valinnainen)"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            className="h-12 text-base bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                          />
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="md:col-span-2"
                        >
                          <textarea
                            placeholder="Lisätietoja (valinnainen)"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            rows={4}
                            className="w-full h-24 px-3 py-2 text-base bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400
                              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                              transition-all duration-300 resize-none"
                          />
                        </motion.div>
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <span>{error}</span>
                        </motion.div>
                      )}

                      {showFallback && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-slate-700/50 border border-slate-600 rounded-md space-y-3"
                        >
                          <p className="text-sm text-gray-300">
                            Sähköpostiohjelma ei avautunut. Kopioi alla olevat tiedot ja lähetä ne manuaalisesti osoitteeseen{" "}
                            <span className="text-primary font-mono">whitelist@transakt.io</span>
                          </p>
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              onClick={copyToClipboard}
                              variant="outline"
                              className="flex-1"
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Kopioi tiedot
                            </Button>
                            <Button
                              type="button"
                              onClick={() => setShowFallback(false)}
                              variant="ghost"
                            >
                              Sulje
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      <ButtonPulse>
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full h-12 px-8 transition-all duration-300
                            bg-gradient-to-r from-primary to-primary/80
                            hover:from-primary/90 hover:to-primary/70
                            shadow-lg hover:shadow-xl hover:shadow-primary/50"
                        >
                          <motion.span
                            className="flex items-center gap-2"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            Lähetä hakemus
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </Button>
                      </ButtonPulse>
                    </motion.form>
                  )}
                </AnimatePresence>
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

