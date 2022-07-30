import { NextPage } from 'next'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

import { getAllFinance } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Layout from '../components/uiParts/Layout'
import Text from '../components/uiParts/Text'
import Meta from '../components/uiParts/Meta'
import JapanMap from '../components/uiParts/JapanMap'
import DataTable, {
  Field,
  sortAndAddRanking,
} from '../components/uiParts/DataTable'
import DataReference from '../components/projects/DataReference'
import FinancePowerReference from '../components/projects/FinancePowerReference'

type Props = {
  topData: Finance[]
  worstData: Finance[]
}

const maxSize = 25

const Index: NextPage<Props> = ({ topData, worstData }) => {
  return (
    <>
      <Meta
        title={`市区町村の財政指数ランキング`}
        description={`政府統計から算出した全国の市区町村の財政指数ランキングです。2020年の1位は${topData[0].prefectureName}${topData[0].name}、2位は${topData[1].prefectureName}${topData[1].name}、3位は${topData[2].prefectureName}${topData[2].name}でした。`}
        og={{
          url: '/',
          imageUrl: `/img/top.png`,
        }}
      />
      <Layout>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Text
                  variant="h2"
                  align="center"
                  sx={{ fontWeight: 600 }}
                  gutterBottom
                >
                  「{CMS_NAME}」の使い方
                </Text>

                <Text paragraph>
                  政府統計から算出した全国の市区町村の財政力指数ランキングを掲載しています。
                </Text>

                <FinancePowerReference />

                <Text paragraph>
                  人口減少で地方の過疎化が進む現代、もし自治体が財政破綻すれば小中学校などの公共インフラは大きな影響を受けます。そうなる前に、移住先や今住んでいる市区町村の財政がわかれば準備ができます。
                </Text>

                <Text bold gutterBottom>
                  まずは気になる都道府県や市区町村の名前で検索してみましょう。
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Text
              variant="h2"
              align="center"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              データの参照元
            </Text>
            <DataReference />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

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
            <Box marginBottom={3}>
              <Text variant="h2" gutterBottom>
                全国の財政力指数 TOP {maxSize}
              </Text>
              <Text gutterBottom>
                2020年の政府統計の地方財政状況調査から算出した全国の市区町村の財政力指数ランキングです。
              </Text>
              <Text gutterBottom>
                1位は{topData[0].prefectureName}
                {topData[0].name}、 2位は
                {topData[1].prefectureName}
                {topData[1].name}、3位は
                {topData[2].prefectureName}
                {topData[2].name}でした。
              </Text>
            </Box>

            <DataTable
              data={topData}
              fields={[
                Field.ranking,
                Field.prefectureName,
                Field.name,
                Field.power,
                Field.population,
              ]}
              pageSize={maxSize}
              requiredToolBar={false}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Box marginBottom={3}>
              <Text variant="h2" gutterBottom>
                全国の財政力指数 WORST {maxSize}
              </Text>
              <Text gutterBottom>
                最下位は{worstData[maxSize - 1].prefectureName}
                {worstData[maxSize - 1].name}でした。
              </Text>
            </Box>

            <DataTable
              data={worstData}
              fields={[
                Field.ranking,
                Field.prefectureName,
                Field.name,
                Field.power,
                Field.population,
              ]}
              sort="asc"
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
  const sortedData = sortAndAddRanking(getAllFinance())
  const worstData = sortedData.slice(-maxSize)
  const topData = sortedData.slice(0, maxSize)

  return {
    props: {
      topData,
      worstData,
    },
  }
}

export default Index
