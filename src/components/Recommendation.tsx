import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { brandDirections } from '../data/brandDirections';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Preference {
  brandId: number;
  brandName: string;
  preference: 'love' | 'maybe' | 'no';
}

interface RecommendationProps {
  preferences: Preference[];
  onUseDirection: () => void;
}

export default function Recommendation({ preferences, onUseDirection }: RecommendationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lovedBrands = preferences.filter((p) => p.preference === 'love');
  const maybeBrands = preferences.filter((p) => p.preference === 'maybe');

  if (lovedBrands.length === 0 && maybeBrands.length === 0) return null;

  const relevantBrands = [...lovedBrands, ...maybeBrands].map((pref) =>
    brandDirections.find((b) => b.id === pref.brandId)
  );

  const allTags = relevantBrands
    .flatMap((b) => b?.tags || [])
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const topTags = Object.entries(allTags)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag]) => tag);

  const allColors = relevantBrands.flatMap((b) => b?.palette || []);
  const topColors = allColors.slice(0, 5);

  const generateSummary = () => {
    if (lovedBrands.length === 0) {
      return "You're exploring different brand aesthetics. Keep browsing to find your perfect match.";
    }

    const styleWords = topTags.join(', ');
    const lovedCount = lovedBrands.length;

    if (lovedCount === 1) {
      const brand = relevantBrands.find((b) => b?.id === lovedBrands[0].brandId);
      return `You're drawn to the ${brand?.name} aesthetic with its ${brand?.personality.toLowerCase()}.`;
    }

    return `You seem to prefer ${styleWords} brand identities that feel sophisticated and intentional. Your selections show a clear aesthetic direction.`;
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white border border-gray-200 p-12 space-y-8">
          <div className="flex items-center gap-3 text-gray-900">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-sm tracking-wider uppercase">Your Brand Profile</h2>
          </div>

          <p className="text-3xl font-light leading-relaxed text-gray-900">
            {generateSummary()}
          </p>

          {topColors.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-sm tracking-wider uppercase text-gray-500">
                Your Preferred Color Palette
              </h3>
              <div className="flex gap-3">
                {topColors.map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-1 h-20 shadow-md"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {lovedBrands.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-sm tracking-wider uppercase text-gray-500">
                Your Top Choices
              </h3>
              <div className="space-y-2">
                {lovedBrands.map((pref) => {
                  const brand = brandDirections.find((b) => b.id === pref.brandId);
                  return (
                    <div
                      key={pref.brandId}
                      className="flex items-center justify-between px-4 py-3 bg-gray-50"
                    >
                      <span className="text-gray-900">{pref.brandName}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {brand?.bestFor}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="pt-8">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onUseDirection}
              className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gray-900
                       text-white hover:bg-gray-800 transition-colors group"
            >
              <span className="text-sm tracking-wider uppercase">Use This Direction For My Brand</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
