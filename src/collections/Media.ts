import type { CollectionConfig } from 'payload'

const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Content',
    useAsTitle: 'alt',
    description: 'Admin-managed marketing assets. SVG uploads are intentionally disabled.',
  },
  access: {
    create: adminOnly,
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    staticDir: 'media',
    pasteURL: false,
    withMetadata: false,
  },
  fields: [
    { name: 'alt', type: 'text', required: true, maxLength: 160 },
  ],
}
