// apiService.js
import axios from 'axios';

export const fetchEarthquakes = async (apiUrl, page = 1) => {
 try {
    const response = await axios.get(apiUrl + '/earthquakes', {
      params: {
        page: page,
        per_page: 10,
      },
    });
    return response.data;
 } catch (error) {
    console.error('Error fetching earthquakes:', error);
    throw error;
 }
};
