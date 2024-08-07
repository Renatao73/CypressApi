const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, '../cypress/screenshots');

// Função para limpar a pasta de screenshots
function clearScreenshots() {
  if (fs.existsSync(screenshotsDir)) {
    fs.readdirSync(screenshotsDir).forEach(file => {
      const filePath = path.join(screenshotsDir, file);
      fs.unlinkSync(filePath);
    });
    console.log('Screenshots directory cleared.');
  } else {
    console.log('Screenshots directory does not exist.');
  }
}

clearScreenshots();
