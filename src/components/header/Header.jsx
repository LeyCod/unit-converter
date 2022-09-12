//Style
import "./header.css"
import { FaExchangeAlt } from "react-icons/fa";

export const Header = () => {
    return (
        <>
            <header className='main-header'>
                    <FaExchangeAlt className="header-icon"/>
                    <p className="page-title">unit converter</p>
            </header>
        </>
    )
}