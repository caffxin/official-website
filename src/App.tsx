import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronRight, Code, Cpu, Database, Globe } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { EMAILJS_CONFIG } from './emailjs-config';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

  return (
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

      {/* Header */}
      <motion.header 
        className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-primary-800 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              咖昕科技工作室
            </motion.span>
            <motion.div
              className="ml-2 w-2 h-2 bg-secondary-300 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>
          
          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['首頁', '關於我們', '作品集', '聯絡我們'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${['home', 'about', 'projects', 'contact'][index]}`}
                className="text-gray-800 hover:text-primary-800 transition-colors relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-300"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {['首頁', '關於我們', '作品集', '聯絡我們'].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#${['home', 'about', 'projects', 'contact'][index]}`}
                    className="text-gray-800 hover:text-primary-800 transition-colors"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

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
              我們提供客製化的數位解決方案，幫助企業優化使用者體驗、提升品牌價值，讓您的數位化轉型更輕鬆！
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                href="#contact" 
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
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
        
        {/* 滾動指示器 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.p className="text-sm text-gray-600 mb-2">向下滾動探索更多</motion.p>
          <motion.div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-secondary-300 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
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
                我們是誰
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                咖昕科技工作室是一個由經驗豐富的設計師和開發人員組成的專業團隊，擁有超過5年的行業經驗。我們專注於為客戶提供高品質的數位解決方案，從網站設計到應用程式開發，都能滿足您的需求。
              </motion.p>
              
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-primary-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                我們的專長
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "網站設計與開發",
                  "WordPress 開發與客製化",
                  "CRM 系統開發",
                  "業務自動化解決方案 (Make工具)",
                  "UI/UX 設計",
                  "數位轉型與流程優化"
                ].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      variants={skillIconVariants}
                      whileHover="hover"
                    >
                      <ChevronRight size={20} className="text-secondary-300 mr-2" />
                    </motion.div>
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* <motion.a 
                href="#" 
                className="inline-flex items-center text-primary-800 hover:text-primary-900 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                下載服務手冊 
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={18} className="ml-2" />
                </motion.span>
              </motion.a> */}
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
            src={`${import.meta.env.BASE_URL}images/wordpress.png`} 
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
          <h3 className="text-xl font-semibold mb-2 text-primary-800">旅遊部落格</h3>
          <p className="text-gray-600 mb-4">
            專為旅遊愛好者打造的 WordPress 部落格網站，幫助部落客分享精彩旅程，提升品牌影響力。
          </p>
          <div className="flex justify-end">
            <motion.a 
              href="https://aiwajourney.com/" 
              className="text-primary-800 hover:text-primary-900 inline-flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              查看案例 <ExternalLink size={16} className="ml-1" />
            </motion.a>
          </div>
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="企業形象網站" 
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <div className="p-4 text-white">
              <p className="text-sm font-medium">品牌重塑專案</p>
            </div>
          </motion.div>
              </motion.div>
              <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-primary-800">企業品牌重塑</h3>
          <p className="text-gray-600 mb-4">
            為成立十年的科技公司進行品牌重塑，包括新的視覺識別和網站設計。
          </p>
          <div className="flex justify-end">
            <motion.a 
              href="#" 
              className="text-primary-800 hover:text-primary-900 inline-flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              查看案例 <ExternalLink size={16} className="ml-1" />
            </motion.a>                  
          </div>
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
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="行動應用程式" 
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <div className="p-4 text-white">
              <p className="text-sm font-medium">行動應用專案</p>
            </div>
          </motion.div>
              </motion.div>
              <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-primary-800">健康追蹤應用</h3>
          <p className="text-gray-600 mb-4">
            為健康產業客戶開發的行動應用程式，幫助用戶追蹤健康數據和運動記錄。
          </p>
          <div className="flex justify-end">
            <motion.a 
              href="#" 
              className="text-primary-800 hover:text-primary-900 inline-flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              查看案例 <ExternalLink size={16} className="ml-1" />
            </motion.a>                  
          </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-30"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-primary-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            聯絡我們
          </motion.h2>
          
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-primary-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                聯絡資訊
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                準備好數位升級了嗎？
                <br /><br />無論您有任何【網站開發】、【系統建置】、【業務自動化】相關需求，
                <br />歡迎隨時與我們聯繫，
                我們將提供最適合您的數位解決方案，助您的業務更上一層樓！
                <br /><br />📞 歡迎來信或填寫表單，讓我們聊聊您的需求！
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="text-secondary-300 mr-3"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail size={20} />
                  </motion.div>
                  <a href="mailto:caffxin.tech@gmail.com" className="text-gray-700 hover:text-primary-800">
                    caffxin.tech@gmail.com
                  </a>
                </motion.div>
                
                {/* <motion.div 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="text-secondary-300 mr-3"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Linkedin size={20} />
                  </motion.div>
                  <a href="#" className="text-gray-700 hover:text-primary-800">
                    linkedin.com/company/creativestudio
                  </a>
                </motion.div> */}
                
                {/* <motion.div 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="text-secondary-300 mr-3"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={20} />
                  </motion.div>
                  <a href="#" className="text-gray-700 hover:text-primary-800">
                    github.com/creativestudio
                  </a>
                </motion.div> */}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 md:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                  <motion.input 
                    type="text" 
                    id="name" 
                    name="user_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-800"
                    placeholder="您的姓名"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label htmlFor="email" className="block text-gray-700 mb-2">電子郵件</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-800"
                    placeholder="您的電子郵件"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label htmlFor="message" className="block text-gray-700 mb-2">訊息內容</label>
                  <motion.textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-800"
                    placeholder="請描述您的專案需求"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    required
                  />
                </motion.div>
                
                {/* 隱藏欄位，用於指定收件人 */}
                <input type="hidden" name="to_email" value="caffxin.tech@gmail.com" />
                
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors shadow-md relative overflow-hidden group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? '發送中...' : '發送訊息'}
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-primary-900"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          animate={{ 
            backgroundPosition: ['0px 0px', '20px 20px'],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.p 
              className="text-gray-600 mb-4 md:mb-0 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              © 2025 咖昕科技工作室. 版權所有.
            </motion.p>
            
            {/* <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {[
          { icon: <Github size={20} />, href: "#" },
          { icon: <Linkedin size={20} />, href: "#" },
          { icon: <Mail size={20} />, href: "#" }
              ].map((item, index) => (
          <motion.a 
            key={index}
            href={item.href} 
            className="text-gray-600 hover:text-primary-800"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
          </motion.a>
              ))}
            </motion.div> */}
          </div>
        </div>
      </footer>
      
      {/* 浮動回到頂部按鈕 */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 bg-primary-800 text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          scale: scrollYProgress.get() > 0.1 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </motion.svg>
      </motion.a>
    </div>
  );
}

export default App;