
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Team-UP",
      description: "แอปพลิเคชันสำหรับการจัดการทีมและโปรเจกต์ พัฒนาด้วย Flutter และ Firebase",
      image: "src/image/Teams.png",
      tags: ["Flutter", "MongoDB", "Dart", "Moblie App","Android Studio"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "เรือดำน้ำหุ่นยนต์",
      description: "โปรเจกต์หุ่นยนต์เรือดำน้ำที่สามารถควบคุมผ่านแอปพลิเคชันมือถือ",
      image: "src/image/Ocean.png",
      tags: ["Arduino", "C", "IoT", "Robotics"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "เว็บไซต์จองโต๊ะร้านชาบู",
      description: "เว็บแอปพลิเคชันสำหรับจองโต๊ะร้านอาหาร พร้อมระบบจัดการคิวออนไลน์",
      image: "src/image/Shabu.png",
      tags: ["React", "Node.js", "MySQL", "HTML", "CSS", "JavaScript","Web App"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">โปรเจกต์</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">ผลงานและโปรเจกต์ที่น่าสนใจ</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
