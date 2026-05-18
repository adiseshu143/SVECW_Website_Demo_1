import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, BrainCircuit, ShieldAlert, Cpu as Microchip, TrendingUp, BookOpen } from 'lucide-react';

const programs = [
  { id: 1, title: 'Computer Science & Engineering', icon: Monitor },
  { id: 2, title: 'AI & Data Science', icon: TrendingUp },
  { id: 3, title: 'AI & Machine Learning', icon: BrainCircuit },
  { id: 4, title: 'Cyber Security', icon: ShieldAlert },
  { id: 5, title: 'Electronics & Communication', icon: Microchip },
  { id: 6, title: 'Business Administration (MBA)', icon: Briefcase },
  { id: 7, title: 'Ph.D Programs', icon: BookOpen },
];

// Re-using Briefcase icon from lucide, importing it directly here
import { Briefcase } from 'lucide-react';

export default function Programs() {
  return (
    <section className="py-24 bg-[#f5f8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-pastel-peach-500 font-bold tracking-wider uppercase text-sm">Academics</span>
            <h2 className="text-4xl font-heading font-bold text-pastel-purple-900 mt-2">Our Programs</h2>
          </div>
          <a href="#" className="hidden sm:flex text-pastel-purple-700 hover:text-pastel-peach-500 font-medium items-center gap-2 transition-colors">
            View All Programs &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[2rem] transition-all duration-300 border border-[#dce7e1] group flex flex-col justify-between h-full hover:border-pastel-purple-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-pastel-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pastel-purple-200 transition-all duration-300 border border-transparent group-hover:border-pastel-peach-300">
                  <Icon className="w-7 h-7 text-pastel-purple-700 group-hover:text-pastel-peach-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-forest-800 group-hover:text-pastel-purple-800 transition-colors leading-tight">
                  {program.title}
                </h3>
              </motion.div>
            );
          })}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-logo p-8 rounded-[2rem] flex flex-col justify-center items-center text-center cursor-pointer group transition-all duration-300 border border-[#dce7e1] hover:border-pastel-purple-300"
          >
            <div className="w-14 h-14 rounded-full bg-white/40 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 border border-white/50">
              <span className="text-pastel-purple-900 text-2xl group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </div>
            <h3 className="text-xl font-bold text-pastel-purple-900 group-hover:text-pastel-purple-700 transition-colors">Explore All<br/>Departments</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
