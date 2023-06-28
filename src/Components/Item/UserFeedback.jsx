import { Tab } from '@mui/material'
import React from 'react'
import Table from '../Complaint/Form'
import "../../Components/Complaint/Complaint.css"
import "../../Components/Complaint/ResComplaint.css"
import "./item.css"
function UserFeedback(item) {
    console.log(item);
    return (
        <>
            <div className="UserFeedback">
                <h1>Rəy yaz</h1>
                <Table />
            </div>
        </>
    )
}

export default UserFeedback