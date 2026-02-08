import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  // { name: '關於我們', path: '/about' },
  { name: '服務項目', path: '/services' },
  { name: '精選案例', path: '/portfolio' },
  { name: '合作流程', path: '/process' },
  { name: '常見問題', path: '/faq' },
  { name: '聯絡我們', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary-800 flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-12 h-12" />        
          <span>咖昕科技 CaffXin Tech</span>
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-bold relative px-3 py-1 rounded transition-colors
                ${location.pathname === item.path
                  ? 'bg-primary-800 text-white shadow-md'
                  : 'text-gray-800 hover:text-primary-800'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold px-3 py-2 rounded transition-colors
                  ${location.pathname === item.path
                    ? 'bg-primary-800 text-white shadow-md'
                    : 'text-gray-800 hover:text-primary-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 