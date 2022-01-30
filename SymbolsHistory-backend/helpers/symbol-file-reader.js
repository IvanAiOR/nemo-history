const  { readFile } = require('fs') ;
const symbols ={};
readFile('json_files\\symbols.json', "utf8", (err, jsonString) => {
    
  if (err) {
    console.log("Error reading file from disk: ", err);
    return;
  }
  try {
    symbols.json = JSON.parse(jsonString);
  } catch (err) {
    symbols.error =  "Error trying to parse file to json";
  }
});

module.exports = symbols;