require('dotenv').config()
// console.log(process.env.JWT_SECRET)
import express from "express";
import appConfig from "./src/Config/app.config";
require('dotenv').config()
{
    /*@@/          0101          /@@*/
}
const app = express();

appConfig(app)

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("🥏Deep running in ", port, "⚠️👷🏻🛠️"));
