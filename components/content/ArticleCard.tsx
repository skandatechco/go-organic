import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import type { BlogPost } from '@/lib/content'

interface ArticleCardProps {
  post: BlogPost
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30">
        {post.image && (
          <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-primary/5 relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 caption mb-2">
            <span>{formatDate(post.date, 'MMM d, yyyy')}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          {post.category && (
            <span className="inline-block px-3 py-1 category-tag mb-2">
              {post.category}
            </span>
          )}
          <CardTitle className="group-hover:text-highlight transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
        </CardHeader>
        {post.tags && post.tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 category-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  )
}

