const  { readFile } = require('fs') ;
const historical ={};
readFile('json_files\\historical.json', "utf8", (err, jsonString) => {
    
  if (err) {
    console.log("Error reading file from disk: ", err);
    return;
  }
  try {
    historical.json = JSON.parse(jsonString);
  } catch (err) {
    historical.error =  "Error trying to parse historical file to json";
  }
});

module.exports = historical;