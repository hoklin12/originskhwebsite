import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [viewportSize, setViewportSize] = useState(100);
  
  // Track viewport size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      // This is just an example - in a real app you might use more sophisticated methods
      const width = window.innerWidth;
      if (width < 480) setViewportSize(25);
      else if (width > 1920) setViewportSize(200);
      else setViewportSize(100);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getInTouchLinks = [
    { name: "Start a Project", href: "/contact" },
    { name: "Join the Team", href: "/careers" },
    { name: "Press & Media", href: "/press" },
    { name: "Drop Us a Note", href: "/contact" },
  ];

  const seeMoreLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Latest", href: "/latest" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const followAlongLinks = [
    { name: "Instagram", href: "https://instagram.com/instrument" },
    { name: "LinkedIn", href: "https://linkedin.com/company/instrument" },
    { name: "Twitter", href: "https://twitter.com/instrument" },
  ];

  // Responsive font and spacing classes based on viewport size
  const getFontSize = (baseSize: string) => {
    if (viewportSize <= 25) return `text-${baseSize === 'xs' ? 'xs' : 'sm'}`;
    if (viewportSize >= 200) return `text-${baseSize === 'xs' ? 'sm' : '3xl'}`;
    return `text-${baseSize}`;
  };

  return (
    <footer className="bg-white sm:py-12 lg:py-16 text-gray-500 overflow-x-hidden ">
      <div className="container mx-auto px-8 lg:px-10">
        {/* Main content - Responsive grid for all screen sizes */}
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 sm:gap-y-12 lg:gap-x-8">
          {/* Newsletter subscription - Full width on small screens, 1/3 on larger */}
          <div className="sm:col-span-2 lg:col-span-4 max-w-lg">
            <h2 className={`${getFontSize('2xl')} font-semibold text-black mb-4 sm:mb-6`}>
              Keep up to date with our quarterly newsletter, "You've got mail."
            </h2>
            <div className="mt-4 sm:mt-6">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full bg-gray-200 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4 mx-2 my-2 sm:mx-0 "
                aria-label="Email address"
              />
              <button 
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full inline-flex items-center mx-2 my-2 sm:mx-0"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links Sections - Responsive column layout */}
          <div className="sm:col-span-2 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Get in touch */}
            <div>
              <h3 className={`${getFontSize('xs')} font-semibold text-black uppercase tracking-wider mb-3 sm:mb-4`}>
                GET IN TOUCH
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-500">
                {getInTouchLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${getFontSize('sm')} hover:text-gray-800 transition-colors block py-1`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* See more */}
            <div>
              <h3 className={`${getFontSize('xs')} font-semibold text-black uppercase tracking-wider mb-3 sm:mb-4`}>
                SEE MORE
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-500">
                {seeMoreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${getFontSize('sm')} hover:text-gray-800 transition-colors block py-1`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow along */}
            <div>
              <h3 className={`${getFontSize('xs')} font-semibold text-black uppercase tracking-wider mb-3 sm:mb-4`}>
                FOLLOW ALONG
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-500">
                {followAlongLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${getFontSize('sm')} hover:text-gray-800 transition-colors block py-1`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${link.name} page`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/sitemap" className="hover:text-gray-800 transition-colors">
              Sitemap
            </Link>
            <Link href="/privacy" className="hover:text-gray-800 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <span className="text-xs sm:text-sm">© 2025, Instrument. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}





