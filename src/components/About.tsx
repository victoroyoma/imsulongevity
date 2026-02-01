
import { motion } from 'framer-motion';
import { Target, Users, Globe, HeartPulse, TrendingUp } from 'lucide-react';
const objectives = [
{
  icon: HeartPulse,
  text: 'Examine why healthy aging outcomes are declining across African health systems despite global frameworks'
},
{
  icon: Target,
  text: 'Address chronic and terminal diseases from upstream biological, environmental, and societal perspectives'
},
{
  icon: Globe,
  text: 'Interrogate failures in food safety, drug quality, regulation, and health governance in African contexts'
},
{
  icon: Users,
  text: 'Integrate African biophilosophy, indigenous knowledge, and lived realities into longevity science'
},
{
  icon: TrendingUp,
  text: 'Generate Africa-relevant, context-specific strategies for improving quality of life and healthspan'
}];

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <span className="text-terracotta font-bold tracking-wider text-sm uppercase mb-2 block">
              The Context
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
              Rethinking Aging, Health, and Human Flourishing in Africa
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              In 2020, the World Health Organization declared 2020–2030 the
              Decade of Healthy Aging. Yet, midway into this decade, many
              African countries are experiencing a widening gap between policy
              aspirations and lived health realities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Across the continent—and with particular intensity in parts of
              West and Eastern Nigeria—there is a rising burden of chronic
              kidney and liver diseases, metabolic disorders, and premature
              mortality. This conference is an African-focused strategic
              response to interrogate these challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative">

            <div className="absolute inset-0 bg-terracotta/10 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-sand/20 p-8 sm:p-12 rounded-2xl border border-sand-dark/30">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Why This Conference?
              </h3>
              <p className="text-gray-700 mb-4 font-semibold">
                This conference is not a routine academic gathering.
              </p>
              <p className="text-gray-700 mb-6">
                It is a <span className="text-terracotta font-semibold">transdisciplinary African intervention</span> designed to confront the structural, biological, ethical, and socio-cultural drivers of declining quality of life across African societies.
              </p>
              <p className="text-gray-600">
                By bringing philosophy into structured dialogue with medicine, public health, biotechnology, food systems, policy, and innovation, the conference reframes aging as a <span className="text-forest font-semibold">continental development challenge</span>, not merely a medical condition or demographic trend.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Objectives Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-charcoal">
              Conference Objectives
            </h3>
            <div className="w-24 h-1 bg-terracotta mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {objectives.map((obj, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 flex gap-4 group">

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sand/30 rounded-full flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                    <obj.icon size={24} />
                  </div>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed group-hover:text-charcoal transition-colors">
                  {obj.text}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Collaboration Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="bg-forest text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-center">
              Strategic Collaboration
            </h3>
            <p className="text-white/90 text-lg mb-6">
              The IMSU International Conference on Longevity is built on
              intentional African collaboration, bringing together actors who
              rarely engage meaningfully within the same space:
            </p>
            
            <ul className="text-white/90 text-base sm:text-lg mb-8 space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>African universities and research institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Clinicians, pharmacists, and healthcare providers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Food producers, hospitality operators, and nutrition stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Policymakers, regulators, and civil society organisations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Wellness innovators, startups, and community health advocates</span>
              </li>
            </ul>

            <p className="text-white/90 text-base sm:text-lg italic border-l-4 border-gold pl-4">
              This collaborative model is designed to break disciplinary and sectoral silos, surface uncomfortable realities, and align efforts toward preventive, life-extending systems rather than crisis-driven care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}