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
import {Button, ThemeProvider, SearchBar} from 'react-native-elements';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Theme } from './components';

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
	const [search, setSearch] = React.useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

const theme = {
	Button: {
		raised: true,
		style: {
		width: "33%",
    alignSelf: 'center',
    marginTop: 24,
		marginBottom: 24,
		}
	},
}

  return (
    <SafeAreaProvider>
        <SafeAreaView style={backgroundStyle}>
					{/* <Theme> */}
					<ThemeProvider theme={theme}>
						<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
						<ScrollView
							contentInsetAdjustmentBehavior="automatic"
							style={backgroundStyle}>
							<Header />
							<View
								style={{
									backgroundColor: isDarkMode ? Colors.black : Colors.white,
								}}>
								<Text style={styles.text}>Hello world!!! New spiral project.</Text>
								<Button title='Submit' />
								<SearchBar placeholder='Type here...' onChangeText={(e) => setSearch(e)} value={search}/>
							</View>
						</ScrollView>
						<Button title='Cool' onPress={() => Alert.alert('hello!')}/>
					{/* </Theme> */}
					</ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
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
		fontFamily: 'SFRounded-regular',
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
