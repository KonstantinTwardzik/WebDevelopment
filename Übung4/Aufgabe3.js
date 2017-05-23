// alles falsch
// at least i tried

const http = require("http");

http.get('http://swapi.co/api/people/2/', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  asyncGet(res, statusCode, contentType).then(value => {
    console.log(value);
    }).catch (reason => {
    console.error(reason);
  });
  
  }).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});



function asyncGet (res, statusCode, contentType) {
  return new Promise((resolve, reject) => {
    let error;
    if (statusCode !== 200) {
       error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
       error = new Error(`Invalid content-type.\n` + `Expected application/json but received ${contentType}`);
    }
     if (error) {
       reject = (error.message);
       res.resume();
       return;
        }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      resolve = (parsedData);
    } catch (e) {
      reject (e.message);
    }
    })
  });
  }
  
