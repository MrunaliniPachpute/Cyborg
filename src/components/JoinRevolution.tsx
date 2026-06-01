import React, { useState } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

export default function JoinRevolution() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'verifying' | 'success' | 'error'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYS.UPLINK: INITIALIZING BROADCAST CHANNEL [ST-75]',
    'SYS.UPLINK: SECURE DATA GATEWAY PORT 443 ACTIVE',
    'SYS.UPLINK: READY FOR SPECIES RECRUITMENT UPLINK...',
  ]);


  const handleUplink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setTerminalLogs((prev) => [
        ...prev,
        '>> UPLINK ERROR: FAILED SIGNATURE IDENTIFICATION. EMAIL REQUIRED.',
      ]);
      return;
    }

    setStatus('scanning');
    setTerminalLogs((prev) => [
      ...prev,
      `>> UPLINK REQUEST INITIATED FOR OPERATIVE: ${email}`,
      '>> [15%] INITIALIZING CEREBRAL FREQUENCY SCAN...',
    ]);

    // Simulated scanner transitions
    setTimeout(() => {
      setStatus('verifying');
      setTerminalLogs((prev) => [
        ...prev,
        '>> [65%] BIO-CHASSIS INTEGRATION MATRIX ENCODED...',
        '>> [85%] COGNITIVE SYNC COEFFICIENT: 99.85%',
      ]);
    }, 1200);

    setTimeout(() => {
      setStatus('success');
      setTerminalLogs((prev) => [
        ...prev,
        '>> [100%] CEREBRAL FREQUENCY SYNCHRONIZED!',
        '>> SYS.SUCCESS: NEURAL LINK CHASSIS RECRUITED FOR 2075.',
        '>> WELCOME TO THE REVOLUTION.',
      ]);
    }, 2500);
  };

  return (
    <section id="join" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Background drifting lines */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

      {/* Cyber energy circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyber-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core HUD Container */}
        <div className="cyber-glass border border-cyber-cyan/35 rounded-sm p-8 md:p-12 relative cyber-corners shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
          {/* Diagnostic Corner Tech Lights */}
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-cyber-cyan shadow-[0_0_8px_#00f0ff]"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-cyber-cyan shadow-[0_0_8px_#00f0ff]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-cyber-cyan shadow-[0_0_8px_#00f0ff]"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-cyber-cyan shadow-[0_0_8px_#00f0ff]"></div>

          {/* Section Header */}
          <div className="text-center space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2 font-mono text-xs text-cyber-cyan tracking-[0.2em] uppercase">
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              <span>Cerebral Grid Uplink Node</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white">
              JOIN THE REVOLUTION
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm max-w-lg mx-auto">
              Synchronize your organic synapses with our mainframe broadcast network. Receive early diagnostics updates, chassis designs, and biological patches directly to your HUD.
            </p>
          </div>

          {/* Simulated Terminal Screen */}
          <div className="border border-slate-800 bg-cyber-dark/95 p-4 rounded-sm font-mono text-[10px] sm:text-xs text-left mb-8 h-48 overflow-y-auto select-none space-y-1.5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)]">
            <div className="text-slate-600 border-b border-slate-850 pb-1 mb-2 flex justify-between">
              <span>SYNAPSE_CONNECTION_UPLINK.SH</span>
              <span>SYS_ST: Nom_V4</span>
            </div>
            
            {terminalLogs.map((log, index) => {
              const isError = log.includes('ERROR');
              const isSuccess = log.includes('SUCCESS') || log.includes('WELCOME');
              const isProgress = log.includes('%');
              
              let colorClass = 'text-slate-400';
              if (isError) colorClass = 'text-cyber-purple font-bold';
              else if (isSuccess) colorClass = 'text-emerald-400 glow-text-emerald';
              else if (isProgress) colorClass = 'text-cyber-cyan';

              return (
                <div key={index} className={`${colorClass} leading-relaxed`}>
                  {log}
                </div>
              );
            })}

            {/* Pulsing prompt cursor */}
            {status !== 'success' && status !== 'scanning' && status !== 'verifying' && (
              <div className="flex items-center text-slate-500">
                <span>guest@synthesis-net:~$ </span>
                <span className="w-2 h-3.5 bg-cyber-cyan ml-1.5 animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
              </div>
            )}
          </div>

          {/* Submission Prompt Form */}
          {status !== 'success' ? (
            <form onSubmit={handleUplink} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-xl mx-auto">
              {/* Input Box */}
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="ENTER CEREBRAL EMAIL GATEWAY..."
                  disabled={status === 'scanning' || status === 'verifying'}
                  className="w-full bg-cyber-dark/80 border border-slate-800 focus:border-cyber-cyan text-white font-mono text-xs py-3 px-4 rounded-sm focus:outline-none focus:shadow-[0_0_12px_rgba(0,240,255,0.2)] disabled:opacity-50 tracking-wider"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={status === 'scanning' || status === 'verifying'}
                className="py-3 px-8 font-orbitron font-bold text-xs tracking-wider select-none text-cyber-dark bg-cyber-cyan border border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] disabled:opacity-50 disabled:shadow-none transition-all duration-300 active:translate-y-0.5"
              >
                {status === 'scanning' || status === 'verifying' ? 'SYNAPSE SYNCING...' : 'ESTABLISH UPLINK'}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center space-y-3 font-mono p-4 border border-emerald-500/20 bg-emerald-950/10 rounded-sm max-w-xl mx-auto">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
              <div className="text-emerald-400 font-bold text-sm">SYNAPSE GATEWAY ONLINE</div>
              <p className="text-slate-400 text-[10px] text-center max-w-xs">
                Your brain-net node is locked into synthesis. Frequency logs will broadcast directly into your sub-dermal HUD.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
