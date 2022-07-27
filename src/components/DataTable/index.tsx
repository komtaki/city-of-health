import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowsProp,
} from '@mui/x-data-grid'

export const Field = {
  ranking: 'ranking',
  prefectureName: 'prefectureName',
  name: 'name',
  power: 'power',
} as const

type Field = keyof typeof Field

const columns = [
  { field: Field.ranking, headerName: '順位', width: 50 },
  { field: Field.prefectureName, headerName: '都道府県', width: 130 },
  { field: Field.name, headerName: '名前', width: 130 },
  {
    field: Field.power,
    headerName: '財政力指数',
    description:
      '地方公共団体の財政力を示す指数。基準財政収入額を基準財政需要額で除して得た数値の過去3年間の平均。1に近くあるいは1を超えるほど財源に余裕がある。',
    type: 'number',
    width: 130,
  },
]

type FinanceWithRanking = Finance & {
  ranking: number
}

export const sortAndAddRanking = (data: Finance[]): FinanceWithRanking[] =>
  data
    .sort((a: Finance, b: Finance) => {
      return a.power > b.power ? -1 : 1 // オブジェクトの昇順ソート
    })
    .map((datum, i) => ({
      ...datum,
      ranking: i + 1,
    }))

const generateColumns = (fields: Field[]): GridColDef[] =>
  columns.filter((column) => fields.includes(column.field))

type Props = {
  fields: Field[]
  pageSize: number
  data: GridRowsProp
  requiredToolBar?: boolean
}

const DataTable: React.FC<Props> = ({
  fields,
  data,
  pageSize,
  requiredToolBar = true,
}) => (
  <div
    style={{
      height: pageSize * 52 + (156 - (requiredToolBar ? 0 : 45)),
      width: '100%',
      marginBottom: '3rem',
    }}
  >
    <DataGrid
      rows={data}
      columns={generateColumns(fields)}
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      pageSize={pageSize}
      rowsPerPageOptions={[5]}
      initialState={{
        sorting: {
          sortModel: [{ field: 'power', sort: 'desc' }],
        },
      }}
      components={
        requiredToolBar
          ? {
              Toolbar: GridToolbar,
            }
          : {}
      }
      componentsProps={
        requiredToolBar
          ? {
              toolbar: { showQuickFilter: true },
            }
          : {}
      }
    />
  </div>
)

export default DataTable
