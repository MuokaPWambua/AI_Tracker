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
          width:'100vw',
          height:'90%',

          }}>
            <Box className='welcome-note'>
            <Typography variant="h2" component="h2">Welcome to CK</Typography>
            your best veterinarian service provider.
            </Box>
      </Box>
      <br/>
      <Typography variant="h2" component="h2">Our services</Typography>
      <br/>
      <Services/>
      <br/>
      <Typography variant="h3" component="h3">Contact us</Typography>
      <br/>

      <Footer/>
    </div>
  );
}

export default App;
