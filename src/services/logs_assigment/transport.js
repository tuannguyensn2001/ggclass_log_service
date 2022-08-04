const service = require("./service");
exports.GetLogAssignmentByAssignment = async function (call,callback) {
    const result = await service.getAll();
    callback(null,{
        data: result
    })
}
