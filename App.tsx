import { HomeScreen } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Routes } from "./src/routes"

export default function App() {
  const [fontsLoaded] = useFonts({
    'formula1-display-bold': require('./assets/fonts/Formula1-Bold_web_0.ttf'),
    'formula1-display-regular-2': require('./assets/fonts/Formula1-Regular_web_0.ttf'),
    'formula1-display-wide-3': require('./assets/fonts/Formula1-Wide_web_0.ttf'),
  })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent 
      />
      {
        fontsLoaded && (<Routes />)
        }
        </ThemeProvider>
  );
}

