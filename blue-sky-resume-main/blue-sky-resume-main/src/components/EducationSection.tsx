
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "วิศวกรรมศาสตรบัณฑิต",
      major: "วิศวกรรมคอมพิวเตอร์",
      school: "มหาวิทยาลัยพะเยา",
      period: "2022 - 2025",
      gpa: "2.73",
      description: "เรียนรู้เกี่ยวกับการพัฒนาซอฟต์แวร์ ระบบฐานข้อมูล และเทคโนโลยีสารสนเทศ",
      current: true
    },
    {
      degree: "มัธยมศึกษาตอนปลาย",
      major: "วิทยาศาสตร์-คณิตศาสตร์",
      school: "โรงเรียนเลยพิทยาคม",
      period: "2019 - 2022",
      gpa: "2.99",
      description: "มุ่งเน้นวิชาคณิตศาสตร์ ฟิสิกส์ และเคมี เป็นพื้นฐานสำหรับการศึกษาต่อด้านวิศวกรรม",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ประวัติการศึกษา</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">เส้นทางการศึกษาและความสำเร็จ</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-5/12">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      edu.current ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    {edu.current && (
                      <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                        กำลังศึกษา
                      </div>
                    )}
                    
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {edu.major}
                    </h4>
                    
                    <p className="text-gray-700 font-medium mb-2">{edu.school}</p>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                      <span className="ml-4 font-medium">เกรดเฉลี่ย: {edu.gpa}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-4 h-4 rounded-full ${
                    edu.current ? "bg-blue-500" : "bg-blue-300"
                  } border-4 border-white shadow-lg z-10`}></div>
                </div>

                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2.73</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">เกรดเฉลี่ยปัจจุบัน</h3>
            <p className="text-gray-600">วิศวกรรมคอมพิวเตอร์</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">15+</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">วิชาที่เรียน</h3>
            <p className="text-gray-600">ด้าน Computer Engineer</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2+</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">โปรเจกต์</h3>
            <p className="text-gray-600">ที่ทำในมหาวิทยาลัย</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
