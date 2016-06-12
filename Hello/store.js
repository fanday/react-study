'use strict';

var types = require('./ActionTypes');
var createStore = require('redux').createStore;

var initialState=[{
    imageUrl:'https://pic3.zhimg.com/b0f752fd5eaa091e4e38548240961d46.jpg',
    author:'Matthew Wiebe'
}];

function info(state, action){
    state = state||initialState;

    switch (action.type){
        case types.GET_INFO:
            //todo get Info
            return [{
                imageUrl:'https://pic3.zhimg.com/b0f752fd5eaa091e4e38548240961d46.jpg',
                author:'Matthew Wiebe'
            }].concat(state);
        default:
                return state;
    }
}

module.exports = createStore(info,initialState);