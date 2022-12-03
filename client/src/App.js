//Imported components
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import events from './images/events.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

//Imported style
import './App.css';

function App() {
  return (
    <>
    <Container maxWidth='lg' />
      <AppBar className='appBar' position='static' color='inherit'>
        <Typography className='heading' variant='h2' align='center'>Events <img className='image' src={ events } alt="events" height="60" /> </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
}

export default App;