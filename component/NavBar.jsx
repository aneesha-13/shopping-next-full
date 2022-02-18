import React, { useContext } from 'react';
import NextLink from 'next/link';
import { AppBar, Link, Toolbar, Typography, Badge, Button, Menu, MenuItem } from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/store';

import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NavBar() {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);
    const loginClickHandler = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const loginMenuCloseHandler = () => {
        setAnchorEl(null);
    };
    const logoutClickHandler = () => {
        setAnchorEl(null);
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        Cookies.remove('cartItems');
        router.push('/');
    };
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

                            {userInfo ? (
                                <>
                                    <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={loginClickHandler}
                                        className={classes.navbarButton}
                                    >
                                        {userInfo.name}
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={loginMenuCloseHandler}
                                    >
                                        <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                                        <MenuItem onClick={loginMenuCloseHandler}>
                                            My account
                                        </MenuItem>
                                        <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <NextLink href="/login" passHref>
                                    <Link>Login</Link>
                                </NextLink>
                            )}
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
