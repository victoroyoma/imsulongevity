import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Stethoscope,
  Building2,
  Utensils,
  Heart,
  Users,
  Briefcase,
  TrendingUp } from
'lucide-react';
const audienceTypes = [
{
  icon: GraduationCap,
  label: 'Academics and researchers'
},
{
  icon: Stethoscope,
  label: 'Clinicians, pharmacists, and health professionals'
},
{
  icon: Building2,
  label: 'Policymakers and regulatory agencies'
},
{
  icon: Users,
  label: 'NGOs and civil society organisations'
},
{
  icon: Utensils,
  label: 'Owners and managers of hotels, eateries, restaurants, and hospitality centres'
},
{
  icon: Heart,
  label: 'Food producers, nutrition advocates, and wellness brands'
},
{
  icon: TrendingUp,
  label: 'Longevity enthusiasts and health-conscious individuals'
},
{
  icon: Briefcase,
  label: 'Students and early-career professionals'
}];

export function Audience() {
  return (
    <section className="py-16 sm:py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold font-bold tracking-wider text-sm uppercase mb-2 block">
              AUDIENCE PROFILE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">
              Who Should Attend?
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              This conference is designed for an <span className="text-gold font-semibold">Africa-facing, influence-oriented audience</span>, including:
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sand italic">
                This diversity ensures ideas translate into policy, practice, enterprise, and everyday African life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audienceTypes.map((item, idx) =>
            <motion.div
              key={idx}
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
                duration: 0.4,
                delay: idx * 0.1
              }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-terracotta/50 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 cursor-default group">

                <item.icon className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-200">
                  {item.label}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}