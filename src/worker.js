const axiosInstance = require('./axiosInstance');
const saveResult = require('./saveResults');
const generateRandom = require('./generateRandom');

const randomHash = generateRandom();

async function check() {
  try {
    // get cookies
    await axiosInstance.get('https://wetransfer.com/');
    const datas = {
      domain_user_id: 'b87fbeff-abd9-4b67-a3f9-37f6d437229d',
      intent: 'entire_transfer',
      recipient_id: '957735b0b8a7677bf5ab39d52d211b8420220604164753',
      security_hash: '4eda5e',
    };
    // check if a file exists
    const results = await axiosInstance.post(`/${randomHash}/download`, datas);

    if (results?.data?.direct_link) {
      await saveResult(results.data.direct_link);
    }
  } catch {
    console.log('not found');
  }
}

check();
