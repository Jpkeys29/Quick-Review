import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { Questionnaire } from './Questionnaire';

export const NavBar = () => {
    return(
        <div>
            <Link to="/questionnaire">
            Questions
          </Link>
        </div>

    )
}