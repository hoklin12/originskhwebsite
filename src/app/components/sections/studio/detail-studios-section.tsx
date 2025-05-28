import { ArrowRight } from "lucide-react";

export default function DetailStudioSection() {
  return (
    <section id="journey" className="py-16 bg-white relative overflow-hidden px-8">
      
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8">
          <p className="text-gray-600">OUR STUDIOS</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pt-16">
          {/* Left Section - Large Brand Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-8xl md:text-9xl lg:text-8xl font-serif font-light text-black leading-none">
              Creative
            </h1>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
                ORIGINS Creative brings ideas to life through design, interactivity, and expression. 
                From graphic design and visual branding to social media content and experiential art, 
                this sector focuses on visual storytelling that’s bold, stylish, and unforgettable.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="space-y-2">
                <p className="text-gray-600">Branding & Visual Identity</p>
                <p className="text-gray-600">Graphic Design (Digital & Print)</p>
                <p className="text-gray-600">Social Media Content & Templates</p>
                <p className="text-gray-600">Creative Direction & Art Styling</p>
                <p className="text-gray-600">Web & UI/UX Design</p>
              </div>
            </div>

            <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base">
              See Work <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto pt-8">
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Section - Large Brand Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-8xl md:text-9xl lg:text-8xl font-serif font-light text-black leading-none">
              Production
            </h1>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
                ORIGINS Production is our powerhouse of content creation. We craft high-impact visuals through cinematic storytelling, 
                precise editing, and compelling audio-visual experiences. From branded films to social media content, we transform ideas 
                into stories that move people.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="space-y-2">
                <p className="text-gray-600">Video Production & Direction</p>
                <p className="text-gray-600">Cinematography & Photography</p>
                <p className="text-gray-600">Editing & Post-production</p>
                <p className="text-gray-600">Motion Graphics & Animations</p>
                <p className="text-gray-600">Events & Performance Coverage</p>
              </div>
            </div>

            <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base">
              See Work <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>


      <div className="container relative z-10 px-4 mx-auto pt-8">
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Section - Large Brand Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-8xl md:text-9xl lg:text-8xl font-serif font-light text-black leading-none">
              Concept
            </h1>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
                ORIGINS Concepts develops and manages original ideas and lifestyle projects, 
                including curated product lines, spatial concepts, and branded environments. 
                It’s where creativity meets entrepreneurship. The forefront of our side ventures 
                and innovative brand experiences.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="space-y-2">
                <p className="text-gray-600">ORIGINS Coffee & Gallery</p>
                <p className="text-gray-600">Product Curation & Merchandise </p>
                <p className="text-gray-600">Pop-up & Event Concepts</p>
                <p className="text-gray-600">Spatial & Interior Branding</p>
                <p className="text-gray-600">Experience-based Retail Concepts</p>
              </div>
            </div>

            <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base">
              See Work <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

