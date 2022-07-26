import { NextPage } from 'next'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

import { getAllFinance } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Layout from '../components/Layout'
import Text from '../components/Text'
import Meta from '../components/Meta'
import JapanMap from '../components/JapanMap'
import DataTable, { Field, sortAndAddRanking } from '../components/DataTable'

type Props = {
  data: Finance[]
}

const maxSize = 25

const Index: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Meta
        title={`市区町村の財政健全度ランキング`}
        description={`政府統計をベースに算出した都道府県の市区町村の財政力ランキングです。2021年の1位は${data[0].prefectureName}${data[0].name}、2位は${data[1].prefectureName}${data[1].name}、3位は${data[2].prefectureName}${data[2].name}でした。`}
        og={{
          url: '/',
          imageUrl: `/img/top.png`,
        }}
      />
      <Layout>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Text
              variant="h2"
              align="center"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              都道府県から探す
            </Text>
            <JapanMap />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Text variant="h2" gutterBottom>
              全国の財政力ランキング TOP {maxSize}
            </Text>
            <Box marginBottom={3}>
              <Text gutterBottom>
                サイトのデータは、
                <a href="https://www.e-stat.go.jp/" className="link-border">
                  政府統計の総合窓口e-Stat
                </a>
                に掲載された2021年の地方財政状況調査を使用しています。
              </Text>
            </Box>

            <Box marginBottom={3}>
              <Alert variant="outlined" severity="info">
                <AlertTitle>地方財政状況調査とは</AlertTitle>

                <Text paragraph>
                  都道府県や市町村など各地方公共団体の決算に関する統計調査で、統一的な会計区分が定められ予算の執行を通じて地方公共団体がどのように行政運営を行ったかを見るものです。
                </Text>
                <Text gutterBottom>
                  毎年度、地方財政状況調査の結果を取りまとめ「地方財政白書」として国会に報告されます。これらは地方公共団体の歳入・歳出の分析や財政の健全性の判断において重要な役割を果たしています。
                </Text>
              </Alert>
            </Box>
            <DataTable
              data={data}
              fields={[
                Field.ranking,
                Field.prefectureName,
                Field.name,
                Field.power,
              ]}
              pageSize={maxSize}
              requiredToolBar={false}
            />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = sortAndAddRanking(getAllFinance()).slice(0, maxSize)

  return {
    props: {
      data,
    },
  }
}

export default Index
