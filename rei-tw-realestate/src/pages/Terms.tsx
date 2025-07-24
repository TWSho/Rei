import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import propertyTypesData from '../data/propertyTypes.json';
import rightsTypesData from '../data/rightsTypes.json';
import type { PropertyType, RightType } from '../types';
import './Terms.css';

const Terms: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'property' | 'rights'>('property');
  
  const propertyTypes = Object.values(propertyTypesData) as PropertyType[];
  const rightsTypes = Object.values(rightsTypesData) as RightType[];

  return (
    <div className="terms">
      <div className="container">
        <div className="page-header">
          <h1>{t('terms.title')}</h1>
          <p className="page-subtitle">{t('terms.subtitle')}</p>
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'property' ? 'active' : ''}`}
            onClick={() => setActiveTab('property')}
          >
            {t('terms.categories.property_types')}
          </button>
          <button 
            className={`tab ${activeTab === 'rights' ? 'active' : ''}`}
            onClick={() => setActiveTab('rights')}
          >
            {t('terms.categories.rights_types')}
          </button>
        </div>

        {activeTab === 'property' && (
          <div className="terms-grid">
            {propertyTypes.map((property) => (
              <div key={property.id} className="term-card">
                <div className="term-header">
                  <h3 className="term-title">{property.name.zhTW}</h3>
                  <p className="term-japanese">{property.name.ja}</p>
                </div>
                
                <div className="term-content">
                  <p className="term-description">{property.description}</p>
                  
                  <div className="term-section">
                    <h4>{t('terms.details.features')}</h4>
                    <ul>
                      {property.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="term-section">
                    <h4>{t('terms.details.considerations')}</h4>
                    <ul>
                      {property.considerations.map((consideration, index) => (
                        <li key={index}>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="term-details">
                    <div className="detail-item">
                      <strong>{t('terms.details.structure')}:</strong> {property.structure}
                    </div>
                    <div className="detail-item">
                      <strong>{t('terms.details.floors')}:</strong> {property.floors.typical}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rights' && (
          <div className="terms-grid">
            {rightsTypes.map((right) => (
              <div key={right.id} className="term-card">
                <div className="term-header">
                  <h3 className="term-title">{right.name.zhTW}</h3>
                  <p className="term-japanese">{right.name.ja}</p>
                </div>
                
                <div className="term-content">
                  <p className="term-description">{right.description}</p>
                  
                  <div className="term-section">
                    <h4>{t('terms.details.advantages')}</h4>
                    <ul>
                      {right.advantages.map((advantage, index) => (
                        <li key={index}>{advantage}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="term-section">
                    <h4>{t('terms.details.disadvantages')}</h4>
                    <ul>
                      {right.disadvantages.map((disadvantage, index) => (
                        <li key={index}>{disadvantage}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="term-details">
                    <div className="detail-item">
                      <strong>{t('terms.details.duration')}:</strong> {right.duration.period || t('terms.details.duration')}
                    </div>
                    <div className="detail-item">
                      <strong>{t('terms.details.transferability')}:</strong> {right.transferability.allowed ? '可' : '不可'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terms;