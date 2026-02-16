import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Mic, BarChart3, Sparkles, Zap, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const features = [
  { icon: Brain, title: "AI-Powered Tutor", desc: "Conversational AI that adapts to your level and learning style" },
  { icon: Mic, title: "Speech Recognition", desc: "Practice speaking with real-time voice analysis and feedback" },
  { icon: BarChart3, title: "Smart Analytics", desc: "Track your progress with detailed performance insights" },
  { icon: Target, title: "Adaptive Learning", desc: "Personalized lessons that evolve with your skills" },
  { icon: Zap, title: "Instant Feedback", desc: "Get corrections and explanations in real-time" },
  { icon: Sparkles, title: "Gamification", desc: "Earn XP, maintain streaks, and unlock achievements" },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">Fluently</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/lesson">
              <Button variant="ghost" size="sm">Start Learning</Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Powered Language Learning
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Learn to speak<br />
              <span className="text-gradient-primary">fluently</span> with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              An adaptive, conversational AI tutor that listens, understands, evaluates, and teaches — 
              personalized to your pace and learning style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/lesson">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-glow px-8 h-13 text-base font-semibold hover:opacity-90 transition-opacity">
                  Start Free Lesson
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="h-13 px-8 text-base">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
          {/* Floating orbs */}
          <div className="relative mt-20 h-48">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-1/4 top-0 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute right-1/4 top-8 w-32 h-32 rounded-full bg-accent/10 blur-xl" />
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="absolute left-1/2 top-4 w-20 h-20 rounded-full bg-primary/5 blur-xl" />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={itemVariants} className="group p-6 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-12 rounded-3xl bg-gradient-dark text-primary-foreground">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Ready to become fluent?</h2>
            <p className="text-primary-foreground/70 mb-8 text-lg">Start practicing with your AI tutor — no signup required.</p>
            <Link to="/lesson">
              <Button size="lg" className="bg-primary-foreground text-navy-deep hover:bg-primary-foreground/90 px-8 h-13 text-base font-semibold">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Fluently — AI-Powered Language Learning Platform</p>
        </div>
      </footer>
    </div>
  );
}
