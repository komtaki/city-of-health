import { TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'

type Props = TypographyProps & {
  bold?: boolean
  component?: string
}

const Text: React.FC<Props> = ({ children, bold = false, ...props }) => (
  <Typography {...props} sx={bold ? { fontWeight: 600 } : {}}>
    {children}
  </Typography>
)

export default Text
