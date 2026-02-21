import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Leaf, Heart, Brain, Smile, Battery, Shield } from 'lucide-react';
import { DNAHelix } from './DNAHelix';

const focusAreas = [
  {
    icon: Activity,
    title: 'Kidney & Liver Disease Crisis',
    description: 'Addressing the rising burden of chronic kidney and liver diseases across Africa'
  },
  {
    icon: AlertTriangle,
    title: 'Fake & Substandard Medicines',
    description: 'Combating the proliferation of counterfeit pharmaceuticals threatening public health'
  },
  {
    icon: Leaf,
    title: 'Toxic Food Systems',
    description: 'Examining food safety, nutrition, and the impact of contaminated food chains'
  },
  {
    icon: Heart,
    title: 'Preventive Care Failure',
    description: 'Understanding gaps in early detection and preventive healthcare systems'
  },
  {
    icon: Brain,
    title: 'African-Centered Healthy Aging Solution',
    description: 'Developing culturally grounded approaches to longevity and quality of life'
  },
  {
    icon: Smile,
    title: 'Philosophy of Life',
    description: 'Exploring biophilosophy and ethical frameworks for human flourishing'
  },
  {
    icon: Battery,
    title: 'Intrinsic Capacity and Vitality',
    description: 'Enhancing functional ability and resilience across the lifespan'
  },
  {
    icon: Shield,
    title: 'Health System Strengthening',
    description: 'Building trust and capacity in African healthcare institutions'
  }
];

export function KeyFocusAreas() {
  return (
    <section id="focus-areas" className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
      {/* DNA Helix Background */}
      <DNAHelix />
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-dna-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 mb-4">
            <span className="text-cyan text-sm font-semibold uppercase tracking-wide">
              Conference Focus
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Key Focus Areas
          </h2>
          <p className="text-cyan-light/80 text-lg max-w-3xl mx-auto">
            Critical health challenges and innovative solutions for quality of life in Africa
          </p>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-navy-accent/50 backdrop-blur-sm border border-cyan/20 rounded-2xl p-6 hover:bg-navy-accent/70 hover:border-cyan/60 hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300">
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/30 to-dna-blue/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan/30 transition-all duration-300 border border-cyan/20">
                <area.icon className="w-6 h-6 text-cyan" />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan transition-colors">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-cyan-light/60 text-sm leading-relaxed group-hover:text-cyan-light/80 transition-colors">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center">
          <div className="inline-block bg-navy-accent/60 backdrop-blur-sm border border-cyan/20 rounded-2xl px-8 py-6 shadow-lg shadow-cyan/10">
            <p className="text-cyan-light/90 text-base mb-2">
              <span className="text-cyan font-semibold">Policy Anchor:</span> WHO Decade of Healthy Aging (2020–2030)
            </p>
            <p className="text-cyan-light/70 text-sm">
              Aligning research and practice with global healthy aging goals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
