    import React, { Component } from 'react';
    import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import LottieView from 'lottie-react-native';
    class Timeline extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      render() {
        return (
      
        <View>
           {/* <LottieView source={require('./../../assets/animations/loadingContent.json')} autoPlay loop />; */}
            <Card><Text>Helo</Text></Card>
        </View>
        );
      }
    }
    
    export default Timeline;
    