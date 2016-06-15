/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const {AppRegistry} = require('react-native');
var React = require('React');
var StyleSheet = require('StyleSheet');
var Text = require('Text');
var View = require('View');
var TouchableHighlight = require('TouchableHighlight');
var TouchableOpacity = require('TouchableOpacity');
var Dimensions=require('Dimensions');
var Image = require('Image');
var ScrollView = require('ScrollView');

var SideMenu = require('react-native-side-menu');
const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';


var styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

var  Button =React.createClass({
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  },
  render() {
    return (
        <TouchableOpacity
            onPress={this.handlePress}
            style={this.props.style}>
          <Text>{this.props.children}</Text>
        </TouchableOpacity>
    );
  }
});

var Basic = React.createClass( {
  getInitialState:function () {
    return {isOpen: false,
      selectedItem: 'About',}
  },
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  },
  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  },
  onMenuItemSelected(item){
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  },
  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
        <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+Control+Z for dev menu
            </Text>
            <Text style={styles.instructions}>
              Current selected menu item is: {this.state.selectedItem}
            </Text>
          </View>
            <Button style={styles.button} onPress={() => this.toggle()}>
              <Image
                  source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 32, height: 32, }} />
            </Button>

        </SideMenu>
    );
  }
});

var Menu = React.createClass({
  statics:{
    onItemSelected: React.PropTypes.func.isRequired,
  },
  render() {
    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
          <View style={styles.avatarContainer}>
            <Image
                style={styles.avatar}
                source={{ uri, }}/>
            <Text style={styles.name}>Your name</Text>
          </View>

          <Text
              onPress={() => this.props.onItemSelected('About')}
              style={styles.item}>
            About
          </Text>

          <Text
              onPress={() => this.props.onItemSelected('Contacts')}
              style={styles.item}>
            Contacts
          </Text>
        </ScrollView>
    );
  }
});

var ContentView = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
        </View>
    );
  }
});

var Application = React.createClass({
  render() {
    //const menu = <Menu navigator={navigator}/>;

    return (
        <SideMenu >
          <ContentView/>
        </SideMenu>
    );
  }
});
AppRegistry.registerComponent('sidemenu', () => Basic);
