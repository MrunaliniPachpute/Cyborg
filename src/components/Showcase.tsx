import { useState, useEffect, useRef } from 'react';
import { Cpu, Activity, Sliders, Thermometer, ShieldAlert } from 'lucide-react';
import quantumCore from '../assets/quantum_core.png';


export default function Showcase() {
  // Control Panel States
  const [neuralFreq, setNeuralFreq] = useState(120); // 50Hz to 250Hz
  const [corePower, setCorePower] = useState(65); // 10% to 100%
  const [overdrive, setOverdrive] = useState(false);

  // Diagnostic Calculated States (Reactive)
  const [cogBandwidth, setCogBandwidth] = useState(0);
  const [thermalLoad, setThermalLoad] = useState(0);
  const [synapticLatency, setSynapticLatency] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Recalculate stats dynamically based on controls
  useEffect(() => {
    let multiplier = overdrive ? 1.8 : 1.0;
    
    // Cognitive Bandwidth = neuralFreq * corePower * multiplier
    const calcBandwidth = (neuralFreq * 12.5 + corePower * 15.8) * multiplier;
    setCogBandwidth(calcBandwidth);

    // Thermal Load = (corePower * 0.8 + neuralFreq * 0.4) * multiplier
    const calcThermal = (corePower * 0.65 + neuralFreq * 0.25) * multiplier;
    setThermalLoad(calcThermal);

    // Synaptic Latency = 1 / (neuralFreq * 0.05 + corePower * 0.02)
    const calcLatency = 1.2 / ((neuralFreq * 0.04 + corePower * 0.02) * multiplier);
    setSynapticLatency(Math.max(0.01, calcLatency));
  }, [neuralFreq, corePower, overdrive]);

  // Interactive Neural Canvas Web Generator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 400);

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      height = canvas.height = 400;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    const particleCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Mouse interactive tracker
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Particle animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Speed up particles if overdrive is enabled
      const speedFactor = overdrive ? 2.5 : 1.0;

      // Draw active background grid coordinate system
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and connect particles
      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.vx * speedFactor;
        p.y += p.vy * speedFactor;

        // Wall collisions
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw node
        ctx.fillStyle = overdrive
          ? `rgba(189, 0, 255, ${p.alpha})`
          : `rgba(0, 240, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect lines between nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          
          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.15;
            ctx.strokeStyle = overdrive
              ? `rgba(189, 0, 255, ${lineAlpha})`
              : `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections to mouse cursor
        if (mouse.x > 0) {
          const mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mouseDist < 120) {
            const lineAlpha = (1 - mouseDist / 120) * 0.35;
            ctx.strokeStyle = overdrive
              ? `rgba(189, 0, 255, ${lineAlpha})`
              : `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [overdrive]);

  return (
    <section id="showcase" className="py-24 bg-cyber-gray/30 relative overflow-hidden">
      {/* Visual drift line */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 font-mono text-xs text-cyber-purple tracking-[0.2em] uppercase">
            <Sliders className="w-4 h-4 text-cyber-purple" />
            <span>Interactive Diagnostic HUD</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white">
            TECHNOLOGY SHOWCASE
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base">
            Calibrate your core parameters in real-time. Tune the quantum grid capacity and neural frequency to inspect sub-dermal biological reactions.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Sliders & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-cyber-dark/80 border border-slate-800/80 rounded-sm cyber-corners cyber-glass">
            <div>
              <div className="flex items-center space-x-2 text-cyber-cyan font-orbitron font-bold text-sm tracking-wider mb-6 pb-3 border-b border-slate-800">
                <Cpu className="w-4 h-4 text-cyber-cyan" />
                <span>CHASSIS CALIBRATION</span>
              </div>

              {/* Slider 1: Neural Frequency */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between font-mono text-[10px] text-slate-400">
                  <span>NEURAL BASE FREQUENCY:</span>
                  <span className="text-cyber-cyan glow-text-cyan font-bold">{neuralFreq} Hz</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="250"
                  value={neuralFreq}
                  onChange={(e) => setNeuralFreq(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
                />
                <div className="flex justify-between font-mono text-[8px] text-slate-500">
                  <span>50Hz (IDLE)</span>
                  <span>250Hz (BURST)</span>
                </div>
              </div>

              {/* Slider 2: Core Power */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between font-mono text-[10px] text-slate-400">
                  <span>QUANTUM CELL OUTPUT:</span>
                  <span className="text-cyber-cyan glow-text-cyan font-bold">{corePower}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={corePower}
                  onChange={(e) => setCorePower(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
                />
                <div className="flex justify-between font-mono text-[8px] text-slate-500">
                  <span>10% (SAFE)</span>
                  <span>100% (CRITICAL)</span>
                </div>
              </div>

              {/* Toggle: Overdrive */}
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-sm mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShieldAlert className={`w-5 h-5 ${overdrive ? 'text-cyber-purple animate-pulse' : 'text-slate-500'}`} />
                  <div className="text-left">
                    <div className="font-orbitron font-bold text-xs text-white">NEURAL OVERDRIVE</div>
                    <div className="font-mono text-[8px] text-slate-500">BOOST SPECS BY 80% [RISK OF CELL DAMAGE]</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={overdrive}
                    onChange={(e) => setOverdrive(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:height-5 after:w-5 after:transition-all peer-checked:bg-cyber-purple peer-checked:after:bg-white"></div>
                </label>
              </div>
            </div>

            {/* Graphic status readout */}
            <div className="border-t border-slate-800/80 pt-4 font-mono text-[9px] text-slate-500 text-left space-y-1">
              <div>FIRMWARE: CORE-TS v4.3.0</div>
              <div>CELL CORE ENERGETICS: LIQUID PLASMA</div>
              <div>SYNAPSE THROTTLING: DISABLED</div>
            </div>
          </div>

          {/* Middle Panel: Interactive Live Canvas (Neural Web) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-cyber-dark/80 border border-slate-800/80 rounded-sm cyber-corners cyber-glass">
            <div>
              <div className="flex items-center justify-between text-cyber-purple font-orbitron font-bold text-sm tracking-wider mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-cyber-purple" />
                  <span>SYNAPSTIC NEURAL WEB</span>
                </div>
                <span className="font-mono text-[9px] text-slate-500 select-none">[HOVER INTERACTION]</span>
              </div>
              <p className="text-slate-400 font-light text-xs text-left mb-4">
                Interactive mapping of synthetic brain cell linkages. Move your cursor over the grid below to bridge biological memory gates directly.
              </p>
            </div>

            <div className="relative border border-slate-800 bg-cyber-gray/30 rounded-sm overflow-hidden flex-grow flex items-center justify-center min-h-[300px]">
              <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair" />
              
              {/* Overdrive Overlay Warning */}
              {overdrive && (
                <div className="absolute inset-0 bg-cyber-purple/5 pointer-events-none flex items-center justify-center">
                  <div className="cyber-glass-purple border border-cyber-purple p-3 font-mono text-[10px] text-cyber-purple animate-pulse cyber-corners-sm">
                    SYS.ALERT: COGNITION SYNAPSE OVERLOAD
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Live Stats output */}
          <div className="lg:col-span-3 flex flex-col justify-between p-6 bg-cyber-dark/80 border border-slate-800/80 rounded-sm cyber-corners cyber-glass">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-300 font-orbitron font-bold text-sm tracking-wider mb-6 pb-3 border-b border-slate-800">
                <Thermometer className="w-4 h-4 text-cyber-cyan" />
                <span>TELEMETRY RESULTS</span>
              </div>

              {/* Stat 1: Cognitive Bandwidth */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between font-mono text-[9px] text-slate-400">
                  <span>COGNITIVE BANDWIDTH:</span>
                  <span className="text-cyber-cyan font-bold">{cogBandwidth.toFixed(1)} GB/s</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-sm overflow-hidden border border-slate-900">
                  <div
                    className="bg-gradient-to-r from-cyber-cyan to-cyber-blue h-full transition-all duration-300 shadow-[0_0_8px_#00f0ff]"
                    style={{ width: `${Math.min(100, (cogBandwidth / 5000) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Stat 2: Thermal Load */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between font-mono text-[9px] text-slate-400">
                  <span>BIO-THERMAL TEMP:</span>
                  <span className={`font-bold ${thermalLoad > 85 ? 'text-cyber-purple glow-text-purple' : 'text-slate-300'}`}>
                    {thermalLoad.toFixed(1)}°C
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-sm overflow-hidden border border-slate-900">
                  <div
                    className={`h-full transition-all duration-300 ${
                      thermalLoad > 85
                        ? 'bg-cyber-purple shadow-[0_0_8px_#bd00ff]'
                        : 'bg-gradient-to-r from-cyber-cyan to-cyber-blue shadow-[0_0_8px_#00f0ff]'
                    }`}
                    style={{ width: `${Math.min(100, (thermalLoad / 120) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Stat 3: Synaptic Latency */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between font-mono text-[9px] text-slate-400">
                  <span>NEURAL REFLEX LATENCY:</span>
                  <span className="text-emerald-400 font-bold">{synapticLatency.toFixed(3)} ms</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-sm overflow-hidden border border-slate-900">
                  <div
                    className="bg-emerald-400 h-full transition-all duration-300 shadow-[0_0_8px_#10b981]"
                    // Inverse scale: lower latency = better
                    style={{ width: `${Math.min(100, (0.2 / synapticLatency) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Rotating 3D Core Energy Image Display */}
            <div className="relative mt-8 p-2 border border-slate-800/80 bg-cyber-gray/40 rounded-sm flex flex-col items-center justify-center overflow-hidden h-36">
              <img
                src={quantumCore}
                alt="Quantum Core Active"
                className={`w-20 h-20 object-contain ${
                  overdrive ? 'animate-spin' : 'animate-[spin_8s_linear_infinite]'
                }`}
                style={{ animationDuration: overdrive ? '1.5s' : '8s' }}
              />
              <span className="font-mono text-[8px] text-slate-500 mt-2">
                QUANTUM ROTATION FEEDBACK
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
