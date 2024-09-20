import { useState } from 'react'
import './App.css'
import companiesData from './companies.json'
import techData from './technologies.json'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'

function App() {
  const [companies, setCompanies] = useState(companiesData)
  const [technologies, setTechnologies] = useState(techData)

  return (
    <div className='App'>
      <Navbar />
      <h1>LAB | React Stack Tracker</h1>
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companies} />} />
        <Route path='/tech/:slug' element={<TechnologyPage technologies={technologies} />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
