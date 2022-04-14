const ApiError = require("../error/Api.error");
const { BasketDevice, Basket } = require("../models/models");

class BasketController {
    async add(req, res, next) {
        try {
            const { productId } = req.body;
            const currentBasket = await Basket.findOne({ where: { userId: req.user.id } });
            const newBasketDevice = await BasketDevice.create({ basketId: currentBasket.id, deviceId: productId });
            
            return res.status(201).json({
                message: "Товар добавлен в корзину",
                device: newBasketDevice
            });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async remove(req, res, next) {
        try {
            const { productId } = req.body;
            const currentBasket = await Basket.findOne({ where: { userId: req.user.id } });
            
            await BasketDevice.destroy({ where: { deviceId: productId, basketId: currentBasket.id } });
            
            return res.status(201).json({ message: "Товар удален из корзины" });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async get(req, res, next) {
        try {
            const currentBasket = await Basket.findOne({ where: { userId: req.user.id } });
            const allProducts = await BasketDevice.findAll({ where: { basketId: currentBasket.id } });

            return res.json({ basket: allProducts });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new BasketController();