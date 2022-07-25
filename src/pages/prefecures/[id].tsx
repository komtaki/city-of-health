import * as React from 'react'
import { NextPage } from 'next'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import Container from '../../components/container'
import {
  getAllPrefectures,
  getPrefectureById,
  getFinanceByPrefectureName,
} from '../../lib/api'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

const columns: GridColDef[] = [
  { field: 'name', headerName: '名前', width: 130 },
  {
    field: 'income',
    headerName: '歳入総額',
    description: '地方税などをベースに自治体が得たお金',
    type: 'number',
    width: 130,
  },
  {
    field: 'outcome',
    headerName: '歳出総額',
    description: '衛生費など自治体が支払ったお金',
    type: 'number',
    width: 130,
  },
  { field: 'net', headerName: '実質単年度収支', type: 'number', width: 130 },
  {
    field: 'health',
    headerName: '財政健全指数',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    width: 130,
    valueGetter: (params: GridValueGetterParams) =>
      (params.row.income / params.row.outcome).toFixed(2),
  },
]

type Props = {
  data: Finance[]
  prefecture: Prefecture
}

const Prefecture: NextPage<Props> = ({ data, prefecture }) => {
  return (
    <Container>
      <Box marginBottom={3}>
        <Box marginBottom={3}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 600 }}
            gutterBottom
          >
            {prefecture.name}の市区町村の財政健全度
          </Typography>
          <Typography gutterBottom>
            このデータは、
            <a href="https://www.e-stat.go.jp/">政府統計の総合窓口e-Stat</a>
            に掲載された2021年の地方財政状況調査を使用しています。
          </Typography>
        </Box>

        <Box marginBottom={3}>
          <Alert variant="outlined" severity="info">
            <AlertTitle>地方財政状況調査とは</AlertTitle>

            <Typography gutterBottom>
              都道府県や市町村など各地方公共団体の決算に関する統計調査で、統一的な会計区分が定められ予算の執行を通じて地方公共団体がどのように行政運営を行ったかを見るものです。
            </Typography>
            <Typography gutterBottom>
              毎年度、地方財政状況調査の結果を取りまとめ「地方財政白書」として国会に報告されます。これらは地方公共団体の歳入・歳出の分析や財政の健全性の判断において重要な役割を果たしています。
            </Typography>
          </Alert>
        </Box>
      </Box>
      <div style={{ height: 2725, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[5]}
          initialState={{
            sorting: {
              sortModel: [{ field: 'net', sort: 'desc' }],
            },
          }}
        />
      </div>
    </Container>
  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: Params) {
  const prefecture = getPrefectureById(Number(params.id))
  const data = getFinanceByPrefectureName(prefecture.name)
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
