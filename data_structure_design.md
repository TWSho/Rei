# REI哥日本不動產X買房知識百科書 - データ構造設計書

## 1. データ設計概要

### 1.1 基本方針
- **静的データ**: JSON形式で管理
- **多言語対応**: 日本語キーと繁体字中国語の対応
- **拡張性**: 将来的なコンテンツ追加に対応
- **型安全性**: TypeScript型定義を含む

### 1.2 データカテゴリ
1. 物件種類（Property Types）
2. 権利種類（Rights Types）
3. 売買流れ（Flow Steps）
4. Q&Aデータ（FAQ Data）
5. SNSリンク（Social Links）

## 2. 物件種類データ構造

### 2.1 TypeScript型定義
```typescript
interface PropertyType {
  id: string;
  name: {
    ja: string;        // 日本語名
    zhTW: string;     // 繁体字中国語名
  };
  category: 'apartment' | 'mansion' | 'house' | 'terrace' | 'tower';
  description: string;  // 繁体字中国語説明
  features: string[];   // 特徴リスト
  considerations: string[]; // 注意点
  structure: string;    // 構造
  floors: {
    typical: string;   // 一般的階数
    range?: string;    // 階数範囲
  };
  facilities: string[]; // 設備・サービス
  priceRange?: {
    min: number;
    max: number;
    unit: string;
  };
  images?: string[];    // 画像URL
  relatedTerms: string[]; // 関連用語ID
}
```

### 2.2 物件種類データ（propertyTypes.json）
```json
{
  "apartment": {
    "id": "apartment",
    "name": {
      "ja": "アパート",
      "zhTW": "公寓（木造、輕鋼構公寓）"
    },
    "category": "apartment",
    "description": "通常指木造或輕鋼骨結構建造的低層集合住宅（2～3層樓居多）。隔音與耐震性可能不如マンション，通常不設電梯，租金相對較低。",
    "features": [
      "木造或輕鋼骨結構",
      "2～3層樓建築",
      "通常無電梯",
      "租金相對較低",
      "隔音性較差"
    ],
    "considerations": [
      "隔音與耐震性需注意",
      "依據相關法律低層可不用電梯",
      "維護成本相對較低"
    ],
    "structure": "木造、輕鋼骨結構",
    "floors": {
      "typical": "2-3層",
      "range": "1-4層"
    },
    "facilities": ["停車場", "信箱", "垃圾收集場"],
    "relatedTerms": ["mansion", "structure_types"]
  },
  
  "tower_mansion": {
    "id": "tower_mansion", 
    "name": {
      "ja": "タワーマンション",
      "zhTW": "超高級高層公寓"
    },
    "category": "tower",
    "description": "通常是附有公共設施：泳池、健身房、訪客用房（需自費）、頂樓景觀派對空間、管家服務、讀書空間、獨立空間、高爾夫球練習區…等等。高樓層會有專屬高樓層電梯，因此也有身份區分現象，故物業費固定資產評價額會比普通物件還貴。",
    "features": [
      "超高層建築（通常20層以上）",
      "豪華公共設施",
      "管家服務",
      "專屬高樓層電梯",
      "頂級景觀"
    ],
    "considerations": [
      "物業費較高",
      "固定資產評價額較高",
      "有身份區分現象",
      "公共設施需額外收費"
    ],
    "structure": "鋼筋混凝土、鋼骨鋼筋混凝土",
    "floors": {
      "typical": "20層以上",
      "range": "20-60層"
    },
    "facilities": [
      "泳池", "健身房", "訪客用房", 
      "頂樓景觀派對空間", "管家服務", 
      "讀書空間", "高爾夫球練習區"
    ],
    "relatedTerms": ["mansion", "management_fee"]
  },
  
  "terrace_house": {
    "id": "terrace_house",
    "name": {
      "ja": "テラスハウス",
      "zhTW": "連棟式戶建"
    },
    "category": "terrace",
    "description": "在日本房地產中，是一種常見的建築型態，指的是：連棟式住宅（也可譯為「排屋」、「聯排別墅」）。每戶通常有1～2層樓，帶有小院子、陽台或露台（Terrace）。",
    "features": [
      "連棟式住宅",
      "1-2層樓",
      "帶有小院子或露台",
      "獨立出入口",
      "類似排屋概念"
    ],
    "considerations": [
      "拆除時需要經他人同意",
      "與鄰居共享牆壁",
      "維護需與鄰居協調"
    ],
    "structure": "木造或輕量鐵骨造",
    "floors": {
      "typical": "1-2層",
      "range": "1-3層"
    },
    "facilities": ["小院子", "陽台/露台", "獨立出入口"],
    "relatedTerms": ["detached_house", "structure_types"]
  },
  
  "mansion": {
    "id": "mansion",
    "name": {
      "ja": "マンション", 
      "zhTW": "高級公寓、集合住宅"
    },
    "category": "mansion",
    "description": "通常指鋼筋混凝土（RC）、鋼骨鋼筋混凝土（SRC）或鋼骨（S）等耐震結構建造的中高層集合住宅。與台灣的「公寓」概念不同，日本的マンション多半附有電梯、門禁系統、管理員等公共設施與服務，品質相對較高。",
    "features": [
      "鋼筋混凝土結構",
      "中高層建築",
      "電梯設備",
      "門禁系統",
      "管理員服務"
    ],
    "considerations": [
      "品質相對較高",
      "管理費用",
      "管理員主要負責巡邏、打掃"
    ],
    "structure": "鋼筋混凝土（RC）、鋼骨鋼筋混凝土（SRC）、鋼骨（S）",
    "floors": {
      "typical": "5-15層",
      "range": "3-30層"
    },
    "facilities": ["電梯", "門禁系統", "管理員", "停車場", "垃圾處理場"],
    "relatedTerms": ["apartment", "management_fee"]
  },
  
  "detached_house": {
    "id": "detached_house",
    "name": {
      "ja": "一戸建",
      "zhTW": "透天厝、獨棟住宅"
    },
    "category": "house",
    "description": "類似台灣的透天、有獨立土地產權的房屋（多為木造）、除非是購地自建可以選建材。",
    "features": [
      "獨立土地產權",
      "獨棟住宅",
      "通常為木造",
      "類似台灣透天"
    ],
    "considerations": [
      "土地與建物都屬於自己",
      "購地自建可選擇建材",
      "維護責任完全自負"
    ],
    "structure": "木造（主要）、也有RC、S造",
    "floors": {
      "typical": "2-3層",
      "range": "1-4層"
    },
    "facilities": ["庭院", "停車場", "獨立玄關"],
    "relatedTerms": ["land_rights", "structure_types"]
  }
}
```

