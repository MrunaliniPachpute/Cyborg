import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Enhancements from './components/Enhancements';
import Showcase from './components/Showcase';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import JoinRevolution from './components/JoinRevolution';
import { Shield } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 scanlines relative font-inter overflow-x-hidden">
      
      {/* Floating System Header navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Cybernetic Enhancements Catalog Grid */}
      <Enhancements />

      {/* Holographic Diagnostic Showcase Slider/Canvas */}
      <Showcase />

      {/* Scroll-triggered Evolution Timeline */}
      <Timeline />

      {/* Operative Verification Testimonials Log */}
      <Testimonials />

      {/* Secure Terminal Subscription form */}
      <JoinRevolution />

      {/* Breathtaking Futuristic Footer */}
      <footer className="bg-cyber-dark border-t border-slate-900 py-12 relative overflow-hidden select-none font-mono text-[10px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
            {/* Branding Column */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center border border-cyber-cyan bg-cyber-dark text-cyber-cyan font-orbitron text-xs font-bold cyber-corners-sm">
                  S
                </div>
                <span className="font-orbitron font-bold text-sm tracking-wider text-white">SYNTHESIS</span>
              </div>
              <p className="text-[9px] text-slate-600 font-light leading-relaxed">
                Empowering the biological evolution of humanity since 2060. High-bandwidth neural meshes, sub-dermal processors, and kinetic muscle synthesis.
              </p>
            </div>

            {/* Links Column */}
            <div className="space-y-2">
              <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">CATALOG NODES</div>
              <ul className="space-y-1 text-[9px]">
                <li><a href="#hero" className="hover:text-cyber-cyan transition-colors">CHASSIS UPGRADE</a></li>
                <li><a href="#enhancements" className="hover:text-cyber-cyan transition-colors">SYNAPSE AUGMENTS</a></li>
                <li><a href="#showcase" className="hover:text-cyber-cyan transition-colors">HUD DIAGNOSTICS</a></li>
                <li><a href="#timeline" className="hover:text-cyber-cyan transition-colors">SPECIES TIMELINE</a></li>
              </ul>
            </div>

            {/* System Specs Column */}
            <div className="space-y-2">
              <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">MAINNET STATUS</div>
              <ul className="space-y-1 text-[9px] text-slate-600">
                <li>SYS SPEED: <span className="text-cyber-cyan">940.2 PHz</span></li>
                <li>MAINNET LATENCY: <span className="text-cyber-purple">12 ms</span></li>
                <li>SYNAPSTIC SHIELD: <span className="text-emerald-400">ACTIVE [99.8%]</span></li>
                <li>NODES ONLINE: <span className="text-slate-300">142,502,109</span></li>
              </ul>
            </div>

            {/* Uplink Encryption Column */}
            <div className="space-y-2">
              <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">SECURITY ENCRYPTION</div>
              <div className="flex items-center space-x-2 border border-slate-900 bg-cyber-gray/30 p-2.5 rounded-sm cyber-corners-sm text-[8px] text-left">
                <Shield className="w-4 h-4 text-cyber-cyan animate-pulse shrink-0" />
                <span>UPLINK PROTECTED WITH MILITARY-GRADE BIOLOGICAL KEY [SHIELD-v9]</span>
              </div>
            </div>
          </div>

          {/* Legal / Copyright details */}
          <div className="border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row justify-between items-center text-slate-600 text-[8px]">
            <div>
              © 2075 SYNTHESIS INCORPORATED. ALL BIOLOGICAL CHASSIS RESERVED.
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-cyber-cyan transition-colors">NEURAL TERMS</a>
              <a href="#" className="hover:text-cyber-cyan transition-colors">BIO-PRIVACY NODE</a>
              <a href="#" className="hover:text-cyber-cyan transition-colors">UPLINK CODE</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
