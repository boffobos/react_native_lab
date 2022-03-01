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
	Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
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

import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

import { generalTheme } from './src/Theme';
import { BottomTabs } from './src/exports';
import { FONT_REGULAR } from './src/config';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

const theme = {
	// // Button: {
	// // 	raised: true,
	// // 	style: {
	// // 	width: "33%",
  // //   alignSelf: 'center',
  // //   marginTop: 24,
	// // 	marginBottom: 24,
	// // 	}
	// },
}

  return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<ThemeProvider theme={generalTheme}>
					{/* <GlobalTheme> */}
						<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
						<MyNavigation />
					{/* </GlobalTheme> */}
						{/* <BottomTabs /> */}
					</ThemeProvider>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
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
