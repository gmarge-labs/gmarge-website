import { motion } from 'motion/react';

export function AINeuron() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0)]">
      {/* Video container with effects */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Glow effect behind video */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-700/30 to-indigo-600/30 rounded-3xl blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Video element */}
        <motion.video
          className="relative w-full h-full object-cover rounded-2xl"
          style={{ objectPosition: 'center 80%' }}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <source
            src="https://res.cloudinary.com/dwwa5bzo4/video/upload/v1765243381/mbl_video_bnr_compressed-new_kqwxtp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </motion.video>

        {/* Pulsing energy rings around video */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-600/30 rounded-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        
        <motion.div
          className="absolute inset-0 border-2 border-indigo-600/30 rounded-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1.5,
          }}
        />

        {/* Corner accent lights */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/40 to-transparent rounded-full blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-600/40 to-transparent rounded-full blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
}