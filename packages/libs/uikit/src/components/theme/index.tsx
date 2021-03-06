import { AppThemeProvider, useAppTheme } from '@monorepo/uikit'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import * as themes from '../styles/themes'
import { ThemeProps } from './types'

const CurrentTheme: React.FC<ThemeProps> = ({ children }) => {
	const { currentTheme } = useAppTheme()

	return (
		<ThemeProvider theme={themes[currentTheme]}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
	return (
		<AppThemeProvider>
			<CurrentTheme>{children}</CurrentTheme>
		</AppThemeProvider>
	)
}

export default Theme
