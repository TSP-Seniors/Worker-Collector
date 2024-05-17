import { getWorkers, getCollections } from "../db.js";

export const homePage = async (req, res) => {
    try {
        const colletions = await getCollections();
        res.render('home', {
            Colletions: colletions,
            title: 'Home',
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const workerPage = async (req, res) => {
    try {
        const workers = await getWorkers();
        res.render('workers', {
            ArrWorkers: workers,
            title: 'w',
        });
    } catch (error) {
        console.log('Error al obtener los trabajadores:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}