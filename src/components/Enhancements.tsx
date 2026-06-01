import { motion } from 'framer-motion';
import { BrainCircuit, Eye, Zap, Activity, Cpu } from 'lucide-react';

const ENHANCEMENTS_DATA = [
  {
    id: 'neural',
    title: 'Neural Interface',
    icon: BrainCircuit,
    description: 'High-bandwidth direct-brain-to-net connection enabling instant data downloads and mental digital synthesis.',
    specs: [
      { label: 'Bandwidth', value: '10 Gbps' },
      { label: 'Latency', value: '< 0.01 ms' },
      { label: 'Synaptic Load', value: '12.4%' },
      { label: 'Cyber-Grade', value: 'Military S5' },
    ],
    color: 'rgba(0, 240, 255, 0.4)',
    accent: 'cyber-cyan',
  },
  {
    id: 'vision',
    title: 'AI Vision HUD',
    icon: Eye,
    description: 'Multi-spectrum ocular replacements delivering real-time HUD overlays, thermal scanning, and threat metrics.',
    specs: [
      { label: 'Ocular Focus', value: 'Adaptive 200x' },
      { label: 'Spectra', value: 'UV/IR/Thermal' },
      { label: 'Threat Calc', value: '10M tps' },
      { label: 'Optic Sync', value: '99.98%' },
    ],
    color: 'rgba(189, 0, 255, 0.4)',
    accent: 'cyber-purple',
  },
  {
    id: 'limbs',
    title: 'Bio-Mechanical Limbs',
    icon: Zap,
    description: 'Carbon-fiber reinforced muscular prosthetics loaded with smart hydraulic actuators for super-human kinetic force.',
    specs: [
      { label: 'Load Stress', value: '150 Metric Tons' },
      { label: 'Actuator Latency', value: '0.05 ms' },
      { label: 'Power Cell', value: 'Nuclear G2' },
      { label: 'Haptic Grade', value: 'Hyper-Tactile' },
    ],
    color: 'rgba(0, 102, 255, 0.4)',
    accent: 'cyber-blue',
  },
  {
    id: 'core',
    title: 'Quantum Processor Core',
    icon: Cpu,
    description: 'A sub-dermal biological CPU that runs parallel computational scripts directly alongside your natural nervous system.',
    specs: [
      { label: 'Clock Speed', value: '8.4 PFLOPS' },
      { label: 'Parallel Threads', value: '256 Million' },
      { label: 'Thermal Output', value: 'Negligible' },
      { label: 'Bio-Cooling', value: 'Synaptic Fluid' },
    ],
    color: 'rgba(16, 185, 129, 0.4)',
    accent: 'emerald-400',
  },
];

export default function Enhancements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  return (
    <section id="enhancements" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2 font-mono text-xs text-cyber-cyan tracking-[0.2em] uppercase">
            <Activity className="w-4 h-4 text-cyber-cyan" />
            <span>Bio-Logical Integration Catalog</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white">
            CYBERNETIC ENHANCEMENTS
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base">
            Configure your physical chassis with state-of-the-art synthetic modules. Each implant integrates seamlessly with your biological blueprint, unlocking super-human capability.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ENHANCEMENTS_DATA.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative bg-cyber-gray/40 border border-slate-800/80 hover:border-cyber-cyan/35 rounded-sm p-6 text-left transition-all duration-500 overflow-hidden cyber-corners cyber-glass"
              >
                {/* Border glowing hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    background: `radial-gradient(circle at 10% 20%, ${item.color} 0%, transparent 80%)`,
                  }}
                ></div>

                {/* Cyber Brackets */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-cyber-cyan transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-cyber-cyan transition-all duration-300"></div>

                {/* Card Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-slate-800 bg-cyber-dark group-hover:border-cyber-cyan/50 group-hover:text-cyber-cyan transition-all duration-300 rounded-sm cyber-corners-sm">
                    <IconComponent className="w-6 h-6 text-slate-300 group-hover:text-cyber-cyan transition-colors" />
                  </div>
                  <span className="font-mono text-[9px] text-slate-600 group-hover:text-cyber-cyan/50 tracking-widest uppercase">
                    SYS.LOG // {item.id}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Specs Block (Grows or Reveals) */}
                <div className="space-y-2 font-mono text-[10px] border-t border-slate-800/50 pt-4 group-hover:border-cyber-cyan/25 transition-colors">
                  <div className="text-[9px] text-slate-500 tracking-wider mb-2">INTEGRATION METRICS</div>
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center text-slate-400">
                      <span>{spec.label}:</span>
                      <span className="text-slate-200 font-bold group-hover:text-white transition-colors">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Pulsing Node (Bottom Corner) */}
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
