import React, { useEffect, useState } from 'react';
import { QrCode, Phone, Users, Clock, CheckCircle, ArrowRight, Smartphone, MessageCircle, Zap, Mail, MapPin, Send, Shield, TrendingUp, Heart } from 'lucide-react';

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#13032d] to-indigo-900"></div>
      
      {/* Floating Particles */}
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 15 + 15}s`
          }}
        />
      ))}
      
      {/* Subtle Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [taglinePhase, setTaglinePhase] = useState('entering'); // 'entering', 'visible', 'exiting', 'hidden'

  useEffect(() => {
    setIsVisible(true);
    
    // Tagline animation sequence
    const timer1 = setTimeout(() => {
      setTaglinePhase('visible');
    }, 800);
    
    const timer2 = setTimeout(() => {
      setTaglinePhase('exiting');
    }, 3500);
    
    const timer3 = setTimeout(() => {
      setTaglinePhase('hidden');
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes taglineSlideIn {
          0% { 
            transform: translateX(-100px); 
            opacity: 0; 
            filter: blur(4px);
          }
          100% { 
            transform: translateX(0); 
            opacity: 1; 
            filter: blur(0px);
          }
        }
        @keyframes taglineSlideOut {
          0% { 
            transform: translateX(0); 
            opacity: 1; 
            filter: blur(0px);
          }
          100% { 
            transform: translateX(120px); 
            opacity: 0; 
            filter: blur(4px);
          }
        }
        @keyframes taglineGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 25px rgba(147, 51, 234, 0.4); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes diamondRotate {
          0% { transform: rotate(45deg) scale(1); }
          100% { transform: rotate(405deg) scale(1.1); }
        }
        .diamond-rotate {
          animation: diamondRotate 0.6s ease-in-out;
        }
        .tagline-entering {
          animation: taglineSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .tagline-visible {
          animation: taglineGlow 2s ease-in-out infinite;
        }
        .tagline-exiting {
          animation: taglineSlideOut 1s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
        }
        .tagline-hidden {
          display: none;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md fixed w-full top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">QR Calls</span>
                <span className="text-xs text-white leading-tight">Always around you</span>
              </div>
            </div>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Company Branding */}
            

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              Scan, Connect,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-violet-300 block">Communicate Instantly</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto relative z-10">
              Bridge the gap between physical and digital with QR Calls. Enable instant communication 
              for any business, service, or location - no apps required, just scan and connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <button className="bg-gradient-to-r from-white to-purple-100 text-purple-800 hover:from-purple-100 hover:to-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Animation */}
          <div className={`mt-16 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 max-w-4xl mx-auto relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-white/20 to-purple-200/20 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
                    <QrCode className="h-20 w-20 text-white mx-auto animate-pulse" />
                  </div>
                  <p className="text-purple-100 font-medium">Scan QR code anywhere</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-200/20 to-green-200/20 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
                    <Phone className="h-20 w-20 text-emerald-300 mx-auto animate-bounce" />
                  </div>
                  <p className="text-purple-100 font-medium">Connect instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Universal communication in three simple steps
            </p>
          </div>

          {/* Professional Process Image */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Person using smartphone to scan QR code for instant communication"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#13032d] to-violet-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                  <QrCode className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Scan & Connect Instantly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <QrCode className="h-12 w-12" />,
                title: "1. Scan QR Code",
                description: "Place QR codes anywhere - tables, counters, signs, or products for instant access",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Phone className="h-12 w-12" />,
                title: "2. Connect Instantly",
                description: "Secure live connection established immediately with the right person or service",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: <MessageCircle className="h-12 w-12" />,
                title: "3. Communicate",
                description: "Start conversations, ask questions, get support, or place requests in real-time",
                color: "from-violet-500 to-violet-600"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${step.color} text-white rounded-full p-4 w-20 h-20 mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg flex items-center justify-center`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perfect for Any Business
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              QR Calls adapts to your industry and communication needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Retail & Shopping",
                description: "Customer support, product inquiries, and assistance",
                image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Restaurants & Dining",
                description: "Table service, menu inquiries, and order assistance",
                image: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Healthcare",
                description: "Patient communication, appointment scheduling, and support",
                image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Events & Venues",
                description: "Information desk, technical support, and attendee services",
                image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((useCase, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                  <img 
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-purple-200 bg-clip-text text-transparent">
              Why Choose Us
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how QR Calls transforms business communication with innovative features designed for the modern world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              {
                title: "Universal Compatibility",
                description: "Works seamlessly across all devices and platforms. No app downloads required - just scan and connect instantly with any smartphone.",
                icon: <Smartphone className="h-10 w-10 text-purple-500" />
              },
              {
                title: "Enhanced Flexibility",
                description: "Adapt to any business scenario with customizable connection flows. Perfect for retail, dining, healthcare, and events.",
                icon: <Zap className="h-10 w-10 text-purple-500" />
              },
              {
                title: "Connect Instantly",
                description: "Establish real-time communication in seconds. Bridge the gap between physical presence and digital convenience.",
                icon: <Phone className="h-10 w-10 text-purple-500" />
              },
              {
                title: "Increased Satisfaction",
                description: "Deliver personalized service that exceeds expectations. Transform customer interactions into meaningful conversations.",
                icon: <Heart className="h-10 w-10 text-purple-500" />
              },
              {
                title: "Be Unique",
                description: "Stand out from competitors with innovative communication technology. Show customers you value their time and convenience.",
                icon: <TrendingUp className="h-10 w-10 text-purple-500" />
              },
              {
                title: "Smart Routing",
                description: "Intelligent connection management ensures customers reach the right person every time. Optimize your team's workflow effortlessly.",
                icon: <Shield className="h-10 w-10 text-purple-500" />
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-left">
                <div className="relative mb-6 flex items-start">
                  {/* Diamond Shape */}
                  <div 
                    className="w-16 h-16 transform rotate-45 rounded-lg shadow-md transition-all duration-1000 group-hover:rotate-[405deg] group-hover:scale-110 group-hover:shadow-lg flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #c696fa, #ffffff)'
                    }}
                  >
                  </div>
                  {/* Icon positioned to the left of diamond */}
                  <div className="absolute top-2 -left-4 z-10 bg-white rounded-full p-2 shadow-sm">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose QR Calls?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform any business with instant communication technology that bridges physical and digital experiences.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                    title: "Universal Compatibility",
                    description: "Works with any smartphone - no app downloads required"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-purple-600" />,
                    title: "Enhanced Customer Experience",
                    description: "Provide instant access to help and information anywhere"
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-violet-600" />,
                    title: "Operational Efficiency",
                    description: "Streamline communication and reduce response times"
                  },
                  {
                    icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
                    title: "Easy Implementation",
                    description: "Set up in minutes with simple QR code placement"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 bg-gray-50 rounded-full p-2 shadow-md group-hover:shadow-lg transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:pl-8">
              {/* Professional Communication Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional business communication and customer service"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-green-500 rounded-full p-2">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Live Connection Active</h4>
                        <p className="text-sm text-gray-600">Customer Support • Connected</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        "Hi! I need help with product information. Can you assist me?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business communication? Let's discuss how QR Calls can work for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-purple-100 rounded-full p-3 group-hover:bg-purple-200 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email Us</h4>
                      <p className="text-gray-600">hello@qrcalls.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-emerald-100 rounded-full p-3 group-hover:bg-emerald-200 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-violet-100 rounded-full p-3 group-hover:bg-violet-200 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Visit Us</h4>
                      <p className="text-gray-600">123 Innovation Street<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Why Businesses Choose Us</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">10K+</div>
                    <div className="text-purple-100 text-sm">Active Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">99.9%</div>
                    <div className="text-purple-100 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">40%</div>
                    <div className="text-purple-100 text-sm">Satisfaction Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-purple-100 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300">
                    <option>Select your industry</option>
                    <option>Restaurant & Food Service</option>
                    <option>Retail & Shopping</option>
                    <option>Healthcare</option>
                    <option>Events & Entertainment</option>
                    <option>Hospitality & Hotels</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Tell us about your business and how we can help..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#13032d] to-violet-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Communication?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join businesses worldwide that trust QR Calls to deliver instant, seamless customer connections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <QrCode className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">QR Calls</span>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2025 QR Calls. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;