import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Usama extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty#').then(function(resp){
    console.log(resp)
}).catch(err => console.log(err))
  }

  render() {
    return (
      <View>
        <Text> Usama </Text>
      </View>
    );
  }
}

export default Usama;
