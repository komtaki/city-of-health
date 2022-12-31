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
          <Typography variant="body2">
            <Link href="/privacy/">プライバシーポリシー</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeFs26WtYyW1_nFo75FUnZrD0UIUcZQUqLT8fc8XbcPk8P2MQ/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              お問い合わせ
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <a href="https://www.komtaki.com" target="_blank" rel="noreferrer">
              開発者のブログ
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes['footer__copyright']}>
          <Typography variant="caption">
            ©2022 city-finance.komtaki.com
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
