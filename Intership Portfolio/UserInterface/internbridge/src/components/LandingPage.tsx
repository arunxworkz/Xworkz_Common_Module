import React from 'react'
import { ArrowRight, Users, Target, Award, Calendar, Building2 } from 'lucide-react'
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
    
        {/* Background with InternBridge logo */}
        <div className="absolute inset-0">
          <img 
            src="/InternBridge_Digital_Assets.jpg" 
            alt="InternBridge Background" 
            className="absolute top-0 right-0 w-1/2 h-auto opacity-10 transform rotate-12"
          />
          <img 
            src="/InternBridge_Digital_Assets.jpg" 
            alt="InternBridge Digital Assets" 
            className="absolute bottom-0 left-0 w-2/3 h-auto opacity-5"
          />
        </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <img 
                src="/InternBridge_Digital_Assets.jpg" 
                alt="InternBridge Logo" 
                className="w-8 h-8 object-contain rounded-md"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InternBridge</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Create an internship{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  LIFECYCLE
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empower your company to design, manage, and optimize comprehensive internship programs 
                that bridge the gap between education and professional excellence.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "Talent Pipeline", desc: "Build sustainable talent acquisition", color: "text-blue-600" },
                  { icon: Target, title: "Structured Programs", desc: "Define clear learning objectives", color: "text-purple-600" },
                  { icon: Award, title: "Quality Assurance", desc: "Ensure meaningful experiences", color: "text-indigo-600" },
                  { icon: Calendar, title: "Full Lifecycle", desc: "From recruitment to conversion", color: "text-blue-500" }
                ].map((f, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-blue-100">
                      <f.icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 w-full sm:w-auto">
                      <span>Sign Up</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link to="/signin">
                    <button className="group bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 w-full sm:w-auto">
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <Link to="/demo">
                    <button className="group relative bg-gradient-to-r from-transparent to-transparent border-2 border-dashed border-blue-400 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 w-full sm:w-auto hover:border-solid hover:border-purple-500 hover:text-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">Take a LOOK</span>
                      <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                    </button>
                  </Link>

                </div>
                <p className="text-sm text-gray-500">
                  Join 500+ companies already transforming their internship programs
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative lg:block hidden">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Internship Lifecycle</h3>
                  <ul className="space-y-4">
                    {["Define Program Goals", "Recruit & Select Interns", "Onboard & Train", "Monitor & Mentor", "Evaluate & Convert"].map((step, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">{i+1}</div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Us */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Companies Choose InternBridge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Streamlined Management", desc: "Simplify the internship process with our intuitive platform.", color: "text-blue-600", bgColor: "bg-blue-50" },
              { icon: Target, title: "Better Outcomes", desc: "Achieve higher intern-to-employee conversion rates.", color: "text-purple-600", bgColor: "bg-purple-50" },
              { icon: Award, title: "Enhanced Experience", desc: "Meaningful, structured experiences for growth.", color: "text-indigo-600", bgColor: "bg-indigo-50" }
            ].map((f, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className={`${f.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-100`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage