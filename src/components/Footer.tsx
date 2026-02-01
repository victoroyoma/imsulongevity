import React from 'react';
export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-terracotta rounded flex items-center justify-center font-serif font-bold">
                I
              </div>
              <span className="font-bold text-lg tracking-wide">
                IMSU LONGEVITY 2026
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl text-white mb-2">
              IMSU International Conference on Longevity 2026
            </h3>
            <p className="text-gold font-medium mb-4">
              Biophilosophy, Afrolongevity & Human Enhancement
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Organised by <span className="text-white font-semibold">Afrolongevity</span>
            </p>
            <p className="text-gray-400 text-sm mb-6">
              In Strategic Partnership with <span className="text-white font-semibold">Imo State University</span>
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3].map((i) =>
              <div
                key={i}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-terracotta hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center">

                  <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-sand">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white hover:underline underline-offset-2 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline underline-offset-2 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#cfp" className="hover:text-white hover:underline underline-offset-2 transition-all">
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="hover:text-white hover:underline underline-offset-2 transition-all">

                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="hover:text-white transition-colors">

                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-sand">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>afrolongevity@taffds.org</li>
              <li>ogujisteve@yahoo.com</li>
              <li className="pt-3">Call: 0835691677</li>
              <li>WhatsApp: 07068084575</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 TAFFD's. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white hover:underline underline-offset-2 transition-all">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white hover:underline underline-offset-2 transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}