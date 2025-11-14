const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  // Add these options to fix potential build issues
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
})
