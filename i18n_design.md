# REI哥日本不動產X買房知識百科書 - 国際化戦略設計書

## 1. 国際化基本方針

### 1.1 設計原則
- **メイン言語**: 繁体字中国語（台湾）
- **補助言語**: 日本語（専門用語対照用）
- **拡張対応**: 将来的な多言語対応を考慮
- **文化適応**: 台湾ユーザーの文化的背景に配慮

### 1.2 実装方針
- **フロントエンド**: React i18next
- **コンテンツ管理**: JSONベースの翻訳ファイル
- **フォント対応**: 繁体字中国語最適化
- **SEO対応**: 繁体字検索最適化

## 2. 技術実装設計

### 2.1 i18next設定
```typescript
// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import zhTW from './locales/zh-TW.json';
import ja from './locales/ja.json';

const resources = {
  'zh-TW': {
    translation: zhTW
  },
  'ja': {
    translation: ja
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-TW',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
```

### 2.2 翻訳ファイル構造
```
/src/locales/
├── zh-TW.json              # 繁体字中国語（メイン）
├── ja.json                 # 日本語（専門用語対照用）
└── index.ts                # 型定義・エクスポート
```

## 3. 翻訳コンテンツ設計

### 3.1 メイン翻訳ファイル（zh-TW.json）
```json
{
  "common": {
    "loading": "載入中...",
    "error": "發生錯誤",
    "retry": "重試",
    "close": "關閉",
    "back": "返回",
    "next": "下一步",
    "previous": "上一步",
    "search": "搜尋",
    "filter": "篩選",
    "clear": "清除",
    "more": "更多"
  },
  
  "navigation": {
    "home": "首頁",
    "terms": "不動產用語解說",
    "plans": "圖面樣本",
    "flow": "物件買賣流程",
    "qa": "常見問題",
    "mobile_menu": "選單"
  },
  
  "site": {
    "title": "REI哥日本不動產X買房知識百科書",
    "description": "台灣人在日本買房的完整指南",
    "copyright": "© 2024 twsho. 版權所有",
    "tagline": "專業、可信賴的日本不動產購買指南"
  },
  
  "home": {
    "hero": {
      "title": "歡迎來到REI哥的日本不動產世界",
      "subtitle": "為台灣朋友提供最專業的日本買房知識",
      "cta": "開始探索"
    },
    "introduction": {
      "title": "關於REI哥",
      "content": "大家好我是在日本的不動產仲介「REI」,上次介紹完日本租房知識後,終於在最近也將買房知識一併介紹給大家,由於日本買房會有一戶建＆公寓＆塔樓等等相關的專用語要介紹,有便於想在日本長期投資置產＆自住的朋友,將在此介紹相關知識"
    },
    "features": {
      "title": "主要內容",
      "property_types": {
        "title": "物件種類介紹",
        "description": "詳細介紹各種日本不動產類型"
      },
      "rights_types": {
        "title": "權利種類說明",
        "description": "了解不同的產權類型與差異"
      },
      "flow_guide": {
        "title": "買賣流程指南",
        "description": "完整的購買流程與注意事項"
      },
      "qa_section": {
        "title": "常見問題",
        "description": "解答購房過程中的疑問"
      }
    },
    "social": {
      "title": "追蹤REI哥",
      "instagram": "Instagram",
      "youtube": "YouTube",
      "description": "獲取最新的日本不動產資訊"
    }
  },
  
  "terms": {
    "title": "不動產用語解說",
    "subtitle": "日本不動產專業術語的中文解說",
    "categories": {
      "property_types": "物件種類",
      "rights_types": "權利種類"
    },
    "property_types": {
      "apartment": {
        "name": "公寓（木造、輕鋼構公寓）",
        "japanese": "アパート",
        "description": "通常指木造或輕鋼骨結構建造的低層集合住宅"
      },
      "mansion": {
        "name": "高級公寓、集合住宅",
        "japanese": "マンション",
        "description": "鋼筋混凝土等耐震結構建造的中高層集合住宅"
      },
      "tower_mansion": {
        "name": "超高級高層公寓",
        "japanese": "タワーマンション",
        "description": "附有豪華公共設施的超高層住宅"
      },
      "terrace_house": {
        "name": "連棟式戶建",
        "japanese": "テラスハウス",
        "description": "連棟式住宅，類似台灣的排屋"
      },
      "detached_house": {
        "name": "透天厝、獨棟住宅",
        "japanese": "一戸建",
        "description": "有獨立土地產權的獨棟房屋"
      }
    },
    "rights_types": {
      "ownership": {
        "name": "所有權",
        "japanese": "所有権",
        "description": "最完整的權利，可自由使用、收益、轉讓"
      },
      "leasehold": {
        "name": "借地權",
        "japanese": "借地権",
        "description": "土地是租來的，建物則是你的"
      },
      "rental_rights": {
        "name": "借家權",
        "japanese": "借家権",
        "description": "僅擁有使用建物的權利"
      },
      "surface_rights": {
        "name": "地上權",
        "japanese": "地上権",
        "description": "在他人土地上建造建物的法定權利"
      }
    }
  },
  
  "plans": {
    "title": "圖面樣本",
    "subtitle": "日本不動產圖面的看法說明",
    "explanation": {
      "title": "如何看懂日本不動產圖面",
      "content": "日本不動產圖面包含許多重要資訊..."
    },
    "examples": {
      "title": "圖面範例",
      "apartment": "公寓圖面",
      "mansion": "大廈圖面", 
      "house": "獨棟住宅圖面"
    },
    "glossary": {
      "title": "圖面用語",
      "room_codes": "房間代號說明",
      "measurements": "尺寸標示"
    }
  },
  
  "flow": {
    "title": "物件買賣流程",
    "subtitle": "完整的日本不動產購買流程指南",
    "steps": {
      "preparation": {
        "title": "購買準備",
        "description": "確定預算、了解貸款條件"
      },
      "search": {
        "title": "物件搜尋",
        "description": "尋找合適的物件"
      },
      "contract": {
        "title": "契約簽署",
        "description": "簽署買賣契約"
      },
      "financing": {
        "title": "資金準備",
        "description": "申請貸款、準備資金"
      },
      "completion": {
        "title": "過戶完成",
        "description": "完成所有權移轉"
      }
    },
    "duration": "預計時間",
    "documents": "所需文件",
    "notes": "重要注意事項",
    "tips": "實用建議"
  },
  
  "qa": {
    "title": "常見問題",
    "subtitle": "日本不動產購買相關問題解答",
    "search_placeholder": "搜尋問題...",
    "categories": {
      "all": "全部",
      "general": "一般問題",
      "legal": "法律相關",
      "financial": "資金相關", 
      "process": "購買流程",
      "maintenance": "維護管理"
    },
    "no_results": "沒有找到相關問題",
    "clear_search": "清除搜尋"
  },
  
  "errors": {
    "page_not_found": "頁面不存在",
    "network_error": "網路連線錯誤",
    "loading_failed": "載入失敗",
    "go_home": "返回首頁"
  },
  
  "meta": {
    "home": {
      "title": "REI哥日本不動產X買房知識百科書 - 台灣人買房指南",
      "description": "專為台灣人設計的日本不動產購買完整指南，包含物件類型、權利種類、買賣流程等專業知識"
    },
    "terms": {
      "title": "不動產用語解說 - 日本買房專業術語",
      "description": "詳細解說日本不動產專業術語，包含各種物件類型與權利種類的中文說明"
    },
    "plans": {
      "title": "圖面樣本 - 日本不動產圖面看法",
      "description": "教你如何看懂日本不動產圖面，包含各種符號與標示的詳細說明"
    },
    "flow": {
      "title": "買賣流程 - 日本不動產購買流程",
      "description": "完整的日本不動產購買流程指南，從準備到完成的每個步驟詳解"
    },
    "qa": {
      "title": "常見問題 - 日本買房Q&A",
      "description": "日本不動產購買過程中的常見問題與專業解答"
    }
  }
}
```

