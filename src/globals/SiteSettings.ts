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
      maxLength: 100,
      defaultValue: 'AI-ASSISTED OPERATING SYSTEM FOR SERVICE BUSINESSES',
    },
    {
      name: 'headline',
      type: 'text',
      maxLength: 180,
      defaultValue: 'Turn a client opportunity into a delivered, paid project in one connected workflow.',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      maxLength: 420,
      defaultValue:
        'Aequum is building the operating platform for agencies, consultancies and specialist service firms. It connects team assembly, scope, contracts, delivery, approvals, invoicing and payments around the client engagement.',
    },
    {
      name: 'primaryCTA',
      type: 'text',
      maxLength: 40,
      defaultValue: 'Request Early Access',
    },
  ],
}
