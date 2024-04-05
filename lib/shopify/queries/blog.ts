export const getBlogPostQuery = /* GraphQL */ `
  {
    blogs(first: 1) {
      edges {
        node {
          id
          title
          handle
          articles(first: 1) {
            edges {
              node {
                title
                handle
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
