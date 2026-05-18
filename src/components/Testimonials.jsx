import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-pastel-peach-500 font-bold tracking-wider uppercase text-sm">Alumni</span>
            <h2 className="text-4xl font-heading font-bold text-pastel-purple-900 mt-2">Student Success Stories</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-pastel-purple-200 flex items-center justify-center text-pastel-purple-900 hover:bg-pastel-purple-100 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-pastel-purple-800 flex items-center justify-center text-white hover:bg-pastel-purple-700 border border-pastel-purple-700 transition-all hover:-translate-y-0.5">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 text-pastel-peach-200 z-0 opacity-50">
               <Quote size={120} fill="currentColor" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-10 relative z-10 border border-[#dce7e1]">
              <p className="text-2xl text-forest-800 italic font-light leading-relaxed mb-8">
                "VWU shaped me into a confident professional. The support from faculty, state-of-the-art AI labs, and the dedicated placement cell helped me achieve my dream career at a top tech company."
              </p>
              <div className="flex items-center gap-4">
                 <img 
                   src="/images/student.png" 
                   alt="Priya S." 
                   className="w-16 h-16 rounded-full object-cover border-4 border-pastel-peach-100"
                 />
                 <div>
                   <h4 className="font-bold text-pastel-purple-900 text-lg">Priya S.</h4>
                   <p className="text-gray-500 text-sm">Software Engineer at Microsoft</p>
                 </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img src="/images/student.png" alt="Student" className="w-full h-64 object-cover rounded-2xl" />
              <img src="/images/ai_lab.png" alt="Student" className="w-full h-48 object-cover rounded-2xl" />
            </div>
            <div className="space-y-4">
              <img src="/images/hero.png" alt="Student" className="w-full h-48 object-cover rounded-2xl" />
              <img src="/images/student.png" alt="Student" className="w-full h-64 object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
