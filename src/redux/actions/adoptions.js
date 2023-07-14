import { createAdoptions } from "../../services/adoptions";
import { SET_ADOPTIONS_LOADER } from "../actionTypes/adoptions";

export const createAAdoption = ({ dispatch, payload }) => {

    dispatch({
        type: SET_ADOPTIONS_LOADER,
        payload: true,
      });

  createAdoptions(payload)
    .then(({ data }) => {
      dispatch({
        type: SET_ADOPTIONS_LOADER,
        payload: false,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SET_ADOPTIONS_LOADER,
        payload: false,
      });
    });
};