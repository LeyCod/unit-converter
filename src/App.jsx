import { useState } from 'react'
//Components
import { Header } from "./components/header/Header.jsx"
import { Converter } from "./components/converter/Converter.jsx"
import { Footer } from "./components/footer/Footer.jsx"
//Style 
import "./app.css"

export const App = () => {

  return (
    <div>
        <Header/>
        <Converter/>
        <Footer/>
    </div>
  )
}
