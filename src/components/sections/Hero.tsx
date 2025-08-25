import { motion } from "framer-motion";
import { styles } from "../../constants/styles";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+918271819813";
  };

  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      {/* Enhanced Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]" />
      
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 z-1">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(145, 94, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Enhanced floating accent elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] rounded-full opacity-20 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-[#7B4FD9] to-[#915EFF] rounded-full opacity-20 blur-3xl" 
        />
        
        {/* Additional floating elements */}
        <motion.div 
          animate={{ 
            x: [0, 15, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-[#915EFF] rounded-full opacity-10 blur-2xl" 
        />
      </div>

      {/* Main Content - Enhanced Foreground Layer */}
      <div className="relative z-10 h-full flex items-center pt-16">
        <div
          className={`mx-auto max-w-6xl ${styles.paddingX} flex flex-row items-center gap-6 w-full`}
        >
          {/* Enhanced Left Side - Purple Dot & Line */}
          <div className="mt-5 flex flex-col items-center justify-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(145, 94, 255, 0.7)",
                  "0 0 0 20px rgba(145, 94, 255, 0)",
                  "0 0 0 0 rgba(145, 94, 255, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-5 w-5 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] shadow-lg" 
            />
            <div className="violet-gradient h-32 w-1 sm:h-64 rounded-full" />
          </div>

          {/* Enhanced Center - Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-2"
            >
              <span className="text-[#915EFF] text-base font-medium tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className={`${styles.heroHeadText} text-white leading-tight`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#915EFF] via-[#7B4FD9] to-[#915EFF] bg-clip-text text-transparent animate-pulse">
                Yasir Subhani
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className={`${styles.heroSubText} mt-3 text-white-100 leading-relaxed`}
            >
              Building the Future with{" "}
              <span className="text-[#915EFF] font-semibold">Code & AI</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-4 text-secondary text-[16px] max-w-2xl leading-[28px] font-light"
            >
              Web & Android App Developer specializing in Flutter, AI automation, and Full-stack development. 
              I excel in integrating AI tools, optimizing databases, and building scalable applications.
            </motion.p>

            {/* Enhanced Project Stats - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-6 flex flex-wrap gap-6"
            >
              {[
                { number: "25+", label: "Projects", icon: "🚀" },
                { number: "4+", label: "Years", icon: "⭐" },
                { number: "15+", label: "Clients", icon: "💼" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-xl">{stat.icon}</span>
                    <div className="text-[#915EFF] text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-secondary text-xs font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Action Buttons - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 15px 30px rgba(145, 94, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/projects'}
                className="group bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(145,94,255,0.3)] transform hover:-translate-y-1 border-0 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View Projects</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B4FD9] to-[#915EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 15px 30px rgba(145, 94, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="group bg-transparent border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(145,94,255,0.2)] transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Call Me</span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-lg"
                  >
                    📞
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-[#915EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Social Links - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="text-secondary text-xs font-medium">Follow me:</span>
              <div className="flex gap-3">
                {[
                  { icon: "🐙", label: "GitHub", link: "https://github.com" },
                  { icon: "💼", label: "LinkedIn", link: "https://linkedin.com" },
                  { icon: "🐦", label: "Twitter", link: "https://twitter.com" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xl hover:text-[#915EFF] transition-colors duration-300 cursor-pointer"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More Compact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-secondary"
        >
          <span className="text-xs mb-1">Scroll Down</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
