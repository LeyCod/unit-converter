import { useState } from "react";
//Style
import "./converter.css"
import { FaExchangeAlt, FaMeetup, FaRegHeart} from "react-icons/fa";


export const Converter = () => {
    const [input, setInput] = useState(0)
    console.log(input)
    const [lengthUnit, setLengthUnit] = useState(["km", "m", "cm", "mi", "ft", "inch"]);
    
// converter formulas
    const kilometersToMiles = (km) => {
        return km * 0.62137;
    }

    const milesToKilometers = (mi) => {
        return mi * 1,60934;
    }

    const feetToMeters = (ft) => {
        return ft * 0,3048;
    }

    const metersToFeet = (m) => {
        return m * 3,28084;
    }

    const centimetersToInches = (cm) => {
        return cm * 0.3937;
    }

    const inchesToCentimeters = (inch) => {
        return inch * 2.54;
    }

    const handelChange = () => {
        
    }

    return (
        <div>
            <div className="main-container">
                <div className="converter-container">
                    <h2 className="converter-title">Convert</h2>
                    <div className="main-content">
                        <select name="units-selector">
                            <option value="" disabled>Select your option</option>
                            <option value="kmtomi">kilometers to miles</option>
                            <option value="mitokm">miles to kilometers</option>
                            <option value="fttom">feet to meters</option>
                            <option value="mtoft">meters to feet</option>
                            <option value="cmtoinch">centimeters to inches</option>
                            <option value="inchtocm">inches to centimeters</option>
                        </select>
                        <button className="switchBtn"><FaExchangeAlt/></button>
                        <div className="units-input">
                            <input type="text" id="input-exchanger" onChange={(e) => setInput(e.target.value)} required/>
                            <label>{"unit"}</label>
                        </div>
                    </div>
                    <div className="footer-content">
                        <button className="favBtn"><FaRegHeart/></button>
                        <div></div>
                        <div className="result-display">{"Result"} <span>{"unit"}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}