import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import login from './app/views/Login'
import dash from './app/views/dash'


const views = {
    
    Login: {
        view: Login
    },
    Dash: {
        view: dash
    },
    
}

const HomeStack = createStackNavigator(views);

export default createAppContainer(HomeStack);