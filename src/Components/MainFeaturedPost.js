import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import {Box} from "@mui/material";

const MainFeaturedPost =({mainFeaturedPost})=>{
    return <Paper
    sx={{position:'relative',backgroundColor:'grey.800',color:'#fff',mb:4,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:"center",
    backgroundImage: `url(${mainFeaturedPost?.image})`
    }}
    >
        <Box
        sx = {{top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.3)"}}
        >
            <Grid container>
            <Grid item md={6}>
                <Box sx={{position:'relative',p:{xs:3,md:6},pr:{md:6}}}>
                    <Typography component='h1' variant="h3" color="inherit">
                        {mainFeaturedPost.title}
                    </Typography>
                    <Typography component='h1' variant="h5" color="inherit">
                        {mainFeaturedPost.description}
                    </Typography>
                </Box>

            </Grid>
           </Grid>

        </Box>

    </Paper>
    
}

export default MainFeaturedPost;