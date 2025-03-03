# Slides Gallery

## 概要

GitHub Pages上でSlidevスライドを管理・公開するためのギャラリーサイト

## 特徴
- 📑 スライド一覧での快適な閲覧体験
- 🌐 Web版（HTML）とPDF版の両方をサポート
- 🔄 GitHub Actionsによる自動ビルド・デプロイ
- 📊 スライドのメタ情報の自動取得・表示

## 技術スタック
- [Astro](https://astro.build/) - 静的サイトジェネレーター
- [Slidev](https://sli.dev/) - スライド作成・ビルド
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [GitHub Pages](https://pages.github.com/) - ホスティング
- [pnpm](https://pnpm.io/) - パッケージ管理

## プロジェクト構造

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

## セットアップ

1. **Clone Repository**
```bash
git clone [repository-url]
cd [repository-name]
```

2. **Install Dependencies**
```bash
pnpm install
```

## 新規スライドの追加

1. `apps/` ディレクトリに新しいスライドプロジェクトを作成
2. `slides.md` にフロントマターでメタ情報を設定
```yaml
---
# Required
title: スライドタイトル
description: スライドの説明

# Optional
date: 作成日
---
```

## デプロイ
- GitHub Actionsによって自動的にビルドとデプロイが行われます
- `main`ブランチへのプッシュで自動的にデプロイが開始されます
