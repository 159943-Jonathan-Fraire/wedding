const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const response = await fetch('https://api.externa.com/data');
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};