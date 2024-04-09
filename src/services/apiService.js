import axios from 'axios';

export const fetchEarthquakes = async (apiUrl, page = 1, magType = "") => {
  try {
    const response = await axios.get(apiUrl + '/earthquakes', {
      params: {
        page: page,
        per_page: 10,
        mag_type: magType,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching earthquakes:', error);
    throw error;
  }
};

export const createComment = async (apiUrl, earthquakeId, commentBody) => {
  try {
    const response = await axios.post(`${apiUrl}/earthquakes/${earthquakeId}/comments`, {
      body: commentBody,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};


