import IconBall from "../canvas/IconBall";
import { SectionWrapper } from "../../hoc";
import { 
  frontendTechnologies, 
  mobileTechnologies, 
  backendTechnologies, 
  designTools, 
  developmentTools 
} from "../../constants";

const Tech = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      technologies: frontendTechnologies,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile app development",
      technologies: mobileTechnologies,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend Development",
      description: "Server-side technologies and databases",
      technologies: backendTechnologies,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design & Creative Tools",
      description: "Adobe Creative Suite and design tools",
      technologies: designTools,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Development Tools",
      description: "Essential development and version control tools",
      technologies: developmentTools,
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <div className="w-full">
      {/* Main Header */}
      <div className="text-center mb-16">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills & Technologies
        </h2>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-4">
          My technical expertise across different domains
        </p>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          From frontend frameworks to design tools, I've mastered a diverse range of technologies 
          to create comprehensive digital solutions.
        </p>
      </div>
      
      {/* Skill Categories */}
      <div className="space-y-20">
        {skillCategories.map((category) => (
          <div key={category.title} className="w-full">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className={`w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                <h3 className="text-white font-bold md:text-[32px] sm:text-[28px] xs:text-[24px] text-[20px]">
                  {category.title}
                </h3>
                <div className={`w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            {/* Technology Icons */}
            <div className="flex flex-row flex-wrap justify-center gap-10">
              {category.technologies.map((tech) => (
                <IconBall key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-white font-bold text-2xl mb-4">
            Why This Skill Set?
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            My diverse skill set allows me to handle projects from concept to completion. 
            Whether it's building responsive web applications, developing mobile apps, 
            creating stunning designs, or setting up robust backend systems - I can deliver 
            comprehensive solutions that meet modern development standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
