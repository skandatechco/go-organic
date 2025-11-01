import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || process.env.GIT_BRANCH || 'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'public',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'content/blog',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: [
              'Kitchen & Food',
              'Home & Cleaning',
              'Beauty & Personal Care',
              'Bedroom & Sleep',
              'Family & Baby',
              'Wellness & Supplements',
            ],
            required: true,
          },
          {
            type: 'string',
            name: 'image',
            label: 'Featured Image URL',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'category',
        label: 'Category Pages',
        path: 'content/categories',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'heroTitle',
            label: 'Hero Title',
          },
          {
            type: 'string',
            name: 'heroDescription',
            label: 'Hero Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})

