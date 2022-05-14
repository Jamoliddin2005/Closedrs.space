const mongoose = require("mongoose");

module.exports = () => {
    const URI = process.env.MongoUrl

    mongoose.connect(URI, {
        useNewUrlParser: true,
    });
    const db = mongoose.connection;

    db.on("open", () => {
        console.log("server running");
    });

    db.on("error", () => {
        console.log("server error");
    });
};