import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  Users, 
  Shield, 
  Sparkles, 
  ChevronDown,
  Copy,
  Check,
  Server,
  Gamepad2,
  Crown,
  Clock
} from 'lucide-react';

function App() {
  const [copiedIP, setCopiedIP] = useState(false);
  const joinButtonRef = useRef<HTMLButtonElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const copyServerIP = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText('PulsarsSMP.net');
    setCopiedIP(true);
    const button = event.currentTarget;
    button.classList.add('bg-purple-500/20');
    setTimeout(() => {
      button.classList.remove('bg-purple-500/20');
    }, 1000);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll for nav bar
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Stardust Powers",
      description: "Harness cosmic energy through our unique ability system"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Pulsar Progression",
      description: "Unlock, strengthen, and customize your cosmic abilities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust System",
      description: "Build alliances and manage relationships with other players"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ritual Mechanics",
      description: "Perform timed rituals to repair and enhance your powers"
    }
  ];

  const testimonials = [
    {
      name: "CosmicBuilder99",
      text: "The stardust system is unlike anything I've experienced in Minecraft. Every ability feels meaningful and unique!",
      rating: 5
    },
    {
      name: "StarGazer_MC",
      text: "Pulsars SMP has the perfect balance of vanilla survival and innovative mechanics. The community is amazing too!",
      rating: 5
    },
    {
      name: "NebulaExplorer",
      text: "The ritual system adds such depth to gameplay. Planning and executing rituals with friends is incredibly rewarding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Cosmic Animated Background (Tailwind default classes only) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep cosmic gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black" />
        {/* Big nebula glows (centered, Tailwind only) */}
        <div className="absolute w-96 h-96 bg-purple-700 opacity-50 blur-3xl rounded-full left-0 top-0 m-8" />
        <div className="absolute w-80 h-80 bg-pink-500 opacity-40 blur-2xl rounded-full right-0 top-24" />
        <div className="absolute w-72 h-72 bg-blue-400 opacity-30 blur-2xl rounded-full left-1/4 bottom-0 mb-8" />
        <div className="absolute w-64 h-64 bg-fuchsia-400 opacity-30 blur-2xl rounded-full right-1/4 top-12" />
        {/* Aurora effect (centered, visible) */}
        <div className="absolute w-full h-32 top-1/2 left-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-xl opacity-80 animate-aurora" />
        {/* Starfield: big, medium, small */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                opacity: 0.8
              }} />
          ))}
          {[...Array(60)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 1.5 + 1}px`,
                height: `${Math.random() * 1.5 + 1}px`,
                opacity: 0.5
              }} />
          ))}
          {[...Array(120)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 0.8 + 0.5}px`,
                height: `${Math.random() * 0.8 + 0.5}px`,
                opacity: 0.23
              }} />
          ))}
        </div>

      </div>
      <style>{`
        @keyframes shoot {
          0% { opacity: 0; transform: translateX(0) rotate(-18deg); }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateX(900px) rotate(-18deg); }
        }
        @keyframes aurora {
          0%,100% { filter: blur(32px) brightness(1.1); opacity:0.7; }
          50% { filter: blur(64px) brightness(1.3); opacity:1; }
        }
        .animate-aurora {
          animation: aurora 8s ease-in-out infinite;
        }
      `}</style>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.2; }
        }
        @keyframes shoot {
          0% { opacity: 0; transform: translateX(0) rotate(-18deg); }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateX(900px) rotate(-18deg); }
        }
        @keyframes parallax-slow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-30px); }
        }
        @keyframes parallax-medium {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-60px); }
        }
        @keyframes parallax-fast {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-120px); }
        }
        .animate-parallax-slow { animation: parallax-slow 32s linear infinite alternate; }
        .animate-parallax-medium { animation: parallax-medium 24s linear infinite alternate; }
        .animate-parallax-fast { animation: parallax-fast 16s linear infinite alternate; }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 bg-gradient-to-br from-[#A6009F]/85 to-[#590078]/85 backdrop-blur-sm border-b border-[#A6009F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/pulsarsicon.jpg" alt="Pulsars SMP Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pulsars SMP
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => handleNavClick('features')} className="hover:text-purple-400 transition-colors">Features</button>
              <button onClick={() => handleNavClick('mechanics')} className="hover:text-purple-400 transition-colors">Mechanics</button>
              <button onClick={() => handleNavClick('community')} className="hover:text-purple-400 transition-colors">Community</button>
              <button onClick={() => handleNavClick('join')} className="hover:text-purple-400 transition-colors">Join</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 w-full max-w-7xl mx-auto p-[3px] rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600">
        <main className="bg-slate-900/90 w-full rounded-3xl px-8 py-10">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#A6009F] to-[#590078] bg-clip-text text-transparent leading-tight">
              Welcome to the
              <br />
              <span className="text-yellow-400">Pulsars SMP</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Embark on an extraordinary Minecraft adventure where cosmic forces shape your destiny.
              <br />
              <span className="text-purple-400 font-semibold">Harness the power of stardust and unlock your true potential.</span>
            </p>
          </div>

          {/* Server IP Display */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-4 mb-6">
              <Server className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-lg font-mono text-white">PulsarsSMP.net</span>
              <button
                onClick={copyServerIP}
                className={`ml-3 p-2 rounded-lg transition-all duration-200 hover:bg-purple-500/20 ${copiedIP ? 'ring-2 ring-purple-400 scale-110' : ''}`}
                title="Copy Server IP"
              >
                {copiedIP ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-purple-400" />
                )}
              </button>
            </div>
            <p className="text-gray-400 text-sm">Click to copy the server IP</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              ref={joinButtonRef}
              onClick={copyServerIP}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden"
            >
              <span className="flex items-center">
                <Gamepad2 className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                {copiedIP ? 'Copied!' : 'Join the Adventure'}
              </span>
            </button>
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('features')?.offsetTop || 0, behavior: 'smooth' })}
              className="bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-slate-700/80"
            >
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D800CF] to-[#7B00B0] bg-clip-text text-transparent">
              Cosmic Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience Minecraft like never before with our innovative stardust-powered gameplay mechanics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-slate-800/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 transition-all duration-500 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-2 ${
                  activeFeature === index ? 'border-purple-400 shadow-lg shadow-purple-500/20 scale-105' : ''
                }`}
              >
                <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanics Section */}
      <section id="mechanics" className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#A6009F] to-[#590078] bg-clip-text text-transparent">
              The Stardust System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary plugin transforms gameplay through cosmic abilities and progression
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-800/80 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Pulsar Abilities</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Each Pulsar grants unique primary, secondary, and passive effects. Unlock new abilities, 
                  strengthen existing ones, or strategically weaken powers to balance your cosmic arsenal.
                </p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Ritual System</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Perform intricate timed rituals to repair damaged abilities or enhance your powers. 
                  Coordination and timing are key to mastering the cosmic arts.
                </p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Advanced Mechanics</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Manage progression-limited kits, utilize special trust systems, and wield powerful 
                  limited-use maces in your cosmic journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
                <div className="text-center">
                  <Star className="w-24 h-24 text-yellow-400 mx-auto mb-6 animate-spin" style={{ animationDuration: '8s' }} />
                  <h4 className="text-2xl font-bold text-white mb-4">Cosmic Progression</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Your journey through the stars is unique. Every decision shapes your cosmic destiny, 
                    creating endless possibilities for adventure and discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D800CF] to-[#7B00B0] bg-clip-text text-transparent">
              Community Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our community members about their experiences in Pulsars SMP
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for Your Cosmic Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of players exploring the universe in Pulsars SMP. 
            Your cosmic journey awaits among the stars.
          </p>

          <div className="bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <span className="text-gray-300">Server IP:</span>
              <div className="flex items-center bg-slate-700/80 rounded-lg px-4 py-2">
                <span className="text-xl font-mono text-white">PulsarsSMP.net</span>
                <button
                  onClick={copyServerIP}
                  className="ml-3 p-1 hover:bg-purple-500/20 rounded transition-colors"
                >
                  {copiedIP ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-purple-400" />
                  )}
                </button>
              </div>
            </div>
            <p className="text-gray-400">Java Edition • Version 1.20+ • No Mods Required</p>
          </div>
        </div>
      </section>
      <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-[#A6009F]/30 py-8 rounded-3xl mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/pulsarsicon.jpg" alt="Pulsars SMP Logo" className="w-6 h-6" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#A6009F] to-[#590078] bg-clip-text text-transparent text-left">
              Pulsars SMP
            </span>
          </div>
          <p className="text-gray-400 text-left">
            © 2025 Pulsars SMP. Embark on your cosmic journey today.
          </p>
        </div>
      </footer>
      </main>
    </div>
    </div>
  );
}

export default App;