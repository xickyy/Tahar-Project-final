const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8000;

app.use(cors());

// Define a route to fetch Google Business Profile information
app.get('/api/business-profile', async (req, res) => {
  try {
    const apiKey = 'AIzaSyD254Fwgs-RkYHwu9J5yzkzfULuRloRPNE';
    const placeId = 'ChIJ8TY5ftdZwoARFnMG6kgar6w'; // Replace with the actual Place ID

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
    );

    const businessProfileData = response.data.result;
    res.json(businessProfileData);
  } catch (error) {
    console.error('Error fetching business profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
