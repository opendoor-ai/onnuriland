import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingButtons() {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      {/* 1. 전화 상담 (모바일 전용) */}
      <a 
        href="tel:010-4360-8872"
        className="md:hidden w-14 h-14 bg-burgundy text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="전화 상담"
      >
        <Phone size={24} />
      </a>

      {/* 2. 문자 문의 (모바일 전용) */}
      <a 
        href="sms:010-4360-8872"
        className="md:hidden w-14 h-14 bg-gold text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="문자 문의"
      >
        <MessageSquare size={24} />
      </a>

      {/* 4. 맨 위로 이동 */}
      <AnimatePresence>
        {showScrollButtons && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-slate-800 border border-slate-200 rounded-full shadow-xl flex items-center justify-center hover:bg-slate-50 transition-colors"
            title="맨 위로"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 5. 맨 아래로 이동 */}
      <button
        onClick={scrollToBottom}
        className="w-12 h-12 bg-white text-slate-800 border border-slate-200 rounded-full shadow-xl flex items-center justify-center hover:bg-slate-50 transition-colors"
        title="맨 아래로"
      >
        <ArrowDown size={20} />
      </button>
    </div>
  );
}
