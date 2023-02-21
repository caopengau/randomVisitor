const axios = require('axios');

async function main() {
  const numRequests = parseInt(process.argv[2]);
  if (isNaN(numRequests)) {
    console.error('Please provide a valid number of requests as a command line argument.');
    return;
  }

  const url = 'https://www.google.com';
  for (let i = 0; i < numRequests; i++) {
    try {
      const response = await axios.get(url);
      console.log(`Request ${i + 1} successful with status code ${response.status}`);
    } catch (error) {
      console.error(`Request ${i + 1} failed with error: ${error}`);
    }
  }
}

main();
