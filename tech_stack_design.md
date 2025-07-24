# REI哥日本不動產X買房知識百科書 - 技術スタック設計書

## 1. コア技術スタック

### 1.1 フロントエンド基盤
- **フレームワーク**: React 18+
- **言語**: TypeScript 5.0+
- **ビルドツール**: Vite 5+
- **パッケージ管理**: npm

### 1.2 主要ライブラリ
- **ルーティング**: React Router DOM v6
- **状態管理**: Zustand + React Context API
- **スタイリング**: CSS Modules + PostCSS
- **国際化**: React i18next
- **フォーム**: React Hook Form
- **バリデーション**: Zod

## 2. プロジェクト構成

### 2.1 ディレクトリ構造
```
rei-tw-realestate/
├── src/
│   ├── components/      # UIコンポーネント
│   ├── pages/          # ページコンポーネント
│   ├── hooks/          # カスタムフック
│   ├── store/          # 状態管理
│   ├── data/           # 静的データ
│   ├── locales/        # 翻訳ファイル
│   ├── styles/         # スタイル
│   ├── types/          # 型定義
│   ├── utils/          # ユーティリティ
│   ├── App.tsx         # アプリルート
│   └── main.tsx        # エントリーポイント
└── public/             # 静的ファイル
```

## 3. 主要パッケージ

### 3.1 dependencies
- react, react-dom: フレームワーク
- react-router-dom: ルーティング
- zustand: 状態管理
- i18next, react-i18next: 国際化
- react-hook-form: フォーム
- zod: バリデーション

### 3.2 devDependencies
- typescript: 型システム
- vite: ビルドツール
- eslint, prettier: コード品質
- @typescript-eslint/*: TypeScript ESLint

## 4. 開発環境設定

### 4.1 開発フロー
1. `npm create vite@latest rei-tw-realestate --template react-ts`
2. 必要パッケージのインストール
3. ESLint・Prettier設定
4. ディレクトリ構造の作成
5. 基本コンポーネントの作成

### 4.2 スクリプト
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx}\""
  }
}
```

## 5. パフォーマンス最適化

### 5.1 バンドル最適化
- コード分割 (React.lazy)
- ツリーシェイキング
- 動的インポート

### 5.2 ビルド最適化
- CSS最小化
- 画像最適化
- gzip圧縮
