import { useEffect, useState } from 'react';
const useLocalStorage = (key, value) => {
  const [localstorage, setLocalStorage] = useState();

  useEffect(() => {
    setLocalStorage(localStorage.setItem(key, value));
    setLocalStorage(localStorage.getItem(key))
  });

  return localstorage;
};

export default useLocalStorage;
