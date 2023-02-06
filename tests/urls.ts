const host = "https://jsonplaceholder.typicode.com";

export type PostBody = {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
};

export const getPostsByIdUrl = (postId: number) => ({
  method: "GET",
  url: `${host}/posts/${postId}`,
});

export const getPostsUrl = () => ({
  method: "GET",
  url: `${host}/posts`,
});

export const createPostUrl = (data: PostBody) => ({
  method: "POST",
  url: `${host}/posts`,
  data,
});

export const updatePostByIdUrl = (postId: number, data: PostBody) => ({
  method: "PUT",
  url: `${host}/posts/${postId}`,
  data,
});

export const patchPostByIdUrl = (postId: number, data: PostBody) => ({
  method: "PATCH",
  url: `${host}/posts/${postId}`,
  data,
});

export const deletePostByIdUrl = (postId: number) => ({
  method: "DELETE",
  url: `${host}/posts/${postId}`,
});

export const getPostCommentsByPostIdUrl = (postId: number) => ({
  method: "GET",
  url: `${host}/posts/${postId}/comments`,
});

export const getCommentsOfPostByPostIdUrl = (postId: number) => ({
  method: "GET",
  url: `${host}/comments`,
  params: {
    postId,
  },
});

export const getPostsByUserId = (userId: number) => ({
  method: "GET",
  url: `${host}/posts`,
  params: {
    userId,
  },
});

export const getUsers = () => ({
  method: "GET",
  url: `${host}/users`,
});

export const getUsersPostsByUserId = (userId: number) => ({
  method: "GET",
  url: `${host}/users/${userId}/posts`,
});
