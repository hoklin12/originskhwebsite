

export interface ImageData {
  src: string;
  caption: string;
  hashtags: string;
  description: string;
  longDescription: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const allImages: ImageData[] = [
  {
    src: '/custin08.png',
    caption: 'Photography for Hyundai Cambodia',
    hashtags: '#CONCEPT',
    description: 'Gallery | Hyundai Custin',
    longDescription: 'Our photography project for Hyundai Cambodia showcased the sleek and modern Hyundai Custin. We conducted multiple shoots in diverse locations around Cambodia, capturing the vehicle’s design and functionality in urban and scenic settings. The gallery highlights the car’s premium features, with high-resolution images used for marketing materials, dealership displays, and online campaigns.',
    width: 800,
    height: 600,
  },
  {
    src: '/back.jpg',
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#PRODUCTION',
    description: 'T-shirt | Hyundai Staria',
    longDescription: 'For Hyundai Cambodia, we designed a custom T-shirt line for the Hyundai Staria launch. The apparel featured minimalist yet bold graphics inspired by the vehicle’s futuristic design, using high-quality fabrics for comfort and durability. These T-shirts were distributed at launch events and promotional campaigns, enhancing brand loyalty and team unity.',
    width: 800,
    height: 1000,
  },
  {
    src: '/DSC04264.jpg',
    caption: 'Stage Design for Cloud Photo Studio',
    hashtags: '#CREATIVE #PRODUCTION',
    description: 'Launch Event | Into The Cloud CPS Opening',
    longDescription: 'We designed an immersive stage setup for the grand opening of Cloud Photo Studio’s “Into The Cloud” event. The concept blended modern and ethereal elements, using lighting, textures, and spatial design to create a memorable experience. Our team managed everything from ideation to execution, ensuring the stage reflected CPS’s creative vision and wowed attendees.',
    width: 800,
    height: 600,
  },
  {
    src: '/stargazerXPic6.png',
    caption: 'Photography for Hyundai Cambodia',
    hashtags: '#PRODUCTION',
    description: 'Gallery | Hyundai Stargazer X',
    longDescription: 'We executed a comprehensive photography project for the Hyundai Stargazer X, capturing its bold design and off-road capability. Shoots took place across Cambodia, blending urban backdrops with rugged terrains to showcase versatility. The resulting gallery was used in marketing collateral, online platforms, and dealership promotions, elevating the model’s appeal.',
    width: 800,
    height: 600,
  },
  {
    src: '/DSC06741.png',
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#CREATIVE',
    description: 'T-shirt | Hyundai Stargazer X',
    longDescription: 'Our apparel design for the Hyundai Stargazer X featured bold, stylish T-shirts that echoed the vehicle’s rugged and adventurous spirit. We combined durable materials with unique graphic elements, incorporating the Stargazer X’s signature lines and colors. These shirts were a hit at promotional events, strengthening Hyundai Cambodia’s brand presence.',
    width: 800,
    height: 800,
  },
  {
    src: '/tunsai5.jpg',
    caption: 'Graphic Design (Print) for MATTER Phnom Penh',
    hashtags: '#CREATIVE',
    description: 'Sticker pack | Matter\'s One',
    longDescription: 'We designed a custom sticker pack, “Matter’s One,” for MATTER Phnom Penh, blending bold graphics and intricate details for print. Our process involved concept sketches, color selection, and print-ready files, creating a collectible set that amplified brand visibility at events and through retail channels.',
    width: 800,
    height: 800,
  },
];

export const imageMap: Record<string, ImageData[]> = {
  ALL: allImages,
  CREATIVE: allImages.filter((item) => item.hashtags.includes('CREATIVE')),
  PRODUCTION: allImages.filter((item) => item.hashtags.includes('PRODUCTION')),
  CONCEPT: allImages.filter((item) => item.hashtags.includes('CONCEPT')),
};

