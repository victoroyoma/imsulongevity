
import { motion } from 'framer-motion';
import { Award, FileText, Star, Users } from 'lucide-react';

const hostSpeaker = {
  name: 'Professor Uchefula Ugonna Chukwumaeze, SAN',
  title: 'Vice Chancellor',
  org: 'Imo State University, Nigeria',
  role: 'Host',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/imsu_VC_uwxucc.jpg'
};

const keynoteSpeakers = [
{
  name: 'Prof. Natasha Vita-More PhD',
  title: 'Faculty, Geneva College of Longevity Science',
  org: 'Founder & Curator, Human+AI Project\nDist. Senior Fellow: Center for the Future Mind | Florida Atlantic University',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/natasha_frpcyk.jpg'
},
{
  name: 'Dr. Aubrey de Grey',
  title: 'Chief Science Officer',
  org: 'Longevity Escape Velocity Foundation',
  location: 'USA',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/aubery_qcnvzw.jpg'
},
{
  name: 'Prof. TD Thobejane',
  org: 'University of Venda',
  location: 'South Africa',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/prof_venda_uoe2di.jpg'
}];

const organizers = [
{
  name: 'Brenda Ramokopelwa',
  title: "CEO TAFFD's & Afrolongevity",
  location: 'South Africa',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/brenda_ceo_taffds_hvinzs.jpg'
},
{
  name: 'Osinakachi Akuma Kalu',
  title: 'Founder & Board Chair Afrolongevity',
  org: 'Board Member International Longevity Alliance',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/osi_qh4pk8.jpg'
}];

const additionalSpeakers = [
{
  name: 'Asst. Prof. Eugene Okoro',
  title: 'Head of Department of Philosophy',
  org: 'Imo State University',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258587/hod_philosophy_imsu_osusbz.jpg'
},
{
  name: 'Dr. Stephen Oguji',
  title: 'Department of Philosophy',
  org: 'Imo State University, Nigeria',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771258588/Dr._Stephen_Oguji_nosy31.jpg'
},
{
  name: 'Dr K E Amaechi',
  title: 'Postdoctoral Research Fellow',
  org: 'Department of Youth in Development, University of Venda, South Africa',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771661136/amaechi_bwanu8.jpg'
},
{
  name: 'Ojochogwu Abdul (Chogwu Abdul), PhD',
  title: 'Afropolitan Futurist, Philosopher, Transhumanist',
  org: '',
  image: 'https://res.cloudinary.com/dmqjqn6x3/image/upload/v1771661129/abdul_jh2d62.jpg'
}];

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

        {/* Host */}
        <div className="mb-16">
          <motion.div
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
              duration: 0.6
            }}
            className="bg-gradient-to-br from-terracotta/5 to-gold/5 rounded-2xl p-6 sm:p-8 border-2 border-terracotta/30 max-w-3xl mx-auto">

            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-6 h-6 text-terracotta" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal">
                Conference Host
              </h3>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img 
                src={hostSpeaker.image} 
                alt={hostSpeaker.name}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-terracotta/20 shadow-lg"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  {hostSpeaker.name}
                </h4>
                <p className="text-terracotta font-semibold mb-1">{hostSpeaker.title}</p>
                <p className="text-gray-600">{hostSpeaker.org}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Award className="w-6 h-6 text-terracotta" />
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              Keynote Speakers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keynoteSpeakers.map((speaker, index) =>
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
              className="group relative bg-white rounded-xl p-6 sm:p-8 text-center border-2 border-terracotta/20 hover:border-terracotta shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="overflow-hidden rounded-full mx-auto mb-6 w-32 h-32 border-4 border-terracotta/20 group-hover:border-terracotta transition-all duration-300 shadow-md group-hover:shadow-lg">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                  {speaker.name}
                </h3>
                {speaker.title && (
                  <p className="text-forest font-semibold text-sm mb-2">
                    {speaker.title}
                  </p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {speaker.org}
                </p>
                {speaker.location && (
                  <p className="text-gray-500 text-xs mt-2 font-medium">
                    {speaker.location}
                  </p>
                )}

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-terracotta/30 rounded-tr-lg group-hover:border-terracotta transition-colors"></div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Organizers & Leadership */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Users className="w-6 h-6 text-forest" />
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              Organizers & Leadership
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {organizers.map((organizer, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index === 0 ? -20 : 20
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
              className="bg-gradient-to-br from-forest/5 to-forest/10 rounded-xl p-6 border border-forest/30 hover:shadow-lg transition-shadow">

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <img 
                  src={organizer.image} 
                  alt={organizer.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-3 border-forest/20 shadow-md flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
                    {organizer.name}
                  </h4>
                  <p className="text-forest font-semibold text-sm mb-1">
                    {organizer.title}
                  </p>
                  {organizer.org && (
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {organizer.org}
                    </p>
                  )}
                  {organizer.location && (
                    <p className="text-gray-500 text-xs mt-1">
                      {organizer.location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
            )}
          </div>
        </div>

        {/* Additional Speakers */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <FileText className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              Additional Speakers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {additionalSpeakers.map((speaker, index) =>
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
              className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl p-6 border border-gold/30 hover:shadow-lg transition-shadow">

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-3 border-gold/20 shadow-md flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
                    {speaker.name}
                  </h4>
                  <p className="text-gold font-semibold text-sm mb-1">
                    {speaker.title}
                  </p>
                  {speaker.org && (
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {speaker.org}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}