import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { Questionnaire } from './Questionnaire';

export const NavBar = () => {
    return(
        <div class='navbar'>
            <Link to="/questionnaire">
            Questions
            </Link>
            <Link to='/'>
            Roadmap
            </Link>
        </div>
    )
}