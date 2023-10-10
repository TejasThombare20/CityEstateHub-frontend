import axios from "axios";
import { API } from "../utils";

export const fetchAllProduct = async (page) => {
  try {
    const response = await axios.get(`${API}/api/new/fetctAllestate`, {
      params: { page },
    });

    const newProducts = response.data()
    console.log("newProducts", newProducts)
  } catch (error) {
    console.log( "error in fetching product : ", error)
  }
};
  