import './App.css';
import Footer from './nav/Footer';
import TopAppBar from './nav/TopNav';
import Services from './services/Services';
import {Typography, Box} from '@mui/material'

function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Box style={{
          background:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/cattle.jpg) no-repeat center',
          backgroundSize: 'cover',
          width:'100%',
          height:'90%',

          }}>
            <div className='welcome-note'>
            <Typography variant="h1" component="h2">Welcom To CK</Typography>
            your best vertinary service provider.
            </div>
      </Box>
      <br/>
      <Typography variant="h1" component="h2">Our services</Typography>
      <br/>
      <Services/>
      <br/>
      <Typography variant="h3" component="h2">Contact us</Typography>
      <br/>

      <Footer/>
    </div>
  );
}

export default App;
