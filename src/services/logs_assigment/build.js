const handler = require("./transport");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const path = __dirname+"/../../proto/logs_assignment.proto";

const packageDefinition = protoLoader.loadSync(
    path
)
const logsAssignmentProto = grpc.loadPackageDefinition(packageDefinition).LogAssignmentService;

module.exports = {
    service: logsAssignmentProto.service,
    handler
}
