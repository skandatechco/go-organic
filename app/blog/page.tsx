import { getAllBlogPosts } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - goOrganic',
  description: 'Practical guides, honest reviews, and tips for organic living',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-highlight/10 to-background py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Blog</h1>
            <p className="text-xl text-text/80">
              Practical guides, honest reviews, and tips for a healthier organic lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-text/70 mb-4">No blog posts yet.</p>
              <p className="text-text/60">Check back soon for practical guides and reviews!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

