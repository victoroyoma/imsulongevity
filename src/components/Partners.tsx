import { motion } from 'framer-motion';
import { Building2, Globe, Heart, Users } from 'lucide-react';

const partners = [
  {
    name: 'ILA',
    fullName: 'International Longevity Alliance',
    logoImage: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771777400/ila_dgzihn.jpg',
    category: 'Major Partner'
  },
  {
    name: 'ILSA',
    fullName: 'International Longevity & Health Systems Alliance',
    logo: Building2,
    category: 'International Partner'
  },
  {
    name: 'TAFFD+',
    fullName: 'The Alliance for Food and Drug Safety',
    logo: Heart,
    category: 'Health Safety Partner'
  },
  {
    name: 'AfroLongevity Initiative',
    fullName: 'Continental Longevity Research Network',
    logo: Globe,
    category: 'Research Partner'
  },
  {
    name: 'WHO Africa',
    fullName: 'World Health Organization Regional Office for Africa',
    logo: Users,
    category: 'Policy Partner'
  }
];

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 mb-4">
            <span className="text-cyan-dark text-sm font-semibold uppercase tracking-wide">
              Collaboration
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            Sponsors & Partners
          </h2>
          <p className="text-navy/70 text-lg max-w-3xl mx-auto">
            In strategic partnership with leading institutions advancing longevity and health systems in Africa
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-cyan/20 hover:border-cyan/60 transition-all duration-300 flex flex-col items-center text-center">
              
              {/* Logo - Image or Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan/20 to-dna-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan/30 transition-all duration-300 border border-cyan/30 overflow-hidden">
                {partner.logoImage ? (
                  <img src={partner.logoImage} alt={`${partner.name} logo`} className="w-full h-full object-cover" />
                ) : partner.logo ? (
                  <partner.logo className="w-10 h-10 text-cyan-dark" />
                ) : null}
              </div>

              {/* Partner Name */}
              <h3 className="text-navy font-bold text-xl mb-2 group-hover:text-cyan-dark transition-colors">
                {partner.name}
              </h3>

              {/* Full Name */}
              <p className="text-navy/60 text-sm mb-3">
                {partner.fullName}
              </p>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan-dark text-xs font-medium">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Partnership Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-navy via-navy-dark to-navy-light rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-cyan/20">
          
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Organized by Afrolongevity
          </h3>
          <p className="text-cyan-light/90 text-lg mb-2">
            In Strategic Partnership with <span className="text-cyan font-semibold">Imo State University, Nigeria</span>
          </p>
          <p className="text-cyan-light/80 mb-6">
            In Collaboration with the Department of Youth in Development, University of Venda, South Africa
          </p>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-cyan-light/90">
            <div className="flex items-center gap-2">
              <span className="text-cyan">✉</span>
              <a href="mailto:afrolongevity@taffds.org" className="hover:text-cyan transition-colors">
                afrolongevity@taffds.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan">✉</span>
              <a href="mailto:imsulongevity.taffds.org" className="hover:text-cyan transition-colors">
                imsulongevity.taffds.org
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-cyan-light/90">
            <div className="flex items-center gap-2">
              <span className="text-cyan">📞</span>
              <a href="tel:08035691677" className="hover:text-cyan transition-colors">
                08035691677
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan">📱</span>
              <a href="https://wa.me/2347068084575" className="hover:text-cyan transition-colors">
                07068084575 (WhatsApp)
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-cyan text-navy rounded-full font-semibold hover:bg-cyan-light transition-colors shadow-lg hover:shadow-cyan/50 hover:shadow-xl">
              Become a Sponsor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
