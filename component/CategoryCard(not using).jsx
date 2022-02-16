import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import useStyles from '../utils/styles';


const CategoryCard = ({ image, name ,xs}) => {
  const classes = useStyles();
  return (
    // <div className={styles.card}>
    //   <Image className={styles.image} src={image} height={700} width={1300} />
    //   <Link href={`/category/${name.toLowerCase()}`}>
    //     <div className={styles.info}>
    //       <h3>{name}</h3>
    //       <p>SHOP NOW</p>
    //     </div>
    //   </Link>
    // </div>
    
      <Grid item xs={{xs}}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.image}
              component="img"
              image={image}
              title={name}></CardMedia>
            <CardContent className={classes.info}>
              <Link href={`/category/${name.toLowerCase()}`}>
                <div><h3>{name}</h3>
                <p>SHOP NOW</p></div>
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      
      // </div>
  );
};

export default CategoryCard;