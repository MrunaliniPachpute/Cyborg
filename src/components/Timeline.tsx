import { motion } from 'framer-motion';
import { Brain, Heart, Cpu, Network, Zap } from 'lucide-react';


const TIMELINE_DATA = [
  {
    year: '2030',
    title: 'Biological Baseline',
    icon: Heart,
    subtitle: 'Bio-Sensing & Subdermal Patches',
    description: 'Humanity integrates high-precision wearable sensory nodes and subdermal continuous biometric trackers. Disease monitoring and organ feedback become fully automated.',
    tech: ['Subdermal Bio-chips', 'Continuous Glucose HUDs', 'Cardiac Nodes'],
    glow: 'rgba(0, 102, 255, 0.2)',
    accent: 'text-cyber-blue border-cyber-blue/30 bg-cyber-blue/5',
  },
  {
    year: '2045',
    title: 'Cognitive Linked Human',
    icon: Brain,
    subtitle: 'Neuralink Network Release',
    description: 'The first high-bandwidth brain-machine interface becomes commercially available. Digital communication transfers from screens directly to primary cognitive vision channels.',
    tech: ['Direct Synaptic Mesh', 'Brain-Net Protocol v1', 'Optical HUD Implants'],
    glow: 'rgba(0, 240, 255, 0.2)',
    accent: 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/5',
  },
  {
    year: '2060',
    title: 'The Cybernetic Organism',
    icon: Zap,
    subtitle: 'Mechanical Body Replacement',
    description: 'Prosthetic mechanical organs, cybernetic bone chassis, and synthetic hearts exceed biological performance thresholds. Cyborg conversion becomes common in industrial and space endeavors.',
    tech: ['Carbon Chassis Frame', 'Synthetic Fusion Organelle', 'Hydraulic Muscle Packs'],
    glow: 'rgba(189, 0, 255, 0.2)',
    accent: 'text-cyber-purple border-cyber-purple/30 bg-cyber-purple/5',
  },
  {
    year: '2075',
    title: 'Super Intelligence Synthesis',
    icon: Cpu,
    subtitle: 'Quantum Singularity Synchronization',
    description: 'Full consciousness upload and digital overlays. Subdermal quantum CPUs run neural calculations in parallel, synthesizing biology and code into a single super-intelligent lifeform.',
    tech: ['Parallel Quantum Subdermal CPU', 'Digital Consciousness Sync', 'Species Synthesis Grid'],
    glow: 'rgba(16, 185, 129, 0.2)',
    accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 font-mono text-xs text-cyber-cyan tracking-[0.2em] uppercase">
            <Network className="w-4 h-4 text-cyber-cyan" />
            <span>Evolutionary Milestones</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white">
            EVOLUTION TIMELINE
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base">
            Trace the chronological integration of technology and biological cells, from initial external monitors to the complete conscious synthesis of 2075.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-800/80 -translate-x-1/2 hidden md:block">
            {/* Pulsing neon overlay line */}
            <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-cyber-blue via-cyber-cyan to-emerald-400 shadow-[0_0_8px_#00f0ff] opacity-60"></div>
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-stretch md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Outer spacing blocks for alignment */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-center px-4 md:px-12 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="p-6 bg-cyber-gray/40 border border-slate-800/80 hover:border-cyber-cyan/25 rounded-sm cyber-corners cyber-glass w-full relative group transition-all duration-300"
                    >
                      {/* Glow background on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                        style={{
                          background: `radial-gradient(circle at center, ${item.glow} 0%, transparent 85%)`,
                        }}
                      ></div>

                      {/* Header Specs */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-orbitron font-black text-2xl text-cyber-cyan glow-text-cyan select-none">
                          {item.year}
                        </span>
                        <div className={`p-2 border rounded-sm ${item.accent} select-none`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyber-cyan transition-colors mb-0.5">
                        {item.title}
                      </h3>
                      <div className="font-mono text-[9px] text-slate-500 tracking-wider mb-3">
                        {item.subtitle}
                      </div>

                      {/* Paragraph */}
                      <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Core Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/50">
                        {item.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="font-mono text-[8px] text-slate-400 bg-cyber-dark/60 border border-slate-800 px-2 py-0.5 rounded-sm select-none"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Vertical Timeline Center Marker Node */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-cyber-dark border border-slate-800 flex items-center justify-center relative">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border border-cyber-cyan/30 flex items-center justify-center relative animate-pulse">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00f0ff]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for structural symmetry */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
