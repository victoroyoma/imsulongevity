import  { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RegistrationModal } from './RegistrationModal';
import { DonateModal } from './DonateModal';

const navItems = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Call for Papers',
  href: '#cfp'
},
{
  name: 'Speakers',
  href: '#speakers'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type="register" />
      <DonateModal isOpen={donateModalOpen} onClose={() => setDonateModalOpen(false)} />
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100 py-2 sm:py-3' : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm py-4 sm:py-6'}`}
        role="navigation"
        aria-label="Main navigation">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          {/* Center - Main Navigation */}
          <div className="flex items-center gap-4 flex-1 justify-center">
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group relative">
            <img 
              src="https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771663955/afrolong_vtqs0q.jpg" 
              alt="Afrolongevity Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 bg-white/90 p-0.5"
            />
            <div
              className={`flex flex-col transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white drop-shadow-md'}`}>

              <span className="font-bold text-sm sm:text-base tracking-wider leading-tight group-hover:text-terracotta transition-colors">
                IMSU
              </span>
              <span className="text-xs sm:text-sm font-serif italic leading-tight opacity-90">
                Longevity 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 relative group/link ${
                    scrolled 
                      ? `${isActive ? 'text-terracotta bg-terracotta/5' : 'text-charcoal hover:text-terracotta hover:bg-terracotta/5'}` 
                      : `${isActive ? 'text-sand bg-white/10' : 'text-white hover:text-sand hover:bg-white/10'}`
                  } ${isActive ? 'font-semibold shadow-sm' : ''}`}
                  aria-current={isActive ? 'page' : undefined}>

                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute bottom-0 left-0 right-0 h-1 rounded-t-full ${
                        scrolled ? 'bg-gradient-to-r from-terracotta to-forest' : 'bg-gradient-to-r from-sand to-gold'
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
            <button
              onClick={() => setDonateModalOpen(true)}
              className={`ml-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 focus:ring-2 focus:ring-offset-2 relative overflow-hidden group/btn ${
                scrolled 
                  ? 'bg-gradient-to-r from-cyan to-dna-blue text-white shadow-lg focus:ring-cyan border border-cyan/30' 
                  : 'bg-gradient-to-r from-cyan to-dna-blue text-white shadow-xl focus:ring-cyan'
              }`}>
              <span className="relative z-10 flex items-center gap-1.5">
                <Heart className="w-4 h-4" />
                <span>Donate</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-dna-blue to-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className={`ml-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 focus:ring-2 focus:ring-offset-2 relative overflow-hidden group/btn ${
                scrolled 
                  ? 'bg-gradient-to-r from-terracotta to-forest text-white shadow-lg focus:ring-terracotta' 
                  : 'bg-white text-terracotta shadow-xl focus:ring-sand'
              }`}>

              <span className="relative z-10">Register</span>
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-forest to-terracotta opacity-0 group-hover/btn:opacity-100' 
                  : 'bg-gradient-to-r from-sand to-gold opacity-0 group-hover/btn:opacity-100'
              }`}></div>
            </button>
          </div>
          </div>

          {/* Right Logo - IMSU */}
          <div className="flex-shrink-0 hidden md:block">
            <img 
              src="https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771257953/imu_qlm7cq.jpg" 
              alt="IMSU Logo"
              className="h-10 sm:h-12 md:h-12 lg:h-14 w-auto object-contain bg-white/90 rounded-lg p-1"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2.5 rounded-lg hover:bg-terracotta/10 active:bg-terracotta/20 transition-all duration-200 hover:scale-105 active:scale-95 ${
              scrolled ? 'text-charcoal' : 'text-white drop-shadow-md'
            } ${isOpen ? 'bg-terracotta/10' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}>

            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
              style={{ top: scrolled ? '56px' : '80px' }}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200 shadow-2xl relative z-10">

              <div className="px-4 py-6 space-y-1.5 flex flex-col max-h-[calc(100vh-120px)] overflow-y-auto">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-5 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 active:scale-95 border ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-terracotta to-forest shadow-md border-transparent' 
                        : 'text-charcoal hover:text-terracotta bg-white hover:bg-terracotta/5 border-gray-100 hover:border-terracotta/20 hover:shadow-sm'
                    }`}
                    onClick={handleNavClick}
                    aria-current={isActive ? 'page' : undefined}>

                    <span className="flex items-center justify-between">
                      {item.name}
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </span>
                  </motion.a>
                );
              })}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => {
                  setDonateModalOpen(true);
                  handleNavClick();
                }}
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan to-dna-blue text-white font-bold hover:shadow-xl active:scale-95 transition-all duration-200 mt-4 border border-transparent hover:border-white/20">
                <Heart className="w-5 h-5 mr-2" />
                <span>Donate Now</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.05 }}
                onClick={() => {
                  setModalOpen(true);
                  handleNavClick();
                }}
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-gradient-to-r from-terracotta to-forest text-white font-bold hover:shadow-xl active:scale-95 transition-all duration-200 mt-2 border border-transparent hover:border-white/20">

                <span>Register Now</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </motion.button>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
    </>
  );

}