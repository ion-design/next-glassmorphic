
// A card that displays the relevant statistics of a basketball player, their photo, their current team, age, and origin. You should be able to click the card to expand more info.


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PlayerCard = ({ player }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="glass dark:glass-dark p-6 rounded-xl shadow-lg text-white max-w-md mx-auto cursor-pointer"
      onClick={toggleExpand}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <img src={player.photo} alt={player.name} className="w-24 h-24 rounded-full mr-4 object-cover" />
        <div>
          <h2 className="text-2xl font-semibold">{player.name}</h2>
          <p className="text-gray-300">{player.team}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-400">Age</p>
          <p className="text-xl">{player.age}</p>
        </div>
        <div>
          <p className="text-gray-400">Origin</p>
          <p className="text-xl">{player.origin}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-gray-400">PPG</p>
          <p className="text-xl">{player.stats.ppg}</p>
        </div>
        <div>
          <p className="text-gray-400">RPG</p>
          <p className="text-xl">{player.stats.rpg}</p>
        </div>
        <div>
          <p className="text-gray-400">APG</p>
          <p className="text-xl">{player.stats.apg}</p>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 pt-4 border-t border-gray-600">
              <h3 className="text-xl font-semibold mb-2">Additional Info</h3>
              <p className="text-gray-300 mb-2">Height: {player.height}</p>
              <p className="text-gray-300 mb-2">Weight: {player.weight}</p>
              <p className="text-gray-300 mb-2">Position: {player.position}</p>
              <p className="text-gray-300">Draft: {player.draft}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-4">
        {isExpanded ? (
          <ChevronUp className="text-gray-400" />
        ) : (
          <ChevronDown className="text-gray-400" />
        )}
      </div>
    </motion.div>
  );
};

const BasketballPlayerStats = () => {
  const playerData = {
    name: "LeBron James",
    photo: "https://hoopshype.com/wp-content/uploads/sites/92/2024/02/i_54_cf_2e_lebron-james.png?w=1000&h=600&crop=1",
    team: "Los Angeles Lakers",
    age: 36,
    origin: "Akron, Ohio",
    stats: {
      ppg: 25.0,
      rpg: 7.7,
      apg: 7.8
    },
    height: "6'9\"",
    weight: "250 lbs",
    position: "Small Forward",
    draft: "2003 Round 1 Pick 1"
  };

  return (
    <div className="p-4">
      <PlayerCard player={playerData} />
    </div>
  );
};

export default BasketballPlayerStats;
