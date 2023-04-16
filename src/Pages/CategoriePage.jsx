import React from 'react'
import Categorie from '../Components/Categorie'
import { Link } from 'react-router-dom'

function CategoriePage() {
  return (
    <div>
        <p> this is the categorie page </p>
        <Categorie />
        <Link to={'/'}>
        <p>go back</p>

        </Link>
        
    </div>
  )
}

export default CategoriePage