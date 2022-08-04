const service = require("./service");

exports.create = async (req,res) => {
    const result = await service.create(req.body);
    return res.json({
        message: "done",
        data: result
    })
}
