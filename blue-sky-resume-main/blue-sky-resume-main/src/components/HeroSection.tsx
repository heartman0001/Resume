
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
              <img
                src="src/image/45342.jpg"
                 className="w-auto h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl"
                >
              </img>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Jadesadakorn  Sermsrap
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 mb-6 font-medium">
            Front-End Developer
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            นักศึกษาวิศวกรรมคอมพิวเตอร์ที่มีความหลงใหลในการพัฒนาเว็บไซต์และแอปพลิเคชัน
            พร้อมเรียนรู้และสร้างสรรค์สิ่งใหม่ ๆ อยู่เสมอ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToNext}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              ดูผลงาน
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
