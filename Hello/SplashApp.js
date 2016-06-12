'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var Image = require('Image');
var StyleSheet = require('StyleSheet');
//var TouchableHighlight = require('TouchableHighlight');
var Splash = require('./Splash');
var Provider = require('react-redux').Provider;
var store = require('./store');
var Actions = require('./SplashActions');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

var count = 0;

var SplashApp = React.createClass({
    render:function () {
        var dispatch = this.props.dispatch;
        var info = this.props.info;
        var actions = bindActionCreators(Actions, dispatch);
        console.log("url:"+info.imageUrl,"text:"+info.author);
        return(
            // <TouchableHighlight
            //     onPressIn={this._onPressIn}
            //     onPressOut={this._onPressOut}
            //     style={styles.touchable}>
            //     <Splash imageUrl={this.state.imageUrl} author={this.state.author}></Splash>
            // </TouchableHighlight>
        <Splash imageUrl={info.imageUrl} author={info.author}></Splash>

        );
    }
});

var styles = StyleSheet.create({
    cover:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end'
    },
    touchable:{
        flex:1,
    },
    author:{
        flex:1,
        padding:20,
        backgroundColor: 'transparent',
        fontSize:20,
        color:'white',
        textAlign:'center',
    },
});

function mapStateToProps(state) {
    return{
        info:state[0]
    }
}

module.exports = connect(mapStateToProps)(SplashApp);