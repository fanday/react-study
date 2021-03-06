'use strict';

var React = require('React');
var Text = require('Text');
var StyleSheet = require('StyleSheet');
var View = require('View');

var Forecast = React.createClass({
    render:function(){
        return (
            <View>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions:{this.props.description}
                </Text>
                <Text style={styles.mainText}>
                    {this.props.temp}°F
                </Text>
            </View>);
    }
});

var styles = StyleSheet.create({
    bigText:{
        flex:2,
        fontSize: 20,
        textAlign:'center',
        margin: 10,
        color:'#9C27B0'
    },
    mainText:{
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color:'#9C27B0'
    }
})

module.exports = Forecast;