const fs = require('fs');
const csv = require('csv-parser');

const filePath = './Train_details.csv';
const outputFilePath = './JsonTrain.json';

const data = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV to JSON conversion finished.');
    // Convert data array to JSON format
    const jsonData = JSON.stringify(data, null, 2);

    // Write JSON data to output file
    fs.writeFile(outputFilePath, jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file written successfully:', outputFilePath);
      }
    });
  })
  .on('error', (error) => {
    console.error('Error occurred while reading or parsing the CSV file:', error);
  });
