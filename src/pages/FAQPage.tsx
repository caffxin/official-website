import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MAIN_COLOR = '#26415E';
const BORDER_COLOR = '#83A6CE';

const faqData = [
  {
    category: '合作',
    qas: [
      { q: '報價流程是怎麼樣？', a: '請先提供初步需求（可文字敘述或文件），我們會協助釐清後，提供明確的報價單與時程安排建議。' },
      { q: '能否只做部分功能？', a: '可以！您可依預算或優先順序分段開發，彈性調整。' },
      { q: '合作前會簽約嗎？', a: '會的，我們會簽訂承攬合約，詳細說明開發項目、時程、付款方式與智慧財產歸屬等，保障雙方權益。' },
      { q: '需求變更怎麼處理？', a: '需求如有新增或調整，我們會先討論並重新估算時程與費用，雙方確認後再進行。' },
      { q: '專案完成後還能追加功能嗎？', a: '可以，後續如需擴充功能，我們會視需求內容評估追加報價與工期。' },
    ],
  },
  {
    category: '時程',
    qas: [
      { q: '開發時程多久？有提供維護嗎？', a: '時程依專案內容不同，簡易網站約 2-3 週，中大型系統約 4-8 週以上，皆以工作天計算。我們也提供後續維運與修改服務，可另行規劃。' },
      { q: '能否加快時程？', a: '如有急件需求請提前說明，我們會視當期排程安排加速處理（可能需酌收急件費用）。' },
      { q: '專案進度如何追蹤？', a: '每週或每階段會回報進度，可透過 Notion、Slack、LINE 等工具協作。' },
      { q: '上線後多久驗收？', a: '上線前會安排測試，雙方確認功能與內容無誤後，即視為驗收完成。若專案含保固期，期間內如遇異常將免費協助處理。' },
    ],
  },
  {
    category: '付款',
    qas: [
      { q: '付款怎麼安排？', a: '一般分為三期：簽約訂金（約 30-50%）、中期款（視項目進度）、驗收尾款。可依專案複雜度調整期數。' },
      { q: '可以開發票嗎？', a: '我們為依法立案之有限公司，將開立三聯式發票。' },
      { q: '付款方式有哪些？', a: '僅提供銀行匯款／ATM 轉帳，完成付款後需提供匯款帳號後五碼以便核對，也可依實際情況彈性協議處理。' },
      { q: '付款期限怎麼訂？', a: '每期付款期限會在合約中明訂，並依完成進度與驗收安排彈性調整。' },
      { q: '若有爭議如何處理？', a: '雙方會依合約條款進行協調，必要時可第三方公正單位協助處理，保障雙方權益。' },
    ],
  },
  {
    category: '技術',
    qas: [
      { q: '可以協助架設雲端嗎？', a: '可以，我們熟悉 GCP、AWS、Azure 等主流雲端平台，能協助快速建置並做好維運、安全與備份配置。' },
      { q: '有做 RWD 響應式設計嗎？', a: '有的，我們所有網站皆支援手機、平板與桌機顯示，符合現代使用情境與 SEO 需求。' },
      { q: '能否串接第三方 API？', a: '沒問題，我們有經驗串接金流、LINE、ERP、物流與各種 API，亦可協助您對接外部平台。' },
    ],
  },
  {
    category: '保固與後續支援',
    qas: [
      { q: '專案完成後有保固嗎？', a: '有的，專案完成後提供 14~30 天不等的基本保固（視專案規模而定），期間內如有非人為錯誤或 bug 可免費修復。' },
      { q: '保固期後要怎麼維護？', a: '保固期結束後，我們可依需求提供彈性維運方案，例如按次收費、月費制或包年合約。實際維護項目與內容將依合約約定為準。' },
      { q: '保固範圍包含哪些？', a: '保固僅限於原合約內所約定功能的錯誤修正，不含新功能、第三方問題或環境異動造成的影響。' },
    ],
  },
  {
    category: '智慧財產',
    qas: [
      { q: '原始碼歸誰所有？', a: '專案完成並全數付款後，原始碼與相關素材將歸客戶所有，除非合約另有約定。' },
      { q: '會提供完整原始碼嗎？', a: '會的，結案時會交付完整原始碼、部署文件與環境設定說明。' },
      { q: '開發過程中可以看程式碼嗎？', a: '若使用 Git 管理，可開放專屬 Repo 讓您隨時查看進度與程式內容。' },
    ],
  },
  {
    category: '專案管理與溝通',
    qas: [
      { q: '開發過程怎麼聯繫與溝通？', a: '可使用 LINE、Slack、Email、Notion 等工具聯繫，也可安排定期線上會議追蹤進度。' },
      { q: '有提供需求訪談或會議紀錄嗎？', a: '會的，重要會議或訪談都會整理成文字紀錄，讓雙方對需求共識更明確。' },
      { q: '專案會使用版本控制嗎？', a: '我們所有專案皆使用 Git 做版本管理，確保開發紀錄清晰可追蹤。' },
    ],
  },
];


const FAQPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (cat: string, idx: number) => {
    const key = `${cat}-${idx}`;
    setOpen(prev => (prev === key ? null : key));
  };

  return (
    <div style={{ background: 'rgb(242, 246, 250)' }} className="min-h-screen w-full">
      <motion.div className="container mx-auto px-4 py-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.h1 className="text-3xl font-bold mb-8 text-center" style={{ color: MAIN_COLOR, fontSize: '1.875rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>常見問題</motion.h1>
        {faqData.map((cat, cidx) => (
          <motion.section key={cat.category} className="mb-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: cidx * 0.1 }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: MAIN_COLOR }}>{cat.category}</h2>
            <div className="space-y-4">
              {cat.qas.map((qa, idx) => (
                <motion.div key={qa.q} className="border rounded-lg overflow-hidden" style={{ borderColor: BORDER_COLOR, background: 'rgb(217, 235, 247)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}>
                  <button
                    className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center rounded-t-lg"
                    style={{ background: 'transparent', color: MAIN_COLOR, border: 'none' }}
                    onClick={() => toggle(cat.category, idx)}
                  >
                    <span>{qa.q}</span>
                    <span>{open === `${cat.category}-${idx}` ? '▲' : '▼'}</span>
                  </button>
                  {open === `${cat.category}-${idx}` && (
                    <motion.div className="px-4 py-3 bg-white text-base rounded-b-lg" style={{ color: MAIN_COLOR, borderTop: `1px solid ${BORDER_COLOR}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {qa.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQPage; 