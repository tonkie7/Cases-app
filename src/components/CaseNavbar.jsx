import React from 'react'
import { Link } from 'react-router-dom'

const CaseNavbar = () => {
   return (
      <>
         <nav className='justify-content-center navbar navbar-dark bg-dark container w-25 my-4 rounded-1'>

            <ul className='navbar-nav'>
               <div className='d-flex'>
                  <li className='nav-item'>
                     <Link to="/" className="nav-link me-3">Cases</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to ="/create" className="nav-link me-3">New Case</Link>
                  </li>
               </div>
            </ul>

         </nav>
      </>
   )
}

export default CaseNavbar