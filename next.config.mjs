import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // Nextra-specific options
  latex: true,
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs'
})

// Export the final Next.js config with Nextra included
export default withNextra({
  // Next.js options
  reactStrictMode: true,
})