const { Type } = require("../models/models");

class TypeController {
    async create(req, res) {
        const { name } = req.body;
        const newType = await Type.create({ name });

        return res.json({ newType, message: "Тип был добавлен" })
    } 

    async get(req, res) {
        const types = await Type.findAll();

        return res.json({ types });
    }

    async delete(req, res) {
        const { id } = req.params;
        await Type.destroy({ where: { id } });

        res.status(200).json({ message: "Тип был удален" });
    }
}

module.exports = new TypeController();