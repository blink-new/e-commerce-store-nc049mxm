
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, SparklesIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    id: 'style',
    title: 'Your Style',
    description: 'What kind of fragrances do you typically enjoy?',
    options: [
      { id: 'floral', name: 'Floral', description: 'Rose, Jasmine, Lily', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=500' },
      { id: 'woody', name: 'Woody', description: 'Sandalwood, Cedar, Pine', image: 'https://images.unsplash.com/photo-1505224628533-c4fc42c389e0?auto=format&fit=crop&q=80&w=500' },
      { id: 'citrus', name: 'Citrus', description: 'Orange, Lemon, Bergamot', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500' },
      { id: 'oriental', name: 'Oriental', description: 'Vanilla, Amber, Musk', image: 'https://images.unsplash.com/photo-1518462592603-0b6bac106032?auto=format&fit=crop&q=80&w=500' },
    ],
  },
  {
    id: 'occasion',
    title: 'Perfect Occasion',
    description: 'When do you plan to wear your fragrance?',
    options: [
      { id: 'daily', name: 'Daily Wear', description: 'Light and fresh', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=500' },
      { id: 'evening', name: 'Evening Events', description: 'Rich and sophisticated', image: 'https://images.unsplash.com/photo-1522767131594-6b7e96848fba?auto=format&fit=crop&q=80&w=500' },
      { id: 'special', name: 'Special Occasions', description: 'Unique and memorable', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=500' },
      { id: 'romantic', name: 'Romantic Moments', description: 'Sensual and intimate', image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=500' },
    ],
  },
  {
    id: 'intensity',
    title: 'Preferred Intensity',
    description: 'How strong would you like your fragrance to be?',
    options: [
      { id: 'light', name: 'Light', description: 'Subtle and close to skin', image: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?auto=format&fit=crop&q=80&w=500' },
      { id: 'moderate', name: 'Moderate', description: 'Balanced presence', image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=500' },
      { id: 'strong', name: 'Strong', description: 'Bold and noticeable', image: 'https://images.unsplash.com/photo-1512303452027-750531d7cb7f?auto=format&fit=crop&q=80&w=500' },
      { id: 'variable', name: 'Variable', description: 'Adjustable strength', image: 'https://images.unsplash.com/photo-1573644589390-6d200a5ec833?auto=format&fit=crop&q=80&w=500' },
    ],
  },
];

export function CreateJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelect = (stepId: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [stepId]: optionId }));
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 500);
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      {/* Progress bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
            <motion.div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`text-sm font-medium ${
                  idx <= currentStep ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-charcoal mb-4 font-serif">
                {steps[currentStep].title}
              </h1>
              <p className="text-lg text-gray-600">
                {steps[currentStep].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps[currentStep].options.map((option) => (
                <motion.button
                  key={option.id}
                  className={`relative group rounded-2xl overflow-hidden ${
                    selections[steps[currentStep].id] === option.id
                      ? 'ring-4 ring-primary'
                      : ''
                  }`}
                  onClick={() => handleSelect(steps[currentStep].id, option.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {option.name}
                      </h3>
                      <p className="text-sm text-white/80">{option.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Results section */}
      {Object.keys(selections).length === steps.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <SparklesIcon className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">
                Your Perfect Fragrance Profile
              </h2>
              <p className="text-lg text-gray-600">
                Based on your preferences, we've crafted a unique scent profile just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(selections).map(([stepId, optionId]) => {
                const step = steps.find(s => s.id === stepId);
                const option = step?.options.find(o => o.id === optionId);
                return (
                  <div key={stepId} className="text-center">
                    <div className="text-lg font-medium text-charcoal mb-2">
                      {step?.title}
                    </div>
                    <div className="text-primary">{option?.name}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <motion.button
                className="btn-primary px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Your Custom Fragrance
                <ChevronRightIcon className="h-5 w-5 ml-2 inline-block" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}