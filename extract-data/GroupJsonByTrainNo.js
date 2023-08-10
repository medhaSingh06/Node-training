const fs = require('fs');
const _ = require('lodash');

const jsonFilePath = './JsonTrain.json';
const outputFilePath = './GroupTrain.json';

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Group data by "Train_No"
    const groupedData = _.groupBy(jsonData, 'Train_No');

    // Convert the grouped data object to JSON string
    const groupedJsonData = JSON.stringify(groupedData, null, 2);

    // Write the grouped JSON data to the output file
    fs.writeFile(outputFilePath, groupedJsonData, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing JSON file:', writeErr);
      } else {
        console.log('Grouped JSON file written successfully:', outputFilePath);
      }
    });
  } catch (parseError) {
    console.error('Error parsing JSON content:', parseError);
  }
});
