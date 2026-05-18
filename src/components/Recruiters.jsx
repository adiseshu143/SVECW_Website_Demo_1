import React from 'react';

const logos = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Infosys' },
  { name: 'Adobe' },
  { name: 'IBM' },
  { name: 'TCS' }
];

export default function Recruiters() {
  return (
    <section className="py-24 bg-[#f3f8f5] border-y border-[#dde7e2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-pastel-peach-500 font-bold tracking-wider uppercase text-sm">Placements</span>
            <h2 className="text-4xl font-heading font-bold text-pastel-purple-900 mt-2">Our Top Recruiters</h2>
          </div>
          <a href="#" className="hidden sm:flex text-pastel-purple-700 hover:text-pastel-peach-500 font-medium items-center gap-2 transition-colors">
            View All Recruiters &rarr;
          </a>
        </div>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center py-4 px-6">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="w-48 h-24 bg-white/90 backdrop-blur-sm rounded-2xl border border-pastel-mint-100 flex items-center justify-center p-6 shrink-0 hover:border-pastel-peach-200 transition-all cursor-pointer opacity-85 hover:opacity-100 hover:-translate-y-0.5"
            >
              <span className="font-bold text-xl text-pastel-purple-900 tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gradient-logo rounded-[2.5rem] p-8 flex flex-wrap gap-8 justify-around items-center text-pastel-purple-900 border border-white/40">
          <div className="text-center">
             <div className="text-3xl font-bold text-pastel-purple-900 mb-1">1400+</div>
             <div className="text-sm uppercase tracking-wider opacity-80">Placements</div>
          </div>
          <div className="w-px h-12 bg-pastel-purple-300 hidden md:block"></div>
          <div className="text-center">
             <div className="text-3xl font-bold text-pastel-purple-900 mb-1">350+</div>
             <div className="text-sm uppercase tracking-wider opacity-80">Recruiters</div>
          </div>
          <div className="w-px h-12 bg-pastel-purple-300 hidden md:block"></div>
          <div className="text-center">
             <div className="text-3xl font-bold text-pastel-purple-900 mb-1">₹7.5 LPA</div>
             <div className="text-sm uppercase tracking-wider opacity-80">Average Package</div>
          </div>
          <div className="w-px h-12 bg-pastel-purple-300 hidden md:block"></div>
          <div className="text-center">
             <div className="text-3xl font-bold text-pastel-purple-900 mb-1">100%</div>
             <div className="text-sm uppercase tracking-wider opacity-80">Placement Assistance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
