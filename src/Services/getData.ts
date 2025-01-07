import axios from "axios";

const getSwapi = async () => {
  const API_URL = "https://swapi.py4e.com/api/films/";
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error:any) {
    console.error("Error fetching data from SWAPI:", error.message);
  }
};

export default getSwapi;
