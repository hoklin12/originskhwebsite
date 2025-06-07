

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
    src: '/tunsai5.jpeg',
    caption: 'Social Media Contents for Tunsai Water',
    hashtags: '#ALL',
    description: 'Graphics | Ranging from Year 2020 - 2021',
    longDescription: 'We crafted a series of engaging social media graphics for Tunsai Water between 2020 and 2021. Our team focused on vibrant, eye-catching designs to boost brand visibility, incorporating bold colors and dynamic layouts to align with Tunsai’s refreshing identity. This campaign included posts for product launches, seasonal promotions, and community engagement, driving significant interaction across platforms like Instagram and Facebook.',
    width: 800,
    height: 800,
  },
  {
    src: '/custin08.png',
    caption: 'Photography for Hyundai Cambodia',
    hashtags: '#ALL',
    description: 'Gallery | Hyundai Custin',
    longDescription: 'Our photography project for Hyundai Cambodia showcased the sleek and modern Hyundai Custin. We conducted multiple shoots in diverse locations around Cambodia, capturing the vehicle’s design and functionality in urban and scenic settings. The gallery highlights the car’s premium features, with high-resolution images used for marketing materials, dealership displays, and online campaigns.',
    width: 800,
    height: 600,
  },
  {
    src: '/back.jpg',
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#ALL',
    description: 'T-shirt | Hyundai Staria',
    longDescription: 'For Hyundai Cambodia, we designed a custom T-shirt line for the Hyundai Staria launch. The apparel featured minimalist yet bold graphics inspired by the vehicle’s futuristic design, using high-quality fabrics for comfort and durability. These T-shirts were distributed at launch events and promotional campaigns, enhancing brand loyalty and team unity.',
    width: 800,
    height: 1000,
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

