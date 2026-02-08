import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Code, Globe, Database, Cpu } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ScrollToTop from './components/ScrollToTop';
import { motion as motionLink } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

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

  const MotionLink = motion(Link);

  const HomePage = () => (
    <>
      <Helmet>
        <title>咖昕科技有限公司 CaffXin Tech</title>
        <meta name="description" content="咖昕科技提供企業後台系統開發、網站設計建置、AI 應用整合等一站式數位解決方案，協助企業打造穩定、高效的數位系統，提升營運效率。" />
      </Helmet>
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
              className="text-4xl md:text-5xl font-bold mb-0 text-primary-900"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              打造企業專屬的數位成長力 <motion.span 
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
              專業網站與系統開發團隊
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-lg"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              我們提供以業務需求為核心的客製化數位解決方案，協助企業與品牌建立穩定、可擴充且可長期營運的系統架構，讓科技真正成為成長的助力，而非負擔。
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionLink
                to="/contact"
                className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors shadow-md relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">立即諮詢</span>
                <motion.span
                  className="absolute inset-0 bg-primary-900 rounded-lg"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 1 }}
                />
              </MotionLink>
              <MotionLink
                to="/portfolio"
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
                  style={{ zIndex: 1 }}
                />
              </MotionLink>
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
              className="md:w-1/2 md:pl-20"
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
                以咖啡精神打造值得信賴的科技服務
              </motion.h3>

              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                咖昕科技有限公司（CaffXin Tech Co., Ltd.）
                <br />
                由具備軟體工程背景、同時熱愛咖啡文化的技術團隊創立，
                結合設計、前後端與系統架構專家，
                累積多項專案實務經驗，能因應不同規模與產業的系統需求。
                <br />
                <br />
                我們相信 <em>「好的咖啡讓人專注，好的系統讓企業安心運作」</em>。
                <br />
                <br />
                「CaffXin」一名源自 <em>Caffeine</em> 與「昕」（晨曦、創新），
                也象徵著「開心」，
                代表我們期望透過穩定、可靠的技術，
                為客戶打造真正能落地、可長期使用的數位解決方案。
                <br />
              </motion.p>
              
              {/* <motion.h3
                className="text-2xl font-semibold mb-4 text-primary-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                我們的專業服務
              </motion.h3> */}

              {/* <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { "title": "企業網站設計與開發", "desc": "規劃與建置符合品牌定位與業務需求的高效能網站。" },
                  { "title": "WordPress 客製化與整合", "desc": "客製主題、外掛開發與效能優化，打造可維運的內容管理平台。" },
                  { "title": "後台管理系統開發", "desc": "整合資料、角色與權限，協助企業有效控管營運流程。" },
                  { "title": "流程自動化與系統整合", "desc": "結合自動化工具與 AI 應用，降低人工作業成本、提升效率。"},
                  { "title": "UI/UX 設計", "desc": "以使用者行為為核心，打造直覺、易用且具轉換力的操作體驗。" },
                  { "title": "技術外包與專案支援", "desc": "提供專業工程師支援，適合短期專案或中長期技術合作。" }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-[#83A6CE] bg-opacity-10 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-lg font-semibold text-primary-800">{service.title}</h4>
                    <p className="text-gray-700 mt-2">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div> */}
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
            技術能力
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: <Code size={40} />, 
                title: "前端開發", 
                desc: "採用主流框架與現代化技術，打造高互動性與跨裝置相容的介面。" 
              },
              { 
                icon: <Database size={40} />, 
                title: "後端系統", 
                desc: "設計穩定、安全且具擴充性的後端服務，支援企業成長需求。" 
              },
              { 
                icon: <Cpu size={40} />, 
                title: "人工智能整合", 
                desc: "將 AI 技術實際應用於流程、分析與自動化場景中。" 
              },
              { 
                icon: <Globe size={40} />, 
                title: "全球化部署", 
                desc: "規劃雲端架構、多語系與在地化支援，協助產品穩定上線與擴展。" 
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
            {/* 認識我們的團隊按鈕已移除 */}
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
            精選案例
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
          alt="公共服務線上預約網站" 
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <div className="p-4 text-white">
            <p className="text-sm font-medium">公共服務線上預約網站</p>
          </div>
        </motion.div>
              </motion.div>
              <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-800">公共服務與大量使用者系統</h3>
        <p className="text-gray-600 mb-4">
          支援民眾或使用者端操作的系統建置，涵蓋線上預約、現場作業與後台管理，確保系統穩定運作於高使用情境。
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
            <p className="text-sm font-medium">企業後台系統</p>
          </div>
        </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">企業後台系統設計與開發</h3>
        <p className="text-gray-600 mb-4">
                  為企業與各類組織打造專屬後台系統，協助整合流程、資料與權限，提升日常營運效率與管理品質。
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
          alt="派車接送平台" 
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <div className="p-4 text-white">
            <p className="text-sm font-medium">派車接送平台</p>
          </div>
        </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">LINEBOT｜接送與派車管理</h3>
        <p className="text-gray-600 mb-4">
          結合 LINEBOT 與後台系統，讓乘客可透過 LINE 完成預約，並協助管理端集中處理派車與訂單，優化接送流程與即時應對能力。
        </p>
              </div>
            </motion.div>
          </motion.div>
          {/* 新增更多作品按鈕 */}
          <div className="flex justify-center mt-8">
            <Link
              to="/portfolio"
              className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors shadow-md relative overflow-hidden group"
            >
              <span className="relative z-10">更多案例</span>
              <span className="absolute inset-0 bg-primary-900 rounded-lg group-hover:left-0 transition-all duration-300" style={{ left: '-100%' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );

  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="pt-16">{children}</div>
  );

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
        <Route path="/process" element={<PageWrapper><ProcessPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfServicePage /></PageWrapper>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;