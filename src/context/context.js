import React, { useContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const AppContext = React.createContext();
const API_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/';

const AppProvider = ({children}) => {
  const [randomMeal, setRadnomMeal] = useState({});
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [meal, setMeal] = useState({});
  const [categories, setCategories] = useState([]);
  const [categorieMeals, setCategorieMeals] = useState([]);

  const getRandomMeal = async () => {
    const response = await axios(`${API_ENDPOINT}random.php`).catch(err => console.log(err))

    if(response) {
      const data = response.data.meals;
      setRadnomMeal(data[0])
    }
  }

  const getCategories = async () => {
    const response = await axios(`${API_ENDPOINT}categories.php`).catch(err => console.log(err))

    if(response) {
      const data = response.data.categories;
      setCategories(data)
    }
  }

  const fetchMeals = async (e) => {
    e.preventDefault();

    if(searchTerm) {
      const response = await axios(`${API_ENDPOINT}search.php?s=${searchTerm}`).catch(err => console.log(err));

      if(response) {
        const data = response.data.meals;
        setMeals(data);

        if(data === null) {
          setError('Nothing found. Try to search for another meal...');
        } else {
          setError('')
        }
      }
    } else {
      setError('You have to enter search term.')
    }
  }

  const getMeal = useCallback( async (id) => {
    const response = await axios(`${API_ENDPOINT}lookup.php?i=${id}`).catch(err => console.log(err));

    if(response) {
      setMeal(response.data.meals[0])
    }
  }, [])

  const getCategorieMeals = useCallback( async (name) => {
    const response = await axios(`${API_ENDPOINT}filter.php?c=${name}`).catch(err => console.log(err));

    if(response) {
      setCategorieMeals(response.data.meals)
    }
  }, [])

  useEffect(() => {
    getRandomMeal();
    getCategories();
  }, [])

  return (
    <AppContext.Provider value={{randomMeal, searchTerm, setSearchTerm, meals, fetchMeals, error, getMeal, meal, categories, getCategorieMeals, categorieMeals}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
