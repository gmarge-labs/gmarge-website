import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useRouter, pathForPage, isModifiedClick } from './Router';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigate, currentPage } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as const },
    { label: 'Services', page: 'services' as const },
    { label: 'How It Works', page: 'solutions' as const },
    { label: 'About', page: 'about' as const },
    { label: 'Contact', page: 'contact' as const },
  ];

  const handleNavigation = (page: typeof navItems[0]['page']) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  // Check if current page has dark background
  const hasDarkBackground = currentPage === 'solutions' || currentPage === 'contact';
  const useWhiteText = hasDarkBackground && !scrolled;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-[#BFC0C2]' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation('home')}
            >
              <motion.div
                className="w-[80px] h-[80px] flex items-center justify-center"
                whileHover={{ 
                  rotate: 15,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <ImageWithFallback
                  src="/gmarge-logo-4x.png"
                  alt="G-Marge"
                  width={124}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={pathForPage(item.page)}
                  onClick={(e) => {
                    if (isModifiedClick(e)) return;
                    e.preventDefault();
                    handleNavigation(item.page);
                  }}
                  className={`relative font-bold transition-colors ${
                    useWhiteText 
                      ? 'text-white hover:text-blue-200' 
                      : 'text-black hover:text-[#002B6B]'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      useWhiteText ? 'bg-white' : 'bg-[#002B6B]'
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.button
              onClick={() => handleNavigation('contact')}
              className={`hidden md:block px-6 py-2 rounded-full transition-colors ${
                useWhiteText
                  ? 'bg-white text-[#002B6B] hover:bg-blue-50'
                  : 'bg-[#002B6B] text-white hover:bg-[#004B9B]'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg -ml-6 ${
                useWhiteText
                  ? 'bg-white text-[#002B6B]'
                  : 'bg-[#002B6B] text-white'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-64 bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-black" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col px-6 py-4 space-y-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={pathForPage(item.page)}
                    onClick={(e) => {
                      if (isModifiedClick(e)) return;
                      e.preventDefault();
                      handleNavigation(item.page);
                    }}
                    className="text-left py-3 px-4 rounded-lg text-black hover:bg-[#E8F0FF] hover:text-[#002B6B] transition-colors font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile CTA Button */}
                <motion.button
                  onClick={() => handleNavigation('contact')}
                  className="mt-4 w-full py-3 px-4 rounded-lg bg-[#002B6B] text-white hover:bg-[#002B6B] transition-colors font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Call
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}