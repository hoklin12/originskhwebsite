
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import LogoOriginsSection from '../logo-origins-section';

// // Utility function to slugify titles
// const slugify = (text: string) =>
//   text
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)+/g, '');

// interface InstagramPost {
//   id: string;
//   caption?: string;
//   media_url: string;
//   media_type: string; // Added to distinguish between IMAGE and VIDEO
//   thumbnail_url?: string; // Optional, if your API provides it for videos
//   permalink: string;
//   timestamp: string;
// }

// const InstagramNewsSection = React.forwardRef<HTMLElement>((props, ref) => {
//   const [posts, setPosts] = useState<InstagramPost[]>([]);

//   useEffect(() => {
//     fetch('/api/instagram')
//       .then((res) => {
//         if (!res.ok) throw new Error('Network response was not ok');
//         return res.json();
//       })
//       .then((data) => {
//         // Adjust if API returns data directly instead of data.data
//         setPosts(Array.isArray(data.data) ? data.data : data);
//       })
//       .catch((error) => console.error('Error fetching Instagram data:', error));
//   }, []);

//   return (
//     <section ref={ref} className="min-h-screen bg-white text-black pb-24">
//       <div className="w-full flex justify-center items-center pb-12">
//         {/* Logo commented out as per your original code */}
//         <LogoOriginsSection />
        
//       </div>

//       <div className="relative z-10 w-full mx-auto">
//         <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 pb-8 px-12">
//           <Link href="/" className="hover:underline">
//             HOME
//           </Link>
//           <span className="mx-1 text-gray-500">/</span>
//           <span className="text-gray-500">NEWS</span>
//           <div className="pt-6">
//             <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
//           </div>
//         </div>

//         <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-12 px-14">
//           Our Instagram Feed
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-6 lg:px-8">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-2xl overflow-hidden border border-gray-100 duration-300 flex flex-col"
//             >
//               <div className="mb-3">
//                 <div className="flex gap-2 mb-3 px-4 pt-4">
//                   <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
//                     INSTAGRAM
//                   </span>
//                   <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
//                     {new Date(post.timestamp).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <Link href={post.permalink} aria-label="View on Instagram" target="_blank">
//                   <Image
//                     src={
//                       post.media_type === 'VIDEO' && post.thumbnail_url
//                         ? post.thumbnail_url // Use thumbnail_url for videos if available
//                         : post.media_url // Fallback to media_url for images or if no thumbnail
//                     }
//                     alt={post.caption || post.media_type === 'VIDEO' ? 'Instagram video thumbnail' : 'Instagram image'}
//                     width={400}
//                     height={400}
//                     className="w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-xl mx-auto cursor-pointer hover:opacity-90 transition-opacity"
//                     unoptimized // Add unoptimized prop for external images if needed
//                   />
//                 </Link>
//               </div>
//               <div className="p-6 flex-grow">
//                 {post.caption && (
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {post.caption.length > 100 ? post.caption.slice(0, 100) + '...' : post.caption}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="pt-16 px-4 sm:px-6 lg:px-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//             <div className="w-full text-left">
//               <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
//                 See more how we connect through visual storytelling on Instagram.
//               </h3>
//             </div>
//           </div>
//           <Link href={'https://instagram.com/originskh'} target="_blank">
//             <button className="flex items-center py-3 px-6 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base mt-4">
//               Follow on Instagram
//               <motion.div
//                 className="ml-3"
//                 animate={{ x: [0, 6, 0] }}
//                 transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//               >
//                 →
//               </motion.div>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// });

// InstagramNewsSection.displayName = 'InstagramNewsSection';

// export default InstagramNewsSection;


'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LogoOriginsSection from '../logo-origins-section';

interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  media_type: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const InstagramNewsSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const allPosts = Array.isArray(data.data) ? data.data : data;
        const sorted = allPosts.sort(
          (a: { timestamp: string | number | Date; }, b: { timestamp: string | number | Date; }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setPosts(sorted.slice(0, 8));
      })
      .catch((error) => console.error('Error fetching Instagram data:', error));
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-white text-black pb-24">
      <div className="w-full flex justify-center items-center pb-12">
        <LogoOriginsSection />
      </div>

      <div className="relative z-10 w-full mx-auto">
        <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 pb-8 px-12">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <span className="mx-1 text-gray-500">/</span>
          <span className="text-gray-500">NEWS</span>
          <div className="pt-6">
            <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-12 px-14">
          Our Instagram Feed
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-6 lg:px-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 duration-300 flex flex-col px-4"
            >
              <div className="mb-3">
                <div className="flex gap-2 mb-3 pt-4">
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    INSTAGRAM
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {new Date(post.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <Link href={post.permalink} aria-label="View on Instagram" target="_blank">
                  <Image
                    src={
                      post.media_type === 'VIDEO' && post.thumbnail_url
                        ? post.thumbnail_url
                        : post.media_url
                    }
                    alt={
                      post.caption || post.media_type === 'VIDEO'
                        ? 'Instagram video thumbnail'
                        : 'Instagram image'
                    }
                    width={400}
                    height={400}
                    className="w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-xl mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="pb-6 flex-grow">
                {post.caption && (
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-16 px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full text-left">
              <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
                See more how we connect through visual storytelling on Instagram.
              </h3>
            </div>
          </div>
          <Link href={'https://instagram.com/originskh'} target="_blank">
            <button className="flex items-center py-3 px-6 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base mt-4">
              Follow on Instagram
              <motion.div
                className="ml-3"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                →
              </motion.div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

InstagramNewsSection.displayName = 'InstagramNewsSection';

export default InstagramNewsSection;
