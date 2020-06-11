/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allSanityWork {
        edges {
          node {
            _id
            slug {
              current
            }
            subtitle
            title
            technology {
              techImage {
                asset {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
              name
            }
            thumbnail {
              _key
              _type
              asset {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    throw result.errors
  }

  const { createPage } = actions
  const allWork = result.data.allSanityWork.edges || []
  const basePath = "/"

  createPage({
    path: basePath,
    component: require.resolve("./src/components/Templates/IndexPage.tsx"),
    context: {
      allWork,
    },
  })

  // const allWork = result.data.allSanityWork.edges || []
  // allWork.forEach((edge, index) => {
  //   const path = `/work/${edge.node.slug.current}`

  //   createPage({
  //     path,
  //     component: require.resolve("./src/pages/index.tsx"),
  //     context: { id: edge.node._id, slug: edge.node.slug.current },
  //   })
  // })
}
