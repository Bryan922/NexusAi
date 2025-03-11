import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Advanced Neural Networks",
    description: "State-of-the-art deep learning architecture with multi-layered neural networks for complex problem solving."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and security protocols ensuring your data remains protected at all times."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast processing capabilities with sub-millisecond response times for instant results."
  },
  {
    icon: Cpu,
    title: "Quantum-Ready",
    description: "Future-proof architecture designed to seamlessly integrate with quantum computing systems."
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4 framer-motion-fix"
          >
            Cutting-edge Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto framer-motion-fix"
          >
            Experience the power of next-generation AI technology with our advanced features
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 framer-motion-fix"
            >
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}