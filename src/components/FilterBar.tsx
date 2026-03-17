import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

const filters = [
  'All',
  'Luxury',
  'Modern',
  'Organic',
  'Playful',
  'Feminine',
  'Masculine',
  'Minimal',
  'Bold',
  'Tech',
  'Corporate',
  'Premium',
  'Gen Z',
];

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({
  selectedFilter,
  onFilterChange,
}: FilterBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleFilterSelect = (filter: string) => {
    onFilterChange(filter);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm tracking-wider uppercase text-black/50 font-light">
              Filter by Style
            </h3>

            {selectedFilter !== 'All' && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => onFilterChange('All')}
                className="text-xs text-black/50 hover:text-black underline transition-colors"
              >
                Clear filter
              </motion.button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => onFilterChange(filter)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 text-sm tracking-wide rounded-full transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-black/[0.04] text-black/70 hover:bg-black/[0.08]'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur-md">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
              Filter
            </p>
            <p className="text-sm text-black truncate">
              {selectedFilter === 'All' ? 'All styles' : selectedFilter}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {selectedFilter !== 'All' && (
              <button
                onClick={() => onFilterChange('All')}
                className="text-xs px-3 py-2 rounded-full border border-black/10 text-black/60"
              >
                Clear
              </button>
            )}

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm"
            >
              {mobileOpen ? (
                <>
                  <X className="w-4 h-4" />
                  Close
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-black/10"
            >
              <div className="px-4 py-3">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterSelect(filter)}
                      className={`whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all ${
                        selectedFilter === filter
                          ? 'bg-black text-white'
                          : 'bg-black/[0.04] text-black/70'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}