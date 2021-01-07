export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://geulhouse-backend.herokuapp.com";

export const s3url =
  "https://waaw-photo-bucket.s3.ap-northeast-2.amazonaws.com";
