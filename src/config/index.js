require("dotenv").config();


module.exports = {
    database: {
        mongo: {
            url: process.env.DB_MONGO_URL
        },
    },
    rabbit: {
        url: process.env.RABBIT_URL
    },
    grpcServer: process.env.GRPC_SERVER
}
