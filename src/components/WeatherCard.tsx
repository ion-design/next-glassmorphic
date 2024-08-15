
// Weather card that displays weather and a suggestion of what to wear at a zip code


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';

const WeatherCard = () => {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState(null);
  const [clothingSuggestion, setClothingSuggestion] = useState('');

  useEffect(() => {
    if (zipCode.length === 5) {
      fetchWeather(zipCode);
    }
  }, [zipCode]);

  const fetchWeather = async (zip) => {
    // This is a mock API call. In a real application, you'd call an actual weather API.
    const mockWeather = {
      temperature: Math.floor(Math.random() * 40) - 10, // -10 to 30 Celsius
      condition: ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)]
    };
    setWeather(mockWeather);
    suggestClothing(mockWeather);
  };

  const suggestClothing = (weatherData) => {
    if (weatherData.temperature < 0) {
      setClothingSuggestion('Heavy winter coat, gloves, and a warm hat');
    } else if (weatherData.temperature < 10) {
      setClothingSuggestion('Warm jacket and a scarf');
    } else if (weatherData.temperature < 20) {
      setClothingSuggestion('Light jacket or sweater');
    } else {
      setClothingSuggestion('T-shirt and shorts');
    }
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return <Sun className="text-yellow-400" />;
      case 'Cloudy':
        return <Cloud className="text-gray-400" />;
      case 'Rainy':
        return <CloudRain className="text-blue-400" />;
      case 'Snowy':
        return <Snowflake className="text-blue-200" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="glass dark:glass-dark p-6 rounded-xl shadow-lg text-white max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Weather Card</h2>
      <input
        type="text"
        placeholder="Enter ZIP code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {weather && (
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">{weather.temperature}°C</p>
              <p className="text-lg">{weather.condition}</p>
            </div>
            {getWeatherIcon(weather.condition)}
          </div>
          <p className="mt-4 text-lg">Suggestion: {clothingSuggestion}</p>
        </div>
      )}
    </motion.div>
  );
};

export default WeatherCard;
