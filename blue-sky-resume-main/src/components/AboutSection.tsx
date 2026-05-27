
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
Full-Stack Developer รุ่นใหม่ที่มีประสบการณ์จริงจากการพัฒนา Web Application และระบบจัดการข้อมูลในสถาบันการศึกษา มีความเชี่ยวชาญในการสร้างสรรค์หน้าบ้านด้วย React, TypeScript และ Tailwind CSS ควบคู่ไปกับการออกแบบสถาบันหลังบ้านและฐานข้อมูลด้วย PHP, SQL และ Cloud Database (Supabase/MongoDB) มีประสบการณ์พัฒนา LINE Front-end Framework (LIFF) มุ่งมั่นที่จะนำทักษะการคิดเชิงระบบทางวิศวกรรมคอมพิวเตอร์มาร่วมพัฒนาซอฟต์แวร์ที่มีประสิทธิภาพและตอบโจทย์ธุรกิจให้กับองค์กร            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              ผมมีความสามารถในการสร้างสรรค์ระบบตั้งแต่โครงสร้างหลังบ้าน (Back-End) การออกแบบฐานข้อมูลที่มีประสิทธิภาพ ไปจนถึงการส่งมอบหน้าบ้าน (Front-End) ที่ตอบโจทย์ผู้ใช้งานด้วย UI/UX ที่สวยงามและลื่นไหล

จากประสบการณ์ที่ผ่านมา ผมได้พัฒนาโปรเจกต์ที่ผสมผสานเทคโนโลยีสมัยใหม่ เช่น การพัฒนาระบบร่วมกับ LINE Official Account (LINE OA) และ LIFF เพื่อตอบโจทย์ธุรกิจ รวมถึงการออกแบบระบบสนับสนุนการตัดสินใจ (Decision Support System) ที่ต้องจัดการข้อมูลและประมวลผลอย่างแม่นยำ ทำให้ผมเข้าใจภาพรวมของการสร้างสรรค์ซอฟต์แวร์ที่ใช้งานได้จริงตั้งแต่ต้นจนจบกระบวนการครับ
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
                  <span>วิศวกรรมคอมพิวเตอร์</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>มีประสบการณ์ทำโปรเจกต์ 10+ โปรเจกต์</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>ชอบเรียนรู้เทคโนโลยีใหม่</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>มุ่งเน้นการพัฒนา User Interface</span>
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
