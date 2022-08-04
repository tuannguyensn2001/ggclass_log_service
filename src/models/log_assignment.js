const mongoose = require("mongoose");

const logAssignmentSchema = new mongoose.Schema({
    assignmentId: Number,
    action: String,
}, {
    timestamps: true
})

const LogAssignmentRepository = mongoose.model("LogAssignment", logAssignmentSchema);

module.exports = LogAssignmentRepository;
