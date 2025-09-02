import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";

const Photography = () => {
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4]);

  const photographyStats = [
    { number: "5+", label: "Years Experience", color: "from-blue-500 to-cyan-500", icon: "📸" },
    { number: "1000+", label: "Photos Captured", color: "from-purple-500 to-pink-500", icon: "🖼️" },
    { number: "10+", label: "Photo Categories", color: "from-green-500 to-emerald-500", icon: "🎨" },
    { number: "24/7", label: "Creative Vision", color: "from-orange-500 to-red-500", icon: "👁️" }
  ];

  const photographyCategories = [
    {
      name: "Portrait Photography",
      description: "Capturing the essence and personality of individuals through professional portrait sessions",
      features: [
        "Professional Headshots",
        "Lifestyle Portraits",
        "Event Photography",
        "Creative Portraits",
        "Family Sessions",
        "Corporate Photography"
      ],
      color: "from-blue-600 to-blue-800",
      icon: "👤",
      examples: ["Business Headshots", "Family Portraits", "Creative Portraits"]
    },
    {
      name: "Landscape Photography",
      description: "Exploring the beauty of nature and capturing stunning landscapes from around the world",
      features: [
        "Nature Landscapes",
        "Cityscapes",
        "Sunrise/Sunset",
        "Mountain Views",
        "Seascapes",
        "Urban Photography"
      ],
      color: "from-green-600 to-emerald-600",
      icon: "🏔️",
      examples: ["Mountain Ranges", "Ocean Views", "City Skylines"]
    },
    {
      name: "Street Photography",
      description: "Documenting everyday life and capturing candid moments in urban environments",
      features: [
        "Candid Moments",
        "Urban Life",
        "Cultural Events",
        "Street Art",
        "People Watching",
        "Documentary Style"
      ],
      color: "from-orange-600 to-red-600",
      icon: "🏙️",
      examples: ["Street Scenes", "Cultural Events", "Urban Life"]
    },
    {
      name: "Macro Photography",
      description: "Exploring the intricate details of small subjects and revealing hidden beauty",
      features: [
        "Close-up Details",
        "Nature Macro",
        "Product Photography",
        "Textures",
        "Abstract Art",
        "Scientific Photography"
      ],
      color: "from-purple-600 to-pink-600",
      icon: "🔍",
      examples: ["Flower Details", "Insect Close-ups", "Texture Studies"]
    }
  ];

  const photographyTechniques = [
    {
      title: "Composition",
      description: "Mastering the art of arranging elements within the frame for maximum visual impact",
      tools: ["Rule of Thirds", "Leading Lines", "Symmetry", "Depth of Field", "Framing"],
      icon: "📐",
      color: "from-blue-500 to-cyan-500",
      details: "Understanding how to compose elements within the frame to create visually appealing and balanced photographs."
    },
    {
      title: "Lighting",
      description: "Working with natural and artificial light to create mood and atmosphere",
      tools: ["Golden Hour", "Natural Light", "Studio Lighting", "Flash Photography", "Light Modifiers"],
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
      details: "Mastering the use of light to enhance subjects and create the desired mood in photographs."
    },
    {
      title: "Post-Processing",
      description: "Enhancing and refining images through digital editing techniques",
      tools: ["Adobe Lightroom", "Photoshop", "Color Grading", "Retouching", "RAW Processing"],
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      details: "Using digital tools to enhance colors, adjust exposure, and bring out the best in captured images."
    },
    {
      title: "Equipment Knowledge",
      description: "Understanding cameras, lenses, and accessories for optimal results",
      tools: ["DSLR/Mirrorless", "Lens Selection", "Tripods", "Filters", "Accessories"],
      icon: "📷",
      color: "from-gray-500 to-slate-500",
      details: "Knowing how to select and use the right equipment for different photography scenarios."
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
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 200, 0],
              y: [0, -50, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          />
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
              {/* Photography Icon */}
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
                  <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-6xl lg:text-7xl xl:text-8xl">
                    📸
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </motion.div>
              </div>
              
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Photography
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mb-6"
            >
              Visual{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Storytelling
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-4"
            >
              Capturing moments, emotions, and stories through the lens of creativity and technical expertise
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              From portraits to landscapes, exploring the world through photography and visual art
            </motion.p>
          </div>

          {/* Photography Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {photographyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Photography Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-4xl text-center mb-12">
              Photography <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Categories</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {photographyCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">{category.name}</h3>
                      <p className="text-gray-400 text-sm">Professional Photography</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-4">Specializations:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`bg-gradient-to-r ${category.color.replace('from-', 'from-').replace('to-', 'to-')}/10 border ${category.color.split(' ')[0].replace('from-', 'border-')}/20 rounded-xl p-4`}>
                      <h5 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                        <span>📷</span>
                        Example Projects
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, exampleIndex) => (
                          <span key={exampleIndex} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photography Techniques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-4xl text-center mb-12">
              Photography <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Techniques</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {photographyTechniques.map((technique, index) => (
                <motion.div
                  key={technique.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{technique.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">{technique.title}</h3>
                      <p className="text-gray-400 text-sm">Professional Skills</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {technique.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technique.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${technique.color}/10 border ${technique.color.split(' ')[0].replace('from-', 'border-')}/20 rounded-xl p-4`}>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {technique.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-2xl mb-4">
                Let's Create Visual Stories Together
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                Whether you need professional photography services, creative consultation, or want to discuss visual storytelling, 
                I'm always excited to connect with fellow creatives and clients!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => window.location.href = '/projects'}
                  className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
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

export default SectionWrapper(Photography, "photography");
