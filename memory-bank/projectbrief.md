# Project Brief: Slidev Gallery on GitHub Pages

## Overview
スライドショーを管理・公開するためのGitHub Pagesサイトを構築するプロジェクト。

## Core Requirements
1. Astroを使用して、スライド一覧ページを作成
2. apps/以下の各Slidevプロジェクトをビルドして静的HTMLを生成
3. 各スライドのPDFバージョンを生成・保存
4. GitHub Pagesでの公開と自動デプロイ

## Goals
- 各スライドのメタ情報（タイトル等）を自動的に取得・表示
- スライドの閲覧とPDFダウンロードを容易にする
- 継続的なスライドの追加・更新を容易にする

## Scope
- スライドプロジェクトのビルド自動化
- 一覧ページの作成と管理
- PDFバージョンの生成と管理
- GitHub Actionsを使用したCI/CDパイプラインの構築
