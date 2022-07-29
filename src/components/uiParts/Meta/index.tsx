import Head from 'next/head'
import { CMS_NAME, CMD_DOMAIN_URL } from '../../../lib/constants'

type Props = {
  og?: {
    url: string
    imageUrl: string
  }
  title: string
  description: string
}

const Meta = ({ og, title, description }: Props) => {
  return (
    <Head>
      <title>{`${title} | ${CMS_NAME}`}</title>
      <meta name="description" content={description} />
      {og && (
        <>
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="og:image"
            content={`${CMD_DOMAIN_URL}${og.imageUrl}`}
          />
          <meta property="og:url" content={`${CMD_DOMAIN_URL}${og.url}`} />
          <meta property="og:title" content={`${title} | ${CMS_NAME}`} />
          <meta property="og:description" content={description} />
        </>
      )}
    </Head>
  )
}

export default Meta
