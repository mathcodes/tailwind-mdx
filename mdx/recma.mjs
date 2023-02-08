import { mdxAnnotations } from 'mdx-annotations'
import recmaNextjsStaticProps from 'recma-nextjs-static-props'

function recmaRemoveNamedExports() {
  return (tree) => {
    tree.body = tree.body.map((node) => {
      if (node.type === 'ExportNamedDeclaration') {
        console.log('removing named export', node)
        console.log(node.declaration)
        return node.declaration
      }
      return node
    })
  }
}

export const recmaPlugins = [
  mdxAnnotations.recma,
  recmaRemoveNamedExports,
  recmaNextjsStaticProps,
]
