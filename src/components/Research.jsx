import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Atom, Lightbulb, Rocket, HeartPulse, TreePine } from 'lucide-react';

const labs = [
  { title: 'AI Labs', icon: Cpu },
  { title: 'Robotics Labs', icon: Atom },
  { title: 'Innovation Hub', icon: Lightbulb },
  { title: 'Startup Incubation Center', icon: Rocket },
  { title: 'Assistive Technology Lab', icon: HeartPulse },
  { title: 'Rural Women Technology Park', icon: TreePine },
];

export default function Research() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pastel-mint-100 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-pastel-purple-200">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
         </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-pastel-peach-500 font-bold tracking-wider uppercase text-sm">Centers of Excellence</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-pastel-purple-900 mt-2 mb-4">Research & Innovation</h2>
            <p className="text-forest-700/85 text-lg font-light">
              Pioneering solutions for tomorrow's challenges through state-of-the-art facilities and dedicated research centers.
            </p>
          </div>
          <button className="border border-pastel-purple-300 text-pastel-purple-900 hover:text-white hover:bg-pastel-purple-700 font-medium px-6 py-3 rounded-full transition-all whitespace-nowrap">
            Explore Research &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] group hover:border-pastel-peach-200 transition-all duration-300 cursor-pointer border border-[#dce7e1]"
              >
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-pastel-mint-50 border border-pastel-mint-200 flex items-center justify-center group-hover:border-pastel-mint-600 group-hover:bg-pastel-mint-100 transition-all duration-300">
                    <Icon className="w-8 h-8 text-pastel-mint-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pastel-purple-800 transition-colors">
                    {lab.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
