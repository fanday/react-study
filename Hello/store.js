'use strict';

var types = require('./ActionTypes');
var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var thunk = require('redux-thunk').default;
var Actions = require('./SplashActions');

var initialState=[{
    imageUrl:'http://img05.tooopen.com/images/20150316/tooopen_sy_82600011535.jpg',
    author:'Default'
}];


function info(state, action){
    state = state||initialState;

    switch (action.type){
        case types.GET_INFO_REQUEST:
            //todo get Info :http://cn.redux.js.org/docs/advanced/AsyncActions.html
            console.log('get info');
            // store.dispatch(getInfoNow());
            //getInfoNow();
            // return [{
            //     imageUrl:'https://pic3.zhimg.com/b0f752fd5eaa091e4e38548240961d46.jpg',
            //     author:'Matthew Wiebe'
            // }].concat(state);
            return state;
        case types.GET_INFO_SUCCESS:
            console.log('success:'+action.state);
            return[{imageUrl:action.response.imageUrl, author:action.response.author}].concat(state);
        case types.GET_INFO_FAILURE:
                console.log("error:"+action.error);
        default:
                return state;
    }
}
function fetchInfo(){
    return fetch('https://news-at.zhihu.com/api/4/start-image/1080*1776');
}

function getInfoNow() {
    console.log('Get Info Now');
    return function (dispatch) {
        return fetch('https://news-at.zhihu.com/api/4/start-image/1080*1776')
            .then((response) => response.json())
            .then((responseJSON) => {
// Take a look at the format, if you want.
                console.log(responseJSON);
                var State = {imageUrl:responseJSON.img, author:responseJSON.text};
                dispatch(Actions.getInfoSuccess(State));

            })
            .catch((error) => {
                console.log("get an error");
                console.warn(error);
                dispatch(Actions.getInfoFailure(error));
            });
    };

}
var store = createStore(info,initialState,applyMiddleware(thunk));
module.exports.store = store;
module.exports.getInfoNow = getInfoNow;

// store.dispatch(
//     getInfoNow()
// );