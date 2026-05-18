import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#163829]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/SVECW.jpg" 
          alt="Vishnu Women's University Campus" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F4D3A]/62 via-[#1F4D3A]/42 to-[#5B1E8C]/34 bg-[length:200%_200%] animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#10281F]/58 via-[#10281F]/24 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-[#FF7B00] font-semibold text-sm mb-5 sm:mb-6 border border-white/20 tracking-wide backdrop-blur-sm"
            >
              Established in Excellence
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.05] mb-5 sm:mb-6 max-w-[12ch]"
            >
              Empowering Women Through <span className="text-[#FF7B00]">Innovation</span>, <span className="text-[#FF7B00]">Leadership</span> and <span className="text-[#FF7B00]">Excellence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-xl md:max-w-2xl font-light leading-relaxed"
            >
              From a legacy of excellence to a future of endless possibilities. 
              Vishnu Women's University is shaping leaders, innovators, and changemakers of tomorrow.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <button className="bg-[#FF7B00] hover:bg-[#e66f00] text-white font-semibold px-7 sm:px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group border border-[#ffb06a]/40 hover:border-white/40">
                Admissions Open 2026
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/16 text-white font-medium px-7 sm:px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group border border-[#caa9e7]/60 hover:border-[#FF7B00]/70">
                <PlayCircle size={24} className="text-[#5B1E8C] group-hover:scale-110 transition-transform" />
                Explore Campus
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles or accents */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-[#5B1E8C]/22 via-[#5B1E8C]/8 to-transparent rounded-tl-[100%] blur-3xl pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-56 sm:w-64 h-56 sm:h-64 bg-[#FF7B00]/16 rounded-full blur-3xl pointer-events-none"
      ></motion.div>
    </div>
  );
}
