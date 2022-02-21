const { app } = require("../../../index");
const request = require("supertest");

describe("user-users", () => {
  it("users-users-succsses", async () => {
    const res = await request(app).get("/users").send({
      name: "userName",
      email: "userEmail@gmail.com",
      password: "userPassword54321",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("allUsers");
  });
});
