"use strict";
// const {MyMath} = require('./MyMath.js');
// const {Component} = require('./Component.js');

// const result = MyMath.sum(4,8)
// console.log('result =', result)

// const component = new Component()
// component.render()

// const fs = require("fs");
// console.log(fs);

// fs.readFile('./test.txt', {encoding: 'utf-8'}, (err,data) => {
//     if(err) throw err
//     console.log(data);
// })

// fs.promises
//   .readFile("./test.txt", { encoding: "utf-8" })
//   .then((data) => {
//     return fs.promises.appendFile("./test3.txt", data + "\nLOREM!!!", {
//       encoding: "utf-8",
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// fs.promises
//   .readFile("./test.txt", { encoding: "utf-8" })
//   .then((data) => {
//     return fs.promises.writeFile("test2.txt", data + "\nLOREM!!!", {
//       encoding: "utf-8",
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });


const _ = require('lodash')

console.log(_.random(3,8))