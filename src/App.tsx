import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import BrandGallery from './components/BrandGallery';
import SavedPreferences from './components/SavedPreferences';
import Recommendation from './components/Recommendation';
import EnquiryForm from './components/EnquiryForm';
import { brandDirections } from './data/brandDirections';

interface Preference {
  brandId: number;
  brandName: string;
  preference: 'love' | 'maybe' | 'no';
}

function App() {
  const [preferences, setPreferences] = useState<Preference[]>([]);

  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('brand-preferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    } catch (error) {
      console.error('Failed to load preferences from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('brand-preferences', JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save preferences to localStorage:', error);
    }
  }, [preferences]);

  const handleExploreClick = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePreference = (
    brandId: number,
    preference: 'love' | 'maybe' | 'no'
  ) => {
    const brand = brandDirections.find((b) => b.id === brandId);
    if (!brand) return;

    setPreferences((prev) => {
      if (preference === 'no') {
        return prev.filter((p) => p.brandId !== brandId);
      }

      const existing = prev.find((p) => p.brandId === brandId);

      if (existing) {
        return prev.map((p) =>
          p.brandId === brandId
            ? { ...p, brandName: brand.name, preference }
            : p
        );
      }

      return [...prev, { brandId, brandName: brand.name, preference }];
    });
  };

  const handleUseDirection = () => {
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onExploreClick={handleExploreClick} />
      <Intro />

      <div id="gallery">
        <BrandGallery onPreference={handlePreference} />
      </div>

      <div id="enquiry">
        <EnquiryForm />
      </div>

      <SavedPreferences preferences={preferences} />

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 tracking-wider">
            © 2024 Brand Direction Explorer. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;