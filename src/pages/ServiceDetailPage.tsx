import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceDetails: Record<string, { name: string; desc: string; content: string }> = {
  web: {
    name: '網站設計開發',
    desc: '量身打造高效能網站，提升品牌形象。',
    content: '提供企業形象官網、電商平台、部落格等多元網站開發，支援 RWD、SEO、互動設計。',
  },
  integration: {
    name: '系統整合與自動化',
    desc: '串接多系統，流程自動化，提升效率。',
    content: 'ERP、CRM、第三方 API 串接，表單/報表自動化，提升企業營運效率。',
  },
  line: {
    name: 'LINE 官方帳號應用',
    desc: 'LINE OA 行銷、客服、互動應用開發。',
    content: 'LINE BOT、行銷活動、會員整合、客服自動化，提升用戶互動與品牌黏著度。',
  },
  cloud: {
    name: '雲端架構與維運',
    desc: 'GCP/Azure/AWS 雲端部署、監控與維運。',
    content: '雲端主機部署、資料備份、監控告警、彈性擴充，確保系統穩定運作。',
  },
  consult: {
    name: '技術顧問與外包協作',
    desc: '專業技術諮詢、團隊協作與外包服務。',
    content: '協助企業技術選型、架構規劃、專案管理，支援彈性外包與長期協作。',
  },
};

const ServiceDetailPage: React.FC = () => {
  const { key } = useParams<{ key: string }>();
  const detail = key ? serviceDetails[key] : undefined;

  if (!detail) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">找不到此服務項目</h1>
        <Link to="/services" className="text-primary-800 underline">回服務列表</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{detail.name}</h1>
      <div className="text-lg text-gray-700 mb-6">{detail.desc}</div>
      <div className="text-gray-800 mb-8">{detail.content}</div>
      <Link to="/services" className="text-primary-800 underline">← 回服務列表</Link>
    </div>
  );
};

export default ServiceDetailPage; 