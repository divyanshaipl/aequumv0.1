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
      maxLength: 120,
      defaultValue: 'OPERATING INFRASTRUCTURE FOR THE NEXT SERVICE ECONOMY',
    },
    {
      name: 'headline',
      type: 'text',
      maxLength: 180,
      defaultValue: 'Build the right team. Run the engagement. Get paid. Make the next one smarter.',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      maxLength: 460,
      defaultValue:
        'Aequum is building an AI-assisted engagement operating system for agencies, consultancies and specialist service firms. One place to turn a client opportunity into a staffed, scoped, delivered and commercially connected engagement.',
    },
    {
      name: 'primaryCTA',
      type: 'text',
      maxLength: 40,
      defaultValue: 'Request Early Access',
    },
  ],
}
