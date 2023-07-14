import React from "react";
import MainFeaturedPost from '../Components/MainFeaturedPost';
import { mainFeaturedPost } from '../data';
import FeaturedPet from '../Components/FeaturedPet';
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { fetchAllPets } from '../redux/actions/pets';
import { fetchAllCategories } from "../redux/actions/catagories";
import { CssBaseline , Grid} from '@mui/material/';

const Homepage = ()=>{

    const dispatch = useDispatch();
  const pets = useSelector((state)=>state.pets.allPets)

  useEffect(() => {
    fetchAllCategories({ dispatch });
    fetchAllPets({dispatch});
  }, []);

    return <><MainFeaturedPost mainFeaturedPost={mainFeaturedPost} />
    <Grid container spacing={4}>
      {pets.map((pet) =>(<FeaturedPet key={pet._id} pet={pet}></FeaturedPet>))}
    </Grid> </>
}

export default Homepage;