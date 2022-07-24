import { Typography } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'

import Container from '../components/container'
import { CMS_NAME } from '../lib/constants'

const Privacy: NextPage = () => {
  return (
    <Container>
      <article>
        <Head>
          <title>プライバシーポリシー | {CMS_NAME}</title>
        </Head>
        <Typography component="h1" variant="h3" gutterBottom>
          プライバシーポリシー
        </Typography>
        <Typography gutterBottom>
          このプライバシーポリシーは、当サイトが収集する情報、情報を収集する理由について理解を深めていただくためのものです。
        </Typography>
        <Typography component="h2" variant="h4" gutterBottom>
          個人情報の管理
        </Typography>
        当サイトは、訪問者からご提供いただいた情報の管理について、以下の 3
        つを徹底します。
        <Typography component="h3" variant="h5" gutterBottom>
          1. 情報の正確性の確保
        </Typography>
        訪問者からご提供いただいた情報については、常に正確かつ最新の情報となるよう努めます。
        <Typography component="h3" variant="h5" gutterBottom>
          2. 安全管理措置
        </Typography>
        当サイトは、個人情報の漏えいや滅失又は棄損を防止するために、適切なセキリュティ対策を実施して個人情報を保護します。
        <Typography component="h3" variant="h5" gutterBottom>
          3. 個人情報の廃棄
        </Typography>
        個人情報が不要となった場合には、すみやかに廃棄します。
        <Typography component="h2" variant="h4" gutterBottom>
          個人情報の第三者への提供について
        </Typography>
        当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
        - 本人のご了解がある場合 - 法令等への協力のため、開示が必要となる場合
        <Typography component="h3" variant="h5" gutterBottom>
          アナリティクス
        </Typography>
        <Typography gutterBottom>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        </Typography>
        <Typography gutterBottom>
          このGoogle アナリティクスはアクセス情報の収集のために
          Cookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。
        </Typography>
        <Typography gutterBottom>
          Google アナリティクスの Cookie は、26
          ヶ月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。Google
          アナリティクスの利用規約に関して確認したい場合は、
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            こちら
          </a>
          を確認してください。
        </Typography>
        <Typography gutterBottom>
          また、「ユーザーが Google パートナーのサイトやアプリを使用する際の
          Google によるデータ使用」に関して確認したい場合は、
          <a href="https://policies.google.com/technologies/partner-sites?hl=ja">
            こちら
          </a>
          を確認してください。
        </Typography>
        <Typography component="h3" variant="h5" gutterBottom>
          免責事項
        </Typography>
        <Typography gutterBottom>
          当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </Typography>
        <Typography gutterBottom>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
        </Typography>
        <Typography gutterBottom>
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </Typography>
        <Typography gutterBottom>
          当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
        </Typography>
        <Typography component="h2" variant="h4" gutterBottom>
          プライバシーポリシーの変更について
        </Typography>
        <Typography>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </Typography>
      </article>
    </Container>
  )
}

export default Privacy
