import Box from '@mui/system/Box'

import Alert from '../../uiParts/Alert'
import Text from '../../uiParts/Text'

const Reference = () => (
  <>
    <Box marginBottom={3}>
      <Text gutterBottom>下記の政府統計を使用しています。</Text>
      <Text variant="body2" gutterBottom>
        <a href="https://www.soumu.go.jp/iken/zaisei/R02_chiho.html">
          ・令和2年(2020) 地方財政状況調査
        </a>
      </Text>
      <Text variant="body2" gutterBottom>
        <a href="https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00200241&tstat=000001039591&cycle=7&year=20210&month=0&tclass1=000001039601&result_back=1&tclass2val=0">
          ・住民基本台帳に基づく人口、人口動態及び世帯数調査
        </a>
      </Text>
    </Box>
    <Box marginBottom={3}>
      <Alert title="地方財政状況調査とは">
        <Text variant="body2" gutterBottom>
          都道府県や市町村など各地方公共団体の決算に関する統計調査で、統一的な会計区分が定められ予算の執行を通じて地方公共団体がどのように行政運営を行ったかを見るものです。
        </Text>
        <Text variant="body2" gutterBottom>
          毎年度、地方財政状況調査の結果を取りまとめ「地方財政白書」として国会に報告されます。これらは地方公共団体の歳入・歳出の分析や財政の健全性の判断において重要な役割を果たしています。
        </Text>
      </Alert>
    </Box>
  </>
)

export default Reference
