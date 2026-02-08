import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Search, ShieldCheck, Sparkles, MessageSquare, Handshake } from 'lucide-react';

const steps = [
  { title: '提出需求', desc: '客戶提供專案需求、目標與預算。' },
  { title: '溝通與報價', desc: '雙方討論細節，提出報價與時程。' },
  { title: '簽約付款', desc: '確認合作內容，簽訂合約並支付訂金。' },
  { title: '進行開發', desc: '依規劃進行設計、開發與測試。' },
  { title: '上線驗收', desc: '專案完成，協助上線並驗收成果。' },
  { title: '後續維護', desc: '提供維護、優化與技術支援。' },
];

const MAIN_COLOR = 'rgb(38,65,94)';
const BORDER_COLOR = '#83A6CE';

const ProcessPage: React.FC = () => (
  <>
    <Helmet>
      <title>合作流程 - 咖昕科技 | 從需求到上線的完整服務流程</title>
      <meta name="description" content="了解咖昕科技的合作流程：包括需求提出、溝通報價、簽約付款、開發測試、上線驗收與後續維護等完整服務步驟。" />
    </Helmet>
    <div style={{ background: 'rgb(242, 246, 250)' }} className="min-h-screen w-full">
    <motion.div className="container mx-auto px-4 py-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <motion.h1 className="text-3xl font-bold mb-8 text-center" style={{ color: MAIN_COLOR, fontSize: '1.875rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        合作流程
      </motion.h1>
      {/* 流程圖（圖文對照） */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          {steps.map((step, idx) => (
            <motion.div key={step.title} className="flex flex-col items-center md:w-1/6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2" style={{ background: '#C48CB3', color: '#fff' }}>{idx + 1}</div>
              <div className="font-bold mb-1 w-full text-center" style={{ color: MAIN_COLOR, fontSize: '1.125rem' }}>{step.title}</div>
              <div className="text-base w-full text-center" style={{ color: MAIN_COLOR, opacity: 0.8 }}>{step.desc}</div>
              <div className="hidden md:block w-full h-4 border-b-2 border-dashed" style={{ borderColor: BORDER_COLOR, opacity: 0.5, margin: '12px 0' }}></div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* 常見配合模式 */}
      <section>
        <motion.h2 className="text-2xl font-semibold mb-6 text-left" style={{ color: MAIN_COLOR }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          常見配合模式
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="bg-white rounded-lg p-6 flex flex-col items-center border" style={{ borderColor: BORDER_COLOR }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="text-xl font-bold mb-2 text-left w-full" style={{ color: MAIN_COLOR }}>定額案</div>
            <div className="text-left w-full mb-2" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">常見情境：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>網站、系統、APP 等有明確規格與時程的專案</li>
                <li>需求明確、可預估工時與交付內容</li>
              </ul>
            </div>
            <div className="text-left w-full mb-2" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">適合對象：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>有明確需求、預算與時程規劃的企業或新創團隊</li>
              </ul>
            </div>
            <div className="text-left w-full" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">合作方式：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>簽訂定額合約</li>
                <li>明確交付內容、時程與金額</li>
                <li>依進度分期付款</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded-lg p-6 flex flex-col items-center border" style={{ borderColor: BORDER_COLOR }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="text-xl font-bold mb-2 text-left w-full" style={{ color: MAIN_COLOR }}>長期維運</div>
            <div className="text-left w-full mb-2" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">常見情境：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>企業網站、內部系統、雲端平台需長期維護</li>
                <li>功能優化、例行更新、資安維護</li>
              </ul>
            </div>
            <div className="text-left w-full mb-2" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">適合對象：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>重視網站/系統穩定性、需持續優化的企業</li>
              </ul>
            </div>
            <div className="text-left w-full" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">合作方式：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>簽訂年度或月度維運合約</li>
                <li>定期回報、彈性調整維護內容</li>
                <li>依維運內容與時數計價</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded-lg p-6 flex flex-col items-center border" style={{ borderColor: BORDER_COLOR }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <div className="text-xl font-bold mb-2 text-left w-full" style={{ color: MAIN_COLOR }}>技術協作</div>
            <div className="text-left w-full mb-2" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">常見情境：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>企業缺乏特定技術人力</li>
                <li>需短期顧問、外包協作、技術諮詢</li>
              </ul>
            </div>
            <div className="text-left w-full mb-2" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">適合對象：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>缺乏特定技術人力、需要彈性支援的公司或團隊</li>
              </ul>
            </div>
            <div className="text-left w-full" style={{ color: MAIN_COLOR, opacity: 0.8 }}>
              <span className="font-semibold">合作方式：</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>顧問、外包、專案協作等彈性支援</li>
                <li>按時數或專案計價</li>
              </ul>
            </div>
          </motion.div>
        </div>
        {/* 選擇我們的理由 */}
        <section className="mt-12">
          <motion.h2 className="text-2xl font-semibold mb-6 text-left" style={{ color: MAIN_COLOR }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
            選擇我們的理由
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-[rgb(245,230,237)] rounded-lg p-6 border shadow-sm" style={{ borderColor: 'rgb(196, 140, 179)' }}>
              <Users className="mb-2" size={40} strokeWidth={1.5} style={{ color: MAIN_COLOR }} />
              <div className="font-bold text-lg mb-1" style={{ color: MAIN_COLOR }}>專業團隊</div>
              <div className="text-center text-base" style={{ color: '#26415E' }}>技術經驗豐富，專案品質有保障</div>
            </div>
            <div className="flex flex-col items-center bg-[rgb(245,230,237)] rounded-lg p-6 border shadow-sm" style={{ borderColor: 'rgb(196, 140, 179)' }}>
              <Search className="mb-2" size={40} strokeWidth={1.5} style={{ color: MAIN_COLOR }} />
              <div className="font-bold text-lg mb-1" style={{ color: MAIN_COLOR }}>進度透明</div>
              <div className="text-center text-base" style={{ color: '#26415E' }}>定期回報，隨時掌握專案狀態</div>
            </div>
            <div className="flex flex-col items-center bg-[rgb(245,230,237)] rounded-lg p-6 border shadow-sm" style={{ borderColor: 'rgb(196, 140, 179)' }}>
              <ShieldCheck className="mb-2" size={40} strokeWidth={1.5} style={{ color: MAIN_COLOR }} />
              <div className="font-bold text-lg mb-1" style={{ color: MAIN_COLOR }}>合約保障</div>
              <div className="text-center text-base" style={{ color: '#26415E' }}>雙方權益明確，合作無後顧之憂</div>
            </div>
            <div className="flex flex-col items-center bg-[rgb(245,230,237)] rounded-lg p-6 border shadow-sm" style={{ borderColor: 'rgb(196, 140, 179)' }}>
              <Sparkles className="mb-2" size={40} strokeWidth={1.5} style={{ color: MAIN_COLOR }} />
              <div className="font-bold text-lg mb-1" style={{ color: MAIN_COLOR }}>彈性客製</div>
              <div className="text-center text-base" style={{ color: '#26415E' }}>服務彈性調整，配合各種需求</div>
            </div>
            <div className="flex flex-col items-center bg-[rgb(245,230,237)] rounded-lg p-6 border shadow-sm" style={{ borderColor: 'rgb(196, 140, 179)' }}>
              <MessageSquare className="mb-2" size={40} strokeWidth={1.5} style={{ color: MAIN_COLOR }} />
              <div className="font-bold text-lg mb-1" style={{ color: MAIN_COLOR }}>溝通順暢</div>
              <div className="text-center text-base" style={{ color: '#26415E' }}>即時回覆，需求明確，合作更有效率</div>
            </div>
            <div className="flex flex-col items-center bg-[rgb(245,230,237)] rounded-lg p-6 border shadow-sm" style={{ borderColor: 'rgb(196, 140, 179)' }}>
              <Handshake className="mb-2" size={40} strokeWidth={1.5} style={{ color: MAIN_COLOR }} />
              <div className="font-bold text-lg mb-1" style={{ color: MAIN_COLOR }}>售後服務</div>
              <div className="text-center text-base" style={{ color: '#26415E' }}>持續協助客戶成長，問題即時回應</div>
            </div>
          </div>
        </section>
      </section>
    </motion.div>
  </div>
  </>
);

export default ProcessPage;