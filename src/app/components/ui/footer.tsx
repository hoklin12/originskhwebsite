
import Link from "next/link";

export default function Footer() {
  const getInTouchLinks = [
    { id: 1, name: "Start a Project", href: "/contact" },
    { id: 2, name: "Join the Team", href: "/hiring" },
    { id: 3, name: "Drop Us a Note", href: "/contact" },
  ];

  const seeMoreLinks = [
    { id: 4, name: "Home", href: "/" },
    { id: 5, name: "Portfolios", href: "/portfolios" },
    { id: 6, name: "Studios", href: "/studios" },
    { id: 7, name: "About", href: "/about" },
    { id: 8, name: "Hiring", href: "/hiring" },
    { id: 9, name: "News", href: "/news" },
    { id: 10, name: "Contact", href: "/contact" },
  ];

  const followAlongLinks = [
    { id: 11, name: "Instagram", href: "https://instagram.com/originskh" },
    { id: 12, name: "Facebook", href: "https://facebook.com/originsstudioskh" },
    { id: 13, name: "Telegram", href: "https://t.me/originskh" },
  ];

  return (
    <footer className="bg-white pb-8 text-gray-500 overflow-x-hidden px-4 md:px-8">
      {/* Full-width container */}
      <div className="w-full">
        {/* Divider line */}
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>

        {/* Main content grid - Always 3 columns layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 w-full">
          {/* Newsletter subscription */}
          <div className="col-span-12 md:col-span-5 max-w-lg w-full mb-8 md:mb-0">
            <h2 className="text-lg md:text-2xl font-semibold text-black mb-4 md:mb-6">
              Keep up to date with our quarterly newsletter, &ldquo;You&rsquo;ve got mail.&rdquo;
            </h2>
            <div className="mt-4 md:mt-6">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full bg-gray-200 px-3 md:px-4 py-2 md:py-3 rounded-lg mb-3 md:mb-4 text-sm md:text-base"
                aria-label="Email address"
              />
              <button
                className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full inline-flex items-center text-sm md:text-base"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Links Sections - Always horizontal layout */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4 md:gap-8 w-full">
            {/* Get in touch */}
            <div>
              <h3 className="text-xs md:text-sm font-semibold text-black uppercase tracking-wider mb-3 md:mb-4">
                GET IN TOUCH
              </h3>
              <ul className="space-y-1 md:space-y-2 text-gray-500">
                {getInTouchLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm hover:text-gray-800 transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* See more */}
            <div>
              <h3 className="text-xs md:text-sm font-semibold text-black uppercase tracking-wider mb-3 md:mb-4">
                SEE MORE
              </h3>
              <ul className="space-y-1 md:space-y-2 text-gray-500">
                {seeMoreLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm hover:text-gray-800 transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow along */}
            <div>
              <h3 className="text-xs md:text-sm font-semibold text-black uppercase tracking-wider mb-3 md:mb-4">
                FOLLOW ALONG
              </h3>
              <ul className="space-y-1 md:space-y-2 text-gray-500">
                {followAlongLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm hover:text-gray-800 transition-colors block py-1"
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
        <div className="border-t border-gray-200 mt-8 md:mt-16 pt-6 md:pt-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs md:text-sm space-y-4 md:space-y-0 w-full">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <Link href="/" className="hover:text-gray-800 transition-colors">
                Sitemap
              </Link>
              <Link href="/privacy" className="hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
            </div>
            <span className="text-xs md:text-sm">
              © 2025, Origins Studios. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}