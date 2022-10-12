import Script from 'next/script'
import { isExistGaId, GA_ID } from '../lib/gtag'

const GoogleAnalytics = () => {
  if (!isExistGaId) return <></>
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
