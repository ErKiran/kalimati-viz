const fs=require('fs');
const path=require('path');


function combineJSONFiles(directoryPath, outputFilePath) {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
     
  
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    const combinedData = [];
      console.log('Found JSON files:', jsonFiles);
      
    jsonFiles.forEach(file => {
      const filePath = path.join(directoryPath, file);
      const jsonData = JSON.parse(fs.readFileSync(filePath));

      jsonData.prices.forEach(price => {
        const existingItemIndex = combinedData.findIndex(item => item.name === jsonData.commodityname );
        if (existingItemIndex !== -1) {
          combinedData[existingItemIndex].prices.push({
            date: jsonData.date,
            name: price.commodityname,
            unit: price.commodityunit,
            price: parseFloat(price.avgprice)
          });
        } else {
          combinedData.push({
            date: jsonData.date,
            name: price.commodityname,
            unit: price.commodityunit,
            price: parseFloat(price.avgprice)
          });
        }
      });
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(combinedData, null, 2));
    console.log('JSON files combined successfully.');
  });
}

const ipFilePath = 'kalimati/data/json/2023/05';
const opFilePath = './combined.json';

combineJSONFiles(ipFilePath, opFilePath);




