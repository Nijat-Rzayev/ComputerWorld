import React, { useState, useEffect, useMemo } from 'react'
import HomeTop from './HomeTop/HomeTop'
import { connect } from 'react-redux'
import "./Home.css"
import "./HomeRes.css"
import SliderBox from './SliderBox/SliderBox';
import Partners from './Partners/Partners'

function Home(props) {
    return (
        <div className="Home">
            <HomeTop />
            <div className="SliderBox">
                <h1>Həftənin təklifləri</h1>
                <SliderBox data={props.state.randomData.items.slice(0, 40)} />
            </div >
            <div className="SliderBox">
                <h1>Ən yaxşı sezon təklifləri</h1>
                <SliderBox data={props.state.randomData.items.slice(40, 80)} />
            </div >
            <div className="SliderBox">
                <h1>Sizin üçün Seçdiklərimiz</h1>
                <SliderBox data={props.state.randomData.items.slice(80, 120)} />
            </div >
            <div className="Partners">
                <h2>Partnyorlar</h2>
                <Partners />
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return { state };
};
export default connect(mapStateToProps)(Home);
