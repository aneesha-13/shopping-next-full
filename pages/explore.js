import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from '@material-ui/core';
import Layout from '../component/Layout';
// import { getProducts } from './api/products(with data)/index.js';
import { Store } from '../utils/store';
import axios from 'axios';
import { useContext } from 'react';
import db from '../utils/db.js';
import Product from '../models/Product';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const explore = (props) => {
  const router =useRouter();
  const {products} = props;
  const {state, dispatch} =useContext(Store);
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product , quantity} });
    router.push('/cart');
  };
  return (
    <Layout>
      <div>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {products.map((product) =>(
          <Grid item md={4} key={product.id}>
            <Card>
              <NextLink href={`/product/${product.id}`} passHref>
              <CardActionArea>
                <CardMedia 
                component="img"
                image={product.image}
                title={product.name}
                ></CardMedia>
                 <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                  <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary" onClick={() => addToCartHandler(product)}>
                    Add to cart
                  </Button>
                </CardActions>
              </CardActionArea>
              </NextLink>
            </Card>
            </Grid>
        ))}
      </Grid>
    </div> 
    </Layout>
     
  );
};

export default explore;

export async function getServerSideProps(context) {
  db.connect();
  const products = await Product.find({}).lean();
  db.disconnect();
  return { props: { products: products.map(db.convertDocToObj), } };
  
  
}

// <div className={styles.container}>
    //     <br/>
    //   <h1 className={styles.title}>All Results</h1>
    //     <br/>
    //   <div className={styles.cards}>
    //     {products.map((product) => (
    //       <ProductCard key={product.id} product={product} />
    //     ))}
    //   </div>
    // </div>