// app/news/[title]/page.tsx
'use client';
import Image from 'next/image'; // Now used, so no ESLint error
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

// Utility function to slugify titles
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const articles = [
  {
    id: 1,
    title: 'Accelerated by AI: Building New Tools for Today',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '7 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 2,
    title: 'Built to Bring Us Together',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '5 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 3,
    title: 'How to Grow an Agency with Purpose',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '5 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 4,
    title: '2024 Transparency Report',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '5 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 5,
    title: 'AI-Powered Innovations for 2025',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '7 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 6,
    title: 'Connecting Communities in 2025',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '5 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 7,
    title: 'Scaling Agencies with Impact',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '5 minutes',
    content: 'Full content for the article goes here...',
  },
  {
    id: 8,
    title: '2025 Transparency Report',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder3.jpg',
    time: '5 minutes',
    content: 'Full content for the article goes here...',
  },
];

const ArticleDetail = () => {
  const router = useRouter();
  const params = useParams();
  const title = params.title;
  const article = articles.find((a) => slugify(a.title) === title);

  if (!article) {
    notFound();
    return null;
  }

  return (
    <section className="min-h-screen bg-white py-16 text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-medium mb-6">{article.title}</h1>
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={450}
          className="w-full h-auto object-cover rounded-xl mb-6"
          priority
        />
        <div className="flex gap-2 mb-6">
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            ARTICLE
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {article.time}
          </span>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">{article.content}</p>
        <button
          onClick={() => router.back()}
          className="mt-8 flex items-center py-3 px-6 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm"
        >
          Back to News
        </button>
      </div>
    </section>
  );
};

export default ArticleDetail;