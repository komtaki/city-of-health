import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiContainer maxWidth="md">{children}</MuiContainer>
    </React.Fragment>
  )
}

export default Container
