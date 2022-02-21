const user = require("../__mocks__/testUser");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-delete", () => {
  beforeAll(async () => {
    await request(app).post("/registration").send(user);
  });

  it("user-delete-succsses", async () => {
    const res = await request(app).delete("/deleteUser").send(user);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("allUsers");
  });
});
