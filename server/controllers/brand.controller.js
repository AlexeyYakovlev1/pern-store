const { Brand } = require("../models/models");

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const newBrand = await Brand.create({ name });

        return res.json({ newBrand, message: "Брэнд был создан" });
    }

    async delete(req, res) {
        const { id } = req.params;
        
        await Brand.destroy({ where: { id } });

        res.status(200).json({ message: "Брэнд был удален" });
    }

    async get(req, res) {
        const brands = await Brand.findAll();

        return res.json({ brands });
    }
}

module.exports = new BrandController();