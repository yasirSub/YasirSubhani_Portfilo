import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate to the separate About page
    navigate('/about');
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="bg-black-100 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#915EFF] rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#915EFF] rounded-full translate-x-12 translate-y-12"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] rounded-full mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            
            {/* Title */}
            <h2 className="text-white text-3xl font-bold mb-4">
              Introduction Overview
            </h2>
            
            {/* Description */}
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                Hi, I'm <span className="text-white font-semibold">Yasir Subhani</span>, a passionate 
                Full-Stack Developer with expertise in Flutter, AI automation, and modern web technologies. 
                I excel in integrating AI tools, optimizing databases, and building scalable applications.
              </p>
              <p>
                With over 4 years of experience, I create efficient and user-friendly digital solutions 
                that drive business growth. My focus is on delivering innovative applications that solve 
                real-world problems while maintaining high code quality and performance.
              </p>
            </div>
            
            {/* Read More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReadMore}
              className="mt-6 bg-[#915EFF] hover:bg-[#7B4FD9] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              Read More About Me
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
