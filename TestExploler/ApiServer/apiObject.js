const request = require("supertest");
const { expect } = require("chai");
const BaseUrl = require("../GlobalVariable/BaseUrl");

const url = `${BaseUrl}`;

async function getMethod() {
    const response = await request(url).get("objects/12");
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function postMethod() {
    const response = await request(url)
        .post("objects")
        .send({
            name: "Amelia Widya Andini",
            data: {
                nik: "0056",
                telpon: "090231768212",
                alamat: "Lampung",
                pekerjaan: "QA Engineer",
            },
        })

    expect(response.status).to.equal(200);
    console.log(response.body.id);
    console.log(response.body);

    const id = response.body.id;
    return id;
}

async function putMethod(id) {
    const response = await request(url)
        .put(`objects/${id}`)
        .send({
            name: "Amelia Widya Andini",
            data: {
                nik: "0056",
                telpon: "090231768212",
                alamat: "Malang",
                pekerjaan: "QA Engineer",
            },
        })

    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function patchMethod(id) {
    const response = await request(url)
        .patch(`objects/${id}`)
        .send({
            name: "Amelia Widya Andini (PATCH name)"
        })

    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function deleteMethod(id) {
    const response = await request(url)
        .delete(`objects/${id}`);
    expect(response.status).to.equal(200);
    console.log(response.body);
}

module.exports = { getMethod, postMethod, putMethod, patchMethod, deleteMethod };
