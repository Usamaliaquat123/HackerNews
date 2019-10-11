import { createAppNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


export default createAppNavigator(createStackNavigator({
    Timeline : { screen : TimeLine },
    News : { screen : ProfileScreen }
}))