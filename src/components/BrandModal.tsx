import { motion, AnimatePresence } from 'framer-motion';
import { BrandDirection } from '../data/brandDirections';
import { X, Heart, Bookmark, XCircle } from 'lucide-react';

interface BrandModalProps {
  brand: BrandDirection | null;
  onClose: () => void;
  onPreference: (brandId: number, preference: 'love' | 'maybe' | 'no') => void;
}

export default function BrandModal({ brand, onClose, onPreference }: BrandModalProps) {
  if (!brand) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 hover:bg-gray-100 transition rounded-md"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          <div className="p-6 md:p-12 space-y-10 md:space-y-12">

            {/* Header */}
            <div className="space-y-3 md:space-y-4">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-gray-100 text-gray-600">
                {brand.bestFor}
              </span>

              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900">
                {brand.name}
              </h2>

              <p className="text-base md:text-xl text-gray-600 italic max-w-2xl">
                {brand.personality}
              </p>
            </div>

            {/* Palette */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {brand.palette.map((color, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="w-full h-20 md:h-28 rounded-md shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs text-gray-500 font-mono uppercase text-center">
                    {color}
                  </p>
                </div>
              ))}
            </div>

            {/* Typography */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-500">
                Typography Pairing
              </h3>

              <div className="grid md:grid-cols-2 gap-10 md:gap-12">

                {/* Heading */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Heading Font
                  </p>

                  <h3
                    className="text-3xl md:text-5xl text-gray-900"
                    style={{ fontFamily: `'${brand.headingFont}', serif` }}
                  >
                    {brand.headingFont}
                  </h3>

                  <p
                    className="text-gray-600"
                    style={{ fontFamily: `'${brand.headingFont}', serif` }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>

                {/* Body */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Body Font
                  </p>

                  <h3
                    className="text-2xl md:text-3xl text-gray-900"
                    style={{ fontFamily: `'${brand.bodyFont}', sans-serif` }}
                  >
                    {brand.bodyFont}
                  </h3>

                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: `'${brand.bodyFont}', sans-serif` }}
                  >
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>

              </div>
            </div>

            {/* Pattern */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-xs uppercase tracking-wider text-gray-500">
                Visual Language
              </h3>
              <p className="text-gray-700">{brand.pattern}</p>
            </div>

            {/* Why */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-xs uppercase tracking-wider text-gray-500">
                Why This Direction Works
              </h3>
              <p className="text-gray-700 md:text-lg">{brand.whyItWorks}</p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-6">

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onPreference(brand.id, 'love');
                  onClose();
                }}
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-900 rounded-md"
              >
                <Heart className="w-5 h-5" />
                Love This
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onPreference(brand.id, 'maybe');
                  onClose();
                }}
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 border border-black rounded-md"
              >
                <Bookmark className="w-5 h-5" />
                Maybe
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onPreference(brand.id, 'no');
                  onClose();
                }}
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 rounded-md"
              >
                <XCircle className="w-5 h-5" />
                Not for Me
              </motion.button>

            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}