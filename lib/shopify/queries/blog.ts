export const getBlogPostQuery = /* GraphQL */ `
  {
    blogs(first: 1) {
      edges {
        node {
          id
          title
          articles(first: 1) {
            edges {
              node {
                title
                publishedAt
                contentHtml
                image {
                  src
                  altText
                }
                author {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
