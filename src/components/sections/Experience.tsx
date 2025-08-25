import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { TExperience } from "../../types";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.8)",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(145, 94, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{ 
        borderRight: "6px solid #915EFF",
        filter: "drop-shadow(0 0 4px rgba(145, 94, 255, 0.3))"
      }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 15px rgba(145, 94, 255, 0.4)",
        border: "2px solid #fff"
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[20px] font-semibold text-white">
              {experience.title}
            </h3>
            <p className="text-[#915EFF] text-[16px] font-medium">
              {experience.companyName}
            </p>
          </div>
          
          {/* Expand/Collapse Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#915EFF] hover:text-white transition-colors duration-200 p-1"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-bold"
            >
              ›
            </motion.div>
          </motion.button>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 mt-3">
                {experience.points.map((point: string, index: number) => (
                  <motion.li
                    key={`experience-point-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-white-100 text-[14px] leading-relaxed flex items-start"
                  >
                    <span className="text-[#915EFF] mr-2 mt-1">•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* Minimalist Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] mb-3"
        >
          Work Experience
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] mx-auto"
        />
      </div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
