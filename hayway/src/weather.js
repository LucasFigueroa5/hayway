import axios from 'axios';

const getWeatherData = async () => {
  const appId = '427d606b';
  const appKey = 'bfcb424332431e872d04b9fa7da82555';
  const url = `http://api.weatherunlocked.com/api/current/ar.A4400?app_id=${appId}&app_key=${appKey}`;

  try {
    const response = await axios.get(url);
    console.log('Weather Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeatherData;