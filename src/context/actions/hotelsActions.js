import axios from "axios";
import { GET_HOTELS } from "context/actionTypes";

export const getHotels = async (dispatch) => {
  let response = await axios
    .get("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
    .then((res) => {
      dispatch({
        type: GET_HOTELS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return err.response;
    });

  return response;
};
