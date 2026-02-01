import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Star } from 'lucide-react';

const keynoteSpakers = [
{
  name: 'Dr. Aubrey de Grey',
  org: 'Longevity Escape Velocity Foundation',
  initials: 'AD'
},
{
  name: 'Dr. Natasha Vita-More',
  org: 'Humanity+; Geneva College of Longevity Science',
  initials: 'NV'
},
{
  name: 'Osinakachi Akuma Kalu',
  org: "Founder, TAFFD's & Afrolongevity",
  initials: 'OK'
}];

const leadPresenter = {
  name: 'Prof. T.D. Thobejane',
  org: 'University of Venda, South Africa',
  initials: 'TT'
};

const specialGuest = {
  name: 'Prof. Bobby Moroe',
  org: 'South African Consular General in Nigeria',
  initials: 'BM'
};

export function Speakers() {
  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-bold tracking-wider text-sm uppercase mb-2 block">
            World-Class Minds
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal">
            Speakers & Leadership
          </h2>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Award className="w-6 h-6 text-terracotta" />
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              Keynote Speakers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {keynoteSpakers.map((speaker, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group relative bg-white rounded-xl p-8 text-center border-2 border-terracotta/20 hover:border-terracotta shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-24 h-24 mx-auto bg-terracotta/10 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  {speaker.initials}
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {speaker.org}
                </p>

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-terracotta/30 rounded-tr-lg group-hover:border-terracotta transition-colors"></div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Lead Paper Presenter & Special Guest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Lead Paper Presenter */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-gradient-to-br from-forest/5 to-forest/10 rounded-xl p-8 border border-forest/30">

            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-forest" />
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Lead Paper Presenter
              </h3>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-forest/20 rounded-full flex items-center justify-center text-xl font-serif font-bold text-forest flex-shrink-0">
                {leadPresenter.initials}
              </div>
              <div>
                <h4 className="text-lg font-bold text-charcoal mb-1">
                  {leadPresenter.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {leadPresenter.org}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Special Guest of Honour */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl p-8 border border-gold/30">

            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Special Guest of Honour
              </h3>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center text-xl font-serif font-bold text-gold flex-shrink-0">
                {specialGuest.initials}
              </div>
              <div>
                <h4 className="text-lg font-bold text-charcoal mb-1">
                  {specialGuest.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {specialGuest.org}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}