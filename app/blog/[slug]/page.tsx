import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { Clock, Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import ShareButtons from '@/components/content/ShareButtons'
import ArticleCard from '@/components/content/ArticleCard'
import { markdownToHtml } from '@/lib/markdown'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found - goOrganic',
    }
  }

  return {
    title: `${post.title} - goOrganic`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = await markdownToHtml(post.content)

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="bg-background">
      <article className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              {post.category && (
                <span className="inline-block px-3 py-1 category-tag mb-4">
                  {post.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 caption mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              {post.image && (
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-primary/5 mb-8 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-text mb-8"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 category-tag"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="border-t border-primary/10 pt-8 mb-12">
              <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="border-t border-primary/10 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <ArticleCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

