import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Bookmark, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface Preference {
  brandId: number;
  brandName: string;
  preference: 'love' | 'maybe' | 'no';
}

interface SavedPreferencesProps {
  preferences: Preference[];
}

export default function SavedPreferences({ preferences = [] }: SavedPreferencesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const lovedBrands = preferences.filter((p) => p.preference === 'love');
  const maybeBrands = preferences.filter((p) => p.preference === 'maybe');
  const totalCount = lovedBrands.length + maybeBrands.length;

  if (!preferences || totalCount === 0) return null;

  const handleSelectBrand = (brandId: number) => {
    window.dispatchEvent(new CustomEvent('open-brand-from-saved', { detail: brandId }));
    setIsExpanded(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100vw-2rem)] max-w-sm"
    >
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-5 py-4 bg-black text-white flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 fill-current" />
              <span className="font-medium">{totalCount}</span>
            </div>
            <span className="text-sm tracking-wide">Saved Preferences</span>
          </div>

          {isExpanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="p-5 space-y-5 max-h-[24rem] overflow-y-auto">
                {lovedBrands.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-black/45">
                      <Heart className="w-4 h-4" />
                      <span>Loved ({lovedBrands.length})</span>
                    </div>

                    <div className="space-y-2">
                      {lovedBrands.map((pref) => (
                        <button
                          key={pref.brandId}
                          onClick={() => handleSelectBrand(pref.brandId)}
                          className="w-full flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-left text-sm text-black transition-all hover:bg-black hover:text-white"
                        >
                          <span className="truncate">{pref.brandName}</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {maybeBrands.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-black/45">
                      <Bookmark className="w-4 h-4" />
                      <span>Maybe ({maybeBrands.length})</span>
                    </div>

                    <div className="space-y-2">
                      {maybeBrands.map((pref) => (
                        <button
                          key={pref.brandId}
                          onClick={() => handleSelectBrand(pref.brandId)}
                          className="w-full flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-left text-sm text-black transition-all hover:bg-black hover:text-white"
                        >
                          <span className="truncate">{pref.brandName}</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}