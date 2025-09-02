import { motion } from "framer-motion";
import { styles } from "../../constants/styles";

const OtherPursuits = () => {
  const pursuits = [
    {
      title: "Trading & Finance",
      icon: "📈",
      description: "Active trader with expertise in technical analysis, risk management, and market psychology. I analyze market trends and develop trading strategies.",
      skills: ["Technical Analysis", "Risk Management", "Market Psychology", "Chart Patterns", "Portfolio Management"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Music Production",
      icon: "🎵",
      description: "Passionate about creating music and sound design. I compose, produce, and mix various genres of music.",
      skills: ["Composition", "Sound Design", "Mixing", "Mastering", "Digital Audio Workstations"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Video Production",
      icon: "🎬",
      description: "Creating engaging video content including editing, motion graphics, and visual storytelling.",
      skills: ["Video Editing", "Motion Graphics", "Color Grading", "Visual Effects", "Storytelling"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-20 pb-16">
        <div className={`mx-auto max-w-7xl ${styles.paddingX}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className={`${styles.sectionHeadText} mb-4`}>
              Beyond Code
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              While coding is my primary passion, I also explore other creative and analytical pursuits that help me think differently and bring unique perspectives to my work.
            </p>
          </motion.div>

          {/* Pursuits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pursuits.map((pursuit, index) => (
              <motion.div
                key={pursuit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${pursuit.color} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                  {pursuit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {pursuit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {pursuit.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    Skills & Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pursuit.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why This Matters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Why These Pursuits Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  🧠 Enhanced Problem Solving
                </h3>
                <p className="text-gray-400">
                  Trading teaches me to analyze patterns, manage risk, and make data-driven decisions - skills that directly translate to software development.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  🎨 Creative Thinking
                </h3>
                <p className="text-gray-400">
                  Music and video production develop my creative thinking and attention to detail, helping me create more engaging user experiences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  📊 Data Analysis
                </h3>
                <p className="text-gray-400">
                  Trading involves complex data analysis and pattern recognition, skills that are invaluable in AI and machine learning projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  🎯 User Experience
                </h3>
                <p className="text-gray-400">
                  Creating music and videos helps me understand user emotions and engagement, leading to better UX design in my applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you need a developer who thinks creatively, analyzes data effectively, or understands user experience deeply, I bring a unique combination of technical and creative skills to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/#contact'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-200 shadow-lg"
              >
                Let's Discuss Your Project
              </button>
              <button
                onClick={() => window.location.href = '/#works'}
                className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-200"
              >
                View My Work
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OtherPursuits;
