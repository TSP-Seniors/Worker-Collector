import { getWorkers } from "../db.js";

export const homePage = (req, res) => {
    res.render('home');
}

export const workerPage = async (req, res) => {
    try {
        const workers = await getWorkers();
        res.render('workers', {ArrWorkers: workers, title: 'Home'});
    } catch (error) {
        console.log('Error al obtener los trabajadores:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}