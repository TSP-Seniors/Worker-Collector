import fs from 'fs';

let csvfile = fs.readFileSync('../../TSP_4-2024_UsersCerts.csv');
const csvfile_to_string = csvfile.toString().split('\n');

let jsonObjects = [];

let headers = csvfile_to_string[0].split(',');

for(let i=0; i<csvfile_to_string.length; i++){
    let data = csvfile_to_string[1].split(',');
    let object = {};
    for(let j=0; j<data.length; j++){
        object[headers[j].trim()] = data[j].trim();        
    }
    jsonObjects.push(object);
}

const jsonData = JSON.stringify(jsonObjects, null, 2);

fs.writeFileSync('../../TSP_UserCerts.json', jsonData, (error) => {
    if(error){
        console.log('No se pudo escribir el archivo JSON', error);
        return;
    }
    console.log('Archivo JSON generado correctamente.');
});