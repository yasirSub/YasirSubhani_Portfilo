import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../../constants/styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black-100 to-primary py-8 mt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#915EFF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#7B4FD9] rounded-full blur-3xl" />
      </div>

      <div className={`${styles.padding} max-w-6xl mx-auto relative z-10`}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Personal Info - More Compact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <motion.img 
                src="/images.png" 
                alt="YS Logo" 
                className="h-8 w-8 object-contain rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-white text-xl font-bold">Yasir Subhani</h3>
            </div>
            <p className="text-secondary text-xs leading-relaxed">
              Web & Android App Developer specializing in Flutter, AI automation, 
              and full-stack development.
            </p>
            <div className="flex items-center space-x-3 text-xs">
              <motion.a
                href="mailto:yasir.subhani123@gmail.com"
                className="text-secondary hover:text-[#915EFF] transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Email
              </motion.a>
              <motion.a
                href="tel:+918271819813"
                className="text-secondary hover:text-[#915EFF] transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Phone
              </motion.a>
            </div>
            <span className="text-secondary text-xs flex items-center gap-1">
              📍 Kolkata, India
            </span>
          </motion.div>

          {/* Quick Links - More Compact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-white text-lg font-semibold border-b border-[#915EFF]/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#about" className="text-secondary hover:text-[#915EFF] transition-colors text-sm">
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/about" className="text-secondary hover:text-[#915EFF] transition-colors text-sm">
                  About Me
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#work" className="text-secondary hover:text-[#915EFF] transition-colors text-sm">
                  Experience
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#skills" className="text-secondary hover:text-[#915EFF] transition-colors text-sm">
                  Skills
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/projects" className="text-secondary hover:text-[#915EFF] transition-colors text-sm">
                  Projects
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#contact" className="text-secondary hover:text-[#915EFF] transition-colors text-sm">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media & Contact - More Compact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-white text-lg font-semibold border-b border-[#915EFF]/30 pb-2">
              Connect With Me
            </h4>
            <div className="space-y-2">
              {[
                { icon: "💼", label: "LinkedIn", link: "https://linkedin.com/in/yasirsubhani" },
                { icon: "🐙", label: "GitHub", link: "https://github.com/" },
                { icon: "📧", label: "Email", link: "mailto:yasir.subhani123@gmail.com" },
                { icon: "📱", label: "Phone", link: "tel:+918271819813" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target={social.link.startsWith('http') ? "_blank" : undefined}
                  rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-2 text-secondary hover:text-[#915EFF] transition-colors text-sm group"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - More Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#915EFF]/20 pt-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-secondary text-xs">
              © {currentYear} Yasir Subhani. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {[
                { label: "Privacy Policy", link: "#" },
                { label: "Terms of Service", link: "#" }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  className="text-secondary hover:text-[#915EFF] transition-colors text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-4"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
