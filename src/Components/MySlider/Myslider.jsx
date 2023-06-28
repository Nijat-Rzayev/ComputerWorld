import React, { useRef, useEffect, useState } from 'react';
import Slider from './Slider';
import "./Slider.css";
// pagination itemsperpage 
// mousemovue autoSlide;
// responsive 
// details absolute position

// firstElementChild ilk elementin balası
// scrollLeft scrollun soldan olan uzunluğu
// innerWith hazirki ekran uzunluğu
// clientWidth özelliği, bir HTML elementinin içerdiği içeriğin genişliğini (padding dahil) piksel cinsinden ifade eder.
// scrollWidth hazirki ekran uzunluğu (əyər varsa ,görünmeyen hissesi de daxildir)

function Myslider(props) {
    let distance, item = props.item, positionDiff, itemsPerPage = props.itemPerPage
    const sliderRef = useRef(null);
    const [dragStart, setDragStart] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const updateSlideWidth = () => {
            setSlideWidth(sliderRef.current?.firstElementChild.clientWidth);
        }
        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        distance = e.clientX - dragStart;
        sliderRef.current.scrollLeft -= distance;
        setDragStart(e.clientX);
    }
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart(e.clientX);
        positionDiff = e.clientX - sliderRef.current.offsetLeft;
    }

    const handleMouseUp = (e) => {
        setIsDragging(false);
        const scrollLeft = sliderRef.current.scrollLeft;
        const remainder = scrollLeft % slideWidth; //qaliq
        const scrollToPos = remainder > slideWidth / 2 ? scrollLeft + slideWidth - remainder : scrollLeft - remainder;
        sliderRef.current.scrollTo({ left: scrollToPos, behavior: 'smooth' });
    }
    const HandleDotCLick = (e, index) => {
        setActiveSlide(index);
        sliderRef.current.scrollTo({ left: index * sliderRef.current?.clientWidth, behavior: 'smooth' });
    }

    const PaginatinonBtnCalculator = () => {
        let totalItems = item.length;
        const pageCount = Math.ceil(totalItems / itemsPerPage);
        return (
            <>
                {Array.from({ length: pageCount }, (_, index) => (
                    <button key={index} onClick={(e) => { HandleDotCLick(e, index) }} className="btn"></button>
                ))}
            </>
        )
    }

    // slider box test only ; 
    const sliders = React.Children.toArray(props.children).filter(child => child.type === Slider);
    if (sliders.length !== props.children.length) {
        console.error('Myslider only accepts Slider components');
    }
    return (
        <>
            <div className="MySLider">
                <div className="Slider"
                    onMouseMove={handleMouseMove}

                    onMouseDown={handleMouseDown}

                    onMouseUp={handleMouseUp}

                    ref={sliderRef}
                >
                    {sliders}
                </div>
                <div className="Pagination">
                    <div className="allOffer">
                        <button>Bütün təklifləri gör</button>
                    </div>
                    <div className="owldots">
                        {PaginatinonBtnCalculator()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myslider;
