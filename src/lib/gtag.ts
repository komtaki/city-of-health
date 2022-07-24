export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

export const isExistGaId = GA_ID !== ''

// PVを測定する
export const pageview = (path: any) => {
  if (!isExistGaId) {
    console.log('pv', path)
    return
  }
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}
