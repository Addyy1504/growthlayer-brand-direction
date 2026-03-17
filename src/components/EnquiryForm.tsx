import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function EnquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight">
          Ready to bring your
          <br />
          <span className="italic">brand to life?</span>
        </h2>

        {/* Subtext */}
        <p className="text-black/60 text-lg md:text-xl mb-10 font-light">
          Let’s craft a brand that actually stands out.
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://www.growthlayerstudio.in/#contact"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-10 py-5 bg-black text-white
                     text-sm tracking-wider uppercase font-medium
                     transition-all duration-300 hover:bg-black/90"
        >
          Start Your Project
        </motion.a>
      </motion.div>
    </section>
  );
}