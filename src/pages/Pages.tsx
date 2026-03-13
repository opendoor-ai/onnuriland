import { Hero, KeyFeatures, QuickMenu, ProofAndTrust } from '../components/Sections';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, MessageSquare, CheckCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <QuickMenu />
      <KeyFeatures />
      <ProofAndTrust />
      
      {/* Final CTA Section */}
      <section className="py-24 bg-burgundy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://loremflickr.com/1600/900/city,night" 
            alt="City Night" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            당신의 소중한 자산,<br />
            <span className="text-gold">힐스테이트 등촌역 전문가</span>와 상의하세요.
          </h2>
          <p className="text-slate-300 text-lg mb-12">
            매도/매수 접수부터 임대차, 관심고객 등록까지<br className="hidden md:block" />
            지금 바로 빠르고 간편하게 신청하실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-gold text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2"
            >
              매물 접수 바로가기
              <ArrowRight size={24} />
            </Link>
            <a 
              href="tel:010-4360-8872" 
              className="bg-white text-burgundy px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl"
            >
              전화 상담하기
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export function DetailsPage() {
  const [selectedPlan, setSelectedPlan] = useState('59A');

  const floorPlans = [
    { id: '59A', name: '59㎡ A', img: 'https://res.cloudinary.com/dqhj5ucak/image/upload/v1773406130/onnuriland-12_ovw3u8.jpg' },
    { id: '59B', name: '59㎡ B', img: 'https://res.cloudinary.com/dqhj5ucak/image/upload/v1773406130/onnuriland-13_cmp3ts.jpg' },
    { id: '84A', name: '84㎡ A', img: 'https://res.cloudinary.com/dqhj5ucak/image/upload/v1773406132/onnuriland-14_ln1wdo.jpg' },
    { id: '84B', name: '84㎡ B', img: 'https://res.cloudinary.com/dqhj5ucak/image/upload/v1773406133/onnuriland-15_wbawns.jpg' },
    { id: '84C', name: '84㎡ C', img: 'https://res.cloudinary.com/dqhj5ucak/image/upload/v1773406131/onnuriland-16_pv7pyw.jpg' },
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-burgundy mb-4">단지 상세 정보</h1>
        <p className="text-slate-600">힐스테이트 등촌역의 하드웨어 스펙과 프리미엄 시설을 안내합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        {/* 사업 개요 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gold"></div>
            사업 개요
          </h2>
          <div className="space-y-4 text-slate-700">
            <div className="flex justify-between border-b border-slate-50 pb-2">
              <span className="font-medium text-slate-500">단지명</span>
              <span className="font-bold">힐스테이트 등촌역</span>
            </div>
            <div className="flex justify-between border-b border-slate-50 pb-2">
              <span className="font-medium text-slate-500">위치</span>
              <span>서울특별시 강서구 등촌동 일원</span>
            </div>
            <div className="flex justify-between border-b border-slate-50 pb-2">
              <span className="font-medium text-slate-500">규모</span>
              <span>지하 2층 ~ 지상 15층, 12개동</span>
            </div>
            <div className="flex justify-between border-b border-slate-50 pb-2">
              <span className="font-medium text-slate-500">세대수</span>
              <span>총 543세대 (일반분양 170세대)</span>
            </div>
            <div className="flex justify-between border-b border-slate-50 pb-2">
              <span className="font-medium text-slate-500">입주예정</span>
              <span className="text-burgundy font-bold">2026년 하반기 (예정)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-50">
            <img 
              src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773401490/onnuriland-01_lqzfh6.jpg" 
              alt="Complex View" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-sm text-slate-500 italic text-center">※ 상기 이미지는 소비자의 이해를 돕기 위한 조감도로 실제와 다를 수 있습니다.</p>
        </div>

        {/* 커뮤니티 시설 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gold"></div>
            커뮤니티 시설
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {["피트니스 센터", "골프연습장", "작은 도서관", "어린이집", "경로당", "맘스카페"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-600">
                <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-50">
            <img 
              src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773404022/onnuriland-06_xnmj36.jpg" 
              alt="Community Facilities" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-sm text-slate-500 italic text-center">※ 상기 이미지는 소비자의 이해를 돕기 위한 커뮤니티 예시 이미지입니다.</p>
        </div>
      </div>

      {/* 평형 선택 인터랙션 UI */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">평면도 안내</h2>
          <p className="text-slate-600">라이프스타일에 맞춘 다양한 평면 구성을 확인해보세요.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`
                px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm border
                ${selectedPlan === plan.id 
                  ? 'bg-burgundy text-white border-burgundy scale-105 shadow-burgundy/20' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-burgundy/30 hover:bg-slate-50'}
              `}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-white p-4 md:p-10 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img 
                src={floorPlans.find(p => p.id === selectedPlan)?.img} 
                alt={`${selectedPlan} Floor Plan`}
                className="max-w-full h-auto rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 추가 상세 이미지 */}
      <div className="space-y-16 pt-16 border-t border-slate-100">
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-50">
            <img 
              src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773401490/onnuriland-02_eamkpm.jpg" 
              alt="Detail View 01" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-50">
            <img 
              src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773401490/onnuriland-04_hd4p5c.jpg" 
              alt="Detail View 02" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesPage() {
  const [formData, setFormData] = useState({
    type: '분양권 매도',
    name: '',
    phone: '',
    emailId: '',
    emailDomain: 'naver.com',
    customDomain: '',
    size: '59㎡ A',
    message: '',
    agree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 8) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    if (!formData.name || !formData.phone) {
      alert('성함과 연락처를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxkMXbcyePlTzlSJT6O-saXRpNhw-zTWX0atdw8xl4zRrah75ktA5Aq8DYbQTE1upNNxQ/exec';
      
      const fullEmail = formData.emailDomain === 'custom' 
        ? `${formData.emailId}@${formData.customDomain}`
        : `${formData.emailId}@${formData.emailDomain}`;

      // Using no-cors mode for Google Apps Script
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          email: fullEmail,
          agree: formData.agree ? '동의함' : '동의안함'
        }),
      });

      setIsSuccess(true);
      setFormData({
        type: '분양권 매도',
        name: '',
        phone: '',
        emailId: '',
        emailDomain: 'naver.com',
        customDomain: '',
        size: '59㎡ A',
        message: '',
        agree: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-20 rounded-3xl shadow-2xl border border-slate-100 text-center space-y-8"
        >
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">접수가 완료되었습니다!</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              상담 신청이 성공적으로 전달되었습니다.<br />
              담당자가 확인 후 기재해주신 연락처로<br />
              빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>
          <div className="pt-6">
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-10 py-4 bg-burgundy text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              확인
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-burgundy mb-4">매물 접수 / 관심고객 등록</h1>
        <p className="text-slate-600">빠르고 정확한 상담을 위해 아래 정보를 입력해 주세요.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">접수 구분 <span className="text-red-500">*</span></label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none"
            >
              <option>분양권 매도</option>
              <option>분양권 매수</option>
              <option>전세/월세 임대</option>
              <option>전세/월세 임차</option>
              <option>관심고객(대기자) 등록</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">성함 <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              placeholder="성함을 입력하세요" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none" 
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">연락처 <span className="text-red-500">*</span></label>
            <input 
              type="tel" 
              placeholder="010-0000-0000" 
              value={formData.phone}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setFormData({...formData, phone: formatted});
              }}
              maxLength={13}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none" 
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">이메일 주소 <span className="text-red-500">*</span></label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="아이디" 
                  value={formData.emailId}
                  onChange={(e) => setFormData({...formData, emailId: e.target.value})}
                  className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none" 
                  required
                />
                <span className="text-slate-400">@</span>
              </div>
              <div className="flex-1 flex gap-2">
                {formData.emailDomain === 'custom' ? (
                  <input 
                    type="text" 
                    placeholder="직접 입력" 
                    value={formData.customDomain}
                    onChange={(e) => setFormData({...formData, customDomain: e.target.value})}
                    className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none"
                    required
                  />
                ) : null}
                <select 
                  value={formData.emailDomain}
                  onChange={(e) => setFormData({...formData, emailDomain: e.target.value})}
                  className={`${formData.emailDomain === 'custom' ? 'w-24' : 'flex-1'} p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none`}
                >
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="nate.com">nate.com</option>
                  <option value="custom">직접 입력</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">희망 평형/타입</label>
            <select 
              value={formData.size}
              onChange={(e) => setFormData({...formData, size: e.target.value})}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none"
            >
              <option>59㎡ A</option>
              <option>59㎡ B</option>
              <option>84㎡ A</option>
              <option>84㎡ B</option>
              <option>84㎡ C</option>
              <option>기타/상관없음</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">상세 문의 내용</label>
          <textarea 
            rows={4} 
            placeholder="동/호수, 희망 가격, 입주 시기 등 상세 내용을 입력하시면 더 정확한 상담이 가능합니다." 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-burgundy outline-none"
          ></textarea>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <input 
              type="checkbox" 
              id="privacy" 
              checked={formData.agree}
              onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              className="w-4 h-4 accent-burgundy" 
              required
            />
            <label htmlFor="privacy" className="text-sm font-bold text-slate-700">개인정보 수집 및 이용 동의 (필수)</label>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            수집항목: 성함, 연락처, 희망매물정보 / 수집목적: 매물 상담 및 정보 제공 / 보유기간: 상담 완료 후 1년 또는 요청 시 즉시 파기
          </p>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-burgundy text-white py-5 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? '전송 중...' : '접수 신청하기'}
        </button>
      </form>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-burgundy mb-4">입지 프리미엄</h1>
          <p className="text-slate-600">9호선 황금노선과 마곡/여의도/강남을 잇는 직주근접의 핵심</p>
        </div>

        <div className="space-y-32">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full space-y-6 text-center">
              <span className="text-gold font-bold tracking-widest uppercase">Location 01</span>
              <h2 className="text-3xl font-bold text-slate-900">9호선 등촌역 초역세권<br />쾌속 교통 인프라</h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                단지 인근 9호선 등촌역을 통해 마곡나루, 여의도, 고속터미널 등 서울의 주요 업무 지구로 환승 없이 빠르게 이동할 수 있습니다. 또한 강북횡단선(예정) 추진으로 향후 더블 역세권의 미래 가치까지 기대됩니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12">
            <div className="w-full space-y-6 text-center">
              <span className="text-gold font-bold tracking-widest uppercase">Location 02</span>
              <h2 className="text-3xl font-bold text-slate-900">마곡, 여의도, 강남을 잇는<br />완벽한 직주근접</h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                서울의 3대 업무 지구를 관통하는 9호선 라인의 중심에 위치하여, 출퇴근 시간을 획기적으로 단축시킵니다. 3040 맞벌이 직장인들에게 가장 선호되는 입지적 장점을 갖추고 있습니다.
              </p>
            </div>
          </div>

          <div className="pt-12">
            <div className="text-center mb-12">
              <span className="text-gold font-bold tracking-widest uppercase">Location Map</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">광역 위치도</h2>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773404347/onnuriland-08_biznxc.jpg" 
                alt="Location Map" 
                className="w-full h-auto block" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="text-sm text-slate-500 italic text-center mt-4">※ 상기 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-burgundy mb-4">문의 및 지원</h1>
        <p className="text-slate-600">궁금하신 점은 언제든 문의해 주세요. 친절히 상담해 드립니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Q1. 힐스테이트 등촌역 분양권은 언제부터 거래가 가능한가요?", a: "힐스테이트 등촌역 분양권은 2025년 12월 13일부터 거래가 가능합니다. 현재 거래 가능한 매물 및 예상 프리미엄은 상담을 통해 안내받으실 수 있습니다." },
                { q: "Q2. 힐스테이트 등촌역 위치는 어디인가요?", a: "힐스테이트 등촌역은 서울 강서구 등촌동 366-24번지에 위치한 등촌제1구역 재건축 아파트입니다." },
                { q: "Q3. 힐스테이트 등촌역 총 세대수는 몇 세대인가요?", a: "총 543세대 규모의 아파트 단지이며, 이 중 일반분양은 274세대입니다." },
                { q: "Q4. 힐스테이트 등촌역 평형 구성은 어떻게 되나요?", a: "힐스테이트 등촌역은 다음 평형으로 구성되어 있습니다: 59㎡ A, 59㎡ B, 84㎡ A, 84㎡ B, 84㎡ C. 각 평형은 방 3개, 욕실 2개 구조입니다." },
                { q: "Q5. 힐스테이트 등촌역 분양권 매물은 어떻게 확인할 수 있나요?", a: "현재 거래 가능한 분양권 매물은 수시로 변동됩니다. 상담 신청 또는 전화 상담을 통해 최신 매물 정보를 안내받으실 수 있습니다." },
                { q: "Q6. 힐스테이트 등촌역 분양권 매도도 접수 가능한가요?", a: "네 가능합니다. 보유하고 있는 힐스테이트 등촌역 분양권 매도 접수를 하시면 매수 희망 고객에게 연결해드립니다." },
                { q: "Q7. 힐스테이트 등촌역 분양권 매수 상담은 어떻게 하나요?", a: "희망 평형과 예산을 접수하시면 현재 거래 가능한 매물 및 예상 프리미엄을 안내해드립니다." },
                { q: "Q8. 힐스테이트 등촌역 분양권 프리미엄은 얼마나 되나요?", a: "분양권 프리미엄은 시장 상황과 평형에 따라 변동됩니다. 현재 시세 및 예상 프리미엄은 상담을 통해 안내해드립니다." },
                { q: "Q9. 힐스테이트 등촌역 전세나 월세 임대도 가능한가요?", a: "입주 이후 전세 및 월세 임대가 가능합니다. 임대 매물 접수 시 임차인 연결 상담을 도와드립니다." },
                { q: "Q10. 힐스테이트 등촌역 임대 매물 접수는 어떻게 하나요?", a: "전세 또는 월세 매물을 접수하시면 임차인 연결 상담을 진행해드립니다." },
                { q: "Q11. 힐스테이트 등촌역 매수 대기자 등록이 무엇인가요?", a: "희망 평형을 등록하면 매물이 나왔을 때 우선적으로 안내받는 서비스입니다." },
                { q: "Q12. 힐스테이트 등촌역은 어떤 아파트인가요?", a: "힐스테이트 등촌역은 등촌제1구역 재건축 사업으로 공급되는 신규 아파트 단지입니다." },
                { q: "Q13. 힐스테이트 등촌역은 실거주도 가능한가요?", a: "네 가능합니다. 실거주 및 투자 목적 모두 고려되는 서울 강서구 신규 아파트 단지입니다." },
                { q: "Q14. 힐스테이트 등촌역 주변 생활 인프라는 어떤가요?", a: "등촌동 일대는 학교, 공원, 상업시설, 교통시설 등이 형성된 주거지역입니다." },
                { q: "Q15. 힐스테이트 등촌역 분양권 거래 절차는 어떻게 되나요?", a: "일반적으로 다음 절차로 진행됩니다: 매물 확인, 계약 조건 협의, 분양권 계약 진행, 잔금 및 명의 변경." },
                { q: "Q16. 힐스테이트 등촌역 분양권 투자 가치가 있나요?", a: "재건축 신규 아파트 단지로 향후 가치 상승을 기대하는 투자자들의 관심이 높은 단지입니다." },
                { q: "Q17. 힐스테이트 등촌역 매물 상담은 무료인가요?", a: "네, 분양권 매도·매수 및 임대 상담은 무료로 진행됩니다." },
                { q: "Q18. 힐스테이트 등촌역 상담은 어떻게 신청하나요?", a: "랜딩페이지 상담 신청 또는 전화 상담을 통해 문의하실 수 있습니다." },
                { q: "Q19. 힐스테이트 등촌역 현재 매물은 바로 확인 가능한가요?", a: "현재 거래 가능한 매물은 수시로 변동되므로 상담을 통해 최신 매물 정보를 안내해드립니다." },
                { q: "Q20. 지금 상담을 받을 수 있나요?", a: "네 가능합니다. 현재 거래 가능한 힐스테이트 등촌역 분양권 매물 및 상담 안내를 받아보실 수 있습니다." }
              ].map((faq, i) => (
                <details key={i} className="group border-b border-slate-100 pb-4">
                  <summary className="list-none cursor-pointer flex justify-between items-center font-bold text-slate-800 py-2">
                    {faq.q}
                    <span className="text-gold group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-burgundy p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-6">실시간 상담 채널</h3>
            <div className="space-y-4">
              <a href="tel:010-4360-8872" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-burgundy">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-70">대표 번호</p>
                  <p className="font-bold">010-4360-8872</p>
                </div>
              </a>
              <a href="sms:010-4360-8872" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-burgundy">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-70">문자 문의</p>
                  <p className="font-bold">010-4360-8872</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">업무 시간 안내</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex justify-between"><span>평일 / 토요일</span> <span>10:00 - 20:00</span></li>
              <li className="flex justify-between text-red-500"><span>일/공휴일</span> <span>사전방문 예약제 운영</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
