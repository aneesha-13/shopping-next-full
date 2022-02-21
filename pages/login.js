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
import { useState, useContext } from 'react';
import { Store } from '../utils/store';
import { Router, useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';


export default function Login() {
    const router = useRouter();
    const { redirect } = router.query; // login?redirect=/shipping
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    //if user exists (means already logged in then redirect to '/' )
    if (userInfo) {
        router.push('/explore')
    }
    const { handleSubmit, control, formState: { errors }, } = useForm();
    const classes = useStyles();
    const submitHandler = async ({ email, password }) => {
        try {
            const { data } = await axios.post('/api/users/login', {
                email,
                password,
            });
            dispatch({ type: 'USER_LOGIN', payload: data });
            Cookies.set('userInfo', JSON.stringify(data));
            router.push(redirect || '/explore');
        } catch (err) {
            alert(err.response.data ? err.response.data.message : err.message);
        }
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit(submitHandler)} className={classes.formContainer}>
                <Typography component="h5" variant="h5">
                    Login
                </Typography>
                <List>
                    <ListItem>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            }}
                            render={({ field }) =>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    inputProps={{ type: 'email' }}
                                    error={Boolean(errors.email)}
                                    helperText={
                                        errors.email
                                            ? errors.email.type === 'pattern'
                                                ? 'Email is not valid'
                                                : 'Email is required'
                                            : ''
                                    }
                                    {...field}
                                ></TextField>}>
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                minLength: 6,
                            }}
                            render={({ field }) => (
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    inputProps={{ type: 'password' }}
                                    error={Boolean(errors.password)}
                                    helperText={
                                        errors.password
                                            ? errors.password.type === 'minLength'
                                                ? 'Password length should be more than 5'
                                                : 'Password is required'
                                            : ''
                                    }
                                    {...field}
                                ></TextField>
                            )}
                        ></Controller>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" type="submit" fullWidth color="secondary">
                            Login
                        </Button>
                    </ListItem>
                    <ListItem>
                        Don't have an account? &nbsp;
                        <NextLink href={`/register?redirect=${redirect || '/'}`} passHref>
                            <Link>Register</Link>
                        </NextLink>
                    </ListItem>
                </List>
            </form>
        </Layout>
    );
}