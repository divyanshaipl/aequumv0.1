import type { GlobalConfig } from 'payload'

const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Content',
    description: 'Small, controlled set of public-facing landing page copy. Layout remains code-owned.',
  },
  access: {
    read: adminOnly,
    update: adminOnly,
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      maxLength: 80,
      defaultValue: 'OPERATING INFRASTRUCTURE FOR SERVICE BUSINESSES',
    },
    {
      name: 'headline',
      type: 'text',
      maxLength: 120,
      defaultValue: 'Run your service business as one connected system.',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      maxLength: 320,
      defaultValue:
        'Aequum is building the operating layer that brings clients, talent, work, contracts, workflows and commercial operations into alignment.',
    },
    {
      name: 'primaryCTA',
      type: 'text',
      maxLength: 40,
      defaultValue: 'Join Early Access',
    },
  ],
}
