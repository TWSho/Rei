import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            {t('site.copyright')}
          </p>
          <p className="tagline">
            {t('site.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;