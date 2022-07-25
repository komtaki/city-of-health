import * as React from 'react'
import Box from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'

import { CMS_NAME } from '../../lib/constants'
import Footer from '../Footer'
import Header from '../Header'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <MuiContainer maxWidth="md">
        <Box marginTop={3} marginBottom={3}>
          {children}
        </Box>
      </MuiContainer>
      <Footer />
    </>
  )
}

export default Container
