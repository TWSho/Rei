import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/terms', label: t('navigation.terms') },
    { path: '/plans', label: t('navigation.plans') },
    { path: '/flow', label: t('navigation.flow') },
    { path: '/qa', label: t('navigation.qa') }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>{t('site.title')}</h1>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={t('navigation.mobile_menu')}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;