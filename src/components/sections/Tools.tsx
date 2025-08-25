import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { tools } from "../../constants";

const Tools = () => {
  return (
    <div className="w-full">
      {/* Tools Header */}
      <div className="text-center mb-12">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tools
        </h2>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Development tools I use daily
        </p>
      </div>
      
      {/* Tools Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {tools.map((tool) => (
          <div className="h-28 w-28" key={tool.name}>
            <BallCanvas icon={tool.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tools, "tools");
