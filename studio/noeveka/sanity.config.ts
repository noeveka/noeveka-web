// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// export default defineConfig({
//   name: 'default',
//   title: `noeveka (${dataset})`,

//   projectId: 'gv2hvfjr',
//   dataset: dataset,

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const projectId = 'gv2hvfjr'

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'Noeveka (Production)',
    projectId,
    dataset: 'production',
    basePath: '/production',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'staging-workspace',
    title: 'Noeveka (Staging)',
    projectId,
    dataset: 'staging',
    basePath: '/staging',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
