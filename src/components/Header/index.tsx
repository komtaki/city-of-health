import * as React from 'react'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiContainer from '@mui/material/Container'

import { CMS_NAME } from '../../lib/constants'

import cssStyle from './style.module.scss'

const Header: React.FC = () => {
  return (
    <header>
      <MuiContainer maxWidth="md">
        <Box sx={{ padding: '1rem' }}>
          <Link href="/">
            <a className={cssStyle['serviceName']}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                {CMS_NAME}
              </Typography>
            </a>
          </Link>
        </Box>
      </MuiContainer>
      <Divider />
    </header>
  )
}

export default Header
