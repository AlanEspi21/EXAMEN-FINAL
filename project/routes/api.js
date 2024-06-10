const express = require('express');
const axios = require('axios');
const router = express.Router();

const OPENWEATHER_API_KEY = '257bf19dce2a4d493eb126fe379052 01';
const OPENWEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const DATOS_GOB_MX_URL = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';


router.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  console.log(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`)
  try {
    const response = await axios.get(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`);
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del clima',message:error });
  }
});

router.get('/searcState/:state',async (req,res)=>{
  const state=req.params.state
  try{
    let result = []
    const response = await axios.get(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`);
    response=response.data.filter(elem=>elem.name.toString().toLowerCase().includes(state.toLowerCase()))
    res.status.json(result)
  }catch (error){
    res.status(500).json({ error: 'Error al obtener datos del clima' });
  }
})


router.get('/conditions', async (req, res) => {
  try {
    const response = await axios.get(DATOS_GOB_MX_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de condiciones atmosféricas' });
  }
});

module.exports = router;