## 3. 権利種類データ構造

### 3.1 TypeScript型定義
```typescript
interface RightType {
  id: string;
  name: {
    ja: string;
    zhTW: string;
  };
  category: 'ownership' | 'leasehold' | 'rental' | 'surface';
  description: string;
  advantages: string[];
  disadvantages: string[];
  duration?: {
    type: 'permanent' | 'fixed' | 'renewable';
    period?: string;
  };
  transferability: {
    allowed: boolean;
    conditions?: string[];
  };
  annualFees?: {
    required: boolean;
    description?: string;
  };
  relatedTerms: string[];
}
```

### 3.2 権利種類データ（rightsTypes.json）
```json
{
  "ownership": {
    "id": "ownership",
    "name": {
      "ja": "所有権",
      "zhTW": "所有權"
    },
    "category": "ownership",
    "description": "最完整的權利。擁有者可自由使用、收益、轉讓、出租或處分物件。在買賣物件時，若寫「所有権」，表示你買下後將成為完全的物主。",
    "advantages": [
      "完全的所有權",
      "自由使用、收益、轉讓",
      "可出租獲得收益",
      "可自由處分物件",
      "最高的法律保護"
    ],
    "disadvantages": [
      "購買價格最高",
      "需承擔所有維護責任",
      "需繳納固定資產稅"
    ],
    "duration": {
      "type": "permanent"
    },
    "transferability": {
      "allowed": true
    },
    "annualFees": {
      "required": false
    },
    "relatedTerms": ["property_tax", "maintenance"]
  },
  
  "leasehold": {
    "id": "leasehold",
    "name": {
      "ja": "借地権",
      "zhTW": "借地權"
    },
    "category": "leasehold",
    "description": "土地是租來的，建物則是你的。常見於「定期借地權」或「普通借地權」兩種。每年須支付地代（土地租金）給地主。出售時僅能轉讓建物＋借地權。",
    "advantages": [
      "購買成本較低",
      "擁有建物所有權",
      "可轉讓借地權"
    ],
    "disadvantages": [
      "每年需支付地代",
      "土地不屬於自己",
      "轉讓需要地主同意",
      "期限限制"
    ],
    "duration": {
      "type": "fixed",
      "period": "定期借地權：通常50年；普通借地權：可續約"
    },
    "transferability": {
      "allowed": true,
      "conditions": ["需要地主同意", "僅能轉讓建物與借地權"]
    },
    "annualFees": {
      "required": true,
      "description": "地代（土地租金）"
    },
    "relatedTerms": ["land_rent", "building_ownership"]
  },
  
  "rental_rights": {
    "id": "rental_rights",
    "name": {
      "ja": "借家権",
      "zhTW": "借家權"
    },
    "category": "rental",
    "description": "僅擁有「使用建物」的權利，不具擁有權。如租屋人，只有居住使用權。",
    "advantages": [
      "成本最低",
      "無維護責任",
      "靈活性高"
    ],
    "disadvantages": [
      "無所有權",
      "無法轉讓",
      "無投資價值",
      "受房東限制"
    ],
    "duration": {
      "type": "renewable",
      "period": "依契約而定"
    },
    "transferability": {
      "allowed": false
    },
    "annualFees": {
      "required": false
    },
    "relatedTerms": ["rental_contract", "tenant_rights"]
  },
  
  "surface_rights": {
    "id": "surface_rights",
    "name": {
      "ja": "地上権",
      "zhTW": "地上權"
    },
    "category": "surface", 
    "description": "可在他人土地上建造建物的法定權利，登記可對抗第三方。類似借地權，但法律保護力較強。可自由讓渡、轉租，買賣價值高於借地權。",
    "advantages": [
      "法律保護力強",
      "可自由讓渡、轉租",
      "可對抗第三方",
      "買賣價值較高"
    ],
    "disadvantages": [
      "土地不屬於自己",
      "可能需支付地代",
      "受土地所有者一定限制"
    ],
    "duration": {
      "type": "fixed",
      "period": "依設定而定，通常較長期"
    },
    "transferability": {
      "allowed": true,
      "conditions": ["可自由讓渡", "可轉租"]
    },
    "annualFees": {
      "required": false,
      "description": "依設定而定"
    },
    "relatedTerms": ["leasehold", "land_rights"]
  }
}
```

