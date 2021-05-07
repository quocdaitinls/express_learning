const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.get("/api/user/:userId", function (req, res) {
        // get data from db
        let result = {
            firstname: "Quoc",
            lastname: "Dai",
        };
        res.json(result);
    });

    app.post("/api/user", jsonParser, function (req, res) {
        // create new and save to the database
    });

    app.put("/api/user", jsonParser, function (req, res) {
        // update user and save to the database
    });

    app.delete("/api/user/:userId", jsonParser, function (req, res) {
        // delete user and save to the database
    });
};
