import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // 服務項目資料
  const services = [
    { name: '企業後台系統開發', path: '/services' },
    { name: '網站設計與建置', path: '/services' },
    { name: 'AI 應用整合', path: '/services' },
    { name: '流程自動化與系統整合', path: '/services' },
  ];

  // 快速連結資料
  const quickLinks = [
    { name: '首頁', path: '/' },
    { name: '服務項目', path: '/services' },
    { name: '精選案例', path: '/portfolio' },
    { name: '合作流程', path: '/process' },
    { name: '常見問題', path: '/faq' },
    { name: '聯絡我們', path: '/contact' },
  ];

  // 聯絡資訊
  const contactInfo = {
    address: '404023 台中市北區淡溝里館前路19號7樓之一',
    email: 'caffxin.tech@gmail.com',
    businessHours: '星期一至星期五 09:00–18:00',
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* 主要 Footer 內容 */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 欄位 1: 公司簡介 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">公司簡介</h4>
            <p className="text-sm leading-relaxed mb-4">
              <strong>咖昕科技有限公司</strong>
              <br />
              <span className="text-gray-400">CaffXin Tech Co., Ltd.</span>
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              專注於企業後台系統開發、客製化網站建置與 AI 應用整合，協助企業打造穩定、高效且可擴充的數位系統，提升營運效率與競爭力。
            </p>
          </div>

          {/* 欄位 2: 服務項目 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">服務項目</h4>
            <nav aria-label="Service navigation">
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 欄位 3: 快速連結 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">快速連結</h4>
            <nav aria-label="Quick links navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 欄位 4: 聯絡資訊 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">聯絡資訊</h4>
            <address className="not-italic space-y-4 text-sm">
              {/* 地址 */}
              <div className="flex gap-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 leading-relaxed">{contactInfo.address}</p>
              </div>

              {/* 電子郵件 */}
              <div className="flex gap-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* 營業時間 */}
              <div className="flex gap-3">
                <Clock size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">{contactInfo.businessHours}</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* 分隔線 */}
      <div className="border-t border-gray-800" />

      {/* 底部版權資訊 */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            COPYRIGHT © {currentYear} CAFFXIN TECH CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <nav aria-label="Footer legal links">
            <ul className="flex gap-4 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  隱私政策
                </Link>
              </li>
              <li>
                <span className="text-gray-600">|</span>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  使用條款
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;