import React, { useState, useEffect } from 'react'
import "./item.css"
import { connect } from 'react-redux';
function Feature(props) {



    return (
        <>
            <div className="FeatureTable">
                <div className="sectionOne">
                    <ul>

                    </ul>
                </div>
                <div className="sectionTwo">
                    <ul>

                    </ul>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    };
};
export default connect(mapStateToProps)(Feature);
