const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/businessProfile', async (req, res) => {
  try {
    const apiKey = 'AIzaSyD254Fwgs-RkYHwu9J5yzkzfULuRloRPNE';
    const placeId = 'ChIJ8TY5ftdZwoARFnMG6kgar6w';

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

module.exports = router;
