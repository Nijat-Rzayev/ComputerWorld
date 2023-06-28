import React from 'react'
import "./Complaint.css"
import "./ResComplaint.css"
import Form from './Form'
function Complaint() {
  return (
    <>
      <div className="Complaint">
        <div className="ComplaintInner">
          <h1 className='ComplSuggest'>
            Şikayət və təkliflər
          </h1>
          <Form />
        </div>
      </div>
    </>
  )
}

export default Complaint