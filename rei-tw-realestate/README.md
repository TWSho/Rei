# REI哥日本不動產X買房知識百科書

台灣人のための日本不動産購入ガイドサイトです。物件種類、権利種類、購入フローなど、重要な情報をわかりやすく解説します。

## 主な機能

- 🏠 物件種類の詳細解説
- 📋 権利種類の説明
- 📐 図面の見方ガイド
- 🔄 購入フローの案内
- ❓ よくある質問と回答
- 🌐 繁体字中国語対応

## 技術スタック

- React 18+
- TypeScript 5.0+
- Vite 5+
- React Router DOM v6
- React i18next
- Zustand
- CSS Modules

## プロジェクト構造

```
src/
├── assets/          # 静的ファイル
├── components/      # UIコンポーネント
├── data/           # JSONデータ
├── hooks/          # カスタムフック
├── locales/        # 翻訳ファイル
├── pages/          # ページコンポーネント
├── styles/         # グローバルスタイル
├── types/          # 型定義
└── utils/          # ユーティリティ関数
```

## セットアップ

```bash
# プロジェクトのクローン
git clone [repository-url]

# 依存パッケージのインストール
cd rei-tw-realestate
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## ページ構成

- **Home** (`/`): サイトのメインページ
- **Terms** (`/terms`): 物件・権利種類の解説
- **Plans** (`/plans`): 図面の見方ガイド
- **Flow** (`/flow`): 購入フローの案内
- **QA** (`/qa`): よくある質問

## 主な設計ドキュメント

- [アーキテクチャ設計書](architecture_design.md)
- [UI/UX設計書](ui_ux_design.md)
- [データ構造設計書](data_structure_design.md)
- [国際化戦略](i18n_design.md)
- [技術スタック設計書](tech_stack_design.md)

## ライセンス

MIT License

## 作者

REI哥
