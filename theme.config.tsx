import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>🚀 My Projects</span>,
  project: {
    link: 'https://github.com/flessan/nextra',
  },
  docsRepositoryBase: 'https://github.com/flessan/nextra/tree/main',
  footer: {
    text: 'Built with ❤️ by Thio Saputra',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
}

export default config
