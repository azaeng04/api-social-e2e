import axios from "axios";
import { getUsers, getUsersPostsByUserId } from "./urls";

describe(`GET Users API endpoint /users`, () => {
  test("should get all users", async () => {
    const expected = {
      data: expect.arrayContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          username: expect.any(String),
          email: expect.any(String),
          address: {
            street: expect.any(String),
            suite: expect.any(String),
            city: expect.any(String),
            zipcode: expect.any(String),
            geo: {
              lat: expect.any(String),
              lng: expect.any(String),
            },
          },
          phone: expect.any(String),
          website: expect.any(String),
          company: {
            name: expect.any(String),
            catchPhrase: expect.any(String),
            bs: expect.any(String),
          },
        },
      ]),
      status: 200,
    };

    const { data, status } = await axios.request({
      ...getUsers(),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});

describe(`GET Users API endpoint /users/$userId/posts`, () => {
  test("should get all posts by users ID", async () => {
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
      ...getUsersPostsByUserId(userId),
    });
    const actual = {
      data,
      status,
    };

    expect(actual).toEqual(expected);
  });
});
