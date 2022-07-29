import MuiAlert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

type Props = {
  title: string
  children: React.ReactNode
}

const Alert: React.FC<Props> = ({ title, children }) => (
  <MuiAlert variant="outlined" severity="info">
    <AlertTitle sx={{ fontWeight: 600 }}>{title}</AlertTitle>

    {children}
  </MuiAlert>
)

export default Alert
