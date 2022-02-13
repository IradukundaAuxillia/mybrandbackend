import chai from "chai";
import chaiHttp from "chai-http";
import server from "../src/app.js";
import request from "supertest";

//Assertion style
chai.should();

chai.use(chaiHttp);

//post route

  describe("POST /api/contact", () => {
    it("It Should POST Contact", (done) => {
      const form = {
        FullName: "Angel",
        Email: "angela@test.com",
        Messages:
          "Hello, world"
      };
      // chai
      //   .request(server)
      //   .post("/api/PostContact")
      //   .send(form)
      //   .end((err, res) => {
      //     res.should.have.status(200);
      //     res.body.should.be.a("object");
      //     res.body.should.have.property("fullname");
      //     res.body.should.have.property("email");
      //     res.body.should.have.property("messages");
      //     done();
      //   })
      //   .timeout(10000);
    });
  });

//get list of contact form.

// describe("GET /api/contact", () => {
//   it("It Should GET all Contact Form Queries", (done) => {
//     let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmNiNzQ1MDQwOTMzMGI0NDYwYWE1YiIsImlhdCI6MTY0NDI5ODU5NH0.supm186X515GN32LjbNciM5UxDLBb2cNM2cm4JOHdqQ"
//     chai
//       .request(server)
//       .get("/api/contact")
//       .set({
//         'auth-token': Token,
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         done();
//       })
//       .timeout(10000);
//   });
// });

// //get contact form by id.

// describe("GET /api/contact/:id", () => {
//   it("It Should GET a Contact Form by ID", (done) => {
//     let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmNiNzQ1MDQwOTMzMGI0NDYwYWE1YiIsImlhdCI6MTY0NDI5ODU5NH0.supm186X515GN32LjbNciM5UxDLBb2cNM2cm4JOHdqQ"
//     const _id = "61f0fceb69b2259949e3ab88";
//     chai
//       .request(server)
//       .get("/api/contact/" + _id)
//       .set({
//         'auth-token': Token,
//       })  
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.have.property("_id");
//         res.body.should.be.a("object");
//         res.body.should.have.property("fullname");
//         res.body.should.have.property("email");
//         res.body.should.have.property("messages");
//         res.body.should.have.property("_id").equals(_id);
//         done();
//       })
//       .timeout(10000);
//   });
// });

// //delete a contact form query.

// describe("DELETE /api/contact/:id", () => {
//   let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmNiNzQ1MDQwOTMzMGI0NDYwYWE1YiIsImlhdCI6MTY0NDI5ODU5NH0.supm186X515GN32LjbNciM5UxDLBb2cNM2cm4JOHdqQ"
//   it("It Should DELETE a Contact Query by ID", (done) => {
//     const _id = "61f11e689436d4e969d39b6a";
//     request(server)
//       .delete("/api/contact/" + _id)
//       .set({
//         'auth-token': Token,
//       })
//       .expect(200)

//         done();
        
//       })
//       .timeout(10000);
  
// });