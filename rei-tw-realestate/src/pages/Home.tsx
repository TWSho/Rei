import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">{t('home.hero.title')}</h1>
          <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
          <Link to="/terms" className="btn btn-primary hero-cta">
            {t('home.hero.cta')}
          </Link>
        </section>

        {/* Introduction Section */}
        <section className="introduction">
          <div className="card">
            <h2>{t('home.introduction.title')}</h2>
            <p>{t('home.introduction.content')}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="text-center mb-4">{t('home.features.title')}</h2>
          <div className="features-grid">
            <Link to="/terms" className="feature-card">
              <h3>{t('home.features.property_types.title')}</h3>
              <p>{t('home.features.property_types.description')}</p>
            </Link>
            
            <Link to="/terms" className="feature-card">
              <h3>{t('home.features.rights_types.title')}</h3>
              <p>{t('home.features.rights_types.description')}</p>
            </Link>
            
            <Link to="/flow" className="feature-card">
              <h3>{t('home.features.flow_guide.title')}</h3>
              <p>{t('home.features.flow_guide.description')}</p>
            </Link>
            
            <Link to="/qa" className="feature-card">
              <h3>{t('home.features.qa_section.title')}</h3>
              <p>{t('home.features.qa_section.description')}</p>
            </Link>
          </div>
        </section>

        {/* Social Section */}
        <section className="social">
          <div className="card text-center">
            <h2>{t('home.social.title')}</h2>
            <p className="mb-3">{t('home.social.description')}</p>
            <div className="social-links">
              <a href="#" className="social-link instagram">
                <span className="social-icon">📷</span>
                {t('home.social.instagram')}
              </a>
              <a href="#" className="social-link youtube">
                <span className="social-icon">📺</span>
                {t('home.social.youtube')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;