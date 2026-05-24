import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Chronicles } from './payload/collections/Chronicles'
import { JournalIssues } from './payload/collections/JournalIssues'
import { News } from './payload/collections/News'
import { Members } from './payload/collections/Members'
import { Media } from './payload/collections/Media'
import { Users } from './payload/collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Chronicles, JournalIssues, News, Members, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'jcc-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  upload: {
    limits: {
      fileSize: 50_000_000, // 50MB
    },
  },
})
