import { source } from '@/lib/source';
import { getLLMText } from '@/lib/llm-utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const llmText = await getLLMText(page);

  return new Response(llmText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}