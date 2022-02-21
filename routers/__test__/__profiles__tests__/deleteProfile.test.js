const user = require("../__mocks__/testUser");
const profile = require("../__mocks__/testProfile");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-deleteProfile", () => {
  beforeAll(async () => {
    await request(app).post("/registration").send(user);
  });

  it("user-deleteProfile-succsses", async () => {
    const res = await request(app)
      .delete("/deleteProfile")
      .send({ name: profile.name, email: user.email });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("updatedUser");
  });

  afterAll(async () => {
    await request(app).delete("/userDelete").send(user);
  });
});
