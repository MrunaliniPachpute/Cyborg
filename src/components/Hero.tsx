import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';
import cyborgHero from '../assets/cyborg_hero.png';


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-cyber-dark to-cyber-gray"
    >
      {/* 3D Animated Grid Background (Drifting Effect) */}
      <div className="absolute inset-0 cyber-grid opacity-30 select-none pointer-events-none animate-grid-drift"></div>

      {/* Cybernetic energy glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-cyan/10 blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyber-purple/10 blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 lg:py-24">
        
        {/* Left Copy Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          {/* Tagline / System Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-cyber-cyan/30 bg-cyber-cyan/5 px-3 py-1.5 rounded-sm w-fit cyber-corners-sm"
          >
            <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-ping shadow-[0_0_8px_#00f0ff]"></span>
            <span className="font-mono text-xs tracking-[0.2em] text-cyber-cyan glow-text-cyan font-bold">
              UPLINK SYNC: ESTABLISHED [v4.3.0]
            </span>
          </motion.div>

          {/* Core Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight text-white">
              BEYOND HUMAN.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple glow-cyan">
                BEYOND LIMITS.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed"
          >
            Welcome to the year 2075. Elevate your biological chassis with high-bandwidth neural linkages, subdermal quantum-integrated processing cores, and bio-mechanical augmentations. Achieve species synthesis.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            {/* Enter The Future CTA */}
            <a
              href="#join"
              className="relative group overflow-hidden py-3.5 px-8 rounded-sm cyber-corners font-orbitron font-bold text-xs tracking-[0.2em] text-center select-none text-cyber-dark bg-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] active:translate-y-0.5"
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <span className="flex items-center justify-center space-x-2">
                <span>ENTER THE FUTURE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            {/* View Tech Ghost CTA */}
            <a
              href="#enhancements"
              className="group py-3.5 px-8 rounded-sm border border-slate-700 hover:border-cyber-cyan/50 bg-cyber-dark/40 font-orbitron font-semibold text-xs tracking-[0.2em] text-center select-none text-slate-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] active:translate-y-0.5"
            >
              <span className="flex items-center justify-center space-x-2">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span>VIEW TECHNOLOGY</span>
              </span>
            </a>
          </motion.div>

          {/* Quick HUD Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-md font-mono text-left"
          >
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">COGNITION RATE</div>
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-cyan">940.8 EHz</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">NEURO LATENCY</div>
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-purple">&lt; 0.04 ms</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">SYNAPSE THREADS</div>
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-slate-200">10 BpS</div>
            </div>
          </motion.div>

        </div>

        {/* Right Cyborg Graphic / Hologram Panel */}
        <div className="lg:col-span-5 flex justify-center relative select-none">
          
          {/* Hologram Circle Glow Background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-dashed border-cyber-cyan/15 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full border border-double border-cyber-purple/10 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></motion.div>

          {/* Cyber HUD Brackets (Top Left, Bottom Right, etc.) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan opacity-60"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-cyan opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-cyan opacity-60"></div>

          {/* Cyborg image with hover glowing scanlines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative p-3 bg-cyber-dark/60 backdrop-blur-sm border border-cyber-cyan/20 rounded-sm cyber-corners max-w-[340px] sm:max-w-[400px] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Scanline element */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-cyan/35 shadow-[0_0_8px_#00f0ff] animate-scanline pointer-events-none"></div>

            <img
              src={cyborgHero}
              alt="Futuristic Cyborg 2075"
              className="w-full h-auto object-cover rounded-sm border border-slate-900 group-hover:scale-[1.03] transition-transform duration-700"
            />
            
            {/* Holographic Diagnostic Data Banner */}
            <div className="absolute bottom-6 left-6 right-6 cyber-glass border border-cyber-cyan/35 p-3 rounded-sm font-mono text-[9px] text-left opacity-90 select-none">
              <div className="flex justify-between items-center text-cyber-cyan mb-1">
                <span className="font-bold">CYBERNETIC DIAGNOSTICS</span>
                <span className="animate-pulse">● STABLE</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-slate-300">
                <div>BIOMETRIC SYNC: 99.82%</div>
                <div>NEURAL HEAT: 34.2°C</div>
                <div>IMPLANT TEMP: NOMINAL</div>
                <div>UPTIME: 10452 HRS</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
