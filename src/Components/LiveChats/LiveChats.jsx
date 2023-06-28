import React, { useState } from 'react'
import "../LiveChats/LiveChats.css"
function LiveChats() {
    const [Live, setLive] = useState(false);
    const ToogleLive = () => {
        setLive(!Live)
    }
    return (
        <>
            <div className="liveChats">
                <div className={`liveChatsInner ${Live ? "active" : ""} `}>
                    <div className="liveChatsHeader">
                        <button>
                            <svg height="40px" className='Svg' viewBox="0 0 10 15"  >
                                <path fill="#fff" d="M8,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,18,8,18z M16,18c-1.1,0-2-0.9-2-2s0.9-2,2-2 s2,0.9,2,2S17.1,18,16,18z M24,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S25.1,18,24,18z"></path>
                            </svg>
                        </button>
                        <p>Live Chats</p>
                        <button onClick={() => { setLive(!Live) }}>
                            <svg height="40px" viewBox="0 0 24 24">
                                <path fill="#fff" d="M11,22c-0.6,0-1-0.4-1-1s0.4-1,1-1h15c0.6,0,1,0.4,1,1s-0.4,1-1,1H11z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="liveChatsBody">
                        <div className="liveChatsBodyContent">
                            <p>Bizim konsultantlar hazırda aktiv deyil. Zəhmət olmasa, geri dönmək üçün mesajınızı qeyd edin.</p>
                            <form action="" className='liveChatsForm'>
                                <div>
                                    <label htmlFor="name">Ad <span className='star'>*</span></label>
                                    <input type="text" id='name' />
                                    {/* <p>Tələb olunan xanaları doldurmağınız xahiş olunur</p> */}
                                </div>
                                <div>
                                    <label htmlFor="Email">Email <span className="star">*</span></label>
                                    <input type="text" id='Email' />
                                    {/* <p>Tələb olunan xanaları doldurmağınız xahiş olunur</p> */}
                                </div>
                                <div>
                                    <label htmlFor="Subject">Mövzu <span className="star">*</span></label>
                                    <input type="text" id='Subject' />
                                    {/* <p>Tələb olunan xanaları doldurmağınız xahiş olunur</p> */}
                                </div>
                                <div>
                                    <label htmlFor="Message" >Mesaj <span className="star">*</span></label>
                                    <input type="text" id='Message' />
                                    {/* <p>Tələb olunan xanaları doldurmağınız xahiş olunur</p> */}
                                </div>
                            </form>
                            <button className='liveSubmit'>Submit</button>
                            <div className="MessageIcon">
                                <svg height="20px" width="30px" viewBox="0 0 24 24">
                                    <path fill="#fff" d="M5.5,6l6.5,5.7L18.5,6H5.5z M20,7.3l-7.3,6.4c-0.4,0.3-0.9,0.3-1.3,0L4,7.3V17c0,0.6,0.4,1,1,1h14 c0.6,0,1-0.4,1-1V7.3z M5,4h14c1.7,0,3,1.3,3,3v10c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V7C2,5.3,3.3,4,5,4z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <button className={`OpenLiveBtn ${Live ? "" : "active"}`} onClick={() => { setLive(!Live) }}>Sualınızı yaza bilərsiniz</button>
            </div >
        </>
    )
}

export default LiveChats