import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, FileText, Award } from 'lucide-react';

const stats = [
  { id: 1, title: 'Students', value: '20,000+', icon: Users },
  { id: 2, title: 'Faculty', value: '230+', icon: GraduationCap },
  { id: 3, title: 'Placements', value: '1400+', icon: Briefcase },
  { id: 4, title: 'Research Papers', value: '500+', icon: FileText },
  { id: 5, title: 'Patents', value: '50+', icon: Award },
];

export default function Stats() {
  return (
    <div className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#dce7e1]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center group cursor-default"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-[2rem] bg-pastel-mint-100 flex items-center justify-center mb-4 group-hover:bg-pastel-peach-100 transition-colors duration-300 border border-transparent group-hover:border-pastel-peach-300"
                >
                  <Icon className="w-8 h-8 text-pastel-purple-700 group-hover:text-pastel-peach-500 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-3xl font-heading font-bold text-forest-800 mb-1 group-hover:text-pastel-purple-800 transition-colors">{stat.value}</h3>
                <p className="text-forest-700/75 font-medium">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
