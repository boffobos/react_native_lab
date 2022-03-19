/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
	Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view'
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Button, ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { MyNavigation } from './src/Navigation';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AnimatedSplash from 'react-native-animated-splash-screen';

import { Provider } from 'react-redux';
import { store, persistor } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { generalTheme } from './src/Theme';
import { FONT_REGULAR, PRIMARY_COLOR } from './src/config';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
	const [loaded, setLoaded] = React.useState(false)
	React.useEffect(() => {
		SplashScreen.hide();
	},[]);

	React.useEffect(() => {
		setTimeout(() => setLoaded(true), 500) //Use this async function to
	}, [])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
		<AnimatedSplash
			logoImage={require('./src/Assets/Images/logo_splash_screen.png')}
			isLoaded={loaded}
			backgroundColor={PRIMARY_COLOR}
			translucent={true}
		>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavigationContainer>
						<SafeAreaProvider>
							<ThemeProvider theme={generalTheme}>
							{/* <GlobalTheme> */}
								<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
								<MyNavigation />
							{/* </GlobalTheme> */}
							</ThemeProvider>
						</SafeAreaProvider>
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</AnimatedSplash>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 32,
		fontFamily: FONT_REGULAR,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
