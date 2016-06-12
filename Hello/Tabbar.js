'user strict';

var React = require('React');
var Component = require('Compoment');
var View = require('View');
var Text = require('Text');
var SrollView = require('SrollView');
var Tabbar = require('react-native-tabbar');
var Tab = require('react-native-tabbar');
var RawContent = require('react-native-tabbar');
var IconWithBar = require('react-native-tabbar');
var glypyMapMaker = require('react-native-tabbar');

const glypy = glypyMapMaker({
    Home: 'e900',
    Camera: 'e901',
    Stat: 'e902',
    Settings: 'e903',
    Favorite: 'e904'
});

var App = React.createClass({
    getInitialState:function () {
        return {toggle:false};
    },

    componentDidMount:function() {
        // let toggle = "tab2";
        // setInterval(() => {
        //   console.log(`goto ${toggle}`);
        //   this.refs['myTabbar'].gotoTab(toggle);
        //   toggle = toggle == "tab2"? "tab3" : "tab2";
        // }, 1000);
        //
        //
        //
        // let toggleShow = true;
        // setInterval(() => {
        //   toggleShow = !toggleShow;
        //   this.refs['myTabbar'].getBarRef().show(toggleShow);
        // }, 200);


        // setTimeout(() => {
        //   this.refs['myTabbar'].gotoTab('tab2');
        // }, 2000);
        //
        // setTimeout(() => {
        //   this.refs['myTabbar'].gotoTab("tab3");
        // }, 4000);
    },

    tabbarToggle:function() {
        this.refs['myTabbar'].getBarRef().show(this.state.toggle);
        this.setState({toggle:!this.state.toggle});
    },

    render:function() {
        return (
            <Tabbar ref="myTabbar" barColor={'gray'}>
                <Tab name="home">
                    <IconWithBar label="Home" type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>this.tabbarToggle()}>Toggle Tabbar</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="camera">
                    <IconWithBar label="Camera" type={glypy.Camera} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('camera')}>Camera</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="stats">
                    <IconWithBar label="Stats" type={glypy.Stat} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('stats')}>Stats</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="favorite">
                    <IconWithBar label="Fav" type={glypy.Favorite} from={'icomoon'}/>
                    <RawContent>
                        <MyLongScrollView/>
                    </RawContent>
                </Tab>
                <Tab name="settings">
                    <IconWithBar label="Settings" type={glypy.Settings} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('settings')}>Settings</Text>
                        </View>
                    </RawContent>
                </Tab>
            </Tabbar>
        );
    }
});


var  MyLongScrollView = React.createClass({
    generateContents:function() {
        let contents = [];
        for (let i = 0; i < 200; i++) {
            contents.push(
                <Text key={i}>My Awesome Content {i}</Text>
            );
        }

        return contents;
    },

    onScroll:function(e) {
        const {
            nativeEvent: {
                contentOffset: { y }
            }
        } = e;

        const { getBarRef } = this.context;
        getBarRef().setBarHeight(y);
    },

    render:function() {
        return (
            <ScrollView
                onScroll={this.onScroll.bind(this)}
                scrollEventThrottle={16}
                style={{ flex: 1}}
                contentContainerStyle={{ alignItems: 'center' }}>
                {this.generateContents()}
            </ScrollView>
        );
    }
});

MyLongScrollView.contextTypes = {
    getBarRef: React.PropTypes.func
};

module.exports = App;