### 3.2 日本語対照ファイル（ja.json）
```json
{
  "terms": {
    "property_types": {
      "apartment": "アパート",
      "mansion": "マンション", 
      "tower_mansion": "タワーマンション",
      "terrace_house": "テラスハウス",
      "detached_house": "一戸建"
    },
    "rights_types": {
      "ownership": "所有権",
      "leasehold": "借地権",
      "rental_rights": "借家権",
      "surface_rights": "地上権"
    }
  }
}
```

## 4. コンポーネント国際化

### 4.1 翻訳Hook
```typescript
// hooks/useTranslation.ts
import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (namespace?: string) => {
  const { t, i18n } = useI18nTranslation(namespace);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  const currentLanguage = i18n.language;
  
  return {
    t,
    changeLanguage,
    currentLanguage,
    isZhTW: currentLanguage === 'zh-TW',
    isJa: currentLanguage === 'ja'
  };
};
```

### 4.2 翻訳コンポーネント例
```typescript
// components/TermCard.tsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TermCardProps {
  termKey: string;
  category: 'property_types' | 'rights_types';
}

const TermCard: React.FC<TermCardProps> = ({ termKey, category }) => {
  const { t } = useTranslation();
  
  return (
    <div className="term-card">
      <h3 className="term-title">
        {t(`terms.${category}.${termKey}.name`)}
      </h3>
      <p className="term-japanese">
        {t(`terms.${category}.${termKey}.japanese`)}
      </p>
      <p className="term-description">
        {t(`terms.${category}.${termKey}.description`)}
      </p>
    </div>
  );
};
```

## 5. フォント最適化

### 5.1 フォント設定
```css
/* 繁体字中国語最適化フォント */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

:root {
  --font-family-tc: 'Noto Sans TC', 'Microsoft JhengHei', 
                    'PingFang TC', 'Apple LiGothic Medium', 
                    'Heiti TC', 'LiHei Pro', 'Microsoft YaHei', 
                    sans-serif;
}

body {
  font-family: var(--font-family-tc);
  line-height: 1.6; /* 繁体字読みやすさ重視 */
}

/* 日本語併記時のスタイル */
.japanese-term {
  font-size: 0.9em;
  color: var(--gray-600);
  font-style: italic;
  margin-left: 8px;
}
```

