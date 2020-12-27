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

export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: String!, $content: String!) {
    createComment(postId: $postId, content: $content) {
      id
      uuid
      content
      createdAt
      user {
        uuid
        nickname
        avatar
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($commentId: String!) {
    deleteComment(commentId: $commentId) {
      id
      uuid
    }
  }
`;

export const COMMENT_LIST_QUERY = gql`
  query FindManyComments($postId: String!, $skip: Int, $take: Int) {
    findManyComments(postId: $postId, skip: $skip, take: $take) {
      id
      uuid
      content
      createdAt
      user {
        uuid
        nickname
        avatar
      }
    }
  }
`;
