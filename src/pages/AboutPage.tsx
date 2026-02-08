import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Lightbulb, Brain, Sparkles } from 'lucide-react';

const MAIN_COLOR = 'rgb(38, 65, 94)';
const BG_COLOR = 'rgb(242, 246, 250)';

const steps = [
  {
    icon: <Lightbulb size={48} color={MAIN_COLOR} />,
    title: '我們是誰',
    desc: '咖昕科技是一群專注於解決問題的工程師團隊，擁有前後端、DevOps、雲端等多元技術背景。',
  },
  {
    icon: <Handshake size={44} color={MAIN_COLOR} />,
    title: '我們的理念',
    desc: '誠信、創新、專業、品質——以技術創造價值，與你共創未來。',
    tags: [
      { icon: <Handshake size={20} color={MAIN_COLOR} />, label: '誠信' },
      { icon: <Lightbulb size={20} color={MAIN_COLOR} />, label: '創新' },
      { icon: <Brain size={20} color={MAIN_COLOR} />, label: '專業' },
      { icon: <Sparkles size={20} color={MAIN_COLOR} />, label: '品質' },
    ],
  },
  {
    icon: <Users size={44} color={MAIN_COLOR} />,
    title: '我們的團隊',
    desc: '核心成員與合作夥伴攜手合作，發揮最大綜效。',
    mainMembers: [
      { name: 'Eva', title: 'Founder', skills: ' 專案規劃與管理 / 後端開發及運維' },
      { name: 'Ken', title: 'Co-Founder', skills: ' 系統架構設計 / 後端開發及運維 ' },
    ],
    partners: [
      { name: 'Tina', title: 'UI/UX 設計師', skills: 'Adobe / Figma / Axure' },
      { name: 'Jacky', title: '後端/運維工程師', skills: ' C# / JAVA / Python ' },      
      { name: 'Ting', title: '全端工程師', skills: 'React / Vue / Node.js' },
      { name: 'Jonah', title: 'APP 工程師', skills: 'Android / IOS / Flutter' },
    ],
  },
];

const tech = {
  frontend: {
    color: MAIN_COLOR,
    bg: 'rgb(217, 235, 247)',
    title: '前端技術',
    list: ['React', 'Vue', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  backend: {
    color: MAIN_COLOR,
    bg: 'rgb(217, 235, 247)',
    title: '後端技術',
    list: ['Node.js', 'PHP', 'Python', 'Redis', 'RocketMQ', 'MySQL', 'MSSQL', 'C# / .NET Core', 'JAVA / Spring Boot'],
  },
  cloud: {
    color: MAIN_COLOR,
    bg: 'rgb(217, 235, 247)',
    title: '雲端與維運技術',
    list: ['GCP', 'AWS', 'Azure', 'Docker', 'Jenkins', 'GitLab CI', 'Linux / Ubuntu', 'K8s', 'Nginx',  'ELK Stack', 'Prometheus', 'Grafana'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full" style={{ background: BG_COLOR }}>
      {/* 頁首大標題區 */}
      <motion.div className="container py-12 flex flex-col items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.h1 className="text-3xl font-bold mb-4" style={{ color: MAIN_COLOR, fontSize: '1.875rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>關於我們</motion.h1>
        <motion.p className="text-lg mb-8 text-center max-w-2xl px-4 md:px-0" style={{ color: MAIN_COLOR }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          我們是一群熱愛技術、重視合作、追求品質的夥伴，致力於用創新與專業協助客戶實現數位價值。
        </motion.p>
      </motion.div>
      {/* 分步導覽區塊（直向） */}
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="flex flex-col items-center gap-0 w-full">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <motion.div
                className="w-full rounded-2xl p-8 flex flex-col items-center text-center relative"
                style={{
                  background: '#fff',
                  boxShadow: 'none',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="mb-4">{step.icon}</div>
                <div className="text-xl font-bold mb-2" style={{ color: MAIN_COLOR }}>{step.title}</div>
                <div className="text-base mb-4 min-h-[56px]" style={{ color: MAIN_COLOR }}>{step.desc}</div>
                {/* 理念tags */}
                {step.tags && (
                  <div className="flex flex-wrap gap-3 justify-center mt-2">
                    {step.tags.map((tag, i) => (
                      <span key={tag.label} className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border" style={{ background: 'rgb(245, 230, 237)', color: 'rgb(38,65,94)', borderColor: 'rgb(245, 230, 237)' }}>
                        {tag.icon}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
                {/* 團隊成員分組顯示 */}
                {step.mainMembers && (
                  <div className="w-full flex flex-col items-center gap-4 mt-2">
                    <div className="font-bold text-[rgb(38,65,94)] text-base mb-1">主要成員</div>
                    <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                      {step.mainMembers.map(m => {
                        const bg = 'rgb(245, 230, 237)';
                        const color = 'rgb(38,65,94)';
                        const borderColor = 'rgb(200, 140, 179)';
                        return (
                          <div key={m.name} className="flex flex-col items-center rounded-xl px-4 py-3 border min-w-[120px]" style={{ background: bg, borderColor, color }}>
                            <span className="font-bold text-lg mb-1" style={{ color }}>{m.name}</span>
                            <span className="text-xs font-semibold mb-1" style={{ color }}>{m.title}</span>
                            <span className="text-xs font-semibold" style={{ color }}>{m.skills}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="font-bold text-[rgb(38,65,94)] text-base mt-4 mb-1">合作夥伴</div>
                    <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                      {step.partners.map(m => (
                        <div key={m.name} className="flex flex-col items-center bg-[#f7f8fa] rounded-xl px-4 py-3 border border-[#83A6CE] min-w-[120px]">
                          <span className="font-bold text-[rgb(38,65,94)]">{m.name}</span>
                          <span className="text-xs text-[rgb(38,65,94)] font-semibold mb-1">{m.title}</span>
                          <span className="text-xs text-[#83A6CE] font-semibold">{m.skills}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
              {/* 移除箭頭區塊，不再顯示箭頭 */}
              {/* 保留區塊間距 */}
              {idx < steps.length - 1 && <div style={{ height: 32 }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* 我們的技術區塊（橫向三欄） */}
      <div className="container max-w-screen-lg mx-auto px-4 mt-16 pb-16">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {(['frontend', 'backend', 'cloud'] as Array<'frontend' | 'backend' | 'cloud'>).map((key) => {
            const borderColor = '#83A6CE';
            const t = tech[key];
            return (
              <div key={t.title} className="flex-1 rounded-2xl p-8 flex flex-col items-center border" style={{ background: t.bg, borderColor }}>
                <div className="text-xl font-bold mb-3" style={{ color: MAIN_COLOR }}>{t.title}</div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {t.list.map((name: string) => (
                    <span key={name} className="px-4 py-2 rounded-full text-sm font-mono font-semibold border" style={{ background: '#fff', color: MAIN_COLOR, borderColor: MAIN_COLOR }}>{name}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 