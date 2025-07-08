import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Menu, X, Mail, ExternalLink, ChevronRight, Code, Cpu, Database, Globe, MessageSquare, Copy } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { EMAILJS_CONFIG } from './emailjs-config';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProcessPage from './pages/ProcessPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('已複製到剪貼板！');
    } catch (err) {
      toast.error('複製失敗，請手動複製。');
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      
      console.log('Email successfully sent!', result.text);
      toast.success('訊息已成功發送！我們將盡快回覆您。');
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('發送失敗，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 浮動粒子背景
  const particles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-secondary-300 opacity-20"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        x: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        y: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
      }}
      transition={{
        duration: Math.random() * 20 + 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: `${Math.random() * 20 + 5}px`,
        height: `${Math.random() * 20 + 5}px`,
      }}
    />
  ));

  // 標題動畫變體
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // 內容動畫變體
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // 技能圖標動畫
  const skillIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      } 
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  // 定義主色
  const MAIN_COLOR = '#0D1E4C';

  const HomePage = () => (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
      {/* Toast 通知 */}
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#0D1E4C',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#E53E3E',
              secondary: '#fff',
            },
          },
        }}
      />
      
      {/* 浮動粒子背景 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>

      {/* 網格背景 */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary-200 to-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            style={{ opacity, scale }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-primary-900"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              打造您的專屬數位未來 <motion.span 
                className="text-primary-800 inline-block"
                animate={{ 
                  color: ['#0D1E4C', '#26415E', '#0D1E4C'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-primary-700"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              專業網站與應用程式開發團隊
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-lg"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              我們提供客製化的數位解決方案，讓企業與個人都能像享受一杯香醇咖啡一樣，感受科技帶來的舒適與滿足！
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                href="/official-website/contact" 
                className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors shadow-md relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">開始合作</span>
                <motion.span 
                  className="absolute inset-0 bg-primary-900 rounded-lg"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="px-6 py-3 border border-primary-800 text-primary-800 rounded-lg hover:bg-secondary-200 transition-colors relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">探索案例</span>
                <motion.span 
                  className="absolute inset-0 bg-secondary-200 rounded-lg"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div className="relative">
              <motion.img 
                src={`${import.meta.env.BASE_URL}images/customized.jpg`}
                alt="團隊合作" 
                className="rounded-lg w-full max-w-md h-auto object-cover border-4 border-white shadow-lg relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
              />
              
              {/* 裝飾元素 */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary-300 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-800 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              
              {/* 浮動科技元素 */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-secondary-200 p-3 rounded-full shadow-lg z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code size={24} className="text-primary-800" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-secondary-200 p-3 rounded-full shadow-lg z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Globe size={24} className="text-primary-800" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-secondary-200 rounded-full filter blur-3xl opacity-50"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-50"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-primary-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            關於我們
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="relative">
                <motion.img 
                  src={`${import.meta.env.BASE_URL}images/work.jpg`}
                  alt="團隊工作" 
                  className="rounded-lg shadow-lg max-w-full h-auto relative z-10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* 裝飾元素 */}
                <motion.div 
                  className="absolute -top-3 -right-3 w-24 h-24 border-t-4 border-r-4 border-secondary-300 z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
                
                <motion.div 
                  className="absolute -bottom-3 -left-3 w-24 h-24 border-b-4 border-l-4 border-secondary-300 z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-4 text-primary-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                用咖啡點燃科技，用技術創造快樂！
              </motion.h3>

              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                咖昕科技由一對熱愛咖啡的工程師夫妻創立，結合設計與開發專家，擁有超過 5 年經驗，我們相信：「好的咖啡喚醒靈魂，好的技術改變世界」。
                <br />
                <br />
                而「CaffXin」融合了 Caffeine（咖啡因）與「昕」（晨曦、創新），也代表「開心」，
                希望科技能創造出更美好的生活，讓每個人都能享受到科技帶來的便利與愉悅。
                <br />              
              </motion.p>
              
              <motion.h3
                className="text-2xl font-semibold mb-4 text-primary-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                我們的專業服務
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { "title": "網站設計與開發", "desc": "量身打造高效能網站，提升品牌形象。" },
                  { "title": "WordPress 客製化", "desc": "客製主題與外掛優化，打造專屬網站。" },
                  { "title": "後台管理系統開發", "desc": "整合數據與權限，簡化管理流程。" },
                  { "title": "流程自動化", "desc": "AI 助理結合自動化工具，提升效率，節省時間與人力成本。"},
                  { "title": "UI/UX 設計", "desc": "直覺操作與美觀設計，提升使用體驗與轉換率。" },
                  { "title": "了解更多服務項目", "desc": "", "link": "/official-website/services", "icon": true }
                ].map((service, index) => (
                  service.link ? (
                    <a href={service.link} key={index} style={{ textDecoration: 'none' }}>
                      <motion.div
                        className="p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-between"
                        style={{ background: 'rgb(245, 230, 237)' }}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        <h4 className="text-lg font-semibold" style={{ color: MAIN_COLOR }}>{service.title}</h4>
                        <ChevronRight size={32} style={{ color: MAIN_COLOR }} className="ml-4" />
                      </motion.div>
                    </a>
                  ) : (
                    <motion.div
                      key={index}
                      className="p-6 bg-[#83A6CE] bg-opacity-10 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <h4 className="text-lg font-semibold text-primary-800">{service.title}</h4>
                      <p className="text-gray-700 mt-2">{service.desc}</p>
                    </motion.div>
                  )
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 技術能力區塊 */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(196, 140, 179, 0.3) 0%, rgba(13, 30, 76, 0) 50%)"
          }}
        />
        
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            我們的技術能力
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: <Code size={40} />, 
                title: "前端開發", 
                desc: "使用最新的框架和技術，打造互動性強、響應式的用戶界面。" 
              },
              { 
                icon: <Database size={40} />, 
                title: "後端系統", 
                desc: "構建穩定、安全、高效的後端系統，確保應用程式順暢運行。" 
              },
              { 
                icon: <Cpu size={40} />, 
                title: "人工智能整合", 
                desc: "將AI技術整合到您的業務中，提供智能化的解決方案。" 
              },
              { 
                icon: <Globe size={40} />, 
                title: "全球化部署", 
                desc: "幫助您的產品和服務觸達全球市場，提供多語言和本地化支持。" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-secondary-200 mb-4"
                  variants={skillIconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-secondary-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a href="/official-website/about" className="px-8 py-3 rounded-full font-bold text-lg transition shadow-md" style={{ letterSpacing: 2, background: 'rgb(245, 230, 237)', color: MAIN_COLOR }}>
              認識我們的團隊
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-secondary-200/20 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-primary-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          >
            精選作品
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Project 1 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
              }}
            >
              <motion.div className="relative overflow-hidden">
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/website.jpg`} 
          alt="WordPress 網站" 
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <div className="p-4 text-white">
            <p className="text-sm font-medium">WordPress 網站</p>
          </div>
        </motion.div>
              </motion.div>
              <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-800">個人旅遊部落格</h3>
        <p className="text-gray-600 mb-4">
          專為旅遊愛好者打造的 WordPress 部落格網站，幫助部落客分享精彩旅程，提升品牌影響力。
        </p>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
              }}
            >
              <motion.div className="relative overflow-hidden">
        <motion.img 
                src={`${import.meta.env.BASE_URL}images/enterprise-admin-system.jpg`} 
          alt="企業後台系統" 
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <div className="p-4 text-white">
            <p className="text-sm font-medium">企業後台系統專案</p>
          </div>
        </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">企業後台系統設計與開發</h3>
        <p className="text-gray-600 mb-4">
                  為公司打造專屬後台管理系統，涵蓋使用者管理、設備廠人力派遣、紡織廠實驗記錄管理等功能，提升營運效率與管理便利性。
        </p>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
              }}
            >
              <motion.div className="relative overflow-hidden">
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/ai-agent-make.jpg`} 
          alt="企業內部流程自動化" 
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <div className="p-4 text-white">
            <p className="text-sm font-medium">個人 AI 助理</p>
          </div>
        </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">建築工作室 AI 助理</h3>
        <p className="text-gray-600 mb-4">
          運用 Make 自動化工具，打造智能助理，提升作業效率。透過自動化表單、文件整合、LINE@ 助理等功能，優化協作與營運流程。
        </p>
              </div>
            </motion.div>
          </motion.div>
          {/* 新增更多作品按鈕 */}
          <div className="flex justify-center mt-8">
            <motion.button
              className="px-8 py-3 bg-primary-800 text-white rounded-lg shadow-md hover:bg-primary-900 transition-colors text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = '/official-website/portfolio'}
            >
              更多作品
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );

  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="pt-16">{children}</div>
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/services/:key" element={<PageWrapper><ServiceDetailPage /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
        <Route path="/process" element={<PageWrapper><ProcessPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;