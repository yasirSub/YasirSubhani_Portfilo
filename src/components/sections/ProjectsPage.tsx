import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../../constants";
import { github, close } from "../../assets";
import { TProject } from "../../types";
import {
  installer2,
  installer3,
  installer4,
  installer5,
  installerStarting,
  medikalam2,
  medikalam3,
  medikalam4,
  medikalam5,
  medikalam6,
  medikalamStart,
  medikalamStart2,
  sigma,
  sigmaTravel,
  sigmaHome,
} from "../../assets";

interface ProjectModalProps {
  project: TProject;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get multiple screenshots for each project based on available images
  const getProjectScreenshots = (projectName: string) => {
    const screenshots: string[] = [];
    
    // Add the main project image
    screenshots.push(project.image);
    
    // Add additional screenshots based on project type - ONLY for the specific project
    if (projectName.toLowerCase().includes('installer') && projectName.toLowerCase().includes('app')) {
      // ONLY for "Installer App" project
      screenshots.push(installer2);
      screenshots.push(installer3);
      screenshots.push(installer4);
      screenshots.push(installer5);
      screenshots.push(installerStarting);
    } else if (projectName.toLowerCase().includes('medikalam') && projectName.toLowerCase().includes('calorie')) {
      // ONLY for "Medikalam Calorie" project
      screenshots.push(medikalam2);
      screenshots.push(medikalam3);
      screenshots.push(medikalam4);
      screenshots.push(medikalam5);
      screenshots.push(medikalam6);
      screenshots.push(medikalamStart);
      screenshots.push(medikalamStart2);
    } else if (projectName.toLowerCase().includes('sigma') && projectName.toLowerCase().includes('travel')) {
      // ONLY for "Sigma Travel" project
      screenshots.push(sigma);
      screenshots.push(sigmaHome);
      screenshots.push(sigmaTravel);
    } else if (projectName.toLowerCase().includes('wesync')) {
      // ONLY for "WeSync" project - use its own images, not installer images
      screenshots.push(project.image);
      screenshots.push(project.image);
      screenshots.push(project.image);
    } else {
      // For all other projects: only show the main project image
      // No duplicate images to avoid confusion
      screenshots.push(project.image);
    }
    
    return screenshots;
  };

  const screenshots = getProjectScreenshots(project.name);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-black-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-white text-2xl font-bold">{project.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <img src={close} alt="close" className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Screenshots Slideshow */}
              <div className="mb-8">
                <div className="relative group">
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                    <img
                      src={screenshots[currentImageIndex]}
                      alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                      →
                    </button>
                  </div>
                  
                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-[#915EFF] scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Screenshot Counter */}
                  <div className="text-center mt-2">
                    <span className="text-gray-400 text-sm">
                      Screenshot {currentImageIndex + 1} of {screenshots.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-3">Description</h3>
                <p className="text-secondary text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Tags */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} bg-opacity-20 backdrop-blur-sm`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.sourceCodeLink, "_blank")}
                  className="flex-1 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <img src={github} alt="github" className="w-5 h-5" />
                  View Source Code
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00D4FF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🚀 Live Demo (Coming Soon)
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard: React.FC<TProject & { index: number; onProjectClick: (project: TProject) => void }> = ({ 
  name, 
  description, 
  tags, 
  image, 
  sourceCodeLink, 
  index,
  onProjectClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.25 }}
      className="bg-black-100 p-5 rounded-2xl sm:w-[400px] w-full group hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => onProjectClick({ name, description, tags, image, sourceCodeLink })}
    >
      {/* Project Image Container - Fixed aspect ratio for landscape */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl" />
        
        {/* Overlay with project info */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-black bg-opacity-80 p-3 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-1">{name}</h3>
            <p className="text-gray-300 text-xs line-clamp-2">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px] group-hover:text-[#915EFF] transition-colors duration-300">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag.name}
            className={`text-[12px] px-2 py-1 rounded-full ${tag.color} bg-opacity-20 backdrop-blur-sm`}
          >
            #{tag.name}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-[12px] px-2 py-1 rounded-full bg-gray-600 text-gray-300">
            +{tags.length - 3} more
          </span>
        )}
      </div>

      {/* Click hint */}
      <div className="mt-4 text-center">
        <span className="text-[#915EFF] text-sm font-medium">Click to view details</span>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "all", 
    "flutter", 
    "react-native", 
    "ai", 
    "python", 
    "mobile", 
    "web", 
    "expo"
  ];
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.name.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 12);

  const handleProjectClick = (project: TProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-4"
          >
            All Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-4"
          >
            Explore my complete portfolio of work
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg max-w-2xl mx-auto"
          >
            Click on any project to view detailed information, screenshots, and access source code
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} 
              {category !== "all" && ` (${filteredProjects.filter(project => 
                project.tags.some(tag => tag.name.toLowerCase().includes(category.toLowerCase()))
              ).length})`}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              {...project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </motion.div>

        {/* View More Button */}
        {filteredProjects.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? "Show Less" : `View More (${filteredProjects.length - 12} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mt-16 text-secondary"
        >
          <p className="text-lg">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Total: {projects.length} projects in portfolio
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
