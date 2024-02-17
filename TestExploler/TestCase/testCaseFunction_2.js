const { getMethod, postMethod, putMethod, patchMethod, deleteMethod } = require("../ApiServer/apiObject");
const id = "ff8081818da13a0f018db7cfb31d1ed6";

describe("Testing API restful", function () {
    // it("Test GET", async function () {
    //     await getMethod();
    // });
    // it("Test POST", async function () {
    //     await postMethod();
    // });
    // it("Test PUT", async function () {
    //     await putMethod(id);
    // });
    // it("Test PATCH", async function () {
    //     await patchMethod(id);
    // });
    it("Test DELETE", async function () {
        await deleteMethod(id);
    });
});