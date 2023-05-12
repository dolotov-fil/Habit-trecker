import React from 'react'
import './Style.css'
import BtnGitHab from '../btnGitHab/btnGitHab'

export default function Header() {
  return (
    <div>
       <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong> <em>Hi, let's create </em>   </strong><br />
                Habits
            </h1>
            <div className="header__text">
                <p>let's start with the first habit   </p>
            </div>
            <a href="/create" className="btn">Create a habit</a>
           
        </div>
    </header>

    </div>
  )
}
