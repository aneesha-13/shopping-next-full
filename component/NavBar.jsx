import NextLink from 'next/link';
import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function NavBar() {
    const classes = useStyles();
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

                        <NextLink href="/cart" passHref>
                            <Link>
                                Cart
                            </Link>
                        </NextLink>
                    </div>



                </Toolbar>
            </AppBar>
        </div>
    )
}
