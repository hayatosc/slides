import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

export interface SlideMetadata {
  title: string;
  description: string;
  author?: string;
  date?: string;
  tags?: string[];
  slug: string;
}

/**
 * apps/ディレクトリ内の各スライドプロジェクトからメタデータを取得
 */
export async function getAllSlideMetadata(): Promise<SlideMetadata[]> {
  const appsDir = join(process.cwd(), '..'); // Astroプロジェクトの親ディレクトリ（apps/）
  const entries = await readdir(appsDir, { withFileTypes: true });
  const slideProjects = entries.filter(entry => 
    entry.isDirectory() && 
    entry.name !== 'astro-site' && // Astroプロジェクト自身を除外
    !entry.name.startsWith('_') // _から始まるディレクトリを除外（例：_sample）
  );

  const metadataPromises = slideProjects.map(async (project) => {
    const slidesPath = join(appsDir, project.name, 'slides.md');
    try {
      const content = await readFile(slidesPath, 'utf-8');
      const { data } = matter(content);
      
      // メタデータの型を明示的に指定
      const metadata: SlideMetadata = {
        title: String(data.title || project.name),
        description: String(data.description || ''),
        author: data.author ? String(data.author) : undefined,
        date: data.date ? String(data.date) : undefined,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        slug: project.name
      };
      
      return metadata;
    } catch (error) {
      console.warn(`Warning: Could not read metadata from ${slidesPath}`);
      return null;
    }
  });

  const allMetadata = await Promise.all(metadataPromises);
  // 型ガードを使用してnullを除外
  return allMetadata.filter((item): item is SlideMetadata => item !== null);
}

/**
 * スライドのHTMLバージョンのURLを生成
 */
/**
 * スライドのHTMLバージョンのURLを生成
 */
export function getSlideHtmlUrl(slug: string): string {
  return `/slides/${slug}/index.html`;
}

/**
 * スライドのPDFバージョンのURLを生成
 */
export function getSlidePdfUrl(slug: string): string {
  return `/slides/${slug}/slides.pdf`;
}
