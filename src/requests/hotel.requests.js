import axios from "axios";

export const getHotelRoomTypes = async (hotelID) => {
  let response = await axios
    .get("https://obmng.dbm.guestline.net/api/roomRates/OBMNG/" + hotelID)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });

  return response;
};
