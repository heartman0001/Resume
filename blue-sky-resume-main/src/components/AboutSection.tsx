
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">เกี่ยวกับฉัน</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              สวัสดีครับ! ผมจบวิศวกรรมคอมพิวเตอร์ ม.พะเยา ปัจจุบันพร้อมลุยงานในตำแหน่ง Full-Stack Developer เต็มตัวครับ
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Front-End: ถนัดเขียน React, TypeScript และจัดหน้าด้วย Tailwind CSS เน้นสร้าง UI ที่คลีน สวยงาม และลื่นไหล
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Back-End & Database: ออกแบบสถาปัตยกรรมและจัดการฐานข้อมูลด้วย TypeScript, PHP, SQL และ Cloud DB
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience: มีประสบการณ์ทำโปรเจกต์ระบบจัดการข้อมูลและแอปพลิเคชันผ่าน LINE Front-end Framework (LIFF) ที่ใช้งานได้จริง
              ผมพร้อมนำทักษะการแก้ไขปัญหาเชิงเทคนิคและการคิดเชิงระบบ มาร่วมสร้าง Solution ที่ตอบโจทย์ธุรกิจและเติบโตไปพร้อมกับทีมพัฒนาซอฟต์แวร์ครับ
            </p>
              

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">ความสนใจ</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Web Development</li>
                  <li>• Mobile Development</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">เป้าหมาย</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Front-End Developer</li>
                  <li>• Full-Stack Developer</li>
              
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>Education: B.Eng. in Computer Engineering, University of Phayao</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>Role: Full-Stack Developer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>Front-End: React | TypeScript | Tailwind CSS | Vite</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>Back-End: TypeScript | Node.js | Express | PHP | SQL</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>Specialties: LINE OA & LIFF Development | Responsive UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
