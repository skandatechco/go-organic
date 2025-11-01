import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { readingTime } from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tags: string[]
  readingTime: number
  content: string
  featured?: boolean
  image?: string
}

export interface CategoryPage {
  slug: string
  title: string
  description: string
  heroTitle: string
  heroDescription: string
  content: string
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(contentDirectory, 'blog')
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const readingTimeResult = readingTime(content)

      return {
        slug: fileName.replace(/\.md$/, ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || 'goOrganic Team',
        category: data.category || '',
        tags: data.tags || [],
        readingTime: Math.ceil(readingTimeResult.minutes),
        content,
        featured: data.featured || false,
        image: data.image || '',
      }
    })

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const blogDirectory = path.join(contentDirectory, 'blog')
  const fullPath = path.join(blogDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const readingTimeResult = readingTime(content)

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || 'goOrganic Team',
    category: data.category || '',
    tags: data.tags || [],
    readingTime: Math.ceil(readingTimeResult.minutes),
    content,
    featured: data.featured || false,
    image: data.image || '',
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter((post) => post.category === category)
}

export function getCategoryPage(slug: string): CategoryPage | null {
  const categoryDirectory = path.join(contentDirectory, 'categories')
  const fullPath = path.join(categoryDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    heroTitle: data.heroTitle || data.title || '',
    heroDescription: data.heroDescription || data.description || '',
    content,
  }
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts()
  const categories = new Set(posts.map((post) => post.category).filter(Boolean))
  return Array.from(categories)
}

