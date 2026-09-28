import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'          // Use deskTool instead of structureTool
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ads Studio',

  projectId: 'hmmhq0cz',
  dataset: 'production',

  plugins: [
    deskTool(),   // deskTool is the standard Studio structure plugin
    visionTool(), // Keep Vision for query testing
  ],

  schema: {
    types: schemaTypes,
  },
})
