import {
    List,
    ListItem,
    Typography,
    TextField,
    Button,
    Link,
  } from '@material-ui/core';
  import NextLink from 'next/link';
  import React from 'react';
  import Layout from '../component/Layout';
  import useStyles from '../utils/styles';
  
  export default function Login() {
    const classes = useStyles();
    return (
      <Layout>
        <form className={classes.formContainer}>
          <Typography component="h5" variant="h5">
            Login
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: 'email' }}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: 'password' }}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit" fullWidth color="secondary">
                Login
              </Button>
            </ListItem>
            <ListItem>
              Don't have an account? &nbsp;
              <NextLink href="/register" passHref>
                <Link>Register</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Layout>
    );
  }