## 4. 売買流程データ構造

### 4.1 TypeScript型定義
```typescript
interface FlowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
  requiredDocuments: string[];
  importantNotes: string[];
  tips: string[];
  relatedCosts?: {
    description: string;
    amount?: string;
  }[];
}
```

### 4.2 売買流程データ（flowSteps.json）
```json
{
  "steps": [
    {
      "id": "preparation",
      "step": 1,
      "title": "購買準備",
      "description": "確定預算、了解貸款條件、準備必要文件",
      "duration": "1-2週",
      "requiredDocuments": [
        "收入證明",
        "銀行存款證明", 
        "身分證明文件",
        "居住證明"
      ],
      "importantNotes": [
        "確認自己的貸款能力",
        "了解日本不動產稅制",
        "考慮維護費用"
      ],
      "tips": [
        "建議預算控制在年收入的5-7倍以內",
        "提前諮詢銀行貸款條件"
      ]
    },
    {
      "id": "property_search",
      "step": 2, 
      "title": "物件搜尋",
      "description": "透過不動產仲介或網站尋找合適物件",
      "duration": "2-8週",
      "requiredDocuments": ["購買希望書"],
      "importantNotes": [
        "實地看房很重要",
        "確認周邊環境",
        "了解管理費、維護情況"
      ],
      "tips": [
        "多看幾間比較",
        "注意交通便利性",
        "確認建築年數與狀況"
      ]
    },
    {
      "id": "contract",
      "step": 3,
      "title": "契約簽署", 
      "description": "簽署買賣契約、支付頭期款",
      "duration": "1週",
      "requiredDocuments": [
        "買賣契約書",
        "重要事項說明書",
        "手付金"
      ],
      "importantNotes": [
        "仔細閱讀契約內容",
        "確認所有條件",
        "了解解約條件"
      ],
      "tips": [
        "可請專業人士協助確認契約",
        "手付金通常為房價的5-10%"
      ],
      "relatedCosts": [
        {
          "description": "手付金",
          "amount": "房價的5-10%"
        }
      ]
    },
    {
      "id": "financing",
      "step": 4,
      "title": "資金準備",
      "description": "申請貸款、準備剩餘資金",
      "duration": "2-4週", 
      "requiredDocuments": [
        "貸款申請書",
        "收入證明",
        "物件資料"
      ],
      "importantNotes": [
        "確認貸款審核結果",
        "準備頭期款以外的費用",
        "了解貸款條件"
      ],
      "tips": [
        "可比較多家銀行條件",
        "注意利率類型的選擇"
      ]
    },
    {
      "id": "completion",
      "step": 5,
      "title": "過戶完成",
      "description": "完成所有權移轉、交屋",
      "duration": "1-2週",
      "requiredDocuments": [
        "所有權移轉登記",
        "各種稅金繳納",
        "鑰匙交接"
      ],
      "importantNotes": [
        "確認所有權移轉完成",
        "繳納相關稅金",
        "確認物件狀況"
      ],
      "tips": [
        "保留所有相關文件",
        "了解後續維護責任"
      ],
      "relatedCosts": [
        {
          "description": "登記費用",
          "amount": "約房價的0.1-0.2%"
        },
        {
          "description": "不動產取得稅",
          "amount": "依物件價值計算"
        }
      ]
    }
  ]
}
```

## 5. Q&Aデータ構造

### 5.1 TypeScript型定義
```typescript
interface QAItem {
  id: string;
  category: 'general' | 'legal' | 'financial' | 'process' | 'maintenance';
  question: string;
  answer: string;
  tags: string[];
  relatedTerms: string[];
  priority: 'high' | 'medium' | 'low';
}
```

### 5.2 Q&Aデータ（qaData.json）
```json
{
  "categories": {
    "general": "一般問題",
    "legal": "法律相關", 
    "financial": "資金相關",
    "process": "購買流程",
    "maintenance": "維護管理"
  },
  "items": [
    {
      "id": "qa_001",
      "category": "general",
      "question": "外國人可以在日本購買不動產嗎？",
      "answer": "是的，日本法律允許外國人購買不動產。不過需要注意的是，購買後的維護、稅務等責任需要自己承擔。建議在購買前充分了解相關法規。",
      "tags": ["外國人", "購買資格", "法律"],
      "relatedTerms": ["ownership"],
      "priority": "high"
    },
    {
      "id": "qa_002", 
      "category": "financial",
      "question": "外國人可以申請日本的房屋貸款嗎？",
      "answer": "可以，但條件較為嚴格。通常需要有穩定的日本收入來源、良好的信用記錄，以及足夠的頭期款。建議先諮詢銀行了解具體條件。",
      "tags": ["貸款", "外國人", "銀行"],
      "relatedTerms": ["financing"],
      "priority": "high"
    }
  ]
}
```

## 6. SNSリンクデータ構造

### 6.1 TypeScript型定義
```typescript
interface SocialLink {
  id: string;
  platform: string;
  name: string;
  url: string;
  icon: string;
  description: string;
  isActive: boolean;
}
```

### 6.2 SNSリンクデータ（socialLinks.json）
```json
{
  "links": [
    {
      "id": "instagram",
      "platform": "Instagram", 
      "name": "REI哥的Instagram",
      "url": "#",
      "icon": "instagram",
      "description": "最新不動產資訊與日本生活分享",
      "isActive": true
    },
    {
      "id": "youtube",
      "platform": "YouTube",
      "name": "REI哥的YouTube頻道", 
      "url": "#",
      "icon": "youtube",
      "description": "詳細的不動產知識影片",
      "isActive": false
    }
  ]
}
```

## 7. データ管理戦略

### 7.1 ファイル構成
```
/src/data/
  ├── propertyTypes.json      # 物件種類
  ├── rightsTypes.json        # 権利種類  
  ├── flowSteps.json          # 売買流程
  ├── qaData.json             # Q&A
  ├── socialLinks.json        # SNSリンク
  └── types/
      ├── PropertyType.ts     # 型定義
      ├── RightType.ts        # 型定義
      ├── FlowStep.ts         # 型定義
      └── index.ts            # 型エクスポート
```

### 7.2 データロード戦略
```typescript
// データロード用フック
export const usePropertyTypes = () => {
  const [data, setData] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    import('../data/propertyTypes.json')
      .then(module => {
        setData(Object.values(module.default));
        setLoading(false);
      });
  }, []);
  
  return { data, loading };
};
```

### 7.3 検索・フィルタリング機能
```typescript
// 検索機能
export const searchContent = (
  query: string, 
  data: any[], 
  fields: string[]
) => {
  return data.filter(item => 
    fields.some(field => 
      item[field]?.toLowerCase().includes(query.toLowerCase())
    )
  );
};
```

## 8. データ拡張性

### 8.1 将来的な拡張項目
- 地域別情報（東京、大阪等）
- 価格動向データ
- 法改正情報
- 実例・ケーススタディ

### 8.2 多言語対応
- 簡体字中国語追加
- 英語対応
- ベトナム語等の追加

### 8.3 動的コンテンツ対応
- CMS統合準備
- API連携対応
- リアルタイムデータ更新