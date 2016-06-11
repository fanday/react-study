'use strict';

var React = require('React');
var ListView = require('ListView');
var StyleSheet = require('StyleSheet');
var Text = require('Text');

var SimpleList = React.createClass({
    getInitialState:function(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        return{
            dataSource:ds.cloneWithRows(['a','b','c','A longer example','d','e'])
        }
    },
    _renderRow:function (rowData) {
        return <Text style={styles.row}>{rowData}</Text>; 
    },
    render:function () {
        return(<ListView style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
        />);
    }
});

var styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        flex:1,
        height: 200,
        width:350,
        alignItems:'center',
        borderWidth:1,
        borderColor:'red'
    },
    list:{
        flex:1,
        flexDirection: 'column',
        marginTop:20
    }
});

module.exports = SimpleList;