### 5.2 フォントローディング最適化
```typescript
// utils/fontLoader.ts
export const preloadFonts = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap';
  link.as = 'style';
  document.head.appendChild(link);
};
```

## 6. SEO国際化

### 6.1 メタタグ国際化
```typescript
// components/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';

interface SEOProps {
  pageKey: string;
}

const SEO: React.FC<SEOProps> = ({ pageKey }) => {
  const { t } = useTranslation();
  
  return (
    <Helmet>
      <title>{t(`meta.${pageKey}.title`)}</title>
      <meta name="description" content={t(`meta.${pageKey}.description`)} />
      <meta property="og:title" content={t(`meta.${pageKey}.title`)} />
      <meta property="og:description" content={t(`meta.${pageKey}.description`)} />
      <meta property="og:locale" content="zh_TW" />
      <html lang="zh-TW" />
    </Helmet>
  );
};
```

### 6.2 構造化データ国際化
```typescript
// utils/structuredData.ts
export const generateStructuredData = (pageType: string, t: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t('site.title'),
    "description": t('site.description'),
    "inLanguage": "zh-TW",
    "author": {
      "@type": "Person",
      "name": "REI"
    }
  };
};
```

## 7. 文化的適応

### 7.1 台湾ユーザー向け適応
```typescript
// 台湾の文化的習慣に配慮した設定
export const taiwanLocalization = {
  dateFormat: 'YYYY年MM月DD日',      // 台湾式日付
  currency: 'JPY',                  // 日本円表示
  numberFormat: '1,000,000',        // カンマ区切り
  areaUnit: '坪',                   // 面積単位（坪）
  
  // 台湾で馴染みのある表現
  terminology: {
    'apartment': '公寓',
    'mansion': '大廈',
    'house': '透天厝'
  }
};
```

### 7.2 コンテンツ適応
```typescript
// 台湾ユーザー向けコンテンツカスタマイズ
export const getLocalizedContent = (content: any, locale: string) => {
  if (locale === 'zh-TW') {
    return {
      ...content,
      // 台湾ユーザー向けの追加説明
      taiwanNote: '※台灣朋友特別需要注意的事項',
      comparisonWithTaiwan: '與台灣的差異',
      practicalTips: '實用建議'
    };
  }
  return content;
};
```

## 8. 実装ガイドライン

### 8.1 翻訳キー命名規則
```
{namespace}.{section}.{item}.{property}

例：
- common.loading
- navigation.home  
- terms.property_types.apartment.name
- meta.home.title
```

### 8.2 翻訳管理ワークフロー
1. **翻訳キー追加**: 開発者がキーを定義
2. **翻訳作業**: 台湾の言語専門家による翻訳
3. **レビュー**: 不動産専門用語の確認
4. **テスト**: 実際の表示確認

### 8.3 品質管理
```typescript
// 翻訳キー漏れチェック
export const validateTranslations = (translations: any) => {
  const requiredKeys = [
    'common.loading',
    'navigation.home',
    'site.title'
    // ... 必須キー一覧
  ];
  
  const missingKeys = requiredKeys.filter(key => 
    !getNestedValue(translations, key)
  );
  
  if (missingKeys.length > 0) {
    console.warn('Missing translation keys:', missingKeys);
  }
};
```

## 9. パフォーマンス最適化

### 9.1 翻訳ファイル分割
```
/locales/
├── zh-TW/
│   ├── common.json          # 共通要素
│   ├── navigation.json      # ナビゲーション
│   ├── terms.json          # 用語集
│   ├── flow.json           # 流程
│   └── qa.json             # Q&A
└── ja/
    └── terms.json          # 日本語用語対照
```

### 9.2 遅延読み込み
```typescript
// 動的翻訳ファイル読み込み
export const loadTranslation = async (namespace: string, locale: string) => {
  try {
    const translation = await import(`../locales/${locale}/${namespace}.json`);
    return translation.default;
  } catch (error) {
    console.warn(`Failed to load translation: ${namespace}/${locale}`);
    return {};
  }
};
```

## 10. 将来的拡張

### 10.1 多言語対応準備
- 簡体字中国語（中国大陸）
- 英語（国際ユーザー）
- ベトナム語（東南アジア市場）

### 10.2 地域別対応
```typescript
// 地域別設定
export const regionalSettings = {
  'zh-TW-TW': {
    currency: 'TWD',
    dateFormat: 'YYYY/MM/DD',
    areaUnit: '坪'
  },
  'zh-TW-HK': {
    currency: 'HKD', 
    dateFormat: 'DD/MM/YYYY',
    areaUnit: '平方呎'
  }
};
```

### 10.3 CMS統合準備
```typescript
// 将来的なCMS統合のためのインターフェース
interface CMSTranslation {
  key: string;
  locale: string;
  value: string;
  lastModified: Date;
  version: number;
}