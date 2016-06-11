'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var StyleSheet = require('StyleSheet');
var styles = require('./styles');

var Layout1 = React.createClass({
    render:function () {
        return (<View style={styles.parent}>
            <View style={styles.topBlock}>
                <View style={styles.leftCol}>
                    <View style={[styles.cellOne, styles.base]} />
                    <View style={[styles.base, styles.cellTwo]} />
                </View>
                <View style={[styles.cellThree, styles.base]} />
            </View>
            <View style={styles.bottomBlock}>
                <View style={[styles.cellFour, styles.base]}/>
                <View style={[styles.cellFive, styles.base]}/>
                <View style={styles.bottomRight}>
                    <View style={[styles.cellSix, styles.base]} />
                    <View style={[styles.cellSeven, styles.base]} />
                </View>
            </View>
        </View>);
    }
});



module.exports = Layout1;