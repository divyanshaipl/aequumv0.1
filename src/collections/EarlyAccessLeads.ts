import type { CollectionConfig } from 'payload'

const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const EarlyAccessLeads: CollectionConfig = {
  slug: 'early-access-leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'company', 'businessType', 'createdAt'],
    group: 'Growth',
    description: 'Qualified early-access and design-partner interest captured from the public Aequum landing page.',
  },
  access: {
    create: adminOnly,
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    { name: 'name', type: 'text', maxLength: 80 },
    { name: 'email', type: 'email', required: true, unique: true, index: true },
    { name: 'company', type: 'text', maxLength: 120 },
    {
      name: 'businessType',
      type: 'select',
      options: [
        { label: 'Agency', value: 'agency' },
        { label: 'Consultancy', value: 'consultancy' },
        { label: 'Studio', value: 'studio' },
        { label: 'Independent professional', value: 'independent' },
        { label: 'Professional services company', value: 'professional-services' },
        { label: 'Other', value: 'other' },
      ],
    },
    { name: 'challenge', type: 'textarea', maxLength: 500 },
    { name: 'consent', type: 'checkbox', required: true, defaultValue: false },
    { name: 'source', type: 'text', maxLength: 80, defaultValue: 'website' },
    { name: 'utmSource', type: 'text', maxLength: 100 },
    { name: 'utmMedium', type: 'text', maxLength: 100 },
    { name: 'utmCampaign', type: 'text', maxLength: 100 },
  ],
}
