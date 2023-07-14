import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = ({ allCategories }) => {

  const location = useLocation;
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUv5exV1pgK7bz6Mmokg6QM-OwIk652xDWfTxBF3ttqC8PbGjywg7OF7-KDEfXpugpv70&usqp=CAU"
            width={400}
            height={150}
            alt="Logo"
          ></img>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {allCategories?.map(category => (
          <Link key={category?.url} to={category?.url}
          className={location.pathname === category?.url ? "activenav":""}
          >
            {category?.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;
