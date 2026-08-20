import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { EarlyAccessLeads } from './collections/EarlyAccessLeads'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { getAllowedOrigins, getServerURL } from './lib/origins'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const allowedOrigins = getAllowedOrigins()

if (process.env.NODE_ENV === 'production' && !process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET must be configured in production.')
}

export default buildConfig({
  serverURL: getServerURL(),
  secret: process.env.PAYLOAD_SECRET || 'local-development-only-change-me',
  telemetry: false,
  maxDepth: 2,
  cors: allowedOrigins,
  csrf: allowedOrigins,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, 'app/(payload)/admin/importMap.js'),
    },
  },
  routes: {
    admin: '/admin',
    api: '/cms-api',
    graphQL: '/cms-graphql',
    graphQLPlayground: '/cms-graphql-playground',
  },
  graphQL: {
    disable: true,
  },
  collections: [Users, EarlyAccessLeads, Media],
  upload: {
    abortOnLimit: true,
    safeFileNames: true,
    preserveExtension: true,
    limits: { fileSize: 4_000_000, files: 1 },
  },
  globals: [SiteSettings],
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
