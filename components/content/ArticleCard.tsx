import Link from 'next/link'
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
          <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-primary/5">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 text-xs text-text/60 mb-2">
            <span>{formatDate(post.date, 'MMM d, yyyy')}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          {post.category && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
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
                  className="px-2 py-1 text-xs bg-highlight/10 text-highlight rounded"
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

