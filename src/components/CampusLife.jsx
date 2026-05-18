import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/hero.png', title: 'Library', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
  { src: '/images/ai_lab.png', title: 'Classrooms', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { src: '/images/student.png', title: 'Hostel Life', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { src: '/images/hero.png', title: 'Sports Facilities', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
  { src: '/images/ai_lab.png', title: 'Cultural Events', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { src: '/images/student.png', title: 'Auditorium', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

export default function CampusLife() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-pastel-peach-500 font-bold tracking-wider uppercase text-sm">Experience</span>
            <h2 className="text-4xl font-heading font-bold text-pastel-purple-900 mt-2">Campus Life</h2>
          </div>
          <a href="#" className="hidden sm:flex text-pastel-purple-700 hover:text-pastel-peach-500 font-medium items-center gap-2 transition-colors">
            View Gallery &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10281F]/88 via-[#1F4D3A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
