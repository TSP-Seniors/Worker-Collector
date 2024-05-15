import fs from 'fs';
import crypto from 'crypto';

const generateHash = (input) => {
    return crypto.createHash('sha256').update(input).digest('hex');
};

const map = Array.prototype.map;
const csvfile = fs.readFileSync('../../TSP_4-2024_UsersCerts.csv');
const csvfile_to_string = csvfile.toString().split('\n');

let jsonObjects = [];

let headers = csvfile_to_string[0].split(',');
const newHeaders = map.call(headers, (current) => {
    if(current.includes(' ')){
        return current.split(' ').join('_');
    }else{
        return current;
    }
});

for(let i=1; i<csvfile_to_string.length; i++){
    let data = csvfile_to_string[i].split(',');
    let object = {};
    for(let j=0; j<data.length; j++){
        object[newHeaders[j].trim()] = data[j].trim();        
    }
    const uniqueKey = `${object.contact_name}_${object.certification_name}`;
    object.id = generateHash(uniqueKey);
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