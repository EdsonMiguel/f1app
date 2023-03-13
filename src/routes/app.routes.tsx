import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/Home";
import { RaceScreen } from "../screens/Race";
import {  View} from 'react-native';
import { useTheme } from 'styled-components/native'
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  const { COLORS } = useTheme();
  return(
    <View style={{ backgroundColor: COLORS.DARK_GRAY, flex: 1}}>
      <Navigator screenOptions={{headerShown : false}}>
        <Screen name="home" component={HomeScreen}/>
        <Screen name="race" component={RaceScreen} />
    </Navigator>
    </View>
  )
}