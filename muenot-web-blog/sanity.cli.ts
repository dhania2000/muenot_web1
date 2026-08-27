import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5juh7797',
    dataset: 'production',
  },
  deployment: {
    appId: 'ku4cpqvupmn408jdxr2liig8',
    autoUpdates: true,
  },
})
