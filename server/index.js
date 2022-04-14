require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const sequalize = require("./db");

require("./models/models");

const errorMiddleware = require("./middleware/ErrorHandling.middleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.static(path.resolve(__dirname, "static"))); // для раздачи статики
app.use(fileUpload({}));

app.use("/api", require("./routes/index"));

// error middleware должен идти всегда последним
app.use(errorMiddleware);

const start = async() => {
    try {
        await sequalize.authenticate(); // подключение к бд
        await sequalize.sync(); // будет смерять состояние бд с со схемой данных

        app.listen(PORT, () => {
            console.log(`server has been started on port ${PORT}`);
        })
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
};

start();