import mongoose from "mongoose";
import fs from "fs";
import Worker from "./models/worker.js";

const { URL_MONGO_DB } = process.env;

// Esta funcion se conecta con la base de datos, en este caso con mongo
export async function connectDB() {
  try {
    await mongoose.connect(URL_MONGO_DB);
    console.log(">>> Connected");
  } catch (error) {
    console.log(error);
  }
}

// Esta funcion carga la informaición del archivo JSON a la base de datos
export async function uploadDataBase(file) {
  try {

    await Worker.deleteMany({}); // Borra la base de datos actual

    // Crea los objetos con el modelo presiseñado y los sube a Atlas
    const jsonData = JSON.parse(fs.readFileSync(file, "utf-8"));
    for (let i = 0; i < jsonData.length; i++) {
      const newWorker = new Worker({
        partner_name: jsonData[i].partner_name,
        sfdc_id: jsonData[i].sfdc_id,
        contact_name: jsonData[i].contact_name,
        certification_name: jsonData[i].certification_name,
        certification_date: jsonData[i].certification_date,
        expiration_date: jsonData[i].expiration_date,
        id: jsonData[i].id,
      });
      await newWorker.save();
      // console.log(jsonData[i].id, "guardado.");
    }
    console.log('Trabajadores subidos a mongo');
  } catch (error) {
    console.log("Hubo un error: ", error);
  }
}

// Esta funcion trae todos los objetos guardados en la base de datos
export async function getWorkers() {
    try {
        const workers = await Worker.find();
        console.log('Trabajadores cargados');
        // console.log(workers);
        return workers;
    } catch (error) {
        console.log('Error al obtener los datos:', error);
    }
}