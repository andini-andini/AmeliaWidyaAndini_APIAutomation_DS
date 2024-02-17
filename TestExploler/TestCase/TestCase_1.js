const request = require("supertest");
const { expect } = require("chai");
const BaseUrl = require("../GlobalVariable/BaseUrl");
// const supertest = require("supertest");
const url = `${BaseUrl}`;

describe("Testing API restful", function () {
    it("Test GET", async function () {
        const response = await request(url).get("objects/12");
        expect(response.status).to.equal(200);
        console.log(response.body);
    });
});
