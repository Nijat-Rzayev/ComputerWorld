import React, { useState } from 'react'
import "./AboutUs.css"
import History from './History'
import AboutInner from './AboutInner'
function AboutUs() {
    const [page, setPage] = useState(true)

    return (
        <>
            <div className="aboutUs">
                <div className="aboutUsHeader">
                    <div className="AboutUsHedaerInner">
                        <div>
                            <button onClick={() => { setPage(true) }}>
                                Haqqımızda</button>
                        </div>
                        <div>
                            <button onClick={() => { setPage(false) }}>
                                Tariximiz</button>
                        </div>
                    </div>
                </div>
                <div className="aboutUsContainer">
                    <div className={`${!page ? "HistoryPage" : "Aboutİnformation"} `} >
                        {!page ?
                            <History /> : <AboutInner />
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default AboutUs