const LogAssignment = require("../../models/log_assignment");

exports.create = async data => {
    const log = new LogAssignment(data);
    await log.save();
    return log;
}

exports.getAll =  () => {
    return LogAssignment.find();
}
