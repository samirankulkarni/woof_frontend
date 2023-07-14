import React from 'react';
import './App.css';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { CssBaseline , Grid} from '@mui/material/';
import { Container } from '@mui/material';
import Header from './Components/Header';
import MainFeaturedPost from './Components/MainFeaturedPost';
import { mainFeaturedPost } from './data';
import FeaturedPet from './Components/FeaturedPet';
import Footer from './Components/Footer';
import { useDispatch, useSelector} from "react-redux";
import { fetchAllCategories } from "./redux/actions/catagories";
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fetchAllPets } from './redux/actions/pets';
import Router from './router';

const sections = [{title:"all pets",url:"/"}]

const theme = createTheme({
  fontFamily: `"Trebuchet MS","Helventica" ,"Arial",sans-serif`,
  fontSize:14,
  fontWeightLight:300,
  fontWeightMedium:500 ,
  fontWeightRegular:400,
})

const App = ()=>{

  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  //console.log({allCategories}); 
  const pets = useSelector((state)=>state.pets.allPets)
  console.log({pets});

  useEffect(() => {
    fetchAllCategories({ dispatch });
    fetchAllPets({dispatch});
  }, []);

  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <Container maxWidth='lg'>
    <Header
        allCategories={[...sections,...allCategories.map((category)=>({
          title:category?.name,
          url:`/${category._id}`
        }))]}
    />
    {/* <MainFeaturedPost mainFeaturedPost={mainFeaturedPost} />
    <Grid container spacing={4}>
      {pets.map((pet) =>(<FeaturedPet key={pet._id} pet={pet}></FeaturedPet>))}
    </Grid> */}
    <Router></Router>
    <Footer/>
    </Container>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;