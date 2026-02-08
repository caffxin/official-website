import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Globe, Users, Server } from 'lucide-react';

const services = [
  {
    key: 'web',
    name: '網站設計開發',
    desc: '規劃與建置符合品牌定位與業務需求的高效能網站，兼顧可維護性與搜尋引擎友善。',
    icon: <Code size={36} className="text-[#00C2FF]" />,
    features: ['RWD 響應式設計', 'SEO 基礎優化', '品牌視覺與版型客製'],
  },
  {
    key: 'backend',
    name: '後台管理系統開發',
    desc: '打造符合實際營運流程的專屬後台系統，協助企業有效管理資料、權限與作業流程。',
    icon: <Server size={36} className="text-[#00C2FF]" />,
    features: ['角色與權限管理', '數據與報表整合', '流程自動化設計'],
  },
  {
    key: 'integration',
    name: '系統整合與流程自動化',
    desc: '整合既有系統與第三方服務，減少重複作業，提升跨部門協作效率。',
    icon: <Database size={36} className="text-[#00C2FF]" />,
    features: ['API 串接與資料同步', 'ERP / CRM 系統整合', '自動化報表與排程作業'],
  },
  {
    key: 'line',
    name: 'LINE 官方帳號應用開發',
    desc: '結合 LINE 官方帳號，打造行銷、客服與互動應用，提升客戶溝通效率與服務體驗。',
    icon: <Users size={36} className="text-[#00C2FF]" />,
    features: ['LINE Bot 應用開發', '會員與系統資料整合', '自動化客服與通知流程'],
  },
  {
    key: 'cloud',
    name: '雲端架構與維運服務',
    desc: '協助企業建置穩定、安全且具擴充性的雲端環境，確保系統長期穩定運作。',
    icon: <Globe size={36} className="text-[#00C2FF]" />,
    features: ['GCP / Azure / AWS 雲端部署', '系統監控與資料備份', '彈性擴充與效能調校'],
  },
  {
    key: 'consult',
    name: '技術顧問與外包協作',
    desc: '提供專業技術顧問與工程支援服務，協助企業在不同階段做出正確的技術決策。',
    icon: <Cpu size={36} className="text-[#00C2FF]" />,
    features: ['技術選型與可行性評估', '系統架構規劃', '專案協作與技術支援'],
  },
];

const ServicesPage: React.FC = () => (
  <div className="w-full min-h-screen px-4 md:px-0" style={{ background: 'rgb(242, 246, 250)' }}>
    {/* 品牌色大圖區 */}
    <motion.div className="container py-12 flex flex-col items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <motion.h1 className="text-3xl font-bold mb-4 text-primary-900" style={{ fontSize: '1.875rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>服務項目</motion.h1>
      <motion.p className="text-lg text-primary-800 mb-8 text-center max-w-2xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        我們提供一站式數位解決方案，協助企業打造可落地、可維運、可擴充的系統架構，提升營運效率與競爭力。
      </motion.p>
    </motion.div>
    {/* 服務特色條列區 */}
    <div className="container mb-12 px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl p-6 shadow flex flex-col items-center transition duration-200 hover:bg-[#eaf6fd] hover:shadow-lg" style={{ background: '#d9ebf7', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <span className="text-primary-800 text-xl font-bold mb-2">一站式服務</span>
          <span className="text-gray-700 text-center">從需求訪談、系統規劃、設計與開發，到正式上線與後續維運，
由專人全程負責，確保專案進度與交付品質。</span>
        </div>
        <div className="rounded-xl p-6 shadow flex flex-col items-center transition duration-200 hover:bg-[#eaf6fd] hover:shadow-lg" style={{ background: '#d9ebf7', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <span className="text-primary-800 text-xl font-bold mb-2">專業技術團隊</span>
          <span className="text-gray-700 text-center">結合前後端工程、系統架構與設計專業，依據實際業務情境，提供最合適且可長期使用的技術方案。</span>
        </div>
        <div className="rounded-xl p-6 shadow flex flex-col items-center transition duration-200 hover:bg-[#eaf6fd] hover:shadow-lg" style={{ background: '#d9ebf7', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <span className="text-primary-800 text-xl font-bold mb-2">彈性合作模式</span>
          <span className="text-gray-700 text-center">可依專案型開發、長期維運支援或技術顧問合作，彈性調整合作方式，符合不同企業階段需求。</span>
        </div>
      </div>
    </div>
    {/* 卡片區（深色背景、白字） */}
    <div className="container pb-16 px-0">
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
        {services.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl shadow-xl p-8 flex flex-col items-start border-t-4 border-primary-200"
            style={{ background: 'rgb(13,30,76)' }}
          >
            <div className="mb-4">{s.icon}</div>
            <div className="text-xl font-bold mb-2 text-white">{s.name}</div>
            <div className="mb-3" style={{ color: '#D1D5DB' }}>{s.desc}</div>
            <ul className="mb-0 list-disc list-inside text-sm space-y-1" style={{ color: '#E5E7EB' }}>
              {s.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default ServicesPage; 