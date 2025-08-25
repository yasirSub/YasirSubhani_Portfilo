import { motion } from "framer-motion";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";

const SkillCategory = ({ title, skills, color, iconColor }: { 
  title: string; 
  skills: typeof technologies; 
  color: string;
  iconColor: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.25 }}
      className="bg-black-100 rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      <div className="text-center mb-6">
        <h3 className={`text-${color} text-2xl font-bold mb-2`}>
          {title}
        </h3>
        <div className={`w-16 h-1 bg-gradient-to-r from-${iconColor} to-transparent mx-auto rounded-full`}></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className={`w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center p-4 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-${iconColor}/20 border border-gray-700 group-hover:border-gray-600`}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
              />
            </div>
            <p className="text-white text-sm mt-3 text-center font-medium group-hover:text-[#915EFF] transition-colors duration-300 line-clamp-2">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  // Categorize skills with better organization and proper icons
  const frontendSkills = technologies.filter(skill => 
    ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript', 'React JS', 'Redux Toolkit', 'Tailwind CSS'].includes(skill.name)
  );
  
  const mobileSkills = technologies.filter(skill => 
    ['Flutter', 'Dart'].includes(skill.name)
  );
  
  const backendSkills = technologies.filter(skill => 
    ['Node JS', 'MongoDB', 'Laravel', 'Firebase', 'Supabase'].includes(skill.name)
  );
  
  const aiSkills = technologies.filter(skill => 
    ['Python'].includes(skill.name)
  );
  
  const designSkills = technologies.filter(skill => 
    ['Photoshop', 'Premiere Pro', 'Figma'].includes(skill.name)
  );
  
  const otherSkills = technologies.filter(skill => 
    ['Three JS', 'git', 'docker'].includes(skill.name)
  );

  return (
    <div className="w-full py-20">
      {/* Skills Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mb-16"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-6">
          Skills
        </h2>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-4">
          Technologies I work with
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#00D4FF] mx-auto rounded-full"></div>
      </motion.div>
      
      {/* Skills Categories - 3x2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        <SkillCategory 
          title="Frontend Development" 
          skills={frontendSkills} 
          color="blue-400"
          iconColor="blue-500"
        />
        
        <SkillCategory 
          title="Mobile Development" 
          skills={mobileSkills} 
          color="cyan-400"
          iconColor="cyan-500"
        />
        
        <SkillCategory 
          title="Backend & Database" 
          skills={backendSkills} 
          color="green-400"
          iconColor="green-500"
        />
        
        <SkillCategory 
          title="AI & Machine Learning" 
          skills={aiSkills} 
          color="pink-400"
          iconColor="pink-500"
        />
        
        <SkillCategory 
          title="Design & Creative" 
          skills={designSkills} 
          color="purple-400"
          iconColor="purple-500"
        />
        
        <SkillCategory 
          title="Other Tools" 
          skills={otherSkills} 
          color="orange-400"
          iconColor="orange-500"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
