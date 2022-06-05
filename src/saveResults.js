const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);

const today = new Date().toISOString().split('T')[0];
const resultsPath = path.join(process.cwd(), 'results');

async function saveResult(result) {
  if (!fs.existsSync(resultsPath)) {
    await mkdir(resultsPath, { recursive: true });
  }
  fs.appendFile(
    path.join(resultsPath, `${today}.log`),
    `${result}\r\n`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('new result added');
      }
    }
  );
}

module.exports = saveResult;
