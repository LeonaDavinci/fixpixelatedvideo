import Link from 'next/link';
import type { ReactNode } from 'react';
import FaqAccordion from './FaqAccordion';

export interface ArticleLink {
  href: string;
  title: string;
  desc: string;
}

interface ArticlePageProps {
  title: string;
  description: string;
  slug: string;
  lede: string;
  toc: { id: string; label: string }[];
  faq: { question: string; answer: string }[];
  published: string;
  publishedTime: string;
  isoDate: string;
  readTime: string;
  related: ArticleLink[];
  children: ReactNode;
}

export default function ArticlePage({
  title,
  description,
  slug,
  lede,
  toc,
  faq,
  published,
  publishedTime,
  isoDate,
  readTime,
  related,
  children,
}: ArticlePageProps) {
  const url = `https://pixelfix.ai/blog/${slug}`;
  return (
    <>
      {/* SEO Structured Data: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            datePublished: isoDate,
            dateModified: isoDate,
            author: { '@type': 'Organization', name: 'PixelFix' },
            publisher: {
              '@type': 'Organization',
              name: 'PixelFix',
              logo: { '@type': 'ImageObject', url: 'https://pixelfix.ai/favicon.svg' },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          }),
        }}
      />

      {/* SEO Structured Data: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      <header className="blog-hero">
        <div className="container">
          <Link href="/blog" className="blog-crumb">
            PixelFix Blog
          </Link>
          <h1>{title}</h1>
          <p className="blog-lede">{lede}</p>
          <div className="article-meta">
            <span className="article-author">By PixelFix Team</span>
            <span className="article-dot" aria-hidden="true">
              &middot;
            </span>
            <span>Published {published}</span>
            <span className="article-dot" aria-hidden="true">
              &middot;
            </span>
            <span>Updated {published} at {publishedTime}</span>
            <span className="article-dot" aria-hidden="true">
              &middot;
            </span>
            <span>{readTime}</span>
          </div>
        </div>
      </header>

      <div className="container blog-layout">
        <article className="blog-article">
          <nav className="blog-toc" aria-label="Table of contents">
            <p className="blog-toc-title">In this guide</p>
            <ol>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {children}

          <section aria-labelledby="faq">
            <h2 id="faq">Frequently Asked Questions</h2>
            <FaqAccordion items={faq} />
          </section>

          <section aria-labelledby="related" className="blog-related">
            <h2 id="related">Related Guides</h2>
            <div className="blog-related-grid">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="blog-related-card">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <span className="blog-related-link">Read guide &rarr;</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="blog-final">
            <h2>Ready to Repair Your Footage?</h2>
            <p>
              Upload your pixelated video and watch the AI reconstruct it frame by frame.
              Free to preview, watermark-free on every export.
            </p>
            <Link href="/fix" className="btn btn-primary btn-xl">
              Start Fixing for Free
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
