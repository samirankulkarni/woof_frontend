import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchPetsByCategory } from "../redux/actions/pets";
import { Grid } from "@mui/material";
import { fetchAllPets } from "../redux/actions/pets";
import { fetchAllCategories } from "../redux/actions/catagories";
import FeaturedPet from "../Components/FeaturedPet";

const CategorizedAnimal = () =>  {
    const {category} = useParams();
    console.log({category});
    const dispatch = useDispatch();
    const petsByCategory = useSelector((state)=>state.pets.petsByCategory);
    useEffect(() => {
        fetchPetsByCategory({dispatch,payload:{category}})
  }, [category]);

     console.log({petsByCategory});

    
    return <>
    <Grid container spacing={4}>
        {petsByCategory?.map((pet,index)=>(
            <FeaturedPet key={index} pet={pet}></FeaturedPet>
        ))}
    </Grid> 
    </>
}

export default CategorizedAnimal;