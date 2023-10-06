import axios from "axios";

export const fetchAllProduct = async (page) => {
  try {
    const response = await axios.get("http://localhost:5000/api/new/fetctAllestate", {
      params: { page },
    });

    const newProducts = response.data()
    console.log("newProducts", newProducts)
  } catch (error) {
    console.log( "error in fetching product : ", error)
  }
};
  