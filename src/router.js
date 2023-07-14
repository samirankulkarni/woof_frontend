import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage"; // Assuming the Homepage component is in a separate file
import CategorizedAnimal from "./Pages/CategorizedAnimal";
import PetProfilePage from "./Pages/PetProfilePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:category">
        <Route index element={<CategorizedAnimal/>}/>
        <Route index={false} path=":id" element={<PetProfilePage/>}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
