import Script from 'next/script'
import { isExistGaId, GA_ID } from '../lib/gtag'

const GoogleAnalytics = () => {
  if (!isExistGaId) return <></>
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
      </Script>
    </>
  )
}

export default GoogleAnalytics
