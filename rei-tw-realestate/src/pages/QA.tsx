import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './QA.css';

const QA: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const qaItems = [
    {
      id: 'qa_001',
      category: 'general',
      question: '外國人可以在日本購買不動產嗎？',
      answer: '是的，日本法律允許外國人購買不動產。不過需要注意的是，購買後的維護、稅務等責任需要自己承擔。建議在購買前充分了解相關法規。',
      priority: 'high'
    },
    {
      id: 'qa_002',
      category: 'financial',
      question: '外國人可以申請日本的房屋貸款嗎？',
      answer: '可以，但條件較為嚴格。通常需要有穩定的日本收入來源、良好的信用記錄，以及足夠的頭期款。建議先諮詢銀行了解具體條件。',
      priority: 'high'
    },
    {
      id: 'qa_003',
      category: 'legal',
      question: '購買日本不動產需要繳納哪些稅金？',
      answer: '主要包括：不動產取得稅、登記費用、印花稅、以及每年的固定資產稅。具體金額會根據物件價值和所在地區而有所不同。',
      priority: 'high'
    },
    {
      id: 'qa_004',
      category: 'process',
      question: '從看房到完成購買大約需要多長時間？',
      answer: '一般來說，整個過程需要2-6個月的時間。包括搜尋物件、簽約、申請貸款、過戶等步驟。如果是現金購買，時間會相對較短。',
      priority: 'medium'
    },
    {
      id: 'qa_005',
      category: 'maintenance',
      question: '購買後的管理費用大概是多少？',
      answer: '管理費因物件類型而異。一般公寓的管理費約每月1-3萬日圓，豪華大廈可能更高。一戶建則不需要支付管理費，但需要自己負責維護。',
      priority: 'medium'
    }
  ];

  const categories = [
    { key: 'all', label: t('qa.categories.all') },
    { key: 'general', label: t('qa.categories.general') },
    { key: 'legal', label: t('qa.categories.legal') },
    { key: 'financial', label: t('qa.categories.financial') },
    { key: 'process', label: t('qa.categories.process') },
    { key: 'maintenance', label: t('qa.categories.maintenance') }
  ];

  const filteredItems = qaItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="qa">
      <div className="container">
        <div className="page-header">
          <h1>{t('qa.title')}</h1>
          <p className="page-subtitle">{t('qa.subtitle')}</p>
        </div>

        <div className="qa-controls">
          <div className="search-section">
            <input
              type="text"
              placeholder={t('qa.search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search"
              >
                {t('qa.clear_search')}
              </button>
            )}
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`category-filter ${selectedCategory === category.key ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="qa-list">
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <p>{t('qa.no_results')}</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className="qa-item">
                <button
                  className="qa-question"
                  onClick={() => toggleExpand(item.id)}
                >
                  <span className="question-text">{item.question}</span>
                  <span className={`expand-icon ${expandedItems.has(item.id) ? 'expanded' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {expandedItems.has(item.id) && (
                  <div className="qa-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QA;