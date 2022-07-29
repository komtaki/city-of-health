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
  data: Finance[]
}

const maxSize = 25

const Index: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Meta
        title={`市区町村の財政ランキング`}
        description={`政府統計をベースに算出した都道府県の市区町村の財政ランキングです。2020年の1位は${data[0].prefectureName}${data[0].name}、2位は${data[1].prefectureName}${data[1].name}、3位は${data[2].prefectureName}${data[2].name}でした。`}
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
            <Box marginBottom={3}>
              <Text variant="h2" gutterBottom>
                全国の財政力ランキング TOP {maxSize}
              </Text>
              <Text gutterBottom>
                2020年の政府統計の地方財政状況調査から算出した市区町村の財政力ランキングです。
              </Text>
              <Text gutterBottom>
                1位は{data[0].prefectureName}
                {data[0].name}、 2位は
                {data[1].prefectureName}
                {data[1].name}、3位は
                {data[2].prefectureName}
                {data[2].name}でした。
              </Text>
            </Box>

            <FinancePowerReference />

            <DataTable
              data={data}
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

            <DataReference />
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
