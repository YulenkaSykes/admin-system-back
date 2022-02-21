const user = require("../__mocks__/testUser");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-register", () => {
  it("user-register-succsses", async () => {
    const res = await request(app).post("/registration").send(user);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("createdUser");
  });

  afterAll(async () => {
    await request(app).delete("/deleteUser").send(user);
  });
});
