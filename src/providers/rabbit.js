const amqp = require("amqplib/callback_api")
const config = require("../config/index");
const assignmentService = require("../services/logs_assigment/service");

const connect = (url) => {
    return new Promise((resolve, reject) => {
        amqp.connect(url, function (err, connection) {
            if (Boolean(err)) {
                reject(err)
            }
            resolve(connection);
        });
    })
}

const createChannel = connect => {
    return new Promise((resolve, reject) => {
        connect.createChannel(function(err,channel) {
            if (Boolean(err)) {
                reject(err)
            }
            resolve(channel)

        })
    })
}

exports.bootstrap = async function () {
    const connection = await connect(config.rabbit.url);
    const channel = await createChannel(connection);

    channel.assertExchange('logs','direct')

    channel.assertQueue('',{
        exclusive: true
    },function(err, q) {
        channel.bindQueue(q.queue,'logs','assignment');

        channel.consume(q.queue, function(msg) {
            assignmentService.create(JSON.parse(msg.content.toString()))
                .then(result => console.log(result))
        },{
            noAck:true
        })
    })
}
