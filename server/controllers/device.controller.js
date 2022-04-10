const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/Api.error");
const uuid = require("uuid");
const path = require("path");

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            const fileName = uuid.v4() + ".jpg";
            
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            
            const newDevice = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);

                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: newDevice.id
                    })
                })
            }

            return res.json({ newDevice });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async get(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        
        limit = limit || 9;
        page = page || 1;
        
        let devices = null;
        let offset = limit * page - limit;
    
        if (!brandId && !typeId) 
            devices = await Device.findAndCountAll({ limit, offset }); // findAndCountAll for pagination
        if (brandId && !typeId)
            devices = await Device.findAndCountAll({ where: { brandId } }, limit, offset);
        if (!brandId && typeId)
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
        if (brandId && typeId)
            devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });

        return res.status(200).json({ devices: devices.rows });
    }

    async delete(req, res) {
        const { id } = req.params;
        await Device.destroy({ where: { id } });

        res.status(200).json({ message: "Девайс был удален" });
    }

    async getById(req, res) {
        const { id } = req.params;
        const device = await Device.findOne({ where: { id }, include: [{ model: DeviceInfo, as: "info" }] });

        return res.status(200).json({ device });
    }
}

module.exports = new DeviceController();