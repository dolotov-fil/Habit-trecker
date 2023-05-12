import React from 'react'
import gitHab from'./gitHub-black.svg'
import './Style.css'

export default function BtnGitHab({link}) {
  return (
    <div>
      <a href={link}   className="btn-outline">
              <img src={gitHab} alt="" />
              GitHub repo
          </a>
    </div>
  )
}