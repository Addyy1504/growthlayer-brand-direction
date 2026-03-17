import { useState, useRef, useEffect } from 'react';
import { brandDirections, BrandDirection } from '../data/brandDirections';
import BrandCard from './BrandCard';
import BrandModal from './BrandModal';
import FilterBar from './FilterBar';
import { useInView, motion } from 'framer-motion';

interface BrandGalleryProps {
  onPreference: (brandId: number, preference: 'love' | 'maybe' | 'no') => void;
}

export default function BrandGallery({ onPreference }: BrandGalleryProps) {
  const [selectedBrand, setSelectedBrand] = useState<BrandDirection | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [highlightedBrandId, setHighlightedBrandId] = useState<number | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredBrands = brandDirections.filter((brand) => {
    if (selectedFilter === 'All') return true;
    return brand.tags.some((tag) => tag.toLowerCase() === selectedFilter.toLowerCase());
  });

  useEffect(() => {
    const handleOpenFromSaved = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      const brandId = customEvent.detail;
      const brand = brandDirections.find((b) => b.id === brandId);
      if (!brand) return;

      const brandVisibleInCurrentFilter =
        selectedFilter === 'All' ||
        brand.tags.some((tag) => tag.toLowerCase() === selectedFilter.toLowerCase());

      if (!brandVisibleInCurrentFilter) {
        setSelectedFilter('All');
      }

      setTimeout(() => {
        const el = document.getElementById(`brand-${brandId}`);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - 120;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });

        setHighlightedBrandId(brandId);

        setTimeout(() => {
          setSelectedBrand(brand);
        }, 650);

        setTimeout(() => {
          setHighlightedBrandId(null);
        }, 1400);
      }, brandVisibleInCurrentFilter ? 80 : 220);
    };

    window.addEventListener('open-brand-from-saved', handleOpenFromSaved as EventListener);

    return () => {
      window.removeEventListener('open-brand-from-saved', handleOpenFromSaved as EventListener);
    };
  }, [selectedFilter]);

  return (
    <section ref={ref} id="gallery" className="bg-gray-50">
      <FilterBar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
            Explore Brand Directions
          </h2>
          <p className="text-gray-600 text-lg">
            {filteredBrands.length} {filteredBrands.length === 1 ? 'direction' : 'directions'} available
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand, index) => {
            const isHighlighted = highlightedBrandId === brand.id;

            return (
              <motion.div
                key={brand.id}
                id={`brand-${brand.id}`}
                initial={false}
                animate={
                  isHighlighted
                    ? {
                        scale: [1, 1.02, 1],
                        y: [0, -4, 0],
                      }
                    : {
                        scale: 1,
                        y: 0,
                      }
                }
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`rounded-3xl transition-all duration-500 ${
                  isHighlighted
                    ? 'ring-2 ring-black ring-offset-4 ring-offset-gray-50 shadow-[0_0_0_10px_rgba(255,255,255,0.95),0_20px_50px_rgba(0,0,0,0.18)]'
                    : ''
                }`}
              >
                {isHighlighted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.28, 0] }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-white"
                  />
                )}

                <BrandCard
                  brand={brand}
                  onClick={() => setSelectedBrand(brand)}
                  index={index}
                />
              </motion.div>
            );
          })}
        </div>

        {filteredBrands.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No brand directions match this filter.</p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="mt-4 text-gray-900 underline hover:no-underline"
            >
              View all directions
            </button>
          </motion.div>
        )}
      </div>

      <BrandModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
        onPreference={onPreference}
      />
    </section>
  );
}