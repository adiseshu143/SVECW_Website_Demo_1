import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#10281F] pt-20 pb-8 border-t-[6px] border-[#FF7B00] text-[#dce7e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-pastel-purple-200 p-1 shrink-0 overflow-hidden">
                <img src="/logo.png" alt="VWU Logo" className="w-full h-full object-cover scale-[1.35]" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-heading font-bold text-xl tracking-tight leading-none">VISHNU</span>
                <span className="text-xs uppercase tracking-widest opacity-90 font-medium mt-1">Women's University</span>
              </div>
            </div>
            <p className="text-[#c9d8d0] mb-8 max-w-sm font-light">
              Empowering women through quality education, innovation, research and entrepreneurship for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7B00] hover:text-white transition-all text-white"><FaFacebookF size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7B00] hover:text-white transition-all text-white"><FaTwitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7B00] hover:text-white transition-all text-white"><FaLinkedinIn size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7B00] hover:text-white transition-all text-white"><FaInstagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7B00] hover:text-white transition-all text-white"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Academics', 'Admissions', 'Departments', 'Placements', 'Research', 'Campus Life', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#FF7B00] transition-colors flex items-center gap-2 text-sm text-[#dce7e1]">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#FF7B00]"></span>
                     {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Academics</h4>
            <ul className="space-y-3">
              {['Undergraduate Programs', 'Postgraduate Programs', 'Ph.D Programs', 'Online Certifications', 'Centers of Excellence', 'Academic Calendar', 'Library', 'Student Portal'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#FF7B00] transition-colors flex items-center gap-2 text-sm text-[#dce7e1]">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#FF7B00]"></span>
                     {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF7B00] shrink-0 mt-1" />
                <span className="text-sm text-[#dce7e1]">Vishnu Women's University, Vishnupur, Bhimavaram - 534202, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#FF7B00] shrink-0" />
                <span className="text-sm text-[#dce7e1]">+91 8816 250 250</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#FF7B00] shrink-0" />
                <span className="text-sm text-[#dce7e1]">info@vwu.edu.in</span>
              </li>
            </ul>

            <div>
               <h4 className="text-white font-bold text-lg mb-4">Stay Connected</h4>
              <p className="text-sm text-[#c9d8d0] mb-3">Subscribe to our newsletter</p>
               <div className="flex rounded-md overflow-hidden border border-white/15">
                <input type="email" placeholder="Enter your email" className="bg-white/10 border border-white/20 border-r-0 text-white px-4 py-2 w-full focus:outline-none focus:bg-white/20 text-sm placeholder:text-[#b9ccc1]" />
                <button className="bg-[#FF7B00] hover:bg-[#e66f00] text-white font-bold px-4 py-2 transition-colors text-sm">
                    Subscribe
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Map / Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#b9ccc1] text-center md:text-left">
            &copy; {new Date().getFullYear()} Vishnu Women's University. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#b9ccc1]">
            <a href="#" className="hover:text-[#FF7B00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF7B00] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[#FF7B00] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
