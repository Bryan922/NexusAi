import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Rocket } from 'lucide-react';

export default function Demo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black" id="demo">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block framer-motion-fix"
          >
            <Terminal className="h-12 w-12 text-blue-500 mb-4" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4 framer-motion-fix"
          >
            Official Release
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 framer-motion-fix"
          >
            Get ready for the next evolution in artificial intelligence
          </motion.p>
        </div>

        <div ref={ref} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center py-12"
          >
            <Rocket className="h-16 w-16 text-blue-500 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Launching March 22, 2025
            </h3>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              The future of AI is almost here. NexusAI will revolutionize the way we interact with artificial intelligence, bringing unprecedented capabilities to your fingertips.
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full text-blue-400 border border-blue-500/30">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Official Release Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}