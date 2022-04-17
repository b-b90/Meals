import React from 'react';
import {Home, Error, Categories, MealDetails, Categorie} from './pages';
import {Header, Footer} from './components';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:name" element={<Categorie />} />
        <Route path="meal/:id" element={<MealDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
