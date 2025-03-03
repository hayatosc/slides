# Active Context: Slidev Gallery

## Current Focus
スライドギャラリーサイトの初期セットアップと基本構造の実装

## Recent Changes
- Memory Bankの初期設定完了
- プロジェクトの基本設計と要件定義の確立
- Astroプロジェクトの作成と初期設定
- スライド一覧機能の基本実装
  - メタデータ取得ユーティリティの作成
  - スライドカードコンポーネントの実装
  - インデックスページの作成
- GitHub Actionsワークフローの設定
  - ビルドプロセスの自動化
  - GitHub Pagesへのデプロイ設定

## Active Decisions
1. **アプリケーション構造**
   - apps/以下に各スライドプロジェクトを配置
   - Astroサイトもapps/内に作成
   - PDFはプロジェクトごとに管理

2. **技術スタック**
   - Astro: 静的サイト生成
   - Slidev: スライド作成・ビルド
   - Puppeteer/Playwright: PDF生成
   - GitHub Actions: CI/CD

## Next Steps

### 1. 実装フェーズ
- [x] Astroプロジェクトの作成
  - [x] apps/astro-site/の設定
  - [x] 必要なパッケージのインストール
  - [x] 基本レイアウトの作成

- [x] スライド一覧ページの実装
  - [x] フロントマター解析機能
  - [x] リスト表示コンポーネント
  - [x] HTMLとPDFリンクの統合

- [ ] ビルドシステムの構築
  - Slidevビルドスクリプト
  - PDF生成スクリプト
  - 統合ビルドプロセス

### 2. CI/CD設定
- [ ] GitHub Actionsワークフローの作成
  - ビルドステップの定義
  - デプロイ設定
  - 自動化プロセスの確立

## Current Challenges
1. PDF生成の最適化
2. ビルドプロセスの効率化
3. メタ情報の統一的な管理

## Notes & Considerations
- フロントマターの形式を標準化
- ビルド時のパフォーマンス最適化
- エラーハンドリングの強化

## Open Questions
- カスタムドメインの必要性
- PDFのキャッシュ戦略
- プレビュー環境の構築方法
