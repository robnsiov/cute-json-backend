const MAX_BODY_SIZE = 1 * 1024 * 1024; // 1MB in bytes
const MAX_BACKOUP_COUNT = 4;
const DEFAULT_JSON_DB = { posts: [{ id: 1, title: "first post" }] };
const GOOGLE_REDIRECT_URL = "http://localhost:8086/auth/google/callback";

export {
  MAX_BODY_SIZE,
  MAX_BACKOUP_COUNT,
  DEFAULT_JSON_DB,
  GOOGLE_REDIRECT_URL,
};
