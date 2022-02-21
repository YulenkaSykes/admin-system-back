const user = require("../__mocks__/testUser");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-login", () => {
  beforeAll(async () => {
    await request(app).post("/registration").send(user);
  });

  it("user-login-succsses", async () => {
    const res = await request(app).post("/login").send({
      email: user.email,
      password: user.password,
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("createdUser");
  });

  afterAll(async () => {
    await request(app).delete("/deleteUser").send(user);
  });
});
