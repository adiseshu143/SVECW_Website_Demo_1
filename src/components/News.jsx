import React from 'react';
import { motion } from 'framer-motion';

const news = [
  {
    id: 1,
    date: { month: 'MAY', day: '20' },
    title: 'Annual Convocation 2025',
    desc: 'Celebrating achievements and inspiring the next generation of women leaders.',
  },
  {
    id: 2,
    date: { month: 'JUN', day: '05' },
    title: 'AI & Robotics Workshop',
    desc: 'Hands-on workshop for students on AI and Robotics applications.',
  },
  {
    id: 3,
    date: { month: 'JUN', day: '15' },
    title: 'National Hackathon 2025',
    desc: 'Innovate, Collaborate, Create solutions for real-world challenges.',
  },
  {
    id: 4,
    date: { month: 'JUN', day: '25' },
    title: 'Placement Drive 2025',
    desc: 'Top companies visiting campus for exciting career opportunities.',
  },
  {
    id: 5,
    date: { month: 'JUL', day: '05' },
    title: 'Research Conference',
    desc: 'International conference on emerging trends in Engineering & Technology.',
  }
];

export default function News() {
  return (
    <section className="py-24 bg-white border-t border-[#dce7e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-pastel-peach-500 font-bold tracking-wider uppercase text-sm">Updates</span>
            <h2 className="text-4xl font-heading font-bold text-pastel-purple-900 mt-2">Latest News & Events</h2>
          </div>
          <a href="#" className="hidden sm:flex text-pastel-purple-700 hover:text-pastel-peach-500 font-medium items-center gap-2 transition-colors">
            View All News &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[1.5rem] transition-all duration-300 border border-[#dce7e1] hover:border-pastel-purple-300 flex flex-col group cursor-pointer overflow-hidden hover:-translate-y-0.5"
            >
              <div className="flex bg-forest-700 text-white group-hover:bg-pastel-peach-500 transition-colors p-4 justify-between items-center">
                 <div className="text-center font-bold">
                    <div className="text-sm opacity-80">{item.date.month}</div>
                    <div className="text-2xl">{item.date.day}</div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/20">
                    &rarr;
                 </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                   <h3 className="font-bold text-lg text-forest-800 mb-2 leading-tight group-hover:text-pastel-purple-700 transition-colors">{item.title}</h3>
                   <p className="text-forest-700/70 text-sm">{item.desc}</p>
                </div>
                <div className="mt-4 text-pastel-peach-500 font-semibold text-sm group-hover:text-pastel-purple-700 transition-colors">
                  Read More
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
