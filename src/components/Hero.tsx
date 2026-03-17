import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Grainient from './Grainient';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Grainient Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#000000"
          color2="#ffffff"
          color3="#050505"
          timeSpeed={0.18}
          colorBalance={0}
          warpStrength={0.82}
          warpFrequency={1.9}
          warpSpeed={0.5}
          warpAmplitude={150}
          blendAngle={-22}
          blendSoftness={0.16}
          rotationAmount={95}
          noiseScale={1.35}
          grainAmount={0.075}
          grainScale={2}
          grainAnimated={false}
          contrast={1.22}
          gamma={0.98}
          saturation={0}
          centerX={0.1}
          centerY={-0.06}
          zoom={0.96}
          className="w-full h-full"
        />
      </div>

      {/* Soft center readability glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 26%, rgba(255,255,255,0.05) 42%, rgba(255,255,255,0) 68%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-block px-6 md:px-10 py-6 md:py-8 rounded-[28px] bg-white/8 backdrop-blur-[8px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-black-600 font-light">
                GrowthLayer Brand Direction Studio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-black">
              Choose Your
              <br />
              <span className="italic">Brand Vibe</span>
            </h1>

            <p className="text-lg md:text-xl text-black-700 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Explore curated palettes, typography, and visual directions to discover
              the identity style that fits your brand best.
            </p>

            <motion.button
              onClick={onExploreClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 md:px-12 py-4 md:py-5 bg-black text-white text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-gray-900 rounded-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Brand Directions
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}