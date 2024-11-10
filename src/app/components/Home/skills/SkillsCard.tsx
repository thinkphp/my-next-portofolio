import { skillsData } from "@/app/Data/data";
import Image from "next/image";

const SkillsCard = () => (
  <div className="max-w-4xl mx-auto space-y-6 mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((skill) => (
        <div key={skill.id} className="text-white">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-2">
              <Image
                src={skill.image}
                alt={`${skill.title} icon`}
                height={26}
                width={26}
              />
              <span className="text-lg font-medium">{skill.title}</span>
            </div>
            <span className="text-sm font-medium">{skill.percent}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-zinc-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${skill.percent}` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

);

export default SkillsCard;