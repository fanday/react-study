'use strict';
var types = require('./ActionTypes');

module.exports.getInfo = function getInfo() {
    return{
      type:types.GET_INFO
    };
}