const axios = require("axios");

axios({
    method: "GET",
    url: "http://localhost:8080/lactosafe/v1/apis/info/admin",
    headers: {
        "X-Client-Id": "fake-id",
        Authorization: "Bearer fakeAuthToken",
    },
})
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("ERROR", error.response.data.detail);
    });