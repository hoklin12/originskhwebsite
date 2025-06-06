
'use client';
import FloatingShape from '@/app/components/ui/floating-shape';
import { slugify } from '@/app/components/utils/slugify';
import { allImages } from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

export default function WorkDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const captionSlug = params.caption as string;
  const from = searchParams.get('from');

  const work = allImages.find((item) => slugify(item.caption) === captionSlug);

  if (!work) {
    return (
      <section className="min-h-screen bg-transparent py-16 text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-serif mb-6 text-center">Work Not Found</h1>
          <Link
            href={from === 'work' ? '/work' : '/portfolio'}
            className="flex items-center py-3 px-6 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm mx-auto"
          >
            Back to {from === 'work' ? 'Work' : 'Portfolio'}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-transparent py-16 text-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Background shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400" />
          <FloatingShape delay={4} duration={18} className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400" />
          <FloatingShape delay={8} duration={20} className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400" />
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-center" style={{ fontFamily: 'DM Serif Text' }}>
          {work.caption}
        </h1>
        <div className="flex flex-col gap-4 mb-6">
          <span className="bg-gray-200 text-black text-xs font-medium px-3 py-1 rounded-full self-start">
            {work.description}
          </span>
        </div>
        <div className='relative z-10'>
          <Image
            src={work.src}
            alt={work.caption}
            width={work.width}
            height={work.height}
            className="w-full h-auto object-cover rounded-2xl shadow-lg mb-6"
            priority
          />
        </div>
        <p className="text-justify text-gray-600 text-lg leading-relaxed mb-8">
          {work.longDescription}
        </p>
        <Link
          href={from === 'work' ? '/#work' : '/portfolio'}
          className="inline-flex items-center gap-2 py-2 px-4 md:py-3 md:px-6 bg-orange-400 text-white rounded-full font-semibold hover:bg-black transition-colors duration-300 text-sm shadow-md hover:shadow-lg"
        >
          Back to {from === 'work' ? 'Work' : 'Portfolio'}
        </Link>
      </div>
    </section>
  );
}