import { motion } from 'framer-motion';
import { FileText, Calendar, CheckCircle, Mail } from 'lucide-react';
const subThemes = [
{
  category: 'Biological & Clinical Sciences',
  items: [
  'Biology of aging and mechanisms of age-related disease in African populations',
  'Biomarkers of aging and biological age assessment',
  'Clinical prevention of chronic kidney, liver, cardiovascular, and metabolic diseases',
  'Longevity medicine and life-course health strategies in low- and middle-income settings',
  'Regenerative medicine, stem cells, and tissue repair',
  'Biotechnology and translational therapies for healthy aging',
  'Gene therapy, epigenetics, and emerging molecular interventions']

},
{
  category: 'Technology & Innovation',
  items: [
  'Artificial intelligence in diagnostics, risk prediction, and clinical decision-making',
  'Precision medicine and data-driven healthcare for African populations',
  'HealthTech and MedTech innovations in remote monitoring and telemedicine',
  'Human enhancement technologies: clinical promise, limits, and risks']

},
{
  category: 'Pharmaceutical & Drug Safety',
  items: [
  'Pharmaceutical integrity, fake medicines, and clinical safety in Africa',
  'Drug regulation, pharmacovigilance, and health system accountability']

},
{
  category: 'Nutrition & Food Systems',
  items: [
  'Nutrition, food systems, and metabolic health in aging populations',
  'Food toxicity, adulteration, and long-term public health consequences',
  'Integrative and evidence-based use of indigenous and functional foods']

},
{
  category: 'Ethics & Philosophy',
  items: [
  'Bioethics of longevity, life extension, and emerging medical technologies',
  'Ethical governance of AI, data, and experimental therapies in healthcare',
  'Patient autonomy, informed consent, and trust in clinical practice',
  'Philosophical foundations of health, aging, and human dignity',
  'African perspectives on life, death, aging, and moral responsibility']

},
{
  category: 'Public Health & Systems',
  items: [
  'Public health policy implementation and failures in healthy aging systems',
  'Health system design, equity, and access in low-resource settings',
  'Industry, innovation, and investment in African longevity ecosystems',
  'Academia–industry–clinical collaboration for scalable African health solutions']

}];

export function CallForPapers() {
  return (
    <section id="cfp" className="py-16 sm:py-20 md:py-32 bg-sand/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta font-bold tracking-wider text-sm uppercase mb-2 block">
            Call for Papers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6">
            Theme & Submission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            "Biophilosophy, Afrolongevity & Human Enhancement"
          </p>
        </div>

        {/* Concept Note */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 mb-12 sm:mb-16">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
            Concept Note
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Africa stands at a critical crossroads. While biotechnology, artificial intelligence, and medical sciences are rapidly reshaping global conversations on longevity and human enhancement, African perspectives—rooted in lived experience, ethical reflection, indigenous knowledge, and constrained health systems—remain underrepresented.
            </p>
            <p>
              <span className="text-terracotta font-semibold">Afrolongevity</span> offers a framework for understanding aging through African biological, cultural, nutritional, communal, and ethical lenses, while remaining scientifically rigorous and clinically grounded. <span className="text-forest font-semibold">Biophilosophy</span> provides the conceptual and ethical tools necessary to interrogate biomedical innovation, enhancement technologies, and the future of the human person in African societies.
            </p>
            <p className="font-medium text-charcoal">
              This conference invites contributions that bridge clinical science, ethics, policy, and African realities.
            </p>
          </div>
        </div>

        {/* Sub-themes Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 text-center">
            Sub-Themes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {subThemes.map((group, idx) =>
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
                duration: 0.5,
                delay: idx * 0.1
              }}
              className="bg-white p-6 rounded-xl border-t-4 border-terracotta shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">

                <h4 className="font-bold text-lg text-charcoal mb-4 border-b border-gray-100 pb-2 group-hover:text-terracotta transition-colors">
                  {group.category}
                </h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) =>
                <li
                  key={i}
                  className="flex items-start text-sm text-gray-600">

                      <span className="mr-2 text-terracotta mt-1">•</span>
                      {item}
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Timeline & Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Important Dates */}
          <div className="bg-charcoal text-white rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-gold w-6 h-6" />
              <h3 className="text-2xl font-serif font-bold">Important Dates</h3>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/20"></div>

              {[
              {
                date: '30 March 2026',
                event: 'Abstract Deadline',
                status: 'Upcoming'
              },
              {
                date: '28 April 2026',
                event: 'Notification of Acceptance',
                status: 'Pending'
              },
              {
                date: '30 May 2026',
                event: 'Full Paper Submission',
                status: 'Pending'
              }].
              map((item, i) =>
              <div key={i} className="flex gap-6 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-charcoal border-2 border-gold flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-gold font-bold text-lg">{item.date}</p>
                    <p className="text-white/90">{item.event}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
              <p className="text-white/90 font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold" />
                Certificates of paper presentation will be issued.
              </p>
              <p className="text-sm text-gray-400">
                Selected papers will be published in a special issue of the Journal of African and Global Issues in Quality (JAGIQ) after peer review.
              </p>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-terracotta w-6 h-6" />
              <h3 className="text-2xl font-serif font-bold text-charcoal">
                Submission Guidelines
              </h3>
            </div>

            <ul className="space-y-4 mb-8">
              {[
              'Abstract length: 250–300 words',
              'Format: Microsoft Word',
              'Font: Times New Roman, size 12',
              'Referencing style: APA (6th or 7th edition)'].
              map((rule, i) =>
              <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-forest flex-shrink-0" />
                  {rule}
                </li>
              )}
            </ul>

            <div className="bg-sand/30 p-6 rounded-xl">
              <h4 className="font-bold text-charcoal mb-2 flex items-center gap-2">
                <Mail size={18} /> Email Submissions to:
              </h4>
              <a
                href="mailto:ogujisteve@yahoo.com"
                className="block text-terracotta hover:underline font-medium mb-1">

                ogujisteve@yahoo.com
              </a>
              <a
                href="mailto:afrolongevity@taffds.org"
                className="block text-terracotta hover:underline font-medium">

                afrolongevity@taffds.org
              </a>
            </div>
          </div>
        </div>

        {/* Publication Opportunities */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-forest/5 to-terracotta/5 rounded-2xl p-8 sm:p-10 md:p-12 border border-forest/20">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-6">
              Publication Opportunities
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Selected papers presented at the conference will be considered for publication in a special issue of the <span className="font-semibold text-charcoal">African and Global Issues Quarterly (AGIQ)</span>, subject to peer review and editorial standards.
              </p>
              <p>
                In addition, outstanding contributions may be invited for inclusion in a second volume of the edited book <span className="font-semibold italic text-charcoal">Rethinking Philosophy for Education, Society and Human Development in Sub-Saharan Africa</span>, published by <span className="font-semibold text-charcoal">Emerald Publishing</span>, following the publisher's review and editorial processes.
              </p>
              <p className="text-sm text-gray-600 italic pt-4 border-t border-gray-300">
                Publication in either outlet is contingent upon scholarly quality, thematic relevance, and compliance with editorial guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}