
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";

type SubscriptionStatus = {
  success: boolean;
  message: string;
} | null;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSubscriptionStatus({ success: false, message: "Please enter a valid email address" });
      return;
    }
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptionStatus({ 
        success: true, 
        message: "Thank you for subscribing to our newsletter!" 
      });
      setEmail("");
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 5000);
    } catch {
      setSubscriptionStatus({ 
        success: false, 
        message: "Subscription failed. Please try again later." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-black pb-8 text-gray-500 overflow-x-hidden px-8 md:px-8 pt-6">
      <div className="w-full">
        <div className="grid grid-cols-12 gap-4 md:gap-8 w-full">
          {/* Newsletter section with logo */}
        <div className="col-span-12 md:col-span-5 flex flex-row items-start gap-6 mb-8 md:mb-0">
          {/* Logo wrapper */}
          <div className="flex-none w-[120px]">
            <Link href="/">
              <Image
                src="/logostar.png"
                alt="Origins Logo"
                width={150}
                height={150}
                className="h-auto w-full max-w-[120px]"
                priority
                rel="preload"
              />
            </Link>
          </div>

          {/* Newsletter content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg md:text-2xl font-semibold text-white mb-4 md:mb-6">
              Keep up to date with our quarterly newsletter
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with our latest projects, news, and insights.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="mt-4 md:mt-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address..."
                  className="w-full bg-gray-200 px-3 md:px-4 py-2 md:py-3 rounded-full mb-3 md:mb-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
                  aria-label="Email address"
                  required
                />

                <button 
                type="submit"
                className="flex items-center px-3 py-1 md:px-6 md:py-3 bg-black text-white border-2 border-white rounded-full font-bold hover:bg-orange-400 hover:text-white transition-colors text-sm md:text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </>
                )}
              </button>
                {subscriptionStatus && (
                  <p className={`text-sm mt-2 ${subscriptionStatus.success ? "text-green-600" : "text-red-600"}`}>
                    {subscriptionStatus.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
          {/* Links Sections */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4 md:gap-8 w-full md:pl-24 pl-6">
            {/* Get in touch */}
            <div>
              <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider mb-3 md:mb-4">
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
              <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider mb-3 md:mb-4">
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
              <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider mb-3 md:mb-4">
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

