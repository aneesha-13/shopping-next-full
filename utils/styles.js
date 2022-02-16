import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#000000',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    // main: {
    //     minHeight: '80vh',
    // },
    footer: {
        textAlign: 'center',
    },
    card: {
        margin: '0.5rem',
        flex: '1 1 auto',
        position: 'relative',
        // '&:hover $media': {
        //     transform: 'scale(1.2)',
        // },
        // '&hover $info': {
        //     opacity: 0.9,
        // }
    },
    image: {
        objectFit: 'cover',
        border: '2px solid black',
        transition: 'all 5s cubic-bezier(0.14, 0.96, 0.91, 0.6)'
    },
    info: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        background: 'white',
        padding: '1.5rem',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        opacity: 0.8,
        border: '1px solid black',
        cursor: 'pointer',
    },
    container:{
        padding: '0 2rem',
    },
    main:{
        minHeight: '80vh',
        padding:'4rem 0',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand:{
        fontWeiggt:'bold',
        fontSize:'1.5rem',
    },
    grow:{
        flexGrow:1,
    },
    // grid:{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexWrap: 'wrap',
    //     maxWidth: '800px',
    //   },
    small: {
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    large:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }


});

export default useStyles;