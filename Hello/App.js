'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var Image = require('Image');
var StyleSheet = require('StyleSheet');
var TouchableHighlight = require('TouchableHighlight');
var Splash = require('./Splash');
var Provider = require('react-redux').Provider;
var store = require('./store').store;
var SplashApp = require('./SplashApp');

var App = React.createClass({
    render:function () {
        return(
            <Provider store={store}>
                 <SplashApp/>
            </Provider>
        );
    }
});

module.exports = App;