import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: '홈', path: '/' },
  { name: '상세정보', path: '/details' },
  { name: '매물접수', path: '/services' },
  { name: '입지안내', path: '/about' },
  { name: '고객센터', path: '/contact' },
];

function PhoneModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "010-4360-8872";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/-/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center space-y-6"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto text-burgundy">
              <Phone size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">전화 상담 안내</h3>
              <p className="text-slate-500 text-sm">모바일 기기에서는 바로 연결되며,<br />PC에서는 아래 번호로 연락 부탁드립니다.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
              <span className="text-2xl font-bold text-burgundy tracking-tight">{phoneNumber}</span>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400 hover:text-burgundy"
                title="번호 복사"
              >
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href={`tel:${phoneNumber.replace(/-/g, '')}`}
                className="bg-burgundy text-white py-3 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all"
              >
                전화 걸기
              </a>
              <button 
                onClick={onClose}
                className="bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all"
              >
                닫기
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleOpenModal = () => setIsPhoneModalOpen(true);
    window.addEventListener('open-phone-modal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-phone-modal', handleOpenModal);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  const handlePhoneClick = (e: React.MouseEvent) => {
    // Detect if it's likely a desktop/tablet (not a small touch device)
    if (window.innerWidth > 1024) {
      e.preventDefault();
      setIsPhoneModalOpen(true);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent ? 'bg-transparent py-5' : 'bg-white shadow-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">H</span>
            </div>
            <span className={`font-bold text-xl tracking-tight ${isTransparent ? 'text-white drop-shadow-sm' : 'text-burgundy'}`}>
              힐스테이트 <span className="text-secondary">등촌역</span> <span className="text-sm font-normal opacity-70">온누리부동산</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : isTransparent ? 'text-white drop-shadow-sm' : 'text-slate-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:01043608872" 
              onClick={handlePhoneClick}
              className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              상담연결
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${isTransparent ? 'text-white drop-shadow-sm' : 'text-burgundy'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 text-base font-medium rounded-md ${
                      location.pathname === item.path 
                        ? 'text-burgundy bg-slate-50' 
                        : 'text-slate-600 hover:text-burgundy hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a 
                    href="tel:01043608872" 
                    className="w-full bg-burgundy text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    전화 상담하기
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <PhoneModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />
    </>
  );
}

export function Footer() {
  const handleViewMode = (mode: 'pc' | 'mobile') => {
    alert(`${mode === 'pc' ? 'PC' : '모바일'} 최적화 화면으로 구성되어 있습니다. 브라우저 창 크기에 따라 자동으로 조절됩니다.`);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-burgundy rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm italic">H</span>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              힐스테이트 등촌역 <span className="text-secondary text-sm font-normal ml-2">온누리부동산</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-md">
            9호선 등촌역 초역세권 프리미엄 브랜드 아파트 힐스테이트 등촌역 온누리부동산입니다. 성공적인 입주와 자산 가치 상승을 위해 최선을 다하겠습니다. 매도/매수, 임대차 상담을 환영합니다.
          </p>
          <div className="space-y-2 text-xs">
            <p>상호명: 온누리공인중개사사무소 | 대표: 한상덕</p>
            <p>등록번호: 제11500-2017-00392호 | 주소: 서울특별시 강서구 등촌동 646-1, 1층</p>
            <p>
              TEL: <a href="tel:0263968949" className="hover:text-white">02-6396-8949</a> | 
              H.P: <a 
                href="tel:01043608872" 
                onClick={(e) => {
                  if (window.innerWidth > 1024) {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-phone-modal'));
                  }
                }}
                className="hover:text-white"
              >
                010-4360-8872
              </a>
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">빠른 메뉴</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/details" className="hover:text-secondary transition-colors">단지 상세 정보</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">매물 접수하기</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">입지 프리미엄</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">고객센터</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">고객 지원</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-secondary transition-colors">자주 묻는 질문</Link></li>
            <li><Link to="/privacy" className="hover:text-secondary transition-colors">개인정보처리방침</Link></li>
            <li><Link to="/terms" className="hover:text-secondary transition-colors">이용약관</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div className="text-center md:text-left">
          <p>© 2026 Onnuri Real Estate. All rights reserved.</p>
          <p className="mt-2 text-slate-600 italic">본 사이트는 분양권 및 임대차 정보 제공을 목적으로 하는 부동산 홍보 페이지입니다.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => handleViewMode('pc')}
            className="text-slate-500 hover:text-white transition-colors"
          >
            PC화면으로 보기
          </button>
          <span className="text-slate-700">|</span>
          <button 
            onClick={() => handleViewMode('mobile')}
            className="text-slate-500 hover:text-white transition-colors"
          >
            모바일화면으로 보기
          </button>
        </div>
      </div>
    </footer>
  );
}
