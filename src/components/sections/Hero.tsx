import { motion } from "framer-motion";
import ParticlesBackground from "../canvas/ParticlesBackground";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+918271819813";
  };

  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden flex items-center">
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
      
      {/* Responsive Grid Pattern */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Responsive Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-4 sm:top-20 sm:left-20 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-20 right-8 sm:top-40 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-20 left-8 sm:bottom-40 sm:left-32 w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-32 right-4 sm:top-60 sm:right-20 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
            {/* Left Side - Professional Indicator (Desktop Only) */}
            <motion.div 
              className="hidden lg:flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.6)",
                    "0 0 0 rgba(59, 130, 246, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="h-32 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent rounded-full" />
            </motion.div>

            {/* Main Content */}
            <motion.div 
              className="flex-1 max-w-4xl text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Professional Badge */}
              <motion.div 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                  <motion.div 
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Full-Stack Developer & AI Specialist
                  </span>
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="font-black text-white text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[90px] leading-[1.1] sm:leading-[1.2] lg:leading-[1.1] mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Hi, I'm{" "}
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Yasir Subhani
                </motion.span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.h2 
                className="text-gray-300 font-medium text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] leading-[1.3] sm:leading-[1.4] lg:leading-[1.3] mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Building the Future with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  Code & AI
                </span>
              </motion.h2>

              {/* Professional Description */}
              <motion.p 
                className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-8 sm:mb-10 font-light mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Web & Android App Developer specializing in Flutter, AI automation, and Full-stack development. 
                I excel in integrating AI tools, optimizing databases, and building scalable applications.
              </motion.p>

              {/* Professional Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {[
                  { number: "25+", label: "Projects", color: "from-blue-500 to-cyan-500" },
                  { number: "4+", label: "Years Exp", color: "from-green-500 to-emerald-500" },
                  { number: "15+", label: "Clients", color: "from-purple-500 to-pink-500" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Professional Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <motion.button
                  onClick={() => window.location.href = '/projects'}
                  className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    View Projects
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
                

                
                <motion.button
                  onClick={handleCall}
                  className="group bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Contact Me
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>

              {/* Professional Social Links */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <span className="text-gray-500 text-sm font-medium">Connect with me:</span>
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { icon: "GitHub", link: "https://github.com", color: "text-gray-400 hover:text-white" },
                    { icon: "LinkedIn", link: "https://linkedin.com", color: "text-gray-400 hover:text-blue-400" },
                    { icon: "Twitter", link: "https://twitter.com", color: "text-gray-400 hover:text-blue-500" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.icon}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} transition-all duration-300 font-medium text-sm hover:scale-110 transform`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <motion.div 
          className="flex flex-col items-center text-gray-400 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xs sm:text-sm mb-2 sm:mb-3 font-medium group-hover:text-blue-400 transition-colors duration-300">
            Scroll Down
          </span>
          <motion.div 
            className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent rounded-full"
            animate={{ 
              scaleY: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-cyan-500 to-transparent rounded-full mt-1 sm:mt-2"
            animate={{ 
              scaleY: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
