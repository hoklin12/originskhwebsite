import { ArrowRight } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section id="journey" className="py-15 md:py-24 bg-white relative overflow-hidden px-8">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 translate-x-5">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl text-black mb-8">
            We’d love to work with you and your team.</h3>
            <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
              Get In Touch <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}