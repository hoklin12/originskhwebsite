
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const OurOriginsSection = () => {
  const renderTimelineBlock = (
    year: string,
    quotes: string[],
    imageLeft: boolean,
    imgSrc: string,
    highlight: boolean = false
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex flex-col ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-6 md:gap-6 py-8 relative`}
      >
        {highlight && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-100/30 to-transparent -z-10" />
        )}

        <motion.div
          initial={{ x: imageLeft ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`w-full md:w-1/2 relative ${imageLeft ? "md:pr-6" : "md:pl-6"}`}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={imgSrc}
              alt={`${year} milestone`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/placeholder.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: imageLeft ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`w-full md:w-1/2 ${
            imageLeft ? "md:pl-6 text-left" : "md:pr-6 text-right"
          }`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              highlight ? "text-orange-600" : "text-gray-900"
            }`}
          >
            {year}
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-6"
          >
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`relative ${
                  imageLeft ? "pl-6 border-l-4" : "pr-6 border-r-4"
                } ${highlight ? "border-orange-400" : "border-gray-200"}`}
              >
                <p
                  className={`text-lg md:text-xl ${
                    highlight ? "text-gray-800" : "text-gray-600"
                  }`}
                >
                  {quote}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="relative pb-32 overflow-hidden">
      <div className="w-full flex justify-center items-center mb-8"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4 px-8 py-48"
      >
        <h2
          className="text-5xl font-normal mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          Our journey
        </h2>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="space-y-12 md:space-y-20 relative">
          {renderTimelineBlock(
            "2017 - 2018",
            [
              "Our creative journey began in Singapore's vibrant ecosystem",
              "Expanded collaborations across Southeast Asia and Australia",
            ],
            true,
            "/pic-2017-2018.jpeg"
          )}
          {renderTimelineBlock(
            "2019",
            [
              "Launched creative consultation services in Cambodia",
              "Developed innovative solutions for emerging markets",
            ],
            false,
            "/pic2019.png"
          )}
          {renderTimelineBlock(
            "2020 - 2021",
            [
              "Helped brands adapt during the pandemic with digital transformation",
              "Pioneered remote creative collaboration frameworks",
            ],
            true,
            "/pic2019.png"
          )}
          {renderTimelineBlock(
            "2022 - 2024",
            [
              "Expanded to full-service production and concept development",
              "Global projects across 5 continents with diverse clients",
            ],
            false,
            "/pic2025.jpg"
          )}
          {renderTimelineBlock(
            "2025",
            [
              "Officially launched ORIGINS STUDIOS as a creative powerhouse",
              "Dedicated to turning bold visions into extraordinary realities",
            ],
            true,
            "/pic2025.jpg",
            true
          )}
        </div>
      </div>
    </section>
  );
};

export default OurOriginsSection;