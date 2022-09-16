import { useState } from "react";
//Style
import "./converter.css"
import { FaExchangeAlt, FaMeetup, FaRegHeart} from "react-icons/fa";


export const Converter = () => {
    const [inputValue, setInputValue] = useState(0);
    const [selectValue, setSelectValue] = useState('');
    const [fromUnit, setFromUnit] = useState('');
    const [toUnit, setToUnit] = useState('');
    const [result, setResult] = useState(0);

// converter formulas

    const kilometersToMiles = (km) => {
        const result = parseFloat(km) * 0.62137;
        return result.toFixed(2)
    }

    const milesToKilometers = (mi) => {
        const result = parseFloat(mi) * 1.60934;
        return result.toFixed(2)
    }

    const feetToMeters = (ft) => {
        const result = parseFloat(ft) * 0.3048;
        return result.toFixed(2)

    }

    const metersToFeet = (m) => {
        const result = parseFloat(m) * 3.28084;
        return result.toFixed(2)

    }

    const centimetersToInches = (cm) => {
        const result = parseFloat(cm) * 0.3937;
        return result.toFixed(2)

    }

    const inchesToCentimeters = (inch) => {
        const result = parseFloat(inch) * 2.54;
        return result.toFixed(2)

    }

//Handels 

    const handelSelect = (e) => {
        const value = e.target.value;
        setSelectValue(value)
        setInputValue(0)
        setResult(0)

        if (value === "kmtomi") {
            setFromUnit("km")
            setToUnit("mi")
        } else if (value === "mitokm") {
            setFromUnit("mi")
            setToUnit("km")
        } else if (value === "fttom") {
            setFromUnit("ft")
            setToUnit("m")
        } else if (value === "mtoft") {
            setFromUnit("m")
            setToUnit("ft")
        } else if (value === "cmtoinch") {
            setFromUnit("cm")
            setToUnit("inch")
        } else if (value === "inchtocm") {
            setFromUnit("inch")
            setToUnit("cm")
        }
    }

    const handelInput = (e) => {
        const value = e.target.value
        setInputValue(value)

        if (selectValue === "kmtomi") {

            setResult(kilometersToMiles(value))

        } else if (selectValue === "mitokm") {

            setResult(milesToKilometers(value))

        } else if (selectValue === "fttom") {

            setResult(feetToMeters(value))

        } else if (selectValue === "mtoft") {

            setResult(metersToFeet(value))

        } else if (selectValue === "cmtoinch") {

            setResult(centimetersToInches(value))

        } else if (selectValue === "inchtocm") {

            setResult(inchesToCentimeters(value))

        }
    }


    return (
        <div>
            <div className="main-container">
                <div className="converter-container">
                    <h2 className="converter-title">Convert</h2>
                    <div className="main-content">
                        <select name="units-selector" onChange={handelSelect}>
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
                            <input type="text" id="input-exchanger" onChange={handelInput} required/>
                            <label>
                                {fromUnit}
                            </label>
                        </div>
                    </div>
                    <div className="footer-content">
                        <button className="favBtn"><FaRegHeart/></button>
                        <div></div>
                        <div className="result-display">{result} <span>{toUnit}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}