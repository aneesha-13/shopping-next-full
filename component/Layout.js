import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';
import NavBar from './NavBar';

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            {/* <Container className={classes.main}> */}
                {children}
            {/* </Container> */}
            <footer className={classes.footer}>
                <Typography>All rights reserved</Typography>
            </footer>

        </div>
    )
}
