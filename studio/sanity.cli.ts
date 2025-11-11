import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9jmbai3r',
    dataset: 'production',
  },
  deployment: {
    appId: 'seando-portfolio-sanity-studio',
  },
})
