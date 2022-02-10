import { ReactChildren } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';

interface Props {
	children: JSX.Element | JSX.Element[];
}

let colorScheme = useColorScheme();

const theme = {
	Button: {
		style: {
			color: 'orange',
			width: '33%',
			alignSerl: 'center'
		}
	},
}

const Theme = ( { children }: Props ) => {
	return (
		<ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
			{children}
		</ThemeProvider>
	)
}

export { Theme }
