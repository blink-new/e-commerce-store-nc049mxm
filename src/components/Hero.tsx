
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1595425964272-fc617fa7bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
          className="text-center w-full"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              ✨ Discover Your Perfect Scent
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-white font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Signature
            <span className="block mt-2 bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
              Scent Awaits
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Create a custom perfume that's uniquely yours. Our expert perfumers will guide you 
            through a journey of discovery to craft your perfect fragrance.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="/create"
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_200%] animate-gradient" />
            </motion.a>

            <motion.a
              href="/explore"
              className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              Explore Fragrances
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { label: 'Unique Scents', value: '100+' },
              { label: 'Expert Perfumers', value: '25+' },
              { label: 'Happy Customers', value: '10K+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
    </div>
  );
}