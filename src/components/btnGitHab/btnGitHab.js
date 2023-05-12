import React from 'react'
import gitHab from'./gitHub-black.svg'
import './Style.css'

export default function BtnGitHab() {
  return (
    <div>
      <a href="#!" className="btn-outline">
              <img src={gitHab} alt="" />
              GitHub repo
          </a>
    </div>
  )
}