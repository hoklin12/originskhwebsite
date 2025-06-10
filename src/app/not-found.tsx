// src/app/not-found.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* 404 Illustration */}
      <div className="mb-8">
        <Image
          src="/dong.png"
          alt="404 - Page not found illustration"
          width={400}
          height={300}
          className="mx-auto"
          priority
        />
      </div>
      
      {/* Alternative: If you don't have a custom image, use this emoji-based design */}
      {/* 
      <div className="text-9xl mb-6">🔍</div>
      */}
      
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Oops! Page Not Found</h2>
      <p className="mb-8 text-lg text-gray-600 max-w-md">
        The page you&apos;re looking for seems to have wandered off into the digital void. 
        Don&apos;t worry, it happens to the best of us!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          🏠 Go Back Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 font-medium"
        >
          📧 Contact Support
        </Link>
      </div>
      
      {/* Fun fact or suggestion */}
      <div className="mt-12 p-4 bg-gray-50 rounded-lg max-w-md">
        <p className="text-sm text-gray-600">
          💡 <strong>Tip:</strong> Check the URL for typos, or use the search function to find what you&apos;re looking for.
        </p>
      </div>
    </div>
  );
}