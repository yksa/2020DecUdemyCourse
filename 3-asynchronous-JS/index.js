const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

// callback

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`);

//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
//         if (err) return console.log(err.message);

//         console.log(res.body.message);

//         fs.writeFile('dog-img.txt', res.body.message, err => {
//             if (err) return console.log(err.message);

//             console.log('Random dog image saved to file!');
//         });
//     });
// });

// promise

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Error occurs');
      resolve('Random dog image save to file!');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((res) => {
    console.log(`Breed: ${res}`);

    return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
