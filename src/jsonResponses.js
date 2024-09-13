const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(helloJSON));
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(timeJSON));
  response.end();
};
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
