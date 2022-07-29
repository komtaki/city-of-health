import Box from '@mui/system/Box'

import Alert from '../../uiParts/Alert'
import Text from '../../uiParts/Text'

const FinancePowerReference = () => (
  <Box marginBottom={3}>
    <Alert title="財政力指数とは">
      <Text variant="body2" gutterBottom>
        地方公共団体の財政力を示す指数です。基準財政収入額を基準財政需要額で除して得た数値の過去3年間の平均です。
      </Text>
      <Text variant="body2" gutterBottom>
        1に近くなるほど財源に余裕があるとされ、1を上回れば国から地方交付税交付金が支給されません。
      </Text>
    </Alert>
  </Box>
)

export default FinancePowerReference
