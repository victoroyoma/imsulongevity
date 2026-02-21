import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Building2, FileText, Send, CreditCard, Banknote, MessageCircle, Copy, CheckCircle2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'register' | 'cfp' | 'abstract';
}

export function RegistrationModal({ isOpen, onClose, type }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    country: '',
    paperTitle: '',
    abstract: '',
    keywords: '',
    category: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'bank' | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to submit evidence of payment for the IMSU International Conference on Longevity 2026.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
  );
  const whatsappLink = `https://wa.me/2348117153359?text=${whatsappMessage}`;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSubmitSuccess(false);
      setPaymentMethod(null);
      setCopiedField(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        position: '',
        country: '',
        paperTitle: '',
        abstract: '',
        keywords: '',
        category: '',
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getTitle = () => {
    switch (type) {
      case 'register':
        return 'Conference Registration';
      case 'cfp':
        return 'Call for Papers';
      case 'abstract':
        return 'Submit Abstract';
      default:
        return 'Registration';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'register':
        return 'Register for IMSU International Conference on Longevity 2026';
      case 'cfp':
        return 'Submit your paper proposal for the conference';
      case 'abstract':
        return 'Submit your abstract for consideration';
      default:
        return '';
    }
  };

  const categories = [
    'Biological & Clinical Sciences',
    'Technology & Innovation',
    'Pharmaceutical & Drug Safety',
    'Nutrition & Food Systems',
    'Ethics & Philosophy',
    'Public Health & Systems',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-terracotta to-forest p-4 sm:p-6 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} className="sm:hidden" />
                  <X size={20} className="hidden sm:block" />
                </button>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-1.5 sm:mb-2 pr-8">{getTitle()}</h2>
                <p className="text-white/90 text-xs sm:text-sm">{getDescription()}</p>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-4 sm:p-6 md:p-8">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-forest"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">Submission Successful!</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Thank you for your {type === 'register' ? 'registration' : 'submission'}. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                          Full Name <span className="text-terracotta">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                          Email Address <span className="text-terracotta">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                          Phone Number <span className="text-terracotta">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                            placeholder="+234 xxx xxx xxxx"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="country" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                          Country <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                          placeholder="Nigeria"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="organization" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                          Organization/Institution
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                            placeholder="University Name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="position" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                          Position/Title
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                          placeholder="Researcher, Student, etc."
                        />
                      </div>
                    </div>

                    {/* Payment Section for Registration */}
                    {type === 'register' && (
                      <div className="border-t border-gray-200 pt-6 mt-6">
                        <div className="bg-terracotta/5 rounded-lg p-4 sm:p-6 mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-charcoal">Registration Fee</h3>
                            <span className="text-2xl sm:text-3xl font-bold text-terracotta">₦20,000</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">Flat rate for all participants</p>
                        </div>

                        <div className="space-y-4">
                          <label className="block text-sm font-semibold text-charcoal mb-3">
                            Select Payment Method <span className="text-terracotta">*</span>
                          </label>

                          {/* Payment Method Options */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('paystack')}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                paymentMethod === 'paystack'
                                  ? 'border-terracotta bg-terracotta/5'
                                  : 'border-gray-300 hover:border-terracotta/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <CreditCard className="text-terracotta" size={20} />
                                <div className="text-left">
                                  <p className="font-semibold text-charcoal text-sm">Pay with Card</p>
                                  <p className="text-xs text-gray-600">Paystack (Instant)</p>
                                </div>
                              </div>
                            </button>

                            <button
                              type="button"
                              onClick={() => setPaymentMethod('bank')}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                paymentMethod === 'bank'
                                  ? 'border-terracotta bg-terracotta/5'
                                  : 'border-gray-300 hover:border-terracotta/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Banknote className="text-terracotta" size={20} />
                                <div className="text-left">
                                  <p className="font-semibold text-charcoal text-sm">Bank Transfer</p>
                                  <p className="text-xs text-gray-600">Direct deposit</p>
                                </div>
                              </div>
                            </button>
                          </div>

                          {/* Paystack Payment */}
                          {paymentMethod === 'paystack' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="bg-forest/5 rounded-lg p-4 sm:p-6 mt-4"
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  // Initialize Paystack payment
                                  window.open('https://paystack.com/buy/conference-ticket-gpnsjp', '_blank');
                                }}
                                className="w-full bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-terracotta/90 transition-all flex items-center justify-center gap-2"
                              >
                                <CreditCard size={18} />
                                Pay ₦20,000 with Paystack
                              </button>
                              <p className="text-xs text-gray-600 text-center mt-3">
                                You will be redirected to Paystack to complete your payment
                              </p>
                            </motion.div>
                          )}

                          {/* Bank Transfer Details */}
                          {paymentMethod === 'bank' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="bg-forest/5 rounded-lg p-4 sm:p-6 mt-4 space-y-4"
                            >
                              <h4 className="font-semibold text-charcoal mb-3">Bank Account Details</h4>
                              
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 border border-gray-200">
                                  <p className="text-xs text-gray-600 mb-1">Bank Name</p>
                                  <div className="flex items-center justify-between">
                                    <p className="font-semibold text-charcoal">KUDA Business</p>
                                    <button
                                      type="button"
                                      onClick={() => copyToClipboard('KUDA Business', 'bank')}
                                      className="text-terracotta hover:text-terracotta/80 transition-colors"
                                    >
                                      {copiedField === 'bank' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-white rounded-lg p-3 border border-gray-200">
                                  <p className="text-xs text-gray-600 mb-1">Account Number</p>
                                  <div className="flex items-center justify-between">
                                    <p className="font-semibold text-charcoal text-lg">3001089061</p>
                                    <button
                                      type="button"
                                      onClick={() => copyToClipboard('3001089061', 'account')}
                                      className="text-terracotta hover:text-terracotta/80 transition-colors"
                                    >
                                      {copiedField === 'account' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-white rounded-lg p-3 border border-gray-200">
                                  <p className="text-xs text-gray-600 mb-1">Account Name</p>
                                  <div className="flex items-center justify-between">
                                    <p className="font-semibold text-charcoal">TAFFD'S GLOBAL LTD</p>
                                    <button
                                      type="button"
                                      onClick={() => copyToClipboard("TAFFD'S GLOBAL LTD", 'name')}
                                      className="text-terracotta hover:text-terracotta/80 transition-colors"
                                    >
                                      {copiedField === 'name' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="border-t border-gray-300 pt-4 mt-4">
                                <p className="text-sm font-semibold text-charcoal mb-3">After payment, submit evidence:</p>
                                <a
                                  href={whatsappLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#22c55e] transition-all flex items-center justify-center gap-2"
                                >
                                  <MessageCircle size={18} />
                                  Submit Payment Evidence via WhatsApp
                                </a>
                                <p className="text-xs text-gray-600 text-center mt-2">
                                  Please include your payment receipt/screenshot
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Additional Fields for Paper/Abstract Submission */}
                    {(type === 'cfp' || type === 'abstract') && (
                      <>
                        <div>
                          <label htmlFor="paperTitle" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                            Paper/Abstract Title <span className="text-terracotta">*</span>
                          </label>
                          <div className="relative">
                            <FileText className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input
                              type="text"
                              id="paperTitle"
                              name="paperTitle"
                              required
                              value={formData.paperTitle}
                              onChange={handleChange}
                              className="w-full pl-9 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                              placeholder="Enter your paper title"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="category" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                            Category <span className="text-terracotta">*</span>
                          </label>
                          <select
                            id="category"
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                          >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="abstract" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                            Abstract (250-300 words) <span className="text-terracotta">*</span>
                          </label>
                          <textarea
                            id="abstract"
                            name="abstract"
                            required
                            rows={6}
                            value={formData.abstract}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all resize-none text-sm sm:text-base"
                            placeholder="Enter your abstract (250-300 words)"
                          />
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            {formData.abstract.split(' ').filter(word => word.length > 0).length} words
                          </p>
                        </div>

                        <div>
                          <label htmlFor="keywords" className="block text-xs sm:text-sm font-semibold text-charcoal mb-1.5 sm:mb-2">
                            Keywords (comma-separated)
                          </label>
                          <input
                            type="text"
                            id="keywords"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-all text-sm sm:text-base"
                            placeholder="longevity, aging, health systems"
                          />
                        </div>
                      </>
                    )}

                    {/* Submit Button */}
                    <div className="pt-3 sm:pt-4 border-t border-gray-200">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-terracotta to-forest text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="text-sm sm:text-base">Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm sm:text-base">Submit {type === 'register' ? 'Registration' : 'Submission'}</span>
                            <Send size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-2 sm:mt-3">
                        By submitting, you agree to our terms and conditions
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
