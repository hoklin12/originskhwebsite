
export interface SingleImage {
  src: string;
  width: number;
  height: number;
}
export interface ImageData {
  images: SingleImage[];
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
    images: [
      { src: '/custin08.png', width: 800, height: 600 },
      { src: '/custin16.png', width: 800, height: 600 },
    ],
    caption: 'Photography for Hyundai Cambodia 1',
    hashtags: '#PRODUCTION',
    description: 'Gallery | Hyundai Custin',
    longDescription: 'Our photography project for Hyundai Cambodia showcased the sleek and modern Hyundai Custin. We conducted multiple shoots in diverse locations around Cambodia, capturing the vehicle’s design and functionality in urban and scenic settings. The gallery highlights the car’s premium features, with high-resolution images used for marketing materials, dealership displays, and online campaigns.',
    width: undefined,
    height: undefined,
    src: ""
  },
    {
    images: [
      { src: '/custin16.png', width: 800, height: 600 },
      { src: '/custin08.png', width: 800, height: 600 },

    ],
    caption: 'Photography for Hyundai Cambodia 2',
    hashtags: '#PRODUCTION',
    description: 'Gallery | Hyundai Custin',
    longDescription: 'Our photography project for Hyundai Cambodia showcased the sleek and modern Hyundai Custin. We conducted multiple shoots in diverse locations around Cambodia, capturing the vehicle’s design and functionality in urban and scenic settings. The gallery highlights the car’s premium features, with high-resolution images used for marketing materials, dealership displays, and online campaigns.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/back.jpg', width: 800, height: 800 },
    ],
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#CONCEPT',
    description: 'T-shirt | Hyundai Staria',
    longDescription: 'For Hyundai Cambodia, we designed a custom T-shirt line for the Hyundai Staria launch. The apparel featured minimalist yet bold graphics inspired by the vehicle’s futuristic design, using high-quality fabrics for comfort and durability. These T-shirts were distributed at launch events and promotional campaigns, enhancing brand loyalty and team unity.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/DSC04264.jpg', width: 800, height: 600 },
    ],
    caption: 'Stage Design for Cloud Photo Studio',
    hashtags: '#CREATIVE #PRODUCTION',
    description: 'Launch Event | Into The Cloud CPS Opening',
    longDescription: 'We designed an immersive stage setup for the grand opening of Cloud Photo Studio’s “Into The Cloud” event. The concept blended modern and ethereal elements, using lighting, textures, and spatial design to create a memorable experience. Our team managed everything from ideation to execution, ensuring the stage reflected CPS’s creative vision and wowed attendees.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/DSC06741.png', width: 800, height: 800 },
    ],
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#CREATIVE #PRODUCTION',
    description: 'T-shirt | Hyundai Stargazer X',
    longDescription: 'Our apparel design for the Hyundai Stargazer X featured bold, stylish T-shirts that echoed the vehicle’s rugged and adventurous spirit. We combined durable materials with unique graphic elements, incorporating the Stargazer X’s signature lines and colors. These shirts were a hit at promotional events, strengthening Hyundai Cambodia’s brand presence.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/maxxx-009.png', width: 800, height: 800 },
    ],
    caption: 'Social Media Contents for Tunsai Water',
    hashtags: '#CONCEPT',
    description: 'Graphics | Ranging from Year 2020 - 2021',
    longDescription: 'For Tunsai Water, we developed a robust social media content strategy from 2020 to 2021. Our graphics featured bold visuals and concise messaging to promote the brand’s purity and quality, tailored for platforms like Instagram, Twitter, and Facebook. This campaign increased engagement by 35%, with designs supporting product reveals and seasonal campaigns.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/SMART.png', width: 800, height: 800 },
    ],
    caption: 'Social Media Contents for Tunsai Water',
    hashtags: '#CONCEPT',
    description: 'Graphics | Ranging from Year 2020 - 2021',
    longDescription: 'Our team created a dynamic series of social media graphics for Tunsai Water, running from 2020 to 2021. We focused on clean, modern designs that emphasized the brand’s commitment to hydration and sustainability, using a cohesive color palette and typography. These assets drove follower growth and interaction across multiple digital channels.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/stargazerXPic6.png', width: 800, height: 600 },
    ],
    caption: 'Photography for Hyundai Cambodia 3',
    hashtags: '#PRODUCTION',
    description: 'Gallery | Hyundai Stargazer X',
    longDescription: 'We executed a comprehensive photography project for the Hyundai Stargazer X, capturing its bold design and off-road capability. Shoots took place across Cambodia, blending urban backdrops with rugged terrains to showcase versatility. The resulting gallery was used in marketing collateral, online platforms, and dealership promotions, elevating the model’s appeal.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/mtstick-001.png', width: 800, height: 800 },
    ],
    caption: 'Graphic Design (Print) for MATTER Phnom Penh',
    hashtags: '#CREATIVE',
    description: 'Sticker Pack | Matter’s One',
    longDescription: 'This creative project involved designing a unique sticker pack for MATTER Phnom Penh. Although initially marked as “none,” our team reimagined it with vibrant, artistic graphics tailored to the brand’s identity, delivering a versatile set of stickers for promotional and personal use, enhancing MATTER’s creative outreach.',
    width: undefined,
    height: undefined,
    src: ""
  },
  {
    images: [
      { src: '/tunsai5.jpg', width: 800, height: 800 },
    ],
    caption: 'Graphic Design (Print) for MATTER Phnom Penh',
    hashtags: '#CREATIVE',
    description: 'Sticker pack | Matter\'s One',
    longDescription: 'We designed a custom sticker pack, “Matter’s One,” for MATTER Phnom Penh, blending bold graphics and intricate details for print. Our process involved concept sketches, color selection, and print-ready files, creating a collectible set that amplified brand visibility at events and through retail channels.',
    width: undefined,
    height: undefined,
    src: ""
  },
];

export const imageMap: Record<string, ImageData[]> = {
  ALL: allImages,
  CREATIVE: allImages.filter((item) => item.hashtags.includes('CREATIVE')),
  PRODUCTION: allImages.filter((item) => item.hashtags.includes('PRODUCTION')),
  CONCEPT: allImages.filter((item) => item.hashtags.includes('CONCEPT')),
};

