import { useState } from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'react-qr-code';
import DotGrid from './DotGrid';

const links = [
  { text: 'Portfolio Website', href: 'https://skaltamashportfolio.netlify.app/', icon: <FaGlobe /> },
  { text: 'GitHub', href: 'https://github.com/SkAltmash', icon: <FaGithub /> },
  { text: 'LinkedIn', href: 'https://linkedin.com/in/altamash-sheikh-1ba6a72aa', icon: <FaLinkedin /> },
  { text: 'Email Me', href: 'mailto:skaltmash3@gmail.com', icon: <FaEnvelope /> },
  { text: 'WhatsApp Me', href: 'https://wa.me/919823856261', icon: <FaWhatsapp /> },
];

function App() {
  const [isQRVisible, setQRVisible] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-gray-900 text-white font-sans overflow-hidden">
      <div className="absolute inset-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#1b1b1b"
          activeColor="#39FF14"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 max-w-3xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-xl animate-bounce-slow mb-6"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="Altamash Sheikh"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold tracking-wide text-green-400">Altamash Sheikh</h1>
          <p className="text-gray-300 text-sm mt-1">Frontend & Firebase Developer • Explorer of Clean UI</p>
        </motion.div>

        {/* Links */}
        <div className="w-full max-w-md flex flex-col gap-5">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
            >
              <LinkButton icon={link.icon} text={link.text} href={link.href} />
            </motion.div>
          ))}
        </div>

        {/* Show QR Button */}
        <motion.button
          onClick={() => setQRVisible(true)}
          whileTap={{ scale: 0.96 }}
          className="mt-10 px-6 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-400 text-green-300 rounded-md text-sm tracking-wide backdrop-blur-md transition-all"
        >
          Show QR Code
        </motion.button>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Altamash.dev — Built with Vite + React</p>
        </footer>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {isQRVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#111] border border-green-600 p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4"
            >
              <h3 className="text-white/80 text-lg">Scan my Portfolio</h3>
              <div className="bg-white p-2 rounded">
                <QRCode value="https://skaltamashportfolio.netlify.app/" size={150} />
              </div>
              <button
                onClick={() => setQRVisible(false)}
                className="mt-4 px-4 py-2 text-sm text-white/70 border border-white/20 hover:bg-white/10 rounded-md"
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

function LinkButton({ icon, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between px-6 py-3 bg-white/5 hover:bg-green-600/20 hover:scale-[1.02] transition-all duration-200 text-white rounded-lg shadow-md border border-white/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-green-400 text-lg">{icon}</span>
        <span className="font-medium tracking-wide group-hover:text-green-300 transition">{text}</span>
      </div>
    </a>
  );
}

export default App;
