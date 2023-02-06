import axios from "axios";
import {
  getPostsByUserId,
  getPostsByIdUrl,
  getPostsUrl,
  createPostUrl,
  PostBody,
  updatePostByIdUrl,
  patchPostByIdUrl,
  deletePostByIdUrl,
} from "./urls";

describe(`GET Posts API endpoint /posts`, () => {
  test("should get all posts", async () => {
    const expected = {
      data: expect.arrayContaining([
        {
          userId: expect.any(Number),
          id: expect.any(Number),
          title: expect.any(String),
          body: expect.any(String),
        },
      ]),
      status: 200,
    };

    const { data, status } = await axios.request({
      ...getPostsUrl(),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`GET Posts API endpoint /posts/$postId`, () => {
  test("should get posts by post ID", async () => {
    const expected = {
      data: expect.objectContaining({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        body: expect.any(String),
      }),
      status: 200,
    };
    const postId = 1;

    const { data, status } = await axios.request({
      ...getPostsByIdUrl(postId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`GET Posts API endpoint /posts?userId=$id`, () => {
  test("should get posts posted by a user using user ID", async () => {
    const expected = {
      data: expect.arrayContaining([
        {
          userId: 1,
          id: expect.any(Number),
          title: expect.any(String),
          body: expect.any(String),
        },
      ]),
      status: 200,
    };
    const userId = 1;

    const { data, status } = await axios.request({
      ...getPostsByUserId(userId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`POST Posts API endpoint /posts`, () => {
  test("should create a post with user ID", async () => {
    const expected = {
      data: expect.objectContaining({
        userId: 1,
        id: 101,
        title: "Test",
        body: "Test",
      }),
      status: 201,
    };
    const postBody: PostBody = {
      title: "Test",
      body: "Test",
      userId: 1,
    };

    const { data, status } = await axios.request({
      ...createPostUrl(postBody),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`PUT Posts API endpoint /posts/$id`, () => {
  test("should update post by post ID", async () => {
    const expected = {
      data: expect.objectContaining({
        userId: 1,
        id: 1,
        title: "Test",
        body: "Test",
      }),
      status: 200,
    };
    const postId = 1;
    const postBody: PostBody = {
      id: 1,
      title: "Test",
      body: "Test",
      userId: 1,
    };

    const { data, status } = await axios.request({
      ...updatePostByIdUrl(postId, postBody),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`PATCH Posts API endpoint /posts/$id`, () => {
  test("should patch a post by post ID", async () => {
    const expected = {
      data: expect.objectContaining({
        userId: 1,
        id: 1,
        title: "Test",
        body: "Test",
      }),
      status: 200,
    };
    const postId = 1;
    const postBody: PostBody = {
      id: 1,
      title: "Test",
      body: "Test",
    };

    const { data, status } = await axios.request({
      ...patchPostByIdUrl(postId, postBody),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`DELETE Posts API endpoint /posts/$id`, () => {
  test("should delete post by post ID", async () => {
    const expected = {
      data: expect.objectContaining({}),
      status: 200,
    };
    const postId = 1;

    const { data, status } = await axios.request({
      ...deletePostByIdUrl(postId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});
