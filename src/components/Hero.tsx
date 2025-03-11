import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu } from 'lucide-react';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black text-white pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative inline-block framer-motion-fix"
          >
            <Cpu className="h-16 w-16 mx-auto text-blue-500 mb-8" />
            <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 framer-motion-fix"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Next Evolution of
            </span>
            <br />
            Artificial Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto framer-motion-fix"
          >
            Surpassing human-level intelligence with unprecedented computational power
            and advanced reasoning capabilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 framer-motion-fix"
          >
            <a href="#demo" className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Experience the Demo
            </a>
            <a href="#features" className="px-8 py-4 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500/10 transition-colors">
              View Capabilities
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center items-center space-x-8 framer-motion-fix"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">100x</div>
              <div className="text-gray-400">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">1T+</div>
              <div className="text-gray-400">Parameters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">99.9%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}