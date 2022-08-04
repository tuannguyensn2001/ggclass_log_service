require("dotenv").config();


module.exports = {
    database: {
        mongo: {
            url: process.env.DB_MONGO_URL
        }
    }
}
