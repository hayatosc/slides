---
theme: default
title: Webのパフォーマンスとバンドルサイズの話
description: Webサイトのパフォーマンスにおいて重要なバンドルサイズについて話します。
date: 2025-03-04
drawings:
  persist: false
fonts:
  sans: Noto Sans JP
transition: slide-left
mdc: true
colorSchema: dark
---

<h1>Webのパフォーマンスと<br/>バンドルサイズの話</h1>

Hayato Sakaguchi

---

# 自己紹介

<h3 class="pb-4">坂口颯斗 (Hayato Sakaguchi)</h3>

- 東京理科大学薬学部2年
  - 薬学部は4月から新しい葛飾キャンパスに移転します！
- 理大祭実行委員会所属
  - 情報システム系の部署のトップをしてました
  - 主に委員会内外で使うシステムや公式サイトの開発をしてます
- 2024年12月よりジョイン

<img v-click src="/Perth-01.webp" width="60%" class="ml-auto -translate-y-24 translate-x-10" />

---

```yaml
layout: center
```

<img src="/portal.png" />

---

```yaml
layout: center
```

# Webサイトのパフォーマンス、気にしてますか？

---

# なぜパフォーマンスの最適化が重要なのか

- ページの読み込みが遅いと、ユーザーは離脱してしまう

<div class="py-6">
  <blockquote> 47%の消費者は2秒以内にWebページが読み込まれることを期待している。 40%のユーザーは読み込みに3秒以上かかるとWebサイトから離脱する。 表示が1秒遅れるとコンバージョン率が7%低下する。<br />
    <cite>https://neilpatel.com/blog/loading-time/</cite>
  </blockquote>
</div>

- パフォーマンスはSEOに影響する
  - 2021年以降から本格的に検索順に左右されるように

---

# パフォーマンスを測定する

## Page Speed Insights (Lighthouse)

- https://pagespeed.web.dev
- Googleが提供するパフォーマンス計測ツール (無料)
- ページを開いた際のパフォーマンスを調べてくれる
- パフォーマンス、アクセシビリティなどの4項目
- Google Chromeにも同様の機能(Lighthouse)がある
  - ただし使用している環境によって左右される

<img src="/pagespeedinsights.jpg" width="40%" class="ml-auto" />

---

```yaml
layout: center
```

<img src="/psi-result.png" />

<div class="text-center pt-4"><a href="https://nodaridaisai.com">理大祭ウェブサイト</a>を測定した例</div>

---

# パフォーマンスの指標

## Core Web Vitals

- https://web.dev/articles/vitals
- Largest Contentful Paint (LCP)
  - Webサイトのコンテンツが読み込まれるまでの速度
  - 2.5秒以内推奨
- Interaction to Next Paint (INP)
  - ユーザーのアクションに対する反応速度
  - 200ミリ秒以内推奨
- Cumulative Layout Shift (CLS)
  - レイアウトのズレに対する指標
  - 0.1以下推奨

<h3 class="text-center">ただし、全てを満たしているサイトはほとんどない</h3>

---

# パフォーマンスの改善方法

色々なテクニックがある

- ファイルをgzip圧縮して配信できているか確認する
- cache-controlの見直し
- 画像をwebp, avif形式に変換する
- フォントで使っていない文字の分を削る (サブセット化)

etc...

---

```yaml
layout: center
```

# 今回はバンドルサイズの話をします

---

# バンドル / バンドラーとは？

- 現代のフロントエンドは多数のJavaScriptファイルによって構成される
  - 一方で、読み込むファイルが多いとリクエスト面で不利
  - そこで、複数のファイルをビルド時に1つにまとめる (→バンドル)
  - バンドルを行ってくれるツールがバンドラー
- 実際には、その他の最適化処理も行われる
  - TypeScriptやSCSSのトランスパイル、minifyなど

<img src="/bundler.svg" width="60%" class="mx-auto" />

---

# バンドルサイズの肥大化問題

- 複雑で巨大なサイトを作れば作るほど、バンドルサイズは肥大化してしまう
- バンドルサイズが大きくなるにつれ、Webサイトの読み込み時間は長くなる
  - 同じファイルサイズでも、画像ファイルとJSファイルのコストは等価ではない！

<h2 class="text-center m-auto">どのようにバンドルサイズを削るべきか？</h2>

---

# 解決策① Tree-Shakableなライブラリを使う

## Tree-Shakingとは

バンドラーがバンドルする際に、ライブラリの未使用部分を削ってくれる機能。

### 例

```ts{all|1-4}
// ライブラリの使用する部分
export function funcA (a: number, b: number): number {
  return a + b
}

// ライブラリの使用しない部分
export function funcB (a: number, b: number): number {
  return a - b
}
```

使用しない下の部分はバンドルされない

---

# Tree Shakingされないライブラリ

主にES Module(import/export構文)に対応していないライブラリ

- 有名な例だとlodash
  - 数値計算や配列操作などの便利な機能をまとめたライブラリ
  - 64KB
  - lodashの代替ライブラリ(lodash-esやes-toolkit)だと5KB程度まで抑えられる

稀にES ModuleでもTree Shakingにならないことも

- 例: Zod
  - バリデーションライブラリ
  - メソッドチェーンで `z.string().email()...` のように書けるが、これがバンドルサイズが大きくなる要因になっている
  - これが原因でValibotという軽量がウリのライブラリが作られた

---

# bundle analyzerで確認しよう

- Webpackならwebpack-bundle-analyzer
- Viteならrollup-plugin-visualizer

<img src="https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif" width="60%" class="m-auto" />