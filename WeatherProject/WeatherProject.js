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
        var zip = event.nativeEvent.text;
        this.setState({zip: zip});
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' +
            zip + '&units=imperial&APPID=ffa9e21722efffe0f7c9bb19ec8c4d31')
            .then((response) => response.json())
            .then((responseJSON) => {
// Take a look at the format, if you want.
                console.log(responseJSON);
                this.setState({
                    forecast: {
                        main: responseJSON.weather[0].main,
                        description: responseJSON.weather[0].description,
                        temp: responseJSON.main.temp
                    }
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    },
    render() {

        var content = null;
        if (this.state.forecast !== null) {
            content = <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}/>;
        }

        return (
            <View style={styles.container}>
                <Image source={require('./image/login-background.png')} resizeMode='cover' style={styles.backdrop}>
                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>
                            <View style={styles.zipContainer}>
                                <TextInput
                                    style={[styles.zipCode, styles.mainText]}
                                    returnKeyType='go'
                                    onSubmitEditing={this._handleTextChange}/>
                            </View>
                        </View>
                        {content}
                    </View>
                </Image>
            </View>
        );
    }
});

var baseFontSize = 16;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: 'transparent',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
    zipContainer: {
        flex: 1,
        borderBottomColor: '#9C27B0',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3
    },
    zipCode: {
        width: 50,
        height: baseFontSize,
    },
    mainText: {
        flex: 1,
        fontSize: baseFontSize,
        color: '#9C27B0'
    }
});

module.exports = WeatherProject;