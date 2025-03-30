
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  HeartIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const fragrances = [
  {
    id: 1,
    name: 'Midnight Rose',
    description: 'A mysterious blend of dark rose and oudh',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=500',
    price: 129,
    rating: 4.8,
    reviews: 124,
    category: 'Floral',
    intensity: 'Strong',
    featured: true,
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    description: 'Fresh marine notes with citrus undertones',
    image: 'https://images.unsplash.com/photo-1595425964272-fc617fa7bb54?auto=format&fit=crop&q=80&w=500',
    price: 89,
    rating: 4.5,
    reviews: 98,
    category: 'Fresh',
    intensity: 'Light',
    featured: false,
  },
  {
    id: 3,
    name: 'Vanilla Dreams',
    description: 'Sweet vanilla with warm amber notes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500',
    price: 99,
    rating: 4.7,
    reviews: 156,
    category: 'Oriental',
    intensity: 'Moderate',
    featured: true,
  },
  {
    id: 4,
    name: 'Cedar & Sage',
    description: 'Woody aromatics with herbal freshness',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=500',
    price: 110,
    rating: 4.6,
    reviews: 87,
    category: 'Woody',
    intensity: 'Moderate',
    featured: false,
  },
  // Add more fragrances as needed
];

const categories = ['All', 'Floral', 'Woody', 'Fresh', 'Oriental', 'Citrus'];
const intensities = ['All', 'Light', 'Moderate', 'Strong'];

export function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIntensity, setSelectedIntensity] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    );
  };

  const filteredFragrances = fragrances.filter(fragrance => {
    const matchesSearch = fragrance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fragrance.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || fragrance.category === selectedCategory;
    const matchesIntensity = selectedIntensity === 'All' || fragrance.intensity === selectedIntensity;
    return matchesSearch && matchesCategory && matchesIntensity;
  });

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-charcoal mb-8 font-serif">
            Featured Fragrances
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fragrances.filter(f => f.featured).map(fragrance => (
              <motion.div
                key={fragrance.id}
                className="relative group rounded-2xl overflow-hidden shadow-soft"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {fragrance.name}
                    </h3>
                    <p className="text-white/80 mb-4">{fragrance.description}</p>
                    <div className="flex items-center gap-4">
                      <button className="btn-primary">
                        Explore Now
                      </button>
                      <div className="flex items-center text-white">
                        <StarIcon className="h-5 w-5 text-gold inline" />
                        <span className="ml-1">{fragrance.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search fragrances..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select
                className="px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                className="px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={selectedIntensity}
                onChange={(e) => setSelectedIntensity(e.target.value)}
              >
                {intensities.map(intensity => (
                  <option key={intensity} value={intensity}>{intensity}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Fragrances Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredFragrances.map(fragrance => (
                <motion.div
                  key={fragrance.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft group"
                >
                  <div className="relative aspect-w-3 aspect-h-4">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(fragrance.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    >
                      {favorites.includes(fragrance.id) ? (
                        <HeartIconSolid className="h-5 w-5 text-secondary" />
                      ) : (
                        <HeartIcon className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-charcoal">
                        {fragrance.name}
                      </h3>
                      <div className="text-lg font-medium text-primary">
                        ${fragrance.price}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{fragrance.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <StarIcon className="h-5 w-5 text-gold" />
                          <span className="ml-1 font-medium">{fragrance.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({fragrance.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {fragrance.category}
                        </span>
                        <span className="text-sm px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                          {fragrance.intensity}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}