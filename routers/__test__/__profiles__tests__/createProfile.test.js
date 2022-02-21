const user = require("../__mocks__/testUser");
const profile = require("../__mocks__/testProfile");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-createProfile", () => {
  beforeAll(async () => {
    await request(app).post("/registration").send(user);
  });
  it("user-createProfile-succsses", async () => {
    const res = await request(app)
      .patch("/createProfile")
      .send({ user, profile });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("updatedUser");
  });
  afterAll(async () => {
    await request(app).delete("/deleteUser").send(user);
  });
});
