import mongoose from "mongoose";
import fs from "fs";
import Worker from "./models/worker.js";

const { URL_MONGO_DB } = process.env;

export async function connectDB() {
  try {
    await mongoose.connect(URL_MONGO_DB);
    console.log(">>> Connected");
  } catch (error) {
    console.log(error);
  }
}

export async function uploadDataBase(file) {
  try {
    // Borrar todos los documentos de la colección Worker antes de agregar nuevos
    await Worker.deleteMany({});

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
  } catch (error) {
    console.log("Hubo un error: ", error);
  }
}
