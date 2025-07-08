import React, { useRef, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs-config';
import toast, { Toaster } from 'react-hot-toast';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Email 已複製到剪貼簿！');
    } catch {
      toast.error('複製失敗，請手動複製。');
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );
      toast.success('訊息已成功發送！我們將盡快回覆您。');
      formRef.current.reset();
    } catch (error) {
      toast.error('發送失敗，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full" style={{ background: 'rgb(242, 246, 250)' }}>
      <div className="container mx-auto px-4 py-12">
        <motion.h1 className="text-3xl font-bold mb-8 text-center text-primary-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          聯絡我們
        </motion.h1>
        <div className="h-8 md:h-12" />
        <div className="flex flex-col md:flex-row">
          <motion.div className="md:w-1/2 mb-8 md:mb-0" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <motion.h3 className="text-2xl font-semibold mb-4 text-primary-800" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              需求參考
            </motion.h3>
            <motion.p className="text-gray-700 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              為了讓我們更準確了解您的需求，請您在填寫時盡可能提供詳細資訊，例如：<br /><br />
              📌 <span className="font-bold">專案類型</span>（如網站開發、系統整合、API串接、UI/UX設計等）<br />
              📌 <span className="font-bold">專案背景</span>（您的產業類別、目前的情況、希望解決的問題）<br />
              📌 <span className="font-bold">主要功能需求</span>（例如：「希望開發一個會員系統，包含註冊、登入、權限管理等」）<br />
              📌 <span className="font-bold">預計時程</span>（何時希望開始、何時需要完成）<br />
              📌 <span className="font-bold">預算範圍</span>（若有預算考量，請提供參考範圍，以便我們評估最佳方案）<br />
              📌 <span className="font-bold">特殊需求</span>（如指定技術、與現有系統整合、支援語言或平台）<br /><br />
              我們提供<span className="font-bold">免費諮詢💬</span>，讓您先了解最佳方案，再決定是否進一步合作！<br /><br />
              <span className="font-bold">📩 來信或填寫表單，我們將與您詳談，確保最合適的解決方案</span>
            </motion.p>
            <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div className="flex items-center" variants={itemVariants} whileHover={{ x: 5 }}>
                <motion.div className="text-secondary-300 mr-3" whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                  <Mail size={20} />
                </motion.div>
                <a href="mailto:caffxin.tech@gmail.com" className="text-gray-700 hover:text-primary-800">
                  caffxin.tech@gmail.com
                </a>
                <motion.button className="text-secondary-300 hover:text-primary-800 p-1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => copyToClipboard('caffxin.tech@gmail.com')}>
                  <Copy size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="md:w-1/2 md:pl-8" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                <motion.input type="text" id="name" name="user_name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-800" placeholder="您的姓名" whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} required />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <label htmlFor="email" className="block text-gray-700 mb-2">電子郵件</label>
                <motion.input type="email" id="email" name="user_email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-800" placeholder="您的電子郵件" whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} required />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <label htmlFor="message" className="block text-gray-700 mb-2">訊息內容</label>
                <motion.textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-800" placeholder="「我們需要一個內部使用的業務管理工具，包含專案追蹤、任務分派、檔案上傳等功能，並與 Google Drive 串接。希望介面簡單易用，預算可討論，預計 2 個月內完成。」" whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} required />
              </motion.div>
              <motion.button type="submit" className="w-full bg-primary-800 text-white py-3 rounded-lg font-bold text-lg mt-4 hover:bg-primary-900 transition disabled:opacity-60" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}>
                {isSubmitting ? '寄出中...' : '送出'}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-center" toastOptions={{ duration: 5000, style: { background: '#fff', color: '#333', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '16px' }, success: { iconTheme: { primary: '#0D1E4C', secondary: '#fff' } }, error: { iconTheme: { primary: '#E53E3E', secondary: '#fff' } } }} />
    </div>
  );
};

export default ContactPage; 