const scrape = require('website-scraper');
const fs = require('fs')
const path = require('path')
const options = {
  urls: ['https://meesho.com'],
  directory: path.join(__dirname,"./webscarapperData/"),
  subdirectories: [
    {directory: 'img', extensions: ['.jpg', '.png', '.svg']},                            
    {directory: 'js', extensions: ['.js']},                                
    {directory: 'css', extensions: ['.css']}                  
  ]
};

// with async/await
scrape(options).then((result) => {
  let writer = fs.createWriteStream('test_gfg.txt') 
  writer.write(result);
});



