import * as React from 'react'
import Link from 'next/link'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MuiContainer from '@mui/material/Container'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'

import { CMS_NAME } from '../lib/constants'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="transparent">
        <MuiContainer maxWidth="md">
          <Toolbar variant="dense">
            <CurrencyYenIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Link href="/">
              <a>
                <Typography
                  variant="h6"
                  color="inherit"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  {CMS_NAME}
                </Typography>
              </a>
            </Link>
          </Toolbar>
        </MuiContainer>
      </AppBar>
      <MuiContainer maxWidth="md">
        <Box marginTop={3} marginBottom={3}>
          {children}
        </Box>
      </MuiContainer>
    </>
  )
}

export default Container
