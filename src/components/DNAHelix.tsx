import { motion } from 'framer-motion';

export function DNAHelix() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-full h-full overflow-hidden pointer-events-none opacity-15">
      <svg
        className="absolute left-0 top-0 h-full"
        width="200"
        height="100%"
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        
        {/* Left DNA Strand */}
        <motion.path
          d="M50 0 Q30 100 50 200 T50 400 T50 600 T50 800"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Right DNA Strand */}
        <motion.path
          d="M150 0 Q170 100 150 200 T150 400 T150 600 T150 800"
          stroke="url(#gradient2)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        />
        
        {/* Connecting Base Pairs */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <motion.line
            key={i}
            x1="50"
            y1={i * 60 + 30}
            x2="150"
            y2={i * 60 + 30}
            stroke="url(#gradient3)"
            strokeWidth="2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
        
        {/* Base Pair Nodes */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <g key={`nodes-${i}`}>
            <motion.circle
              cx="50"
              cy={i * 60 + 30}
              r="4"
              fill="#00D9FF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
            <motion.circle
              cx="150"
              cy={i * 60 + 30}
              r="4"
              fill="#00B4D8"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.1 }}
            />
          </g>
        ))}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#48CAE4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0096C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#48CAE4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Right side DNA helix (mirrored) */}
      <svg
        className="absolute right-0 top-0 h-full transform scale-x-[-1]"
        width="200"
        height="100%"
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        
        {/* Left DNA Strand */}
        <motion.path
          d="M50 0 Q30 100 50 200 T50 400 T50 600 T50 800"
          stroke="url(#gradient1-r)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Right DNA Strand */}
        <motion.path
          d="M150 0 Q170 100 150 200 T150 400 T150 600 T150 800"
          stroke="url(#gradient2-r)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
        />
        
        {/* Connecting Base Pairs */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <motion.line
            key={i}
            x1="50"
            y1={i * 60 + 30}
            x2="150"
            y2={i * 60 + 30}
            stroke="url(#gradient3-r)"
            strokeWidth="2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          />
        ))}
        
        {/* Base Pair Nodes */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <g key={`nodes-r-${i}`}>
            <motion.circle
              cx="50"
              cy={i * 60 + 30}
              r="4"
              fill="#00D9FF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            />
            <motion.circle
              cx="150"
              cy={i * 60 + 30}
              r="4"
              fill="#00B4D8"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 + 0.1 }}
            />
          </g>
        ))}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1-r" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#48CAE4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2-r" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0096C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient3-r" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#48CAE4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
