import React from 'react';
import { MapPin, Calendar, Mail, Phone } from 'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Info Side */}
          <div>
            <span className="text-terracotta font-bold tracking-wider text-sm uppercase mb-2 block">
              Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-8">
              Venue & Contact
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-xl flex items-center justify-center text-terracotta flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">
                    Venue
                  </h3>
                  <p className="text-gray-600">University Auditorium</p>
                  <p className="text-gray-600">
                    Imo State University, Owerri, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-xl flex items-center justify-center text-terracotta flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">
                    Dates
                  </h3>
                  <p className="text-gray-600">Wednesday, 24 June 2026</p>
                  <p className="text-gray-600">Thursday, 25 June 2026</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Daily sessions commence at 9:00 AM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-xl flex items-center justify-center text-terracotta flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">
                    Conference Secretariat
                  </h3>
                  <p className="text-gray-600">
                    TAFFD’s & Afrolongevity and IMSU
                  </p>
                  <a
                    href="mailto:afrolongevity@taffds.org"
                    className="block text-terracotta hover:text-forest hover:underline font-medium mt-1 transition-colors">

                    afrolongevity@taffds.org
                  </a>
                  <a
                    href="mailto:ogujisteve@yahoo.com"
                    className="block text-terracotta hover:text-forest hover:underline font-medium transition-colors">

                    ogujisteve@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-xl flex items-center justify-center text-terracotta flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">
                    Phone / WhatsApp
                  </h3>
                  <p className="text-gray-600">Call: 0835691677</p>
                  <p className="text-gray-600">WhatsApp: 07068084575</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden relative border border-gray-200 shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.7042952908196!2d7.042066588582718!3d5.506199098618442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259c93f71cf8b%3A0x5ffa7978fe1a6aa6!2sIMO%20State%20University!5e0!3m2!1sen!2sng!4v1769954722722!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Imo State University Location"
              className="absolute inset-0"
            />
            {/* Decorative overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-gold to-forest pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>);

}