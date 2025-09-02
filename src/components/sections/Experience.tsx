import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { TExperience } from "../../types";

const ExperienceCard: React.FC<TExperience & { index: number }> = (experience) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = experience.index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Timeline Glow Effect - Dynamic based on card position */}
      <motion.div
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isLeft 
            ? "linear-gradient(90deg, rgba(145, 94, 255, 0.6) 0%, rgba(145, 94, 255, 0.1) 20%, rgba(145, 94, 255, 0.1) 80%, rgba(145, 94, 255, 0.2) 100%)"
            : "linear-gradient(90deg, rgba(145, 94, 255, 0.2) 0%, rgba(145, 94, 255, 0.1) 20%, rgba(145, 94, 255, 0.1) 80%, rgba(145, 94, 255, 0.6) 100%)",
          filter: "blur(12px)",
          zIndex: -1
        }}
      />
      
      {/* Timeline connection glow - on the timeline side */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isLeft ? "-right-4" : "-left-4"
        }`}
        style={{
          background: "radial-gradient(circle, rgba(145, 94, 255, 0.8) 0%, rgba(145, 94, 255, 0.4) 50%, transparent 100%)",
          filter: "blur(8px)",
          zIndex: -1
        }}
      />
      
      <VerticalTimelineElement
        position={isLeft ? "left" : "right"}
        className="timeline-date-hover"
        contentStyle={{
          background: "rgba(29, 24, 54, 0.8)",
          color: "#fff",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(145, 94, 255, 0.2)",
          backdropFilter: "blur(15px)",
          transition: "all 0.3s ease",
        }}
        contentArrowStyle={{ 
          borderRight: isLeft ? "8px solid #915EFF" : "none",
          borderLeft: !isLeft ? "8px solid #915EFF" : "none",
          filter: "drop-shadow(0 0 8px rgba(145, 94, 255, 0.5))"
        }}
        date={experience.date}
        iconStyle={{ 
          background: experience.iconBg,
          boxShadow: "0 0 25px rgba(145, 94, 255, 0.6)",
          border: "3px solid #fff",
          transition: "all 0.3s ease",
        }}
        icon={
          <motion.div 
            className="flex h-full w-full items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 }
            }}
          >
            <img
              src={experience.icon}
              alt={experience.companyName}
              className="h-[60%] w-[60%] object-contain"
            />
          </motion.div>
        }
      >
        <motion.div 
          className="space-y-3"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[20px] font-semibold text-white group-hover:text-[#915EFF] transition-colors duration-300">
                {experience.title}
              </h3>
              <p className="text-[#915EFF] text-[16px] font-medium group-hover:text-white transition-colors duration-300">
                {experience.companyName}
              </p>
            </div>
            
            {/* Enhanced Expand/Collapse Button */}
            <motion.button
              whileHover={{ 
                scale: 1.2,
                boxShadow: "0 0 20px rgba(145, 94, 255, 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#915EFF] hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-[#915EFF]/20"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xl font-bold"
              >
                ›
              </motion.div>
            </motion.button>
          </div>

          {/* Enhanced Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.ul 
                  className="space-y-3 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {experience.points.map((point: string, index: number) => (
                    <motion.li
                      key={`experience-point-${index}`}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="text-white-100 text-[14px] leading-relaxed flex items-start group/item"
                    >
                      <motion.span 
                        className="text-[#915EFF] mr-3 mt-1 text-lg group-hover/item:text-white transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        •
                      </motion.span>
                      <span className="group-hover/item:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      {/* Enhanced Header with Glow Effect */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] mb-3 relative"
        >
          <motion.span
            whileHover={{
              textShadow: "0 0 20px rgba(145, 94, 255, 0.8), 0 0 40px rgba(145, 94, 255, 0.4)",
              transition: { duration: 0.3 }
            }}
            className="cursor-default"
          >
            Work Experience
          </motion.span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            boxShadow: "0 0 20px rgba(145, 94, 255, 0.6)",
            transition: { duration: 0.3 }
          }}
          className="w-16 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] mx-auto rounded-full"
        />
      </motion.div>

      <motion.div 
        className="mt-16 flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <VerticalTimeline 
          lineColor="rgba(145, 94, 255, 0.3)"
          className="vertical-timeline-custom"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ExperienceCard {...experience} index={index} />
            </motion.div>
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Experience;
