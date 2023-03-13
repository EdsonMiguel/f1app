import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ConstructorScreen} from '../screens/Constructor';
import { PilotScreen } from '../screens/Pilots';
import { AppRoutes } from './app.routes';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';
import { useTheme } from "styled-components/native"

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes(){
  const { COLORS } = useTheme()
  return(
    <Navigator screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.RED,
      tabBarInactiveTintColor: COLORS.GRAY,
      tabBarStyle:{
        backgroundColor: COLORS.BLACK,
        borderTopWidth: 0,
      }
    }}>
      <Screen 
        name="home" 
        component={AppRoutes}  
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons 
              name="trophy" 
              size={24} 
              color={props.color} 
            />
          )  
        }}
      />
      <Screen 
        name="constructors" 
        component={ConstructorScreen}  
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons 
              name="engineering" 
              size={24} 
              color={props.color}
            />
          )  
        }}
      />
      <Screen 
        name="pilots" 
        component={PilotScreen}  
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons 
              name="racing-helmet" 
              size={24} 
              color={props.color} 
            />
          )  
        }}
      />

    </Navigator>
  )
}