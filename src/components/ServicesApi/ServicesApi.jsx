import axios from "axios";


const apiKey = "84f36ce8d46426ff999c0e08f1d3cfde";
const apiUrl = `https://api.themoviedb.org/3/`;


export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/trending/all/day?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};


export const getFilmByID = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}movie/${id}?api_key=${apiKey}`);
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get film by ID");
    }
  } catch (error) {
    console.error("Error getting film by ID:", error);
    return null;
  }
};


export const getFilmCastByID = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}movie/${id}/credits?api_key=${apiKey}`);
    
    if (response.data) {
      return response.data;
    } else {
      console.error("Failed to get cast data for film with ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error getting film cast by ID:", error);
    return null;
  }
};

export const getFilmReviewsByID = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}movie/${id}/reviews?api_key=${apiKey}`);
    
    if (response.data) {
      return response.data;
    } else {
      console.error("Failed to get cast data for film with ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error getting film cast by ID:", error);
    return null;
  }
};