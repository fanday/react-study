'use strict';
var types = require('./ActionTypes');

module.exports.getInfo = function getInfo() {
    return{
      type:types.GET_INFO_REQUEST
    };
}

module.exports.getInfoFailure = function getInfoFailure(error) {
    return{
        type:types.GET_INFO_FAILURE,
        error:error
    }
}

module.exports.getInfoSuccess = function getInfoSuccess(response) {
    return{
        type:types.GET_INFO_SUCCESS,
        response:response
    }
}