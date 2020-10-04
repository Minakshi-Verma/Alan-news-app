import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    footer: {
      textAlign: 'center',
      position: 'fixed',
      left: 0,
      bottom: 0,
      color: 'black',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '120px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    link: {
      textDecoration: 'none',
      color: 'rgba(21, 101, 192)',
    },
    image: {
      marginLeft: 20,
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      padding: '3%',
      borderRadius: 10,
      color: 'white',
      backgroundColor: 'rgba(21, 101, 192)',
      margin: '0 12px',
      textAlign: 'center',
      height: '25vmin',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        textAlign: 'center',
        width: '100%',
        height: 'initial',
        '&:nth-of-type(1)': {
          marginBottom: '12px',
        },
      },
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    logoContainer: {
        backgroundImage: 'url("https://thetechpanda.com/wp-content/uploads/2018/08/voice-recog-960x440.jpeg")',
        backgroundPosition:"center center",
        backgroundRepeat:'no-repeat',
        backgroundSize:'95%',
        overflow:'hidden',
      
        height: '35vh',
        margin: ' 0 auto',
        
        position: 'relative',
        // backgroundSize: '100%',
      padding: '0 3%',
      display: 'flex',
      justifyContent: 'space-around',
    //   alignItems: 'center',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        textAlign: 'center',
      },
    },
    alanLogo: {
        // backgroundImage: 'url("https://thetechpanda.com/wp-content/uploads/2018/08/voice-recog-960x440.jpeg")',
        // backgroundSize: '100%',
        // width: '100%',
      height: '27vmin',
      borderRadius: '15%',
    //   padding: '0 5%',
      margin: '2% 0',
      [theme.breakpoints.down('sm')]: {
        height: '35vmin',
      },
    },
  }));