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
import axios from 'axios';
import { useContext } from 'react';
import db from '../../utils/db'
import Product from '../../models/Product';

const CategoryPage = ({ props }) => {
  const {product} = props;
  const {state, dispatch} =useContext(Store);
  const router = useRouter();
  return (
    <Layout>
    <div>
    <h1>Results for {router.query.category}</h1>
    <Grid container spacing={3}>
      {products.map((product) =>(
        <Grid item md={4} key={product.id}>
          <Card>
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
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </CardActionArea>
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
  const product = await Product.find({category});
  await db.disconnect();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}