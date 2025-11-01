import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowRight, Book, Building2, FileText } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources - goOrganic',
  description:
    'Organic certifications guide, brand directory, and helpful resources for your organic living journey.',
}

const resources = [
  {
    name: 'Organic Certifications Guide',
    description:
      'Learn about USDA Organic, Non-GMO Project, Fair Trade, GOTS, EWG Verified, and other certifications.',
    href: '/resources/certifications',
    icon: Book,
  },
  {
    name: 'Brand Directory',
    description:
      'Browse our comprehensive directory of reviewed organic brands with links to detailed reviews.',
    href: '/resources/brand-directory',
    icon: Building2,
  },
  {
    name: 'Blog',
    description: 'Read our latest guides, reviews, and tips for organic living.',
    href: '/blog',
    icon: FileText,
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <section className="bg-gradient-to-b from-highlight/10 to-background py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Resources</h1>
            <p className="text-xl text-text/80">
              Helpful guides, directories, and information to support your organic living journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link key={resource.href} href={resource.href} className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30">
                    <CardHeader>
                      <div className="mb-4">
                        <Icon className="h-10 w-10 text-primary group-hover:text-highlight transition-colors" />
                      </div>
                      <CardTitle className="group-hover:text-highlight transition-colors">
                        {resource.name}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary group-hover:text-highlight transition-colors font-medium">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

