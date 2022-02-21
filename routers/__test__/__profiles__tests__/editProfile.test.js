const router = require("../../router");
const user = require("../__mocks__/testUser");
const { app } = require("../../../index");
const request = require("supertest");

describe("user-editProfile", () => {
  it("user-editProfile-succsses", async () => {
    const res = await request(app, router).patch("/editProfile").send({
      name: "Ivan",
      gender: "female",
      birthdate: "10.10.2010",
      city: "kyiv",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("updatedUser");
  });
});
