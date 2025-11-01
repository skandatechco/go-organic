import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowRight, Leaf } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'

const categories = [
  {
    name: 'Kitchen & Food',
    href: '/kitchen-food',
    description: 'Organic meal delivery, pantry essentials, and non-toxic cookware',
    icon: '🍽️',
  },
  {
    name: 'Home & Cleaning',
    href: '/home-cleaning',
    description: 'Natural cleaning products and eco-friendly home solutions',
    icon: '🏠',
  },
  {
    name: 'Beauty & Personal Care',
    href: '/beauty-personal-care',
    description: 'Clean beauty and organic personal care products',
    icon: '✨',
  },
  {
    name: 'Bedroom & Sleep',
    href: '/bedroom-sleep',
    description: 'Organic mattresses, bedding, and sleep essentials',
    icon: '🛏️',
  },
  {
    name: 'Family & Baby',
    href: '/family-baby',
    description: 'Safe, organic products for your growing family',
    icon: '👶',
  },
  {
    name: 'Wellness & Supplements',
    href: '/wellness-supplements',
    description: 'Organic vitamins, supplements, and holistic health',
    icon: '💊',
  },
]

export default function HomePage() {
  const latestPosts = getAllBlogPosts().slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-highlight/10 to-background py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Make the Shift to Organic Living
            </h1>
            <p className="text-xl md:text-2xl text-text/80 mb-8 leading-relaxed">
              One Choice at a Time
            </p>
            <p className="text-lg text-text/70 mb-10 max-w-2xl mx-auto">
              Practical guides, honest reviews, and curated products for a healthier home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/start-here">
                  Start Your Organic Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">Explore Our Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Guides Section */}
      {latestPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Guides</h2>
              <Link
                href="/blog"
                className="text-primary hover:text-primary-dark font-medium flex items-center"
              >
                View All
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Picks Section */}
      <section className="py-16 bg-highlight/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
            Top Picks This Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Product</CardTitle>
                <CardDescription>Our top organic pick this month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text/70">
                  Discover our carefully curated selection of organic products that make a real
                  difference in your daily life.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Editor's Choice</CardTitle>
                <CardDescription>Products we love and trust</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text/70">
                  Hand-picked recommendations based on extensive testing and research.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Best Value</CardTitle>
                <CardDescription>Quality organic products at great prices</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text/70">
                  Find the best deals on organic products without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group block p-6 rounded-lg border-2 border-primary/10 hover:border-primary/30 bg-background hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-highlight transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-text/70 text-sm">{category.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New to Organic Section */}
      <section className="py-16 bg-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              New to Organic?
            </h2>
            <p className="text-lg text-text/70 mb-8">
              Starting your organic journey can feel overwhelming. Our beginner's guide makes it
              simple and practical.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link href="/start-here">
                Start Here: Your Organic Journey Begins
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

