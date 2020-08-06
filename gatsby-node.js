/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */



// Create pages dynamically

const path = require('path')

exports.createPages = async ({graphql,actions})=> {
const {createPage} = actions
const result = await graphql(`
query GetExhibitions {
    exhibitions:allContentfulExhibition {
      nodes {
        slug
      }
    }
  }`)

  result.data.exhibitions.nodes.forEach((exhibition) => {
      createPage({
          path: `/exhibitions/${exhibition.slug}`,
          component: path.resolve(`src/templates/exhibition-template.js`),
          context: {
              slug: exhibition.slug,
          },
      })
  });
}
