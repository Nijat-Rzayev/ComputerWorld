import React from 'react'
import "./Complaint.css"
import "./ResComplaint.css"
function Form() {
    const FormSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="Talbe">
                <div className="TableInner">
                    <form action="">
                        <div className='TalbeHeader'>
                            <div>
                                <p>Ad soyad</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <p>Əlaqə nömrəsi</p>
                                <input type="text" name="" id="" />
                            </div>
                        </div>

                        <div className='TalbeBody'>
                            <p>Şikayətiniz / Təklifiniz</p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='TalbeSendComplaint'>
                            <button onClick={(e) => { FormSubmit(e) }} className="BtnSend">Göndər</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form