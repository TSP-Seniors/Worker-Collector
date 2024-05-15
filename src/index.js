import app from "./app.js";
import { connectDB, uploadDataBase } from "./db.js";

const { PORT } = process.env;
const url_json = "TSP_UserCerts.json";

connectDB();
uploadDataBase(url_json);
app.listen(PORT);
