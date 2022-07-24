import { AppProps } from 'next/app'
import GoogleAnalytics from '../components/google-analytics'
import usePageView from '../hooks/usePageView'

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}
