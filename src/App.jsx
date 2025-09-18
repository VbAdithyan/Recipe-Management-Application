import { useState } from 'react'
import './App.css'
import RecipeForm from './RecipeForm'
import ViewRecipes from './ViewRecipes'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default page → Recipe Form */}
          <Route path="/" element={<RecipeForm />} />
          {/* Recipes List Page */}
          <Route path="/recipes" element={<ViewRecipes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
