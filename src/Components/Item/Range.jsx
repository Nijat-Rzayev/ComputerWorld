import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { connect } from 'react-redux';


function Range(props) {
    const handleSliderChange = (e) => {
        let value = e.target.value
        props.dispatch(({ type: "CalculatorValue", value: value }))
    }
    const marks = [
        { value: 6, label: '6' },
        { value: 9, label: '9' },
        { value: 12, label: '12' },
        { value: 18, label: '18' },
        { value: 24, label: '24' }
    ];
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Custom marks"
                defaultValue={18}
                step={null}
                min={6}
                max={24}
                valueLabelDisplay="auto"
                marks={marks}
                disableSwap={true}
                onChange={handleSliderChange}
            />
        </Box>
    )

}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(Range)