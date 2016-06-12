'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var Image = require('Image');
var StyleSheet = require('StyleSheet');
var TouchableHighlight = require('TouchableHighlight');
var Splash = require('./Splash');

var count = 0;

var Zhihu = React.createClass({
    getInitialState:function () {
        return({
            imageUrl:'https://pic3.zhimg.com/b0f752fd5eaa091e4e38548240961d46.jpg',
            author:'Matthew Wiebe',
        });

    },
    _onPressIn:function () {
        console.log('Press In!');
    },
    _onPressOut:function () {
        console.log('Press Out!Try get a new image');
        count = count+1;
        console.log("count"+count);
        fetch('https://news-at.zhihu.com/api/4/start-image/1080*1776')
            .then((response) => response.json())
            .then((responseJSON) => {
// Take a look at the format, if you want.
                console.log(responseJSON);
                this.setState({
                    imageUrl:responseJSON.img,
                    author:responseJSON.text+count
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    },
    render:function () {
        return(
        // <TouchableHighlight
        //     onPressIn={this._onPressIn}
        //     onPressOut={this._onPressOut}
        //     style={styles.touchable}>
        //     <Splash imageUrl={this.state.imageUrl} author={this.state.author}></Splash>
        // </TouchableHighlight>
                <Splash imageUrl={this.state.imageUrl} author={this.state.author}></Splash>

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

module.exports = Zhihu;