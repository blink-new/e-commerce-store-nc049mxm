
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1595425964272-fc617fa7bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury perfume"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Signature Scent Awaits
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Create a custom perfume that's uniquely yours. Our expert perfumers will guide you through a journey of discovery to craft your perfect fragrance.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="/create"
              className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
            >
              Begin Your Journey
            </a>
            <a
              href="/explore"
              className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors duration-300"
            >
              Explore Fragrances <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}