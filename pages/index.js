import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../component/Layout';
// import styles from '../styles/Home.module.css';
import useStyles from '../utils/styles';
import CategoryCard from '../component/CategoryCard(not using)';

export default function Home() {
  const classes = useStyles();
  return (
    // <Layout>
    // <div className={classes.main}>
    // <Grid container spacing={2} className={classes.container}>
      
    //     <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" xs="3"/>
    //     <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" xs="3"/>
    //     <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" xs="3"/>
      
    //     <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" xs="6"/>
    //     <CategoryCard image="https://imgur.com/HsUfuRU.png" name="Accessories" xs="6"/>
    // </Grid>
    // </div>
    <div className={classes.main}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                image="https://imgur.com/uKQqsuA.png"
                title="XBOX"></CardMedia>
              <CardContent className={classes.info}>
                <Link href={`/category/xbox`}>
                  <div><h3>XBOX</h3>
                  <p>SHOP NOW</p></div>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                image="https://imgur.com/3Y1DLYC.png"
                title="PS5"></CardMedia>
              <CardContent className={classes.info}>
                <h3>PS5</h3>
                <p>SHOP NOW</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              {/* <CardMedia className={classes.image} */}
              <CardMedia className={classes.image}

                // component="img"
                // image="https://imgur.com/Dm212HS.png"
                title="Switch"><Image className={classes.image} src="https://imgur.com/Dm212HS.png" height={700} width={1300} /></CardMedia>
              <CardContent className={classes.info}>
                <h3>SWITCH</h3>
                <p>SHOP NOW</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                image="https://imgur.com/qb6IW1f.png"
                title="PC"></CardMedia>
              <CardContent className={classes.info}>
                <h3>PC</h3>
                <p>SHOP NOW</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                image="https://imgur.com/HsUfuRU.png"
                title="Accessories"></CardMedia>
              <CardContent className={classes.info}>
                <h3>ACCESSORIES</h3>
                <p>SHOP NOW</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>

    // </Layout>
  )
}
