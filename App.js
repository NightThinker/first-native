import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: ''
  }

  placeNameChangeHandler = value => {
    this.setState({placeName: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working test 2!</Text>
        <TextInput 
          style={{width: 300,borderColor: 'black', borderWidth: 1}}
          value={this.state.placeName} 
          onChangeText={this.placeNameChangeHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
