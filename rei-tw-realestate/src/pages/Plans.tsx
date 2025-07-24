import React from 'react';
import { useTranslation } from 'react-i18next';
import './Plans.css';

const Plans: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="plans">
      <div className="container">
        <div className="page-header">
          <h1>{t('plans.title')}</h1>
          <p className="page-subtitle">{t('plans.subtitle')}</p>
        </div>

        <div className="explanation-section">
          <div className="card">
            <h2>{t('plans.explanation.title')}</h2>
            <p>{t('plans.explanation.content')}</p>
          </div>
        </div>

        <div className="examples-section">
          <h2 className="text-center mb-4">{t('plans.examples.title')}</h2>
          <div className="examples-grid">
            <div className="example-card">
              <div className="example-placeholder">
                <span>📋</span>
              </div>
              <h3>{t('plans.examples.apartment')}</h3>
              <p>アパート型物件の標準的な図面例</p>
            </div>
            
            <div className="example-card">
              <div className="example-placeholder">
                <span>🏢</span>
              </div>
              <h3>{t('plans.examples.mansion')}</h3>
              <p>マンション型物件の標準的な図面例</p>
            </div>
            
            <div className="example-card">
              <div className="example-placeholder">
                <span>🏠</span>
              </div>
              <h3>{t('plans.examples.house')}</h3>
              <p>一戸建て物件の標準的な図面例</p>
            </div>
          </div>
        </div>

        <div className="glossary-section">
          <div className="card">
            <h2>{t('plans.glossary.title')}</h2>
            <div className="glossary-grid">
              <div className="glossary-item">
                <h4>{t('plans.glossary.room_codes')}</h4>
                <ul>
                  <li>LDK - 客廳、餐廳、廚房</li>
                  <li>洋室 - 西式房間</li>
                  <li>和室 - 日式房間</li>
                  <li>玄関 - 入口</li>
                  <li>バルコニー - 陽台</li>
                </ul>
              </div>
              
              <div className="glossary-item">
                <h4>{t('plans.glossary.measurements')}</h4>
                <ul>
                  <li>帖・畳 - 榻榻米單位</li>
                  <li>㎡ - 平方公尺</li>
                  <li>坪 - 台灣常用面積單位</li>
                  <li>専有面積 - 專有面積</li>
                  <li>バルコニー面積 - 陽台面積</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;