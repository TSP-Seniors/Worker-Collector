import app from "./app.js";

const PORT = process.env.PORT

app.listen(PORT);
app.get('/', (req, res) => {
    res.send('Hola mundo');
});