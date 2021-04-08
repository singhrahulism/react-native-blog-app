import React from 'react' ;
import {createAppContainer} from 'react-navigation' ;
import {createStackNavigator} from 'react-navigation-stack' ;
import HomeScreen from './src/screens/homeScreen' ;
import {BlogProvider} from './src/context/blogProvider' ;

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:
    {
      title:'Blog Application'
    }
  }
)

const App = createAppContainer(navigator) ;

export default () => 
{
  return <BlogProvider>
    <App />
  </BlogProvider>
}