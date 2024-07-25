const { expect } = require("chai");
const app = require("./api");
const request = require('request');

describe("Index page", () => {
  const API_URL = "http://localhost:7865";

  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (_err, res) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal("Welcome to the payment system");
      done();
    });
  });
});
