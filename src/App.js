import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import characters from './protagonists.json'
import CharacterCard from './CharacterCard';




let apiUrl = "https://zoo-animal-api.herokuapp.com/animals/rand/6";

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


function App() {
  const [animalData, setAnimalData] = useState([]);

  function handleButtonClick(){
    console.log("1 Before fetch -->")

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result);
          setAnimalData(result);
          console.log("3 Got animalData -->")
        } 
      )
      .catch(error => console.log('error', error));

    console.log("4 After fetch -->")
  }

  console.log( "just about to render", animalData)

  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid lightgray' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Characters Inc
          </Typography>
          <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => handleButtonClick()}
          >
            FETCH
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4}}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2}}
        >
          Prevalent Protagonists
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Hmm, seems like we're missing some of the other protagonists.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          {
            characters.map((object,index) =>
                <Grid key={index}
                  item
                  xs={12}
                  md={4}
                >
                  <CharacterCard key={index} name={object.title} image={object.pic} descriptions={object.description} />
                 
                </Grid>
            )

          }

          {
            animalData.map((object) => 
              <Grid
                item
                xs={12}
                md={4}
              >
                <CharacterCard name={object.name} image={object.image_link} descriptions={[object.habitat,object.diet,object.geo_range]} />
              </Grid>
            )
          }

        </Grid>
      </Container>
    </div>
  );
}

export default App;
