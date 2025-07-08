import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Globe, Users, Server } from 'lucide-react';

const services = [
  {
    key: 'web',
    name: '網站設計開發',
    desc: '量身打造高效能網站，提升品牌形象。',
    icon: <Code size={36} className="text-[#00C2FF]" />,
    features: ['RWD 響應式設計', 'SEO 優化', '品牌視覺客製'],
  },
  {
    key: 'backend',
    name: '後台系統開發',
    desc: '專屬後台管理系統，數據整合、權限控管、流程自動化。',
    icon: <Server size={36} className="text-[#00C2FF]" />,
    features: ['權限管理', '數據報表', '自動化流程'],
  },
  {
    key: 'integration',
    name: '系統整合與自動化',
    desc: '串接多系統，流程自動化，提升效率。',
    icon: <Database size={36} className="text-[#00C2FF]" />,
    features: ['API 串接', 'ERP/CRM 整合', '自動化報表'],
  },
  {
    key: 'line',
    name: 'LINE 官方帳號應用',
    desc: 'LINE OA 行銷、客服、互動應用開發。',
    icon: <Users size={36} className="text-[#00C2FF]" />,
    features: ['LINE BOT', '會員整合', '自動化客服'],
  },
  {
    key: 'cloud',
    name: '雲端架構與維運',
    desc: 'GCP/Azure/AWS 雲端部署、監控與維運。',
    icon: <Globe size={36} className="text-[#00C2FF]" />,
    features: ['雲端主機部署', '資料備份', '彈性擴充'],
  },
  {
    key: 'consult',
    name: '技術顧問與外包協作',
    desc: '專業技術諮詢、團隊協作與外包服務。',
    icon: <Cpu size={36} className="text-[#00C2FF]" />,
    features: ['技術選型', '架構規劃', '專案管理'],
  },
];

const ServicesPage: React.FC = () => (
  <div className="w-full min-h-screen" style={{ background: 'rgb(242, 246, 250)' }}>
    {/* 品牌色大圖區 */}
    <motion.div className="container py-12 flex flex-col items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <motion.h1 className="text-3xl font-bold mb-4 text-primary-900" style={{ fontSize: '1.875rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>服務項目</motion.h1>
      <motion.p className="text-lg text-primary-800 mb-8 text-center max-w-2xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        我們提供全方位數位解決方案，從網站設計、系統整合、LINE 應用到雲端維運與技術顧問，協助企業數位轉型、提升競爭力。
      </motion.p>
    </motion.div>
    {/* 服務特色條列區 */}
    <div className="container mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl p-6 shadow flex flex-col items-center transition duration-200 hover:bg-[#eaf6fd] hover:shadow-lg" style={{ background: '#d9ebf7', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <span className="text-primary-800 text-2xl font-bold mb-2">一站式服務</span>
          <span className="text-gray-700 text-center">從需求訪談、設計、開發到上線維運，專人全程協助。</span>
        </div>
        <div className="rounded-xl p-6 shadow flex flex-col items-center transition duration-200 hover:bg-[#eaf6fd] hover:shadow-lg" style={{ background: '#d9ebf7', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <span className="text-primary-800 text-2xl font-bold mb-2">專業團隊</span>
          <span className="text-gray-700 text-center">跨領域工程師與設計師，提供最適合的技術解決方案。</span>
        </div>
        <div className="rounded-xl p-6 shadow flex flex-col items-center transition duration-200 hover:bg-[#eaf6fd] hover:shadow-lg" style={{ background: '#d9ebf7', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <span className="text-primary-800 text-2xl font-bold mb-2">彈性合作</span>
          <span className="text-gray-700 text-center">可依專案、長期維運、顧問等多元合作模式彈性配合。</span>
        </div>
      </div>
    </div>
    {/* 卡片區（深色背景、白字） */}
    <div className="container pb-16">
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
            <div className="text-2xl font-bold mb-2 text-white">{s.name}</div>
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