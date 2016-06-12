'use strict';

var React = require('React');
var View = require('View');
var Text = require('Text');
var Image = require('Image');
var StyleSheet = require('StyleSheet');

var Splash = React.createClass({
    render:function () {
        const { imageUrl, author } = this.props;
        return(
            <Image style={styles.cover} source={{uri:imageUrl}}>
                <Text style={styles.author}>©{author}</Text>
            </Image>
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

Splash.propTypes={
    imageUrl:React.PropTypes.string.isRequired,
    author:React.PropTypes.string.isRequired
};

module.exports = Splash;