import { useState } from 'react';
// 1. Added FaInstagram to the imports
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'react-qr-code';

// --- Data & Configuration ---
const personalInfo = {
  name: "Sk Altamash",
  tagline: "Developer of ARQ Marketing",
  avatarSrc: "/img.png", 
  portfolioUrl: "https://iamsk.netlify.app/",
};

const primaryLink = {
  text: "View Portfolio",
  href: personalInfo.portfolioUrl,
  icon: <FaGlobe />,
};

const links = [
    { 
    text: "Instagram", 
    href: "https://www.instagram.com/arq_marketing_official?igsh=MW9rNHE1MXRueHFxYQ==", 
    icon: <FaInstagram /> 
  },
  { text: "GitHub", href: "https://github.com/SkAltmash", icon: <FaGithub /> },
  { text: "LinkedIn", href: "https://linkedin.com/in/altamash-sheikh-1ba6a72aa", icon: <FaLinkedin /> },
  { text: "Email Me", href: "mailto:skaltmash3@gmail.com", icon: <FaEnvelope /> },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function App() {
  const [isQRVisible, setQRVisible] = useState(false);

  return (
    // Use a very dark blue/black background as the base
    <div className="relative min-h-screen bg-[#050a14] text-white overflow-hidden font-sans selection:bg-cyan-500/30">

      {/* --- Advanced Animated Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Blue Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-blue-900/60 blur-[120px]"
        />
        {/* Cyan/Teal Orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-20%] w-[700px] h-[700px] rounded-full bg-cyan-600/50 blur-[130px]"
        />
        {/* Overlay pattern for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>


      {/* --- Main Content Container --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12"
      >

        {/* --- Avatar Section --- */}
        <motion.div variants={itemVariants} className="relative group">
          {/* The heavy gradient glow matching the image */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-500 to-cyan-400 opacity-50 blur-3xl group-hover:opacity-75 transition duration-1000 animate-pulse-slow"></div>
          
          {/* Avatar Image container (Add your image here) */}
          {/* <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl z-10">
             <img src={personalInfo.avatarSrc} alt="Avatar" className="object-cover w-full h-full" />
          </div> */}

        </motion.div>

        {/* --- Name & Tagline --- */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight mb-4
            bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400
            drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100/90 font-medium tracking-wide">
            {personalInfo.tagline}
          </h2>
        </motion.div>

        {/* --- Primary CTA (Portfolio) --- */}
        <motion.div variants={itemVariants} className="mt-10 w-full max-w-xs">
          <motion.a
            whileHover={{ scale: 1.02, translateY: -3 }}
            whileTap={{ scale: 0.98 }}
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl 
            bg-gradient-to-r from-blue-600/80 to-cyan-500/80 text-white font-bold text-lg tracking-wide
            shadow-[0_4px_30px_rgba(6,182,212,0.4)] border border-cyan-300/20 backdrop-blur-sm
            transition-all duration-300"
          >
             {/* Shiny sweep effect on hover */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-1/2 transition-transform duration-700 ease-in-out z-0"></div>
            <span className="relative z-10">{primaryLink.icon}</span>
            <span className="relative z-10">{primaryLink.text}</span>
          </motion.a>
        </motion.div>

        {/* --- Secondary Links (Glassmorphism) --- */}
        <motion.div variants={containerVariants} className="mt-8 w-full max-w-sm flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-6 py-4 rounded-xl
              bg-white/5 border border-white/10 backdrop-blur-md
              hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <span className="flex items-center gap-4 text-lg font-medium text-gray-200 group-hover:text-white">
                <span className="text-2xl text-cyan-500 group-hover:text-cyan-300 group-hover:scale-110 transition duration-300 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {link.icon}
                </span>
                {link.text}
              </span>
               {/* Arrow icon indicating external link */}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* --- QR Button --- */}
        <motion.button
          variants={itemVariants}
          onClick={() => setQRVisible(true)}
          className="mt-12 px-5 py-2 text-sm font-medium text-cyan-300/70 border border-cyan-800/50 rounded-full 
          hover:bg-cyan-900/20 hover:text-cyan-200 hover:border-cyan-500/50 transition-all duration-300"
        >
          Share Profile via QR
        </motion.button>

        {/* --- Footer --- */}
        <motion.p variants={itemVariants} className="mt-16 text-blue-200/40 text-xs tracking-wider">
          © {new Date().getFullYear()} {personalInfo.name} — ARQ Digital Marketing.
        </motion.p>
      </motion.div>

      {/* --- QR Popup Modal (Advanced Glass) --- */}
      <AnimatePresence>
        {isQRVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Backdrop with heavy blur
            className="fixed inset-0 bg-[#050a14]/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            onClick={() => setQRVisible(false)} // Close on backdrop click
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
              // Modal container styles
              className="bg-gradient-to-br from-gray-900 via-black to-blue-950/50 border border-cyan-500/30 p-8 rounded-3xl 
              shadow-[0_0_50px_rgba(6,182,212,0.2)] text-center max-w-sm w-full relative overflow-hidden"
            >
               {/* Decorative ambient light inside modal */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/20 blur-[50px] -z-10"></div>

              <h3 className="text-xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                Scan to Connect
              </h3>
              
              <div className="bg-white p-4 rounded-2xl inline-block shadow-inner shadow-gray-300">
                <QRCode value={personalInfo.portfolioUrl} size={180} bgColor="#FFFFFF" fgColor="#000000"/>
              </div>
              <p className="text-blue-200/60 text-sm mt-6 mb-2">{personalInfo.portfolioUrl.replace("https://", "")}</p>

              <button
                onClick={() => setQRVisible(false)}
                className="mt-4 px-8 py-3 w-full text-sm font-bold rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-all"
              >
                Dismiss
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}