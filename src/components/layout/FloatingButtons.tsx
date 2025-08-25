import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { whatsapp, pageUp } from "../../assets";

const FloatingButtons = () => {
  const [showPageUp, setShowPageUp] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPageUp(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for contact section clicks
  useEffect(() => {
    const handleContactClick = () => {
      setShowWhatsApp(true);
      // Hide WhatsApp after 10 seconds
      setTimeout(() => setShowWhatsApp(false), 10000);
    };

    // Add click listener to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.addEventListener('click', handleContactClick);
    }

    return () => {
      if (contactSection) {
        contactSection.removeEventListener('click', handleContactClick);
      }
    };
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "918271819813";
    const message = "Hi Yasir! I'd like to discuss a project with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* WhatsApp Button - Only visible after contact section click */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showWhatsApp ? 1 : 0, scale: showWhatsApp ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <img 
            src={whatsapp} 
            alt="WhatsApp" 
            className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300"
          />
        </motion.button>
      </motion.div>

      {/* Page Up Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showPageUp ? 1 : 0, scale: showPageUp ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePageUp}
          className="bg-[#915EFF] hover:bg-[#7B4FD9] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Scroll to top"
        >
          <img 
            src={pageUp} 
            alt="Page Up" 
            className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300"
          />
        </motion.button>
      </motion.div>
    </>
  );
};

export default FloatingButtons;
