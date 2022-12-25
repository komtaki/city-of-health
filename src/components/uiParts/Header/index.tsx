import * as React from 'react'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiContainer from '@mui/material/Container'

import { CMS_NAME } from '../../../lib/constants'

import cssStyle from './style.module.scss'

const Header: React.FC = () => {
  return (
    <header>
      <MuiContainer maxWidth="md">
        <Box className={cssStyle['wrapper']}>
          <img
            src="/img/serviceIcon.png"
            alt={CMS_NAME}
            className={cssStyle['serviceIcon']}
          />
          <Link href="/" className={cssStyle['serviceName']}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
              {CMS_NAME}
            </Typography>
          </Link>
        </Box>
      </MuiContainer>
      <Divider />
    </header>
  )
}

export default Header
