import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { tradeShieldLogo } from "../../assets";

const BeyondCode = () => {
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4]);

  const interestAreas = [
    {
      title: "Trade Shield",
      subtitle: "Trading & Finance",
      description: "Explore the world of financial markets, trading strategies, and investment insights with my Trade Shield initiative",
      icon: "📈",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
      hoverColor: "hover:border-green-400/70",
      route: "/trading-finance",
      features: ["Stock Market", "Crypto Trading", "Options", "Risk Management"],
      stats: "2+ Years Trading Experience"
    },
    {
      title: "Music",
      subtitle: "Audio & Sound",
      description: "Discover my musical journey, favorite genres, and creative audio projects spanning multiple styles",
      icon: "🎵",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50",
      hoverColor: "hover:border-purple-400/70",
      route: "/music",
      features: ["Electronic", "Ambient", "Production", "Sound Design"],
      stats: "5+ Genres Explored"
    },
    {
      title: "Photography",
      subtitle: "Visual Arts",
      description: "Capture moments and tell stories through the lens - exploring the art of visual storytelling",
      icon: "📸",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      hoverColor: "hover:border-blue-400/70",
      route: "/photography",
      features: ["Landscape", "Portrait", "Street", "Digital Art"],
      stats: "Coming Soon"
    }
  ];

  const beyondCodeStats = [
    { number: "3+", label: "Interest Areas", color: "from-green-500 to-emerald-500", icon: "🎯" },
    { number: "5+", label: "Years Exploring", color: "from-blue-500 to-cyan-500", icon: "⏰" },
    { number: "10+", label: "Skills Developed", color: "from-purple-500 to-pink-500", icon: "🚀" },
    { number: "∞", label: "Passion Level", color: "from-orange-500 to-red-500", icon: "❤️" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-32 w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
          <div className="absolute top-60 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
          
          {/* Floating Trade Shield Logo */}
          <motion.div
            className="fixed top-1/2 right-8 z-50 hidden lg:block"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 1, 1.2]),
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 0.8, 0.6]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
            }}
          >
            <div className="relative">
              <img
                src={tradeShieldLogo}
                alt="Trade Shield"
                className="w-16 h-16 object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full blur-lg animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        <div className={`relative z-10 max-w-7xl ${styles.paddingX} w-full`}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {/* Trade Shield Logo */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                  style={{
                    scale: logoScale,
                    opacity: logoOpacity
                  }}
                >
                  <img
                    src={tradeShieldLogo}
                    alt="Trade Shield Logo"
                    className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </motion.div>
              </div>
              
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Beyond Code
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mb-6"
            >
              Beyond{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Code
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-4"
            >
              Exploring diverse interests beyond programming - from trading and finance to music and creative pursuits
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Discover the multifaceted world of passions that drive innovation and creativity
            </motion.p>
          </div>

          {/* Beyond Code Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {beyondCodeStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center group bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interest Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-4xl text-center mb-12">
              Explore My <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Interests</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {interestAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border ${area.borderColor} rounded-2xl p-8 backdrop-blur-sm ${area.hoverColor} transition-all duration-300 group cursor-pointer hover:scale-105 transform`}
                  onClick={() => window.location.href = area.route}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">{area.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{area.subtitle}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {area.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${area.color} bg-opacity-20 text-white text-xs rounded-full border border-opacity-30`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className={`text-sm font-medium bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}>
                      {area.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-2xl mb-4">
                Let's Connect & Explore Together
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                Whether you're interested in trading, music, photography, or just want to chat about life and passions, 
                I'm always excited to connect with like-minded individuals!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => window.location.href = '/projects'}
                  className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
                >
                  View My Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(BeyondCode, "beyond-code");
