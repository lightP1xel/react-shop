import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons'
import useStyles from './Nav'

const Navbar = ({ totalItems }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src="https://image.pngaaa.com/875/2507875-middle.png"
              alt="shop logo"
              height="25px"
              className={classes.image}
            />
            React Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
