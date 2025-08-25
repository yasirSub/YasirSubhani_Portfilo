import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const windowHeight = window.innerHeight || 1;
      const totalScrollable = Math.max(docHeight - windowHeight, 1);
      const progress = Math.min(Math.max(scrollTop / totalScrollable, 0), 1);

      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize on mount
    handleScroll();

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight as number;
        const rect = current.getBoundingClientRect();
        const sectionTop = rect.top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener("scroll", navbarHighlighter as EventListener);
    };
  }, []);

  const handleNavClick = (navId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${navId}`;
    } else {
      document.getElementById(navId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(navId);
    setToggle(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "py-3 bg-primary/90 backdrop-blur-xl shadow-2xl border-b border-white/10" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className={`mx-auto flex w-full max-w-7xl items-center justify-between transition-all duration-500 ${
        scrolled ? "px-6" : styles.paddingX
      }`}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.div
              animate={{ 
                rotate: scrolled ? [0, 5, -5, 0] : [0, 0, 0, 0],
                scale: scrolled ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.img 
                src="/images.png" 
                alt="YS Logo" 
                className={`object-contain rounded-full shadow-lg transition-all duration-500 ${
                  scrolled ? "h-8 w-8" : "h-10 w-10"
                }`}
                animate={{
                  boxShadow: scrolled 
                    ? "0 0 20px rgba(145, 94, 255, 0.3)" 
                    : "0 0 10px rgba(145, 94, 255, 0.1)"
                }}
              />
              {scrolled && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#915EFF] rounded-full shadow-lg"
                />
              )}
            </motion.div>
            <motion.p 
              className={`font-bold transition-all duration-500 ${
                scrolled 
                  ? "text-[18px] text-[#915EFF]" 
                  : "text-[20px] text-white"
              } group-hover:text-[#915EFF]`}
              animate={{ 
                x: scrolled ? [0, 3, 0] : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {config.html.title}
            </motion.p>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.a
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(nav.id);
                }}
                className={`cursor-pointer font-medium transition-all duration-300 relative ${
                  scrolled 
                    ? "text-[16px]" 
                    : "text-[18px]"
                } ${
                  active === nav.id 
                    ? "text-[#915EFF]" 
                    : "text-secondary hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {nav.title}
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] rounded-full"
                  animate={{ 
                    width: active === nav.id ? "100%" : "0%",
                    opacity: active === nav.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Hover underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              {/* Active indicator dot */}
              {active === nav.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#915EFF] rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div 
          className="flex flex-1 items-center justify-end sm:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className={`object-contain cursor-pointer transition-all duration-500 ${
              scrolled ? "h-6 w-6" : "h-7 w-7"
            }`}
            onClick={() => setToggle(!toggle)}
            animate={{ rotate: toggle ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Mobile Menu */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] rounded-2xl p-6 bg-primary/95 backdrop-blur-md border border-white/10 shadow-2xl"
              >
                <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full"
                    >
                      <motion.a
                        href={`#${nav.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(nav.id);
                        }}
                        className={`font-poppins cursor-pointer font-medium w-full block py-2 px-4 rounded-lg transition-all duration-300 ${
                          active === nav.id 
                            ? "text-[#915EFF] bg-[#915EFF]/10" 
                            : "text-secondary hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {nav.title}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll Progress Bar */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] origin-left"
          style={{ transformOrigin: 'left' }}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
