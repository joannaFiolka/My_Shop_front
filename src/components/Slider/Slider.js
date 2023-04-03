import './Slider.scss'
import arrowR from "../../assets/right-arrow.png"
import arrowL from "../../assets/left-arrow.png"
import {useEffect, useState} from "react";

const imgSlider = ["https://images.pexels.com/photos/167706/pexels-photo-167706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1161529/pexels-photo-1161529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

export const Slider = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    const lengthS = imgSlider.length - 1
    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideNumber(slideNumber === lengthS ? 0 : slideNumber + 1);
        }, 5000);
        return () => clearInterval(interval)
    }, [slideNumber])

    return (
        <div className="containerSlider">
            <div className="wrapperSlider">
                <img src={arrowL} onClick={() => handleMove("l")} className="arrow" alt="arrow left"/>
                <div className="imgWrapper">
                    <img
                        src={imgSlider[slideNumber]}
                        alt=""
                        className="sliderImg"
                    />
                </div>
                <img src={arrowR} onClick={() => handleMove("r")} className="arrow" alt="arrow right"/>
            </div>

        </div>
    )
}