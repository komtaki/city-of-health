import { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import usePageView from '../hooks/usePageView'

import '../styles/global.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f2350',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView()
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
