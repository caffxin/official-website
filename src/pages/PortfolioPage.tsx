import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import portfolioData from '../data/portfolioData';

const cardBorder = 'border border-2';
const cardBorderColor = 'border-[#83A6CE]';

const PortfolioPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen" style={{ background: 'rgb(242, 246, 250)' }}>
      <motion.div className="container mx-auto px-4 py-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.h1 className="text-3xl font-bold mb-8 text-center" style={{ color: 'rgb(38,65,94)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>精選案例</motion.h1>
        <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {portfolioData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-6 bg-white ${cardBorder} ${cardBorderColor}`}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage; 