import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
        <TextInput 
          style={{width: 300}}
          placeholder='An awesome place'
          value={this.state.placeName} 
          onChangeText={this.placeNameChangeHandler}/>
        <Button 
          title='Add'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
