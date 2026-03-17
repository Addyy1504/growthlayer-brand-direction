import { motion } from 'framer-motion';
import { BrandDirection } from '../data/brandDirections';
import { ArrowRight } from 'lucide-react';

interface BrandCardProps {
  brand: BrandDirection;
  onClick: () => void;
  index: number;
}

export default function BrandCard({ brand, onClick, index }: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-gray-200 overflow-hidden cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-gray-100 text-gray-600 mb-3">
              {brand.bestFor}
            </span>
            <h3 className="text-2xl font-light tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">
              {brand.name}
            </h3>
          </div>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>

        <div className="flex gap-2">
          {brand.palette.map((color, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-full h-16 shadow-sm transition-shadow group-hover:shadow-md"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Heading</p>
            <p
              className="text-2xl text-gray-900"
              style={{ fontFamily: brand.headingFont }}
            >
              {brand.headingFont}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Body</p>
            <p
              className="text-base text-gray-700"
              style={{ fontFamily: brand.bodyFont }}
            >
              {brand.bodyFont}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed italic">
            {brand.personality}
          </p>
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 text-sm text-gray-900 group-hover:text-gray-700 transition-colors mt-4"
        >
          View Direction
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
