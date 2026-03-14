import { motion } from 'motion/react';
import { ArrowRight, Train, Building2, Users, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773401490/onnuriland-01_lqzfh6.jpg" 
          alt="Hillstate Deungchon" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlay Layer (rgba(0,0,0,0.5)) */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient Overlay top (for header visibility) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent h-1/3"></div>
        {/* Gradient Overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <span className="inline-block bg-gold text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider shadow-lg">
            PREMIUM BRAND APARTMENT
          </span>
          {/* White Heading Text with Strong Text Shadow */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            9호선 프리미엄의 완성,<br />
            <span className="text-gold">힐스테이트 등촌역</span> <span className="text-3xl md:text-4xl block mt-2 opacity-90">온누리부동산</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed font-medium drop-shadow-lg">
            마곡, 여의도, 강남을 잇는 황금노선 9호선의 가치와<br />
            힐스테이트만의 고품격 라이프스타일을 누리십시오.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="bg-gold text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg"
            >
              지금 바로 매물 접수하기
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/details" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              단지 상세 정보 보기
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

export function KeyFeatures() {
  const features = [
    {
      icon: <Train className="text-gold" size={32} />,
      title: "9호선 초역세권",
      desc: "등촌역 도보권으로 마곡, 여의도, 강남까지 쾌속 출퇴근이 가능한 황금 입지"
    },
    {
      icon: <Building2 className="text-gold" size={32} />,
      title: "브랜드 프리미엄",
      desc: "대한민국 대표 아파트 브랜드 힐스테이트가 선사하는 고품격 주거 가치"
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: "풍부한 배후수요",
      desc: "마곡지구 및 여의도 직장인, 신혼부부들이 선호하는 최적의 주거 단지"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-3">Core Value</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">힐스테이트 등촌역만의 3대 핵심 가치</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-bg-light border border-slate-100 shadow-sm"
            >
              <div className="mb-6">{f.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuickMenu() {
  const menus = [
    { title: "분양권 매도/매수", path: "/services", color: "bg-burgundy" },
    { title: "전세/월세 임대접수", path: "/services", color: "bg-gold" },
    { title: "관심고객 대기등록", path: "/services", color: "bg-slate-800" },
    { title: "1:1 전문가 상담", path: "/contact", color: "bg-slate-600" }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {menus.map((m, i) => (
            <Link 
              key={i} 
              to={m.path}
              className={`${m.color} text-white p-6 rounded-xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform shadow-md`}
            >
              <span className="font-bold text-lg">{m.title}</span>
              <span className="text-xs mt-2 opacity-80">바로가기 →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofAndTrust() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773401730/onnuriland-03_oecmfv.jpg" 
              alt="Trust" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-3">Trust & Professional</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">안전하고 투명한 거래,<br />전문가가 함께합니다.</h3>
            
            <div className="space-y-6">
              {[
                "분양권 전매 및 임대차 전문 중개 경력",
                "지역 내 최다 매물 확보 및 대기자 관리",
                "철저한 권리 분석을 통한 안전한 계약 보장",
                "입주 시점 맞춤형 금융 상담 및 세무 안내"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0" size={24} />
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-burgundy/5 rounded-2xl border border-burgundy/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-white">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Direct Call</p>
                <p className="text-2xl font-bold text-burgundy">010-4360-8872</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
