import React from 'react'

const CaseDetails = ({ cases }) => {

   console.log(cases.title)
   return (
      <>
         <div className='container w-25'>
            <div className=''>
               <div className='border border-dark rounded mb-3'>
                  <div className='px-3 py-2'>
                     <div className='d-flex justify-content-between'>
                        <small className='text-lowercase fw-bold fs-6'>{cases.title}</small>
                        <small className='text-lowercase'>{cases.email}</small>
                     </div>
                     <div className='mt-2'>
                        <small className=''>{cases.description}</small>
                     </div>
                     <div className='mt-4 d-flex justify-content-between'>
                        <small className='fst-italic'>{cases.date}</small>
                        <small className=''>{cases.status}</small>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default CaseDetails