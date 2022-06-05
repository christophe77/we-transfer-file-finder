const path = require('path');
const { Worker } = require('worker_threads');

const workerPath = path.join(process.cwd(), 'src', 'worker.js');

function useWorker(filepath) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(filepath);
    worker.on('online', () => {
      console.log('new task');
    });
    worker.on('message', (messageFromWorker) => {
      console.log(messageFromWorker);
      return resolve;
    });
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function main() {
  setInterval(async () => {
    await useWorker(workerPath);
  }, 500);
}
main();
