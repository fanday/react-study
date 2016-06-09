'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var TextInput = require('TextInput');
var Image = require('Image');

var Forecast = require('./Forecast');

var WeatherProject = React.createClass({
// If you want to have a default zip code, you could add one here
    getInitialState() {
        return ({
            zip: '',
            forecast:{
                main:'Clouds',
                description:'few clouds',
                temp:45.7
            }
        });
    },
// We'll pass this callback to the <TextInput>
    _handleTextChange(event) {
// log statements are viewable in Xcode,
// or the Chrome debug tools
        console.log(event.nativeEvent.text);
        this.setState({
            zip: event.nativeEvent.text //获取输入的值
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./image/login-background.png')} resizeMode='cover' style={styles.backdrop}>
                    <Text style={styles.welcome}>
                        You input {this.state.zip}.
                    </Text>
                    <Forecast
                        main={this.state.forecast.main}
                        description={this.state.forecast.description}
                        temp={this.state.forecast.temp}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType='go'
                        onSubmitEditing={this._handleTextChange}/>
                </Image>
            </View>
        );
    }
});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  //
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        height: 40,
        width:270,
        alignSelf: 'center'
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    }
});
module.exports = WeatherProject;