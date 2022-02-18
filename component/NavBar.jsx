import React, { useContext } from 'react';
import NextLink from 'next/link';
import { AppBar, Container, Link, Toolbar, Typography, Badge } from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/store';
import Cookies from 'js-cookie';

export default function NavBar() {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>
                                Play-store
                            </Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/explore" passHref>
                            <Link>
                                Explore
                            </Link>
                        </NextLink>
                        <NextLink href='/login' passHref>
                            <Link>
                                <Typography component="span">Login</Typography>
                            </Link>
                        </NextLink>
                        <NextLink href="/cart" passHref>
                            <Link>
                                {cart.cartItems.length > 0 ? <Badge badgeContent={cart.cartItems.length}>Cart</Badge> : "Cart"}

                            </Link>
                        </NextLink>
                    </div>



                </Toolbar>
            </AppBar>
        </div>
    )
}
