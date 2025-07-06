
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
              สวัสดีครับ! ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์จากมหาวิทยาลัยพะเยา 
              ผมมีความหลงใหลในการพัฒนาเว็บไซต์และแอปพลิเคชัน 
              โดยเฉพาะในด้าน Front-End ที่เน้นการออกแบบ UI ให้สวยงามและใช้งานง่าย
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              ผมมีประสบการณ์ในการพัฒนาโปรเจกต์จริง 
              เช่น แอป Team-UP สำหรับนัดเพื่อนเตะบอล และเว็บไซต์จองโต๊ะร้านชาบู ซึ่งช่วยให้ผมได้ฝึกฝนทักษะทั้งด้านการออกแบบ UI/UX และการเขียนโค้ดด้วย HTML, CSS, JavaScript, Flutter, Dart และภาษาอื่น ๆ
              ในอนาคต ผมตั้งเป้าที่จะเป็น Front-End Developer
              ที่มีความเชี่ยวชาญ สามารถสร้างสรรค์เว็บไซต์และแอปพลิเคชันที่ตอบโจทย์ผู้ใช้ได้อย่างแท้จริง ทั้งในด้านความสวยงาม ความเร็ว และประสิทธิภาพ
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">ความสนใจ</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Web Development</li>
                  <li>• Mobile Development</li>
                  <li>• UI/UX Design</li>
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
                  <span>นักศึกษาปี 3 วิศวกรรมคอมพิวเตอร์</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                  <span>มีประสบการณ์ทำโปรเจกต์ 2+ โปรเจกต์</span>
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
