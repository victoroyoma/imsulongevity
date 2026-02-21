import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Heart } from 'lucide-react';
import { RegistrationModal } from './RegistrationModal';
import { DonateModal } from './DonateModal';

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'register' | 'cfp' | 'abstract'>('register');
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  const openModal = (type: 'register' | 'cfp' | 'abstract') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
      <DonateModal isOpen={donateModalOpen} onClose={() => setDonateModalOpen(false)} />
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">

      {/* Background Pattern & Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-pattern-overlay"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest rounded-full blur-[120px] opacity-20 translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 flex flex-col items-center text-center">
        {/* Policy Anchor Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sand text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-white/15 transition-all max-w-full">

          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          WHO Decade of Healthy Aging (2020–2030)
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 max-w-5xl px-2 sm:px-0">

          From Crisis-Care to Quality-of-Life in Africa
        </motion.h1>

        {/* Conference Theme */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}
          className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-sand/70 uppercase tracking-wider mb-2">Theme:</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight">
            <span className="text-white">Biophilosophy, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              Afrolongevity
            </span>
            <span className="text-white"> & </span>
            <span className="text-white">Human Enhancement</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-sm sm:text-base md:text-lg text-sand/90 font-light leading-relaxed mb-8 sm:mb-10 max-w-4xl space-y-4 sm:space-y-5 text-left px-2 sm:px-4 md:px-0">

          <p>
            In 2020, the World Health Organization declared 2020–2030 the <span className="text-gold font-medium">Decade of Healthy Aging</span>, urging countries to redesign health systems around functional ability, quality of life, and long-term wellbeing across the life course.
          </p>

          <p>
            Midway into this decade, many African countries are experiencing a widening gap between policy aspirations and lived health realities. Across the continent—and with particular intensity in parts of West and Eastern Nigeria—there is a rising burden of chronic kidney and liver diseases, metabolic disorders, premature mortality, exposure to fake and substandard medicines, unsafe and nutritionally compromised food systems, and declining public trust in healthcare institutions.
          </p>

          <p>
            The <span className="text-terracotta font-semibold">IMSU International Conference on Longevity 2026</span> is convened as an African-focused strategic response to interrogate why healthy aging is failing in African contexts, and how clinically sound, ethically governed, culturally grounded, and innovation-driven pathways can improve quality of life across the continent.
          </p>

          <p>
            Eastern Nigeria serve as an important case study within a broader African conversation on aging, health systems, and human development.
          </p>
        </motion.div>

        {/* Details Grid */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.7
          }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 mb-8 sm:mb-10 text-white/80 w-full max-w-2xl">

          <div className="flex items-center gap-3">
            <Calendar className="text-terracotta w-5 h-5" />
            <span className="text-sm font-medium">24–25 June 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-terracotta w-5 h-5" />
            <span className="text-sm font-medium">
              Imo State University, Nigeria
            </span>
          </div>
        </motion.div>

        {/* Organizers */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="mb-8 sm:mb-12 max-w-3xl">

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 sm:px-6 py-5 sm:py-6">
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <p className="text-sand/90 text-xs sm:text-sm leading-relaxed">
                <span className="text-gold font-semibold">Organised by</span> Afrolongevity
              </p>
              <p className="text-sand/90 text-xs sm:text-sm leading-relaxed">
                <span className="text-gold font-semibold">In Strategic Partnership with</span> Imo State University, Nigeria
              </p>
              <p className="text-sand/90 text-xs sm:text-sm leading-relaxed">
                <span className="text-gold font-semibold">In Collaboration with</span> the Department of Youth in Development, University of Venda, South Africa
              </p>
            </div>
            
            {/* University Logos */}
            <div className="pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771257953/imu_qlm7cq.jpg" 
                  alt="Imo State University Logo" 
                  className="h-16 sm:h-20 w-auto object-contain bg-white/10 rounded-lg p-2"
                />
                <span className="text-[10px] sm:text-xs text-sand/70 text-center">IMSU</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771257953/univenda_ftjoro.jpg" 
                  alt="University of Venda Logo" 
                  className="h-16 sm:h-20 w-auto object-contain bg-white/10 rounded-lg p-2"
                />
                <span className="text-[10px] sm:text-xs text-sand/70 text-center">Univen</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.9
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-stretch sm:items-center max-w-2xl sm:max-w-none px-2 sm:px-0">

          <button
            onClick={() => openModal('register')}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-terracotta text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-forest transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 shadow-lg shadow-terracotta/20 focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-charcoal cursor-pointer">

            Register Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => openModal('cfp')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-forest text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-terracotta transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center shadow-lg shadow-forest/20 focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-charcoal cursor-pointer">

            Call for Papers
          </button>

          <button
            onClick={() => openModal('abstract')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 hover:border-gold backdrop-blur-sm transition-all duration-300 flex items-center justify-center focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal cursor-pointer">

            Submit Abstract
          </button>
          
          <button
            onClick={() => setDonateModalOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan to-dna-blue text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cyan/30 focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-charcoal cursor-pointer group">
            <Heart size={20} className="group-hover:scale-110 transition-transform" />
            Donate Now
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2 text-sand/60 hover:text-sand transition-colors cursor-pointer">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-sand/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-sand rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-sand/10 clip-path-curve"></div>
    </section>
    </>
  );

}