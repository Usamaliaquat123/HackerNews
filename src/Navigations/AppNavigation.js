import { createAppNavigator, createStackNavigator} from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack'
import Timeline from '../containers/Timeline/Timeline';


const appNav =  createStackNavigator({
    Timeline : {screen : Timeline }

    
},{
    initialRouteName: "Timeline",
})

const AppNavi = createAppNavigator(appNav)



export default AppNavi