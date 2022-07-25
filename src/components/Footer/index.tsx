import Link from 'next/link'
import React from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import classes from './style.module.scss'

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes['footer']}
        spacing={2}
      >
        <Grid item>
          <Link href="/privacy/">
            <a>
              <Typography variant="body1">プライバシーポリシー</Typography>
            </a>
          </Link>
        </Grid>
        <Grid item>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeFs26WtYyW1_nFo75FUnZrD0UIUcZQUqLT8fc8XbcPk8P2MQ/viewform?usp=sf_link"
            target="_blank"
          >
            <Typography variant="body1">お問い合わせ</Typography>
          </a>
        </Grid>
        <Grid item xs={12} className={classes['footer__copyright']}>
          <Typography variant="caption">©2022 City Of Health.</Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
