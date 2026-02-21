import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Copy, CheckCircle2, Heart } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const accountNumber = '3001089061';
  const accountName = "TAFFD'S GLOBAL LTD";
  const bankName = 'KUDA Business';

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setCopiedField(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan to-dna-blue px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Support the Conference</h2>
                    <p className="text-white/90 text-sm">Your donation makes a difference</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                  aria-label="Close modal">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Donation Message */}
                <div className="bg-gradient-to-br from-terracotta/5 to-gold/5 rounded-xl p-6 border border-terracotta/20">
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Your generous donation helps us advance longevity research and improve healthcare across Africa. 
                    Every contribution supports our mission to enhance quality of life for all.
                  </p>
                </div>

                {/* Bank Transfer Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-terracotta" />
                    <h3 className="text-lg font-semibold text-charcoal">Bank Transfer (Naira)</h3>
                  </div>

                  {/* Account Name */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <label className="text-sm text-charcoal/60 mb-2 block font-medium">Account Name</label>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-charcoal font-semibold text-lg">{accountName}</span>
                      <button
                        onClick={() => copyToClipboard(accountName, 'accountName')}
                        className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-terracotta/5 border border-gray-300 hover:border-terracotta rounded-lg transition-all text-sm font-medium text-charcoal hover:text-terracotta">
                        {copiedField === 'accountName' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bank Name */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <label className="text-sm text-charcoal/60 mb-2 block font-medium">Bank Name</label>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-charcoal font-semibold text-lg">{bankName}</span>
                      <button
                        onClick={() => copyToClipboard(bankName, 'bankName')}
                        className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-terracotta/5 border border-gray-300 hover:border-terracotta rounded-lg transition-all text-sm font-medium text-charcoal hover:text-terracotta">
                        {copiedField === 'bankName' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Account Number - Highlighted */}
                  <div className="bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-xl p-5 border-2 border-terracotta/40 shadow-sm">
                    <label className="text-sm text-terracotta font-semibold mb-3 block uppercase tracking-wide">
                      Account Number
                    </label>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-charcoal font-bold text-2xl tracking-wider">{accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(accountNumber, 'accountNumber')}
                        className="flex items-center gap-2 px-4 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-lg transition-all font-semibold shadow-md hover:shadow-lg">
                        {copiedField === 'accountNumber' ? (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-5 h-5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Thank You Message */}
                <div className="bg-gradient-to-r from-forest/5 to-terracotta/5 rounded-xl p-5 border border-forest/20 text-center">
                  <p className="text-charcoal/80 font-medium">
                    🙏 Thank you for your generous support!
                  </p>
                  <p className="text-charcoal/60 text-sm mt-2">
                    Your contribution helps advance healthy aging solutions across Africa.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal/90 transition-colors">
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
