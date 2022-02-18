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
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post('/api/users/login', {
            email,
            password,
          });
          alert('successful login');
        } catch (err) {
          alert(err.response.data ? err.response.data.message : err.message);
        }
      };
    return (
        <Layout>
            <form onSubmit={submitHandler} className={classes.formContainer}>
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
                            onChange={(e) => setEmail(e.target.value)}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password"
                            inputProps={{ type: 'password' }}
                            onChange={(e) => setPassword(e.target.value)}
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