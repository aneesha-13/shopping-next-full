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

const explore = (props) => {
  const {products} = props;
  const {dispatch} =useContext(Store);
  const addToCartHandler = async (product) =>{
    console.log(product);
    const {data} =await axios.get(`/api/products/${product._id}`);
    dispatch({ type: 'CART_ADD_ITEM',payload : {...product,quantity :1}});
  }
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
                  <Button size="small" color="primary" onClick={addToCartHandler}>
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