// 物件種類の型定義
export interface PropertyType {
  id: string;
  name: {
    ja: string;
    zhTW: string;
  };
  category: 'apartment' | 'mansion' | 'house' | 'terrace' | 'tower';
  description: string;
  features: string[];
  considerations: string[];
  structure: string;
  floors: {
    typical: string;
    range?: string;
  };
  facilities: string[];
  relatedTerms: string[];
}

// 権利種類の型定義
export interface RightType {
  id: string;
  name: {
    ja: string;
    zhTW: string;
  };
  category: 'ownership' | 'leasehold' | 'rental' | 'surface';
  description: string;
  advantages: string[];
  disadvantages: string[];
  duration: {
    type: 'permanent' | 'fixed' | 'renewable';
    period?: string;
  };
  transferability: {
    allowed: boolean;
    conditions?: string[];
  };
  annualFees: {
    required: boolean;
    description?: string;
  };
  relatedTerms: string[];
}

// 売買流程の型定義
export interface FlowStep {
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

// Q&Aの型定義
export interface QAItem {
  id: string;
  category: 'general' | 'legal' | 'financial' | 'process' | 'maintenance';
  question: string;
  answer: string;
  tags: string[];
  relatedTerms: string[];
  priority: 'high' | 'medium' | 'low';
}

// SNSリンクの型定義
export interface SocialLink {
  id: string;
  platform: string;
  name: string;
  url: string;
  icon: string;
  description: string;
  isActive: boolean;
}

// ナビゲーション項目の型定義
export interface NavItem {
  path: string;
  label: string;
  icon?: string;
}

// 言語設定の型定義
export interface LanguageConfig {
  code: string;
  name: string;
  flag?: string;
}