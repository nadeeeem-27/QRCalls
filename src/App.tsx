import React, { useEffect, useState } from 'react';
import { QrCode, Phone, Users, Clock, CheckCircle, ArrowRight, Smartphone, Utensils, Zap } from 'lucide-react';

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Custom Styles */}
      <style >{`
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
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md fixed w-full top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">QR Calls</span>
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              Skip the Wait,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-violet-300 block">Start the Conversation</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto relative z-10">
              Transform dining with instant QR code connections. Your customers scan, connect, and order 
              directly with waiters through live communication - no apps, no waiting, just pure convenience.
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
                  <p className="text-purple-100 font-medium">Customer scans QR code</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-200/20 to-green-200/20 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
                    <Phone className="h-20 w-20 text-emerald-300 mx-auto animate-bounce" />
                  </div>
                  <p className="text-purple-100 font-medium">Instant connection to waiter</p>
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
              Seamless restaurant communication in three simple steps
            </p>
          </div>

          {/* Professional Process Image */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Customer using smartphone to scan QR code at restaurant table"
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
                description: "Customers scan the unique QR code placed at their table using any smartphone",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Phone className="h-12 w-12" />,
                title: "2. Connect Instantly",
                description: "Secure live connection established immediately with the assigned waiter",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: <Utensils className="h-12 w-12" />,
                title: "3. Order & Enjoy",
                description: "Communicate preferences, place orders, and request service in real-time",
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

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose QR Calls?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your restaurant operations with cutting-edge technology that enhances customer satisfaction and streamlines service delivery.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                    title: "Instant Service Connection",
                    description: "Eliminate waiting times with immediate waiter-customer communication"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-purple-600" />,
                    title: "Enhanced Customer Experience",
                    description: "Provide personalized, attentive service that exceeds expectations"
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-violet-600" />,
                    title: "Operational Excellence",
                    description: "Optimize staff workflow and increase table turnover rates"
                  },
                  {
                    icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
                    title: "Future-Ready Technology",
                    description: "Stay competitive with innovative restaurant communication solutions"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 bg-white rounded-full p-2 shadow-md group-hover:shadow-lg transition-all duration-300">
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
              {/* Professional Restaurant Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern restaurant interior with professional service"
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
                        <p className="text-sm text-gray-600">Table 12 • Connected</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        "Could I get the chef's special with extra vegetables? Thank you!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#13032d] to-violet-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Restaurant Service?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading restaurants worldwide that trust QR Calls to deliver exceptional customer experiences and operational efficiency
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