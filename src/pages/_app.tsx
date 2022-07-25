import { AppProps } from 'next/app'
import GoogleAnalytics from '../components/google-analytics'
import usePageView from '../hooks/usePageView'

import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}
