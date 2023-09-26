const { describe, test, expect, afterAll } = require("@jest/globals");
const supertest = require("supertest");
const connection = require("../db/pool");
const app = require("../app");

describe("/users/signup endpoint", () => {
  const deleteQuery = "DELETE FROM users WHERE email=?";
  connection.query(deleteQuery, ["test@user.com"], (err, result) => {
    if (err) {
      console.log(err);
    }
  });

  const data = {
    name: "test user",
    email: "test@user.com",
    password: "testuserpassword",
  };

  test("should signup user with valid credentials", async () => {
    const response = await supertest(app)
      .post("/api/users/signup")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(data);

    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.email).toBeTruthy();
    expect(response.body.token).toBeTruthy();
  });

  test("shouldn't sign up with existing email", async () => {
    const response = await supertest(app)
      .post("/api/users/signup")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(data);

    expect(response.status).toEqual(422);
    expect(response.body.message).toContain(
      "Could not create user, user exists"
    );
  });

  test("shouldn't sign up with inadequate request (missing email)", async () => {
    const noEmail = data;
    delete noEmail.email;

    const response = await supertest(app)
      .post("/api/users/signup")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(noEmail);

    expect(response.status).toEqual(400);
  });
});

describe("/users/login endpoint", () => {
  const data = {
    email: "test@user.com",
    password: "testuserpassword",
  };

  test("should login user with valid credentials", async () => {
    const response = await supertest(app)
      .post("/api/users/login")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(data);

    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.email).toBeTruthy();
    expect(response.body.token).toBeTruthy();
  });

  test("shouldn't login with invalid email", async () => {
    const invalidEmail = data;
    invalidEmail.email = "invalid@email.com";

    const response = await supertest(app)
      .post("/api/users/login")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(invalidEmail);

    expect(response.status).toEqual(401);
    expect(response.body.message).toContain(
      "No user found - Check your credentials"
    );
  });

  test("shouldn't login with invalid password", async () => {
    const invalidPassword = data;
    invalidPassword.password = "invalidpassword";

    const response = await supertest(app)
      .post("/api/users/login")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(invalidPassword);

    expect(response.status).toEqual(401);
    expect(response.body.message).toContain(
      "No user found - Check your credentials"
    );
  });
});
