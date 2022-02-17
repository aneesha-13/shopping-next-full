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
import { Store } from '../../utils/store';


const CategoryPage = ({ products }) => {
  
  const router = useRouter();
  const {dispatch } = useContext(Store);
//   const { userInfo } = state;
  // const { product } = props;
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
  const products = await Product.find({category});
  await db.disconnect();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}