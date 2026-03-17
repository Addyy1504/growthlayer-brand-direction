import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-36 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center space-y-10"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black leading-tight">
            Your brand is your{' '}
            <span className="italic">first impression</span>
          </h2>

          {/* Minimal divider */}
          <div className="w-12 h-px bg-black/20 mx-auto" />

          {/* Body */}
          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl mx-auto font-light">
            Every color, typeface, and visual element communicates who you are.
            The right direction builds trust instantly, attracts the right audience,
            and positions your brand exactly where it belongs.
          </p>

          {/* Subtle closing line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-6"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-black/50">
              Discover your aesthetic
            </p>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
}