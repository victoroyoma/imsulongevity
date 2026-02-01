
import { Check } from 'lucide-react';
export function Sponsorship() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center">
            <span className="text-terracotta font-bold tracking-wider text-sm uppercase mb-2">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6">
              Why Sponsor This Conference?
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Sponsoring this conference positions your organisation as a <span className="font-semibold text-charcoal">stakeholder in Africa's health future</span>, not merely a donor.
            </p>
            <p className="text-gray-600 mb-6 text-base">
              Sponsors align with:
            </p>

            <ul className="space-y-4 mb-8">
              {[
              'The WHO Decade of Healthy Aging (2020–2030)',
              'Continental conversations on chronic disease reduction',
              'Food safety, drug integrity, and quality-of-life improvement',
              'Education, ethics, innovation, and sustainable human development'].
              map((benefit, i) =>
              <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-forest" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              )}
            </ul>

            <div className="p-5 bg-terracotta/5 border-l-4 border-terracotta rounded-r-lg mb-10">
              <p className="text-charcoal font-semibold italic">
                This is strategic alignment with Africa's long-term societal resilience.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-charcoal text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta transition-colors duration-300 text-center w-full sm:w-auto">

              Contact for Sponsorship
            </a>
          </div>

          <div className="lg:w-1/2 bg-forest relative min-h-[300px] lg:min-h-full flex items-center justify-center p-8 sm:p-10 md:p-12">
            <div className="absolute inset-0 opacity-10 bg-pattern-overlay"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 sm:mb-4">
                Make an Impact
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-sm mx-auto">
                Join us in shaping the future of longevity and health in Africa.
              </p>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>);

}