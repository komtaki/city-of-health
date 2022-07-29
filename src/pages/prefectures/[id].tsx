import * as React from 'react'
import { NextPage } from 'next'
import Box from '@mui/system/Box'

import {
  getAllPrefectures,
  getPrefectureById,
  getFinanceByPrefectureName,
} from '../../lib/api'
import Layout from '../../components/uiParts/Layout'
import DataTable, {
  Field,
  sortAndAddRanking,
} from '../../components/uiParts/DataTable'
import Text from '../../components/uiParts/Text'
import Meta from '../../components/uiParts/Meta'
import JapanMap from '../../components/uiParts/JapanMap'
import Reference from '../../components/projects/DataReference'
import FinancePowerReference from '../../components/projects/FinancePowerReference'

type Props = {
  data: Finance[]
  prefecture: Prefecture
}

const Prefecture: NextPage<Props> = ({ data, prefecture }) => {
  const pageSize = Math.min(50, data.length)
  return (
    <>
      <Meta
        title={`${prefecture.name}の財政力指数ランキング`}
        description={`政府統計から算出した${prefecture.name}の市区町村の財政力指数ランキングです。2020年の1位は${data[0].name}、2位は${data[1].name}、3位は${data[2].name}でした。`}
        og={{
          url: `/prefectures/${prefecture.id}/`,
          imageUrl: `/img/prefectures/${prefecture.id}.png`,
        }}
      />
      <Layout>
        <Box marginBottom={3}>
          <Text variant="h1" bold gutterBottom>
            {prefecture.name}の財政力指数ランキング
          </Text>
          <Text gutterBottom>
            2020年の政府統計の地方財政状況調査から算出した{prefecture.name}
            の市区町村の財政力指数ランキングです。
          </Text>
          <Text gutterBottom>
            1位は{data[0].name}
            、2位は{data[1].name}、3位は{data[2].name}でした。
          </Text>
        </Box>

        <FinancePowerReference />

        <DataTable
          data={data}
          fields={[Field.ranking, Field.name, Field.power, Field.population]}
          pageSize={pageSize}
        />
        <Reference />
        <Text variant="h2" bold>
          他の都道府県を調べる
        </Text>
        <JapanMap />
      </Layout>
    </>
  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: Params) {
  const prefecture = getPrefectureById(Number(params.id))
  const data = sortAndAddRanking(getFinanceByPrefectureName(prefecture.name))
  return {
    props: {
      prefecture,
      data,
    },
  }
}

export async function getStaticPaths() {
  const prefectures = getAllPrefectures()

  return {
    paths: prefectures.map((prefecture) => {
      return {
        params: {
          id: String(prefecture.id),
        },
      }
    }),
    fallback: false,
  }
}

export default Prefecture
