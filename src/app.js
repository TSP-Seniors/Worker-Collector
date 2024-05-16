import express from "express"
import workerRouter from "./routes/worker.routes.js"
import ejs from "ejs";

const app = express();

app.set('view engine', 'ejs');
app.use(workerRouter);

export default app;