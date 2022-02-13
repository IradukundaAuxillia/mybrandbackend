import chai from "chai";
import chaiHttp from "chai-http";
import "dotenv/config";
import server from "../src/app.js";

//Assertion style
chai.should();

chai.use(chaiHttp);

const testPost = {
  Title: "Trending Post",
  Body: "dcffgftyuiukijloiouytrewzxxcvbmj",
  ImageLink: "https://",
};

const updatePost = {
  Title: "New article",
  Body: "dcffgftyuiukijloiouytrewzxxcvbmj",
  ImageLink: "https://youtu.be/f3wOS11SP9I",
};

describe("articles", () => {
  //get all posts

  describe("GET /api/articles", () => {
    it("It Should GET all Posts", async () => {
      const res = await chai.request(server).get("/api/articles/");
      res.should.have.status(200);
      res.body.should.be.a("array");

      res.body[1].title.should.contain("my first arti");
    });
  });
});
describe("articles", () => {
  //get all posts

  describe("api/articles/create", () => {
    it("create a post", async () => {
      const res = await chai.request(server).get("/api/articles/create");
      res.should.have.status(200);
      res.body.should.be.a("array");
      console.log(res);

      // res.body[1].title.should.contain("my first arti");
    });
  });
});
// import chaiHttp from "chai-http";
//  import server from "../index.js";

// import chai from "chai";
// import chaiHttp from "chai-http";
// import server from "../src/app.js";
// import request from "supertest";
// import "dotenv/config";


// Assertion style
// chai.should();

// chai.use(chaiHttp);

// const testPost = {
//   Title : "Trending Post",
//   Body : "dcffgftyuiukijloiouytrewzxxcvbmj",
//   ImageLink : "https://"
// };

// const updatePost = {
//   Title : "New article",
//   Body : "dcffgftyuiukijloiouytrewzxxcvbmj",
//   ImageLink : "https://youtu.be/f3wOS11SP9I"
// };

// describe("articles", () => {
//   get all posts

//   describe("GET /api/articles", () => {
//     it("It Should GET all Posts", async(done) => {
//     const res= await   chai.request(server).get("/api/articles/")
//         res.should.have.status(200)
      
//     });
//   });

//   //get post by id

//   describe("GET /api/articles/:id", () => {
//     it("It Should GET a Post by ID", async(done) => {
//       const _id = "61f6bd7b0713577b87e01a13";
//     const res=await chai.request(server).get("/api/articles/" + _id)
//     res.should.have.status(200);
//     res.body.should.have.property("_id");
//     res.body.should.be.a("object");
//     res.body.should.have.property("title");
//     res.body.should.have.property("body");
//     res.body.should.have.property("imgLink");
//     res.body.should.have.property("_id").equals(_id);
//     });
//   });

//   //post route

//   describe("POST articles", () => {
//     let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmNiNzQ1MDQwOTMzMGI0NDYwYWE1YiIsImlhdCI6MTY0NDI5ODU5NH0.supm186X515GN32LjbNciM5UxDLBb2cNM2cm4JOHdqQ"
//   it("should post blog with valid credentials", (done) => {
//     request(server)
//       .post("/api/articles/")
//       .set({
//           'admin-token': Token,
//       })  
//       .send(testblog)
//       .expect(200)
      
//        done();
     
//   });

// });

//  // delete route

//   describe("DELETE /api/Deletearticles/:id", () => {
//     let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmNiNzQ1MDQwOTMzMGI0NDYwYWE1YiIsImlhdCI6MTY0NDI5ODU5NH0.supm186X515GN32LjbNciM5UxDLBb2cNM2cm4JOHdqQ"
//     it("It Should DELETE a Post by ID", (done) => {
//       const _id = "61f6bd7b0713577b87e01a13";
//       request(server)
//         .delete("/api/articles/" + _id)
//         .set({
//           'admin-token': Token,
//         })
//         .expect(200)  

//           done();
          
//         })
//         .timeout(10000);
    
//   });

//   //patch route

//   describe("PATCH /api/Updatearticles/:id", () => {
//     let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmNiNzQ1MDQwOTMzMGI0NDYwYWE1YiIsImlhdCI6MTY0NDI5ODU5NH0.supm186X515GN32LjbNciM5UxDLBb2cNM2cm4JOHdqQ"
//     it("It Should PATCH a Post by ID", (done) => {
//       const _id = "61f6bd7b0713577b87e01a13";
//       request(server)
//         .patch("/api/Updateblog/" + _id)
//         .set({
//           'admin-token': Token,
//         })
//         .send(updatearticles)
//         .expect(200)  

//           done();
          
//         })
//         .timeout(10000);
    
//   });
