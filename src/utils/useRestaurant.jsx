import { useState, useEffect } from 'react';
import { RES_MENU_URL } from '../config';

const useRestaurant = (resId) => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  async function getRestaurantsMenu() {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data);
  }

  return restaurants;
};

export default useRestaurant;
