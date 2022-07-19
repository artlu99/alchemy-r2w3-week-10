import { gql } from "@apollo/client";

export default gql`
  query (
    $request: PublicationsQueryRequest!
  ) {
    publications( request: $request) {
      pageInfo {
        prev
        next
        totalCount
      }
      items {

        ... on Comment {
          id
          appId
          createdAt
          metadata {
            content
          }
          profile {
            id
            handle
            picture {
              ... on MediaSet {
                __typename
                small {
                  url
                }
              }
              ... on NftImage {
                __typename
                uri
                verified
              }
            }
          }
        }
      }
    }
  }
`;