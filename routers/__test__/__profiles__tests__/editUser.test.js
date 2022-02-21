const user = require("../__mocks__/testUser");
// const router = require("../../router");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-editUser", () => {
  beforeAll(() => {
    request(app).post("/registration").send(user);
  });

  it("user-editUser-succsses", async () => {
    const res = await request(app)
      .patch("/editUser")
      .send({
        user: {
          ...user,
          name: "Ivan",
          gender: "male",
          birthdate: "01.01.1010",
          city: "kyiv",
        },
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.updatedUser.name).toEqual("Ivan");
    expect(res.body).toHaveProperty("updatedUser");
  });

  afterAll(() => {
    request(app).delete("/deleteUser").send(user);
  });
});
