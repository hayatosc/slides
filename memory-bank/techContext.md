# Technical Context: Slidev Gallery

## Development Environment

### Core Technologies
1. **フレームワーク & ライブラリ**
   - Astro: 静的サイトジェネレーター
   - Slidev: スライド作成・ビルド
   - Puppeteer/Playwright: PDF生成

2. **ビルド & デプロイ**
   - GitHub Actions: CI/CD
   - GitHub Pages: ホスティング

3. **パッケージ管理**
   - pnpm: パッケージマネージャー
   - pnpm workspace: モノレポ管理

### Project Structure
```
/
├─ apps/                    # プロジェクトのルートディレクトリ
│  ├─ [slide-project]/     # 各スライドプロジェクト
│  │  ├─ slides.md         # スライドコンテンツ（フロントマター含む）
│  │  ├─ dist/            # ビルド後の静的HTML
│  │  └─ pdf/             # 生成されたPDF
│  └─ astro-site/         # Astroプロジェクト
│     ├─ src/
│     │  └─ pages/
│     │     └─ index.astro # スライド一覧ページ
│     └─ public/          # 静的アセット
└─ themes/                 # Slidevテーマ
```

## Technical Requirements

### 1. フロントマター仕様
```yaml
---
# Required
title: スライドタイトル
description: スライドの説明

# Optional
author: 作成者名
date: 作成日
tags: [タグ1, タグ2]
---
```

### 2. ビルド要件
1. **Slidevビルド**
   - 出力: 静的HTML
   - 設定: slidev build
   - 保存先: dist/ディレクトリ

2. **PDF生成**
   - 入力: ビルド済みHTML
   - 出力: PDF形式
   - 保存先: pdf/ディレクトリ

3. **Astroビルド**
   - メタ情報の収集
   - 一覧ページの生成
   - アセットの最適化

### 3. デプロイ設定
1. **GitHub Pages**
   - ブランチ: gh-pages
   - 公開ディレクトリ: /
   - カスタムドメイン: 必要に応じて設定

2. **GitHub Actions**
   ```yaml
   # ワークフロー概要
   - スライドのビルド
   - PDFの生成
   - Astroサイトのビルド
   - gh-pagesブランチへのデプロイ
   ```

## Dependencies
- Node.js: 開発環境
- gray-matter: フロントマターのパース
- puppeteer/playwright: PDF生成
- その他Astro/Slidev関連パッケージ

## Development Workflow
1. スライド作成 (`apps/[名前]/slides.md`)
2. フロントマターでメタ情報を設定
3. ビルドプロセスの実行
4. GitHub Pagesへの自動デプロイ

## Error Handling
- ビルドエラーの検知と通知
- PDF生成失敗時の対応
- デプロイ失敗時のロールバック
