import { gql } from "apollo-boost";

export const POST_DETAIL_QUERY = gql`
  query FindOnePost($uuid: String!) {
    findOnePost(uuid: $uuid) {
      uuid
      title
      content
      thumbnail
      likeCount
      isLiked
      commentCount
      createdAt
      author {
        uuid
        nickname
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation ToggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;
