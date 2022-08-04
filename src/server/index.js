const grpc = require("@grpc/grpc-js");
const wrapServerWithReflection = require('grpc-node-server-reflection')
const logsAssignment = require("../services/logs_assigment/build");
const mongoose = require("mongoose");
const config = require("../config/index");
const express = require("express");
const router = require("../routes")
const provider = require("../providers/providers");

function main() {
    const server = wrapServerWithReflection.default(new grpc.Server());
    mongoose.connect(config.database.mongo.url)
        .catch(err => console.log(err))
    server.addService(logsAssignment.service, logsAssignment.handler)

    server.bindAsync(`0.0.0.0:50051`, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });

    provider();

    const app = express();

    app.use(express.urlencoded({extend: true}))
    app.use(express.json())
    app.use("/api", router)

    app.listen(4000)


}

main()
