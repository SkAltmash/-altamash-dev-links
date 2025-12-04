import { useState } from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'react-qr-code';
import DotGrid from './DotGrid';

const primaryLink = {
  text: "View Portfolio",
  href: "https://iamsk.netlify.app/",
  icon: <FaGlobe />,
};

const links = [
  { text: "GitHub", href: "https://github.com/SkAltmash", icon: <FaGithub /> },
  { text: "LinkedIn", href: "https://linkedin.com/in/altamash-sheikh-1ba6a72aa", icon: <FaLinkedin /> },
  { text: "Email Me", href: "mailto:skaltmash3@gmail.com", icon: <FaEnvelope /> },
  { text: "WhatsApp Me", href: "https://wa.me/919823856261", icon: <FaWhatsapp /> },
];

export default function App() {
  const [isQRVisible, setQRVisible] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dot Animated BG */}
      <div className="absolute inset-0 opacity-60">
        <DotGrid
          dotSize={10}
          gap={20}
          baseColor="#0f0f0f"
          activeColor="#39FF14"
          proximity={130}
          shockRadius={260}
          shockStrength={6}
          resistance={700}
          returnDuration={1.4}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">

        {/* Avatar with Strong Light Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-48 h-48 rounded-full overflow-hidden flex items-center justify-center"
        >
          {/* Neon Glow */}
          <div className="absolute w-full h-full rounded-full shadow-[0_0_80px_25px_#39FF14] opacity-70 blur-xl"></div>

          {/* Outer Pulse Ring */}
          <div className="absolute w-full h-full rounded-full border-2 border-green-400 animate-pulse opacity-80"></div>

          <img
            src="/img.png"
            alt="Altamash"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        {/* Name Section */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl font-extrabold tracking-wide text-green-400 drop-shadow-[0_0_10px_#39FF14]"
        >
          Altamash Sheikh
        </motion.h1>

        <p className="text-gray-300 mt-2 text-sm tracking-wide opacity-90">
          Full-Stack Developer • React | Node.js | MongoDB | Firebase
        </p>

        {/* Primary CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={primaryLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-8 py-3 rounded-xl bg-green-500/10 border border-green-400 text-green-300 font-medium
          shadow-[0_0_15px_#39FF14] hover:bg-green-500/20 transition-all"
        >
          {primaryLink.text}
        </motion.a>

        {/* Link Buttons */}
        <div className="mt-10 w-full max-w-sm flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.15 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-6 py-3
              rounded-lg bg-white/5 border border-white/10
              hover:border-green-500/40 hover:bg-green-500/10
              backdrop-blur-sm transition-all shadow-md"
            >
              <span className="flex items-center gap-3">
                <span className="text-green-400 group-hover:scale-125 transition">{link.icon}</span>
                {link.text}
              </span>
            </motion.a>
          ))}
        </div>

        {/* QR Button */}
        <button
          onClick={() => setQRVisible(true)}
          className="mt-10 px-4 py-2 text-xs text-green-300 border border-green-400/30 rounded-md hover:bg-green-500/10"
        >
          Show QR Code
        </button>

        {/* Footer */}
        <p className="mt-12 text-white/40 text-xs">
          © {new Date().getFullYear()} Altamash — Full-Stack Developer 🚀
        </p>
      </div>

      {/* QR Popup Modal */}
      <AnimatePresence>
        {isQRVisible && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center backdrop-blur-md z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="bg-[#111] border border-green-600 p-6 rounded-xl 
              shadow-[0_0_25px_#39FF14] text-center"
            >
              <h3 className="text-white/80 text-sm mb-3">Scan My Portfolio</h3>
              <div className="bg-white p-3 rounded">
                <QRCode value="https://iamsk.netlify.app/" size={160} />
              </div>
              <button
                onClick={() => setQRVisible(false)}
                className="mt-4 px-4 py-1.5 text-xs border border-white/30 text-white/70 rounded hover:bg-white/10"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
