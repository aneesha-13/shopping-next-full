import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from '@material-ui/core';
import { useRouter } from 'next/router';
import Layout from '../../component/Layout';
// import { getProductsByCategory } from '../api/products/[category]';
import NextLink from 'next/link';
import axios from 'axios';
import { useContext } from 'react';
import db from '../../utils/db'
import Product from '../../models/Product';
import { Store } from '../../utils/store';


const CategoryPage = ({ products }) => {
  
  const router = useRouter();
  const {state, dispatch } = useContext(Store);

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
    <h1>Results for {router.query.category}</h1>
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
                  <Typography>{product.product}</Typography>
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

export default CategoryPage;


export async function getServerSideProps(context) {
  const { params } = context;
  const { category} = params;

  await db.connect();
  const products = await Product.find({category});
  await db.disconnect();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}