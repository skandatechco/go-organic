import { getCategoryPage, getBlogPostsByCategory } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kitchen & Food - Your Complete Guide to Organic Food & Kitchen',
  description:
    'Organic meal delivery, pantry essentials, non-toxic cookware, and food storage solutions. Complete guide to organic food and kitchen products.',
}

export default function KitchenFoodPage() {
  const categoryPage = getCategoryPage('kitchen-food')
  const posts = getBlogPostsByCategory('Kitchen & Food')

  return (
    <div className="bg-background">
      <section className="bg-gradient-to-b from-highlight/10 to-background py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Complete Guide to Organic Food & Kitchen
            </h1>
            <p className="text-xl text-text/80">
              Transform your kitchen with organic food, non-toxic cookware, and sustainable kitchen solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-highlight/5">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Articles</h2>
            {posts.length > 6 && (
              <Link
                href="/blog?category=Kitchen & Food"
                className="text-primary hover:text-primary-dark font-medium flex items-center"
              >
                View All
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            )}
          </div>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 6).map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text/70 mb-4">No articles yet in this category.</p>
              <p className="text-text/60">Check back soon for practical guides and reviews!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

