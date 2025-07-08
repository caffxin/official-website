import { Project } from '../components/ProjectCard';

const portfolioData: Project[] = [
  {
    projectName: '智慧接送 LINEBOT + 後台系統',
    projectType: 'LINEBOT + 管理系統',
    industry: '接送／物流',
    problemSolved: [
      '乘客透過 LINE 完成預約，減少客服負擔',
      '後台統一管理訂單與派車事務',
      '司機透過 LINE 收派單、請假、聯繫客服'
    ],
    techStack: ['LINE LIFF', 'LINE Messaging API', 'PHP', 'MySQL', 'GCP', 'Nginx'],
    resultsHighlights: [
      '預約流程自動化，減少人工操作',
      '派車集中管理，提升即時應對效率'
    ],
    image: `${import.meta.env.BASE_URL}images/car_reservation.jpg`,
    note: '僅限諮詢展示'
  },
  {
    projectName: '眼鏡行 ERP 維運與優化',
    projectType: 'ERP 系統維護',
    industry: '零售',
    problemSolved: [
      '支援進銷存與門市作業',
      '新增功能、優化報表效能',
      '修正錯誤，確保穩定運作'
    ],
    techStack: ['Java', 'JSP/Servlet', 'MySQL', 'Tomcat', 'Linux'],
    resultsHighlights: [
      '報表查詢速度明顯提升',
      '穩定性提升，延長系統壽命'
    ],
    image: `${import.meta.env.BASE_URL}images/eyes_erp.jpg`,
    note: '內部系統，恕不公開展示'
  },
  {
    projectName: '旅遊部落格網站建置',
    projectType: '網站架設 + 部落格經營',
    industry: '自媒體',
    problemSolved: [
      '分享旅遊行程與生活紀錄',
      '支援業配合作與品牌經營',
      '客製主題、SEO 優化與教學'
    ],
    techStack: ['WordPress', 'Elementor', 'Rank Math', 'WPvivid', 'Site Mailer'],
    resultsHighlights: [
      '完整自媒體平台，提升品牌形象',
      '加強 SEO 與內容行銷效益'
    ],
    image: `${import.meta.env.BASE_URL}images/travel_blog.jpg`,
    note: 'https://aiwajourney.com/'
  },
  {
    projectName: '公會會籍系統報表開發',
    projectType: '報表後端開發',
    industry: '公協會系統',
    problemSolved: [
      '實作會員報表匯出功能',
      '串接 PostgreSQL 並整合 JOOQ ORM',
      '支援前端產出與下載報表'
    ],
    techStack: ['Java', 'JasperReports', 'PostgreSQL', 'JOOQ'],
    resultsHighlights: [
      '完成多類報表開發，滿足統計需求',
      '成功串接前端並支援下載'
    ],
    image: `${import.meta.env.BASE_URL}images/report_proj.jpg`,
    note: '內部系統，恕不公開展示'
  },
  {
    projectName: '監造 LINEBOT 表單整合',
    projectType: 'LINEBOT + 表單系統',
    industry: '建築監造',
    problemSolved: [
      '整合監造表單至 LINEBOT，簡化現場填寫',
      '使用 Jotform 製作職安、防汛、缺失等檢查表',
      'Make 自動產出文件並儲存雲端'
    ],
    techStack: ['LINE Messaging API', 'Jotform', 'Make', 'Google Drive', 'Apps Script'],
    resultsHighlights: [
      '表單流程自動化，減少人工處理',
      '統一格式，降低錯誤與排版時間'
    ],
    image: `${import.meta.env.BASE_URL}images/linebot_agent.jpg`,
    note: '僅限諮詢展示'
  },
  {
    projectName: '客服管理系統開發',
    projectType: '客製化後台系統',
    industry: '工業設備／技術服務',
    problemSolved: [
      '建構客服流程系統：立案、派工、結案',
      '功能涵蓋工單、料件、簽核與知識庫',
      '支援 APP 對接與工時紀錄'
    ],
    techStack: ['.NET Core', 'MSSQL', 'IIS'],
    resultsHighlights: [
      '模組化架構支援查詢與派工',
      '流程系統化，強化內部作業效率',
      '配合需求調整擴充，彈性高'
    ],
    image: `${import.meta.env.BASE_URL}images/customer_support_system.jpg`,
    note: '內部系統，恕不公開展示'
  }
];

export default portfolioData;
