import { useState, useEffect } from 'react';
import { Cpu, Activity, Clock, Menu, X } from 'lucide-react';


export default function Navbar() {
  const [currentTime, setCurrentTime] = useState('');
  const [syncRate, setSyncRate] = useState(99.42);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Real-time futuristic system clock
  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`ST-${hours}:${minutes}:${seconds}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Neural Sync rate micro-fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncRate((prev) => {
        const delta = (Math.random() - 0.5) * 0.15;
        const next = prev + delta;
        return Math.max(98.15, Math.min(99.98, next));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll detection for glassmorphism adjustment
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'CHASSIS', href: '#hero' },
    { name: 'AUGMENTS', href: '#enhancements' },
    { name: 'HUD PORTAL', href: '#showcase' },
    { name: 'EVOLUTION', href: '#timeline' },
    { name: 'OPERATIVES', href: '#testimonials' },
    { name: 'UPLINK', href: '#join' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-cyan/15' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 select-none group">
            <div className="relative">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-tr from-cyber-blue to-cyber-cyan opacity-25 absolute blur-md -inset-0.5 group-hover:opacity-60 transition duration-300"></div>
              <div className="w-8 h-8 flex items-center justify-center border border-cyber-cyan/40 bg-cyber-dark/80 relative text-cyber-cyan font-mono text-sm font-bold cyber-corners-sm">
                S
              </div>
            </div>
            <span className="font-orbitron font-black text-xl tracking-[0.2em] text-white bg-clip-text">
              SYNTHESIS
              <span className="text-cyber-cyan glow-text-cyan font-light">//2075</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-orbitron text-xs tracking-widest text-slate-300 hover:text-cyber-cyan transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00f0ff]"></span>
              </a>
            ))}
          </div>

          {/* Telemetry Dashboard Data */}
          <div className="hidden md:flex items-center space-x-6 font-mono text-[10px] text-slate-400">
            <div className="flex items-center space-x-2 border border-slate-800/80 bg-cyber-dark/40 px-3 py-1.5 rounded-sm cyber-corners-sm">
              <Clock className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
              <span>{currentTime}</span>
            </div>
            <div className="flex items-center space-x-2 border border-slate-800/80 bg-cyber-dark/40 px-3 py-1.5 rounded-sm cyber-corners-sm">
              <Activity className="w-3.5 h-3.5 text-cyber-purple animate-pulse" />
              <span>SYNC: <span className="text-cyber-purple glow-text-purple font-bold">{syncRate.toFixed(2)}%</span></span>
            </div>
            <div className="flex items-center space-x-2 border border-slate-800/80 bg-cyber-dark/40 px-3 py-1.5 rounded-sm cyber-corners-sm">
              <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>CORE: <span className="text-emerald-400 font-bold">ACTIVE</span></span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900/60 focus:outline-none border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyber-cyan" /> : <Menu className="w-6 h-6 text-cyber-cyan" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 mx-4 cyber-glass border border-cyber-cyan/20 p-6 rounded-lg animate-fade-in shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-orbitron font-bold text-sm tracking-widest text-slate-200 hover:text-cyber-cyan border-b border-slate-800/50 pb-3"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Telemetry */}
            <div className="grid grid-cols-3 gap-2 pt-4 font-mono text-[9px] text-slate-400 border-t border-slate-800">
              <div className="flex flex-col items-center p-2 bg-cyber-dark/60 border border-slate-800/80 rounded-sm">
                <Clock className="w-3 h-3 text-cyber-cyan mb-1" />
                <span>{currentTime}</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-cyber-dark/60 border border-slate-800/80 rounded-sm">
                <Activity className="w-3 h-3 text-cyber-purple mb-1" />
                <span>SYNC: {syncRate.toFixed(1)}%</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-cyber-dark/60 border border-slate-800/80 rounded-sm">
                <Cpu className="w-3 h-3 text-emerald-400 mb-1" />
                <span>CORE: OK</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
