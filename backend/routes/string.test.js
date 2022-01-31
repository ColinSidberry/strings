"use strict";

const request = require("supertest");

const app = require("../app");

/************************************** POST /string */

// FIXME: Add Proper Testing
describe("POST /string", function () {
  // const newCompany = {
  //   handle: "new",
  //   name: "New",
  //   logoUrl: "http://new.img",
  //   description: "DescNew",
  //   numEmployees: 10,
  // };

  // test("ok for admin", async function () {
  //   const resp = await request(app)
  //       .post("/string")
  //       .send(newCompany)
  //       .set("authorization", `Bearer ${adminToken}`);
  //   expect(resp.statusCode).toEqual(201);
  //   expect(resp.body).toEqual({
  //     company: newCompany,
  //   });
  // });
});

/************************************** GET /string */

describe("GET /string", function () {
  // test("ok for anon", async function () {
  //   const resp = await request(app).get("/string");
  //   expect(resp.body).toEqual({
  //     companies:
  //         [
  //           {
  //             handle: "c1",
  //             name: "C1",
  //             description: "Desc1",
  //             numEmployees: 1,
  //             logoUrl: "http://c1.img",
  //           },
  //           {
  //             handle: "c2",
  //             name: "C2",
  //             description: "Desc2",
  //             numEmployees: 2,
  //             logoUrl: "http://c2.img",
  //           },
  //           {
  //             handle: "c3",
  //             name: "C3",
  //             description: "Desc3",
  //             numEmployees: 3,
  //             logoUrl: "http://c3.img",
  //           },
  //         ],
  //   });
  // });
});
