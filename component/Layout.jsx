import React, { useContext } from 'react';
import { Container, Typography,Badge } from '@material-ui/core';
import useStyles from '../utils/styles';
import NavBar from './NavBar';

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved</Typography>
            </footer>

        </div>
    )
}
