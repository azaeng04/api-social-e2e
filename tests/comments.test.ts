import axios from "axios";
import {
  getCommentsOfPostByPostIdUrl,
  getPostCommentsByPostIdUrl,
} from "./urls";

describe(`GET Comments API endpoint /posts/$id/comments`, () => {
  test("should get comments on a post by post ID", async () => {
    const expected = {
      data: expect.arrayContaining([
        {
          postId: expect.any(Number),
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          body: expect.any(String),
        },
      ]),
      status: 200,
    };
    const postId = 1;

    const { data, status } = await axios.request({
      ...getPostCommentsByPostIdUrl(postId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });

  test("should not get comments on a post with an invalid post ID", async () => {
    const expected = {
      data: expect.arrayContaining([]),
      status: 200,
    };
    const postId = 0;

    const { data, status } = await axios.request({
      ...getPostCommentsByPostIdUrl(postId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`GET Comments API endpoint /comments?postId=$id`, () => {
  test("should get comments on a post by ID", async () => {
    const expected = {
      data: expect.arrayContaining([
        {
          postId: expect.any(Number),
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          body: expect.any(String),
        },
      ]),
      status: 200,
    };
    const postId = 1;

    const { data, status } = await axios.request({
      ...getCommentsOfPostByPostIdUrl(postId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });

  test("should not get comments on a post with an invalid post ID", async () => {
    const expected = {
      data: expect.arrayContaining([]),
      status: 200,
    };
    const postId = 0;

    const { data, status } = await axios.request({
      ...getCommentsOfPostByPostIdUrl(postId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});
