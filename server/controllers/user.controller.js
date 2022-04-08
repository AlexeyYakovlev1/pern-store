const { User, Basket } = require("../models/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ApiError = require("../error/Api.error");

const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "24h" });
}

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body;
            
            if (!email || !password) {
                return next(ApiError.badRequest("Некорректный email или пароль"));
            }

            const findUser = await User.findOne({ where: { email } });

            if (findUser) {
                return next(ApiError.badRequest("Пользователь с таким email уже существует"));
            }

            const hashPassword = await bcrypt.hash(password, 7);
            const newUser = await User.create({ email, role: role || "USER", password: hashPassword });
            
            await Basket.create({ userId: newUser.id });
            
            return res.status(201).json({ message: "Пользователь зарегистрировался" });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const findUser = await User.findOne({ where: { email } });

            if (!findUser) {
                return next(ApiError.badRequest("Пользователь с таким email не существует"));
            }

            const comparePassword = bcrypt.compareSync(password, findUser.password);

            if (!comparePassword) {
                return next(ApiError.badRequest("Данные неверны"));
            }

            const payload = {
                id: findUser.id, email: findUser.email, role: findUser.role
            }
            const token = generateJWT(payload);
            
            return res.status(201).json({ token });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async auth(req, res, next) {
        try {
            const payload = {
                id: req.user.id, email: req.user.email, role: req.user.role
            }
            const token = generateJWT(payload);
            
            return res.status(200).json({
                token,
                infoUser: req.user
            });
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        
        await User.destroy({ where: { id } });

        res.status(200).json({ message: "Пользователь был удален" });
    }
}

module.exports = new UserController();