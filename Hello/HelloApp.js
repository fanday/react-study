'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var StatusBar = require('StatusBar');
var StyleSheet = require('StyleSheet');
var TouchableHighlight = require('TouchableHighlight');

var HelloApp = React.createClass({
    getInitialState:function(){
        return { pressing:false,login:false}
    } ,
    _onPressIn:function(){
        this.setState({pressing: true});
    },
    _onPressOut:function(){
        this.setState({pressing:false});
        this.setState({login:true});
    },
    render:function () {
        var content = null;
        if(this.state.login === false){
            content = <TouchableHighlight
                onPressIn={this._onPressIn}
                onPressOut={this._onPressOut}
                style={styles.touchable}>
                <View style={styles.button}>
                    <Text style={styles.welcome}>
                        {this.state.pressing ? 'EEK!' : 'PUSH ME'}
                    </Text>
                </View>
            </TouchableHighlight>;
        }else{
            content = <Text style={styles.info}> 登录成功</Text>;
        }
        return (

            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.2)" barStyle="light-content"/>

                <Text style={styles.info}>Hello App</Text>
                {content}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'black',
        alignItems:'center'
    },
    info:{
        paddingTop:20,
        color:'red',
        alignSelf:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    touchable: {
        borderRadius: 20,
        height: 60,
        width: 200,
        alignItems:'center',
    },
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 20,
        height: 60,
        width: 200,
        justifyContent: 'center'
    },
});

module.exports = HelloApp;
