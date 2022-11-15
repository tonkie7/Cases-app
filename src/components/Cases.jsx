import React from 'react'
import { Link } from 'react-router-dom'

const Cases = ({ cases }) => {

   const formatDate = (date) => {
      let timestamp = date
      let dateFormat = new Date(timestamp).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "numeric", hour: "numeric", minute: "numeric" })
      return dateFormat
   }

   const changeStatus = (status) => {
      switch (status) {
         case 0: return "Not Started";
         case 1: return "Processing";
         case 2: return "Completed";
         default: return "Not Started"
      }
   }

   return (
      <div>
         <div className='container w-25 mb-2'>
            <div className='d-flex  justify-content-between'>
               <h2 className='me-2'>Your Cases</h2>
               <Link to="/create"><button className='btn btn-dark'>New Case</button></Link>
            </div>
         </div>
         {cases.sort((a, b) => b.created.localeCompare(a.created)).map(x => (
            <div className='container w-25' key={x.id}>
               <div className=''>
                  <div className='border border-dark rounded mb-3'>
                     <div className='px-3 py-2'>
                        <div className='d-flex justify-content-between'>
                           <small className='text-lowercase fw-bold fs-6'>{x.title}</small>
                           <small className='text-lowercase'>{x.email}</small>
                        </div>
                        <div className='mt-2'>
                           <small className=''>{x.description}</small>
                        </div>
                        <div className='mt-4 d-flex justify-content-between'>
                           <small className='fst-italic'>{formatDate(x.created)}</small>
                           <small className=''>{changeStatus(x.status)}</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Cases