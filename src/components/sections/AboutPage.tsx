import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-primary py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#915EFF] bg-opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-[#7B4FD9] bg-opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#915EFF] bg-opacity-20 rounded-full blur-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-black md:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] mb-6 bg-gradient-to-r from-white via-[#915EFF] to-white bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider"
          >
            Get to know me better
          </motion.p>
        </motion.div>

        {/* Enhanced Personal Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left Column - Personal Details with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(145, 94, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-black-100 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-transparent to-[#7B4FD9] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                <motion.span 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-[#915EFF] mr-3 text-2xl"
                >
                  👤
                </motion.span>
                Personal Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "📛", label: "Name:", value: "Yasir Subhani" },
                  { icon: "📧", label: "Email:", value: "yasir.subhani123@gmail.com" },
                  { icon: "📱", label: "Phone:", value: "+91 8271819813" },
                  { icon: "📍", label: "Location:", value: "Kolkata, India" },
                  { icon: "🎯", label: "Role:", value: "Full-Stack Developer" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-[#915EFF] text-lg"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-secondary">{item.label}</span>
                    <span className="text-white font-medium group-hover/item:text-[#915EFF] transition-colors duration-300">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Education Section */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(145, 94, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-black-100 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-transparent to-[#7B4FD9] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                <motion.span 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-[#915EFF] mr-3 text-2xl"
                >
                  🎓
                </motion.span>
                Education
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "MCA (Master of Computer Applications)",
                    institution: "Amity University",
                    duration: "2024 - Present",
                    location: "India",
                    tags: ["Advanced CS", "Software Engineering", "Research"],
                    isCurrent: true
                  },
                  {
                    title: "BCA (Bachelor of Computer Applications)",
                    institution: "Amity University",
                    duration: "2020 - 2023",
                    location: "India",
                    tags: ["Computer Science", "Programming", "Web Development"],
                    isCurrent: false
                  },
                  {
                    title: "12th (Higher Secondary)",
                    institution: "High School Sabour",
                    duration: "2018",
                    location: "India",
                    tags: ["Science Stream", "Mathematics"],
                    isCurrent: false
                  },
                  {
                    title: "10th (Matriculation)",
                    institution: "Millia Convent English School",
                    duration: "2014 - 2015",
                    location: "India",
                    tags: ["English Medium", "General Studies"],
                    isCurrent: false
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="border-l-4 border-[#915EFF] pl-4 group/edu"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold text-lg group-hover/edu:text-[#915EFF] transition-colors duration-300">
                        {edu.title}
                      </h4>
                      {edu.isCurrent && (
                        <motion.span
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: ["0 0 0 rgba(34, 197, 94, 0.4)", "0 0 20px rgba(34, 197, 94, 0.6)", "0 0 0 rgba(34, 197, 94, 0.4)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-xs font-medium border border-green-500"
                        >
                          CURRENT
                        </motion.span>
                      )}
                    </div>
                    <p className="text-secondary group-hover/edu:text-white transition-colors duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-secondary text-sm group-hover/edu:text-white transition-colors duration-300">
                      {edu.duration}
                    </p>
                    <p className="text-secondary text-sm group-hover/edu:text-white transition-colors duration-300">
                      {edu.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-[#915EFF] bg-opacity-20 text-[#915EFF] rounded-full text-xs font-medium hover:bg-[#915EFF] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Expertise with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(145, 94, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-black-100 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-transparent to-[#7B4FD9] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                <motion.span 
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="text-[#915EFF] mr-3 text-2xl"
                >
                  🚀
                </motion.span>
                Core Expertise
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "💻", skill: "Full-Stack Development" },
                  { icon: "📱", skill: "Mobile App Development (Flutter/Dart)" },
                  { icon: "🤖", skill: "AI Integration & Automation" },
                  { icon: "🗄️", skill: "Database Design & Optimization" },
                  { icon: "🎨", skill: "UI/UX Design" }
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    className="flex items-center space-x-3 group/skill"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-[#915EFF] text-lg"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-white group-hover/skill:text-[#915EFF] transition-colors duration-300">
                      {item.skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(145, 94, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-black-100 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-transparent to-[#7B4FD9] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-[#915EFF] mr-3 text-2xl"
                >
                  🎯
                </motion.span>
                Professional Focus
              </h3>
              <p className="text-secondary leading-relaxed group-hover:text-white transition-colors duration-300">
                I specialize in creating innovative digital solutions that drive business growth. 
                My expertise lies in integrating AI tools, optimizing databases, and building 
                scalable applications that deliver exceptional user experiences.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Detailed Description with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true, amount: 0.25 }}
          className="bg-black-100 p-8 rounded-2xl border border-gray-800 mb-20 backdrop-blur-sm relative overflow-hidden group"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-transparent to-[#7B4FD9] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          
          <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-[#915EFF] mr-3 text-2xl"
            >
              📖
            </motion.span>
            My Story
          </h3>
          <div className="space-y-6 text-secondary leading-relaxed">
            {[
              "I'm a passionate Full-Stack Developer with over 4 years of experience in creating innovative digital solutions. My journey in technology began with a curiosity about how things work, which evolved into a deep passion for building applications that solve real-world problems.",
              "Currently pursuing my MCA at Amity University, I'm deepening my knowledge in Advanced Computer Science, Software Engineering, and Research methodologies. This advanced education complements my practical experience, allowing me to approach development challenges with both theoretical understanding and hands-on expertise.",
              "My expertise spans across multiple domains - from web development using modern frameworks like React and Laravel, to mobile app development with Flutter, and cutting-edge AI integration. I believe in the power of technology to transform businesses and improve people's lives.",
              "Currently working at Worksaar as a Full-Stack Developer, I'm constantly learning and adapting to new technologies. My approach combines technical expertise with creative problem-solving, ensuring that every project I work on is not just functional, but also user-friendly and scalable.",
              "When I'm not coding, you'll find me exploring new AI technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always excited to take on new challenges and collaborate with teams to create something amazing."
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="group-hover:text-white transition-colors duration-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Beyond Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-12"
        >
          <motion.h3
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-2xl font-bold mb-4"
          >
            Beyond Code
          </motion.h3>
          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-secondary mb-6"
          >
            Explore my other passions and interests outside of development
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/beyond-code'}
            className="group bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Beyond Code
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Contact CTA with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <motion.h3
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-2xl font-bold mb-4"
          >
            Let's Work Together
          </motion.h3>
          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-secondary mb-6"
          >
            Ready to bring your ideas to life? Let's discuss your project!
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(145, 94, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg text-lg"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
