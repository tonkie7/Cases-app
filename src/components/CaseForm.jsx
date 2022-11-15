import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const CaseForm = () => {

   const [email, setEmail] = useState('')
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const history = useHistory()

   // console.log(email, title, description)

   const handleSubmit = (e) => {
      e.preventDefault()
      const caseIssue = { email, title, description }

      fetch('https://localhost:7072/api/cases', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(caseIssue)
      }).then(() => {
         console.log('new case added')
         history.push('/')
      })
   }

   return (
      <>
         <div className='container w-25'>
            <h2>Create a new case</h2>
            <form onSubmit={handleSubmit}>

               <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control" placeholder='Email' />

               <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" className="form-control" placeholder='Title' />

               <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" id="description" rows="4" placeholder='Description'></textarea>

               <button className="btn btn-dark btn-block mt-4">Send</button>

            </form>

         </div>
      </>
   )
}

export default CaseForm