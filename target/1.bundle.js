webpackJsonp([1],{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

"use strict";
let getBarkStyle = function ( isHowler ) {
  return isHowler ? 'woooooow!' : 'woof, woof!';
};

class Dog {
  constructor( name, breed ) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name}: ${getBarkStyle(this.breed === 'husky')}`;
  }
}/* harmony export */ exports["Dog"] = Dog;

class Wolf {
  constructor( name ) {
    this.name = name;
  }

  bark() {
    return `${this.name}: ${getBarkStyle(true)}`;
  }
}/* harmony export */ exports["Wolf"] = Wolf;

/***/ }

});