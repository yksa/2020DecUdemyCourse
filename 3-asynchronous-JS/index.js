const fs = require('fs');
const { resolve } = require('path');
const { get } = require('superagent');
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

// readFilePro(`${__dirname}/dog.txt`)
//   .then((res) => {
//     console.log(`Breed: ${res}`);

//     return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);

//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
    throw err; // must throw, so reject can be catched
  }
  return '2: READY'; // treat as Promise automatically
};

// console.log('1: Will get dog pics!');
// getDogPic()
//   .then((x) => {
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log(err);
  }
})();
