'use client';

import { useRef } from "react";
import Image from "next/image";

export default function OurServicesSection() {
  const activeSpace: "event" | "studio" = "event";
  const containerRef = useRef<HTMLDivElement>(null);

  const spaces = {
    event: {
      title: "Event Space.",
      subtitle: "Suitable for small seminar/meeting up to 30 pax.",
      description: [
        "½ Day or Full-day Events",
        "A minimalist space keeps the attention of your attendees on the things that matter",
      ],
      specs:
        "50m² (Main Event Space) + 20m² (For Catering/Networking), Fully-equipped with Air-conditioning, Projector, LED Lighting, PA Sound System, Parking Space for up to 10 Scooters + 1 Car",
      services: "Catering/Beverages, Photography/Videography",
      images: ["/eventspace1.png", "/eventspace2.png", "/eventspac3.png", "/eventspace4.png"],
      color: "orange",
    },
    studio: {
      title: "Studio Space.",
      subtitle: "Re-surfacable Studio Backdrop with Diffuser Scrim Lighting.",
      description: [
        "Hourly, 1⁄2 Day or Full-day Rental",
        "Unlike traditional studio backdrop with a fixed curve, our studio features a flat, re-surfacable backdrop wall that opens up a world of creative flexibility",
      ],
      specs:
        "Flooring/ Scrim: 4.0m X 2.6m (10.4m2) Backdrop Wall: 4.0m X 2.9m (11.6m2) Hoist-able Diffuser Scrim Lighting Truss (Max Load 25kg)",
      services: "Equipment Rental",
      images: ["/studiospace1.png", "/studiospace2.jpg", "/studiospace3.jpg", "/studiospace4.png"],
      color: "black",
    },
  };

  const currentSpace = spaces[activeSpace];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden px-8">
      <Image
        src={currentSpace.images[0]}
        alt={`${activeSpace} Space Main View`}
        width={800}
        height={500}
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      {currentSpace.images.slice(1).map((img, index) => (
        <div key={index} className="relative overflow-hidden group cursor-pointer rounded-2xl mt-4">
          <Image
            src={img}
            alt={`${activeSpace} Space View ${index + 2}`}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
          />
        </div>
      ))}
    </section>
  );
}
