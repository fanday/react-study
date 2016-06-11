'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var StyleSheet = require('StyleSheet');

var Layout1 = React.createClass({
    render:function () {
        return (<View style={styles.parent}>
            <Text style={styles.child}> Child One </Text>
            <Text style={styles.child}> Child Two </Text>
            <Text style={styles.child}> Child Three </Text>
        </View>);
    }
});


var styles = StyleSheet.create({
    parent: {
        backgroundColor: '#F5FCFF',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        borderColor: '#AA0099',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    }
});

module.exports = Layout1;