import express from "express";
import RouterTool from "./src/Router/Router.tool";

const app = express();

RouterTool(app)

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("🥏Deep running in ", port, "⚠️👷🏻🛠️"));
