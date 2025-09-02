import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { tradeShieldLogo } from "../../assets";

const TradingFinance = () => {
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4]);
  const tradingStats = [
    { number: "2+", label: "Years Trading", color: "from-green-500 to-emerald-500", icon: "📈" },
    { number: "2", label: "Trading Platforms", color: "from-blue-500 to-cyan-500", icon: "💻" },
    { number: "4", label: "Trading Strategies", color: "from-purple-500 to-pink-500", icon: "📊" },
    { number: "24/7", label: "Market Analysis", color: "from-orange-500 to-red-500", icon: "📊" }
  ];

  const tradingPlatforms = [
    {
      name: "Dhan",
      type: "Stock Market",
      description: "Primary platform for Indian stock market trading and investments",
      features: [
        "NSE & BSE Equity Trading",
        "Futures & Options",
        "Commodity Trading",
        "Real-time Market Data",
        "Advanced Charting Tools",
        "Portfolio Analytics"
      ],
      color: "from-blue-600 to-blue-800",
      icon: "📈",
      referralLink: "https://join.dhan.co/?invite=PGHTT59536",
      referralCode: "PGHTT59536"
    },
    {
      name: "Delta Exchange",
      type: "Crypto Derivatives",
      description: "Leading platform for cryptocurrency derivatives and futures trading",
      features: [
        "Crypto Futures Trading",
        "Options on Crypto",
        "Perpetual Swaps",
        "High Leverage Trading",
        "Advanced Order Types",
        "Risk Management Tools"
      ],
      color: "from-orange-600 to-red-600",
      icon: "₿",
      referralLink: "https://www.delta.exchange/?code=JHCVEB",
      referralCode: "JHCVEB"
    }
  ];

  const tradingStrategies = [
    {
      title: "Technical Analysis",
      description: "Using chart patterns, indicators, and price action to make trading decisions",
      tools: ["RSI", "MACD", "Moving Averages", "Support/Resistance", "Volume Analysis"],
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      details: "Analyzing historical price data and market statistics to identify patterns and predict future price movements."
    },
    {
      title: "Fundamental Analysis",
      description: "Analyzing company financials, market conditions, and economic indicators",
      tools: ["P/E Ratios", "Revenue Growth", "Market Cap", "Industry Analysis", "News Sentiment"],
      icon: "📈",
      color: "from-green-500 to-emerald-500",
      details: "Evaluating a company's intrinsic value by examining financial statements, industry trends, and economic factors."
    },
    {
      title: "Risk Management",
      description: "Implementing strict risk controls to protect capital and maximize returns",
      tools: ["Stop Losses", "Position Sizing", "Diversification", "Portfolio Allocation", "Risk-Reward Ratios"],
      icon: "🛡️",
      color: "from-purple-500 to-pink-500",
      details: "Protecting your capital through disciplined risk controls and position sizing to ensure long-term success."
    },
    {
      title: "Market Psychology",
      description: "Understanding market sentiment and behavioral patterns of traders",
      tools: ["Fear & Greed Index", "Sentiment Analysis", "Volume Patterns", "News Impact", "Social Media Trends"],
      icon: "🧠",
      color: "from-orange-500 to-red-500",
      details: "Reading market emotions and crowd behavior to make contrarian or momentum-based trading decisions."
    }
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
                   Trade Shield
                 </span>
               </span>
             </motion.div>

             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mb-6"
             >
               Trade{" "}
               <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                 Shield
               </span>
             </motion.h1>

             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-4"
             >
               Your gateway to professional trading and financial markets - from stock analysis to crypto derivatives
             </motion.p>
             
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
             >
               Discover trading strategies, platforms, and technologies for successful market participation
             </motion.p>
           </div>

          {/* Trading Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {tradingStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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



          {/* Trading Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-4xl text-center mb-12">
              Trading <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Platforms</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {tradingPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{platform.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">{platform.name}</h3>
                      <p className="text-gray-400 text-sm">{platform.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  
                                     <div>
                     <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                     <div className="grid grid-cols-2 gap-2 mb-6">
                       {platform.features.map((feature, featureIndex) => (
                         <div key={featureIndex} className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                           <span className="text-gray-400 text-sm">{feature}</span>
                         </div>
                       ))}
                     </div>
                     
                     {/* Referral Section */}
                     {platform.referralLink && (
                       <div className={`bg-gradient-to-r ${platform.name === "Dhan" ? "from-blue-500/10 to-blue-600/10 border-blue-500/20" : "from-orange-500/10 to-red-600/10 border-orange-500/20"} border rounded-xl p-4`}>
                         <h5 className={`${platform.name === "Dhan" ? "text-blue-300" : "text-orange-300"} font-semibold mb-2 flex items-center gap-2`}>
                           <span>🎯</span>
                           Join with My Referral
                         </h5>
                         <p className="text-gray-400 text-sm mb-3">
                           Use my referral code to get started on {platform.name}
                         </p>
                         <div className="flex flex-col sm:flex-row gap-3">
                           <button
                             onClick={() => window.open(platform.referralLink, '_blank')}
                             className={`${platform.name === "Dhan" 
                               ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" 
                               : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                             } text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-2`}
                           >
                             <span>🚀</span>
                             Join {platform.name} Now
                           </button>
                           <div className="flex items-center gap-2">
                             <span className="text-gray-400 text-sm">Code:</span>
                             <div className="bg-slate-700/50 border border-slate-600/30 rounded px-3 py-1">
                               <span className={`${platform.name === "Dhan" ? "text-blue-300" : "text-orange-300"} font-mono text-sm`}>
                                 {platform.referralCode}
                               </span>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trading Strategies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-4xl text-center mb-12">
              Trading <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Strategies</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {tradingStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
                >
                  <h3 className="text-white font-bold text-xl mb-4">{strategy.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {strategy.description}
                  </p>
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-3">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {strategy.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/30"
                        >
                          {tool}
                        </span>
                      ))}
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
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-2xl mb-4">
                Let's Connect & Explore Together
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                Whether you're interested in trading strategies, market analysis, or financial technology, 
                I'm always excited to connect with fellow traders and investors!
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

export default SectionWrapper(TradingFinance, "trading-finance");
