import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import { PRIMARY_COLOR_LIGHT } from '../config';
import { StyleProp } from 'react-native';

interface Props {
	children: JSX.Element | JSX.Element[];
}

let colorScheme = useColorScheme();

export const generalTheme = {
	Button: {
		style: {
			color: PRIMARY_COLOR_LIGHT,
			width: '50%',
			alignSerl: 'center'
		},
		containerStyle: {
			marginVertical: 10,
		}
	},
};

// const GlobalTheme = ( { children }: Props ) => {
// 	return (
// 		<ThemeProvider theme={generalTheme} useDark={colorScheme === 'dark'}>
// 			{children}
// 		</ThemeProvider>
// 	)
// }

// export default { GlobalTheme }
