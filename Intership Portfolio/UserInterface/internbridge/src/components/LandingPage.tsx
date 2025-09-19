import React from 'react'
import { ArrowRight, Users, Target, Award, Calendar } from 'lucide-react'
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
    
        <div className="absolute inset-0">
        <img 
          src="/Rectangle 1.png" 
          alt="Background shape" 
          className="absolute top-0 right-0 w-1/2 h-auto opacity-20 transform rotate-12"
        />
        <img 
          src="/InternBridge_Digital_Assets.jpg" 
          alt="InternBridge Digital Assets" 
          className="absolute bottom-0 left-0 w-2/3 h-auto opacity-10"
        />
      </div>
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold"><img 
              src="/InternBridge_Digital_Assets.jpg" 
              alt="InternBridge Logo" 
              className="w-12 h-12 object-contain rounded-lg"
            /></div>
            <span className="text-2xl font-bold text-gray-800">InternBridge</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
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
                  { icon: Users, title: "Talent Pipeline", desc: "Build sustainable talent acquisition" },
                  { icon: Target, title: "Structured Programs", desc: "Define clear learning objectives" },
                  { icon: Award, title: "Quality Assurance", desc: "Ensure meaningful experiences" },
                  { icon: Calendar, title: "Full Lifecycle", desc: "From recruitment to conversion" }
                ].map((f, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <f.icon className="w-5 h-5 text-teal-600" />
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
                <Link to="/signup">
                  <button className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2">
                    <span>Sign Up</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <p className="text-sm text-gray-500">
                  Join 500+ companies already transforming their internship programs
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative lg:block hidden">
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Internship Lifecycle</h3>
                  <ul className="space-y-4">
                    {["Define Program Goals", "Recruit & Select Interns", "Onboard & Train", "Monitor & Mentor", "Evaluate & Convert"].map((step, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">{i+1}</div>
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
              { icon: Users, title: "Streamlined Management", desc: "Simplify the internship process with our intuitive platform." },
              { icon: Target, title: "Better Outcomes", desc: "Achieve higher intern-to-employee conversion rates." },
              { icon: Award, title: "Enhanced Experience", desc: "Meaningful, structured experiences for growth." }
            ].map((f, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-teal-600" />
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
