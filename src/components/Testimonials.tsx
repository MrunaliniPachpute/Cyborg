import { motion } from 'framer-motion';
import { Quote, Sparkles, MessageSquare } from 'lucide-react';


const TESTIMONIALS_DATA = [
  {
    name: 'Dr. Evelyn Vance',
    role: 'Chief Cybernetics Neuro-engineer',
    affiliation: 'Synthesis Labs Inc.',
    tag: 'CHASSIS-09E',
    stars: 5,
    quote: "Integrating the Quantum Core inside biological neural lattices has bypassed physical computation thresholds entirely. We are witnessing the birth of a new species that calculates synaptic vectors at lightspeed.",
    avatar: 'EV',
  },
  {
    name: 'Operative JAX-74',
    role: 'Deep-Space Augment Pilot',
    affiliation: 'Orbital Fleet Logistics',
    tag: 'NEURAL-82A',
    stars: 5,
    quote: "After upgrading to the AI Vision HUD and sub-dermal parallel processors, flight calculations take zero brain strain. Threat assessment is automated, and flight reflexes feel as instant as thought.",
    avatar: 'JX',
  },
  {
    name: 'Sariyah Thorne',
    role: 'Cognitive Software Architect',
    affiliation: 'Neural Nexus Foundation',
    tag: 'SYNAPSE-33B',
    stars: 5,
    quote: "The seamless integration of standard programming structures directly inside brain matter makes digital synthesis extremely effortless. Coding in 2075 isn't typed, it is simply imagined.",
    avatar: 'ST',
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-24 bg-cyber-gray/30 relative overflow-hidden">
      {/* Background drift lines */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 font-mono text-xs text-cyber-cyan tracking-[0.2em] uppercase">
            <MessageSquare className="w-4 h-4 text-cyber-cyan" />
            <span>Operative Feedback Logs</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white">
            CHASSIS VERIFICATION LOGS
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base">
            Read verified transmission reports and telemetry diagnostics from augmented operatives, scientists, and high-frequency pilots.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <motion.div
              key={item.tag}
              variants={itemVariants}
              className="group relative bg-cyber-dark/80 border border-slate-800 hover:border-cyber-purple/40 rounded-sm p-6 text-left transition-all duration-500 cyber-corners cyber-glass"
            >
              {/* Outer hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/5 to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>

              {/* Quotes Icon decorative */}
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-cyber-purple/10 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Score Indicator stars */}
              <div className="flex items-center space-x-1 mb-4 select-none">
                {[...Array(item.stars)].map((_, i) => (
                  <Sparkles key={i} className="w-3.5 h-3.5 text-cyber-cyan glow-cyan" />
                ))}
                <span className="font-mono text-[9px] text-cyber-cyan glow-text-cyan ml-2">VERIFIED UPLINK</span>
              </div>

              {/* Testimonial Quote */}
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed italic mb-8 relative z-10">
                "{item.quote}"
              </p>

              {/* User Bio Details */}
              <div className="flex items-center space-x-4 border-t border-slate-800/80 pt-4">
                {/* Avatar Initial Circle */}
                <div className="w-11 h-11 flex items-center justify-center border border-cyber-cyan/35 bg-cyber-cyan/5 text-cyber-cyan font-orbitron font-bold text-sm cyber-corners-sm select-none relative group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all">
                  {item.avatar}
                </div>

                <div className="text-left font-mono">
                  <h4 className="font-orbitron font-bold text-xs text-white leading-none mb-1">
                    {item.name}
                  </h4>
                  <div className="text-[9px] text-slate-500 mb-0.5 leading-none">
                    {item.role}
                  </div>
                  <div className="text-[8px] text-cyber-cyan/70 font-semibold leading-none">
                    {item.affiliation}
                  </div>
                </div>
              </div>

              {/* Tag bottom-right */}
              <div className="absolute bottom-4 right-4 font-mono text-[7px] text-slate-700 tracking-wider">
                {item.tag}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
