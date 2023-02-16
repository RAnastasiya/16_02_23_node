"use strict";
const {MyMath} = require('./MyMath.js');
const {Component} = require('./Component.js');

const result = MyMath.sum(4,8)
console.log('result =', result)

const component = new Component()
component.render()