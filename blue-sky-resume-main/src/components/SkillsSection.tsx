
import { Code, Palette, Database, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Flutter"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: ["C/C++", "Python", "Dart", "TypeScript"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "UI/UX", "Adobe XD", "Prototyping"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Tools & Others",
      icon: <Database className="w-8 h-8" />,
      skills: ["Git", "Firebase", "MySQL", "Linux"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ทักษะ</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนา</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">ระดับความเชี่ยวชาญ</p>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { skill: "HTML/CSS", level: 90 },
              { skill: "JavaScript", level: 80 },
              { skill: "React", level: 80 },
              { skill: "Flutter", level: 70 },
              { skill: "Python", level: 60 }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-24 text-sm font-medium text-gray-700 text-left">
                  {item.skill}
                </span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm font-medium text-gray-700 text-right">
                  {item.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
