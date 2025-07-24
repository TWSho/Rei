import React from 'react';
import { useTranslation } from 'react-i18next';
import './Flow.css';

const Flow: React.FC = () => {
  const { t } = useTranslation();

  const flowSteps = [
    {
      id: 'preparation',
      step: 1,
      title: '購買準備',
      description: '確定預算、了解貸款條件、準備必要文件',
      duration: '1-2週',
      documents: ['收入證明', '銀行存款證明', '身分證明文件', '居住證明'],
      notes: ['確認自己的貸款能力', '了解日本不動產稅制', '考慮維護費用'],
      tips: ['建議預算控制在年收入的5-7倍以內', '提前諮詢銀行貸款條件']
    },
    {
      id: 'search',
      step: 2,
      title: '物件搜尋',
      description: '透過不動產仲介或網站尋找合適物件',
      duration: '2-8週',
      documents: ['購買希望書'],
      notes: ['實地看房很重要', '確認周邊環境', '了解管理費、維護情況'],
      tips: ['多看幾間比較', '注意交通便利性', '確認建築年數與狀況']
    },
    {
      id: 'contract',
      step: 3,
      title: '契約簽署',
      description: '簽署買賣契約、支付頭期款',
      duration: '1週',
      documents: ['買賣契約書', '重要事項說明書', '手付金'],
      notes: ['仔細閱讀契約內容', '確認所有條件', '了解解約條件'],
      tips: ['可請專業人士協助確認契約', '手付金通常為房價的5-10%']
    },
    {
      id: 'financing',
      step: 4,
      title: '資金準備',
      description: '申請貸款、準備剩餘資金',
      duration: '2-4週',
      documents: ['貸款申請書', '收入證明', '物件資料'],
      notes: ['確認貸款審核結果', '準備頭期款以外的費用', '了解貸款條件'],
      tips: ['可比較多家銀行條件', '注意利率類型的選擇']
    },
    {
      id: 'completion',
      step: 5,
      title: '過戶完成',
      description: '完成所有權移轉、交屋',
      duration: '1-2週',
      documents: ['所有權移轉登記', '各種稅金繳納', '鑰匙交接'],
      notes: ['確認所有權移轉完成', '繳納相關稅金', '確認物件狀況'],
      tips: ['保留所有相關文件', '了解後續維護責任']
    }
  ];

  return (
    <div className="flow">
      <div className="container">
        <div className="page-header">
          <h1>{t('flow.title')}</h1>
          <p className="page-subtitle">{t('flow.subtitle')}</p>
        </div>

        <div className="flow-timeline">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="flow-step">
              <div className="step-number">
                <span>{step.step}</span>
              </div>
              
              <div className="step-content">
                <div className="step-header">
                  <h3>{step.title}</h3>
                  <span className="step-duration">{t('flow.duration')}: {step.duration}</span>
                </div>
                
                <p className="step-description">{step.description}</p>
                
                <div className="step-details">
                  <div className="detail-section">
                    <h4>{t('flow.documents')}</h4>
                    <ul>
                      {step.documents.map((doc, docIndex) => (
                        <li key={docIndex}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>{t('flow.notes')}</h4>
                    <ul>
                      {step.notes.map((note, noteIndex) => (
                        <li key={noteIndex}>{note}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>{t('flow.tips')}</h4>
                    <ul>
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {index < flowSteps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;