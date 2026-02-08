import { useMDXComponents as getDocsMDXComponents  } from 'nextra-theme-docs'
import {MDXComponents} from 'nextra/mdx-components'

// Get the default MDX components
const docsComponents = getDocsMDXComponents ()

// Merge components
export function useMDXComponents(components?: MDXComponents) {
    return {
        ...docsComponents,
        ...components
    }
}