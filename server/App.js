import { config } from "dotenv";
import express from "express";
import sequelize from "./store/store";
import cors from "cors";
import fileUpload from "express-fileupload";
import router from "./routes";
import { checkError } from "./middleware";
import path from "path";

const PORT = process.env.PORT | 5000;

const App = async () => {
  try {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.resolve(__dirname, "static")));
    app.use(fileUpload({}));
    app.use("/api", router);
    app.use(checkError);
    config();
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

export default App;
