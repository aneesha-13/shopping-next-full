import {
    Grid,
    TableContainer,
    Table,
    Typography,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Link,
    Button,
    Card,
    List,
    ListItem,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../component/Layout';
import { Store } from '../utils/store';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import CheckoutWizard from '../component/checkoutWizard';

function PlaceOrder() {
    const classes = useStyles();
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems, shippingAddress, paymentMethod },
    } = state;
    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46
    const itemsPrice = round2(
        cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    );
    const totalPrice = round2(itemsPrice);
    useEffect(() => {
        if (!paymentMethod) {
            router.push('/payment');
        }
    }, []);

    return (
        <Layout>
            <CheckoutWizard activeStep={3}></CheckoutWizard>
            <Typography component="h3" variant="h3">
                Place Order
            </Typography>

            <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography component="h5" variant="h5">
                                    Shipping Address
                                </Typography>
                            </ListItem>
                            <ListItem>
                                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                                {shippingAddress.country}
                            </ListItem>
                        </List>
                    </Card>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography component="h5" variant="h5">
                                    Payment Method
                                </Typography>
                            </ListItem>
                            <ListItem>{paymentMethod}</ListItem>
                        </List>
                    </Card>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography component="h5" variant="h5">
                                    Order Items
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Image</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="right">Quantity</TableCell>
                                                <TableCell align="right">Price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cartItems.map((item) => (
                                                <TableRow key={item._id}>
                                                    <TableCell>
                                                        <NextLink href={`/product/${item.id}`} passHref>
                                                            <Link>
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.product}
                                                                    width={50}
                                                                    height={50}
                                                                ></Image>
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>

                                                    <TableCell>
                                                        <NextLink href={`/product/${item.id}`} passHref>
                                                            <Link>
                                                                <Typography>{item.product}</Typography>
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Typography>{item.quantity}</Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Typography>${item.price}</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography variant="h5">Order Summary</Typography>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Items:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align="right">${itemsPrice}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            <strong>Total:</strong>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align="right">
                                            <strong>${totalPrice}</strong>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button variant="contained" color="primary" fullWidth>
                                    Place Order
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });