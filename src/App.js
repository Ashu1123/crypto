import React from 'react'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom"
import {Layout, Typography, Space} from "antd"
import {Navbar, Exchanges, Cryptocurrencies, Homepage, CryptoDetails, News} from "./Components"


const App = () => {
  return (
    <div className='app'>
      
      <div className='navbar'>
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <BrowserRouter>
          <Navbar/>
            <Routes>
            <Route path="/" element={<Homepage />}/>
            </Routes>
            <Routes>
            <Route path="/exchanges" element={<Exchanges />}/>
            </Routes>
            <Routes>
            <Route path="/eryptocurrencies" element={ <Cryptocurrencies />}/>
            </Routes>
            <Routes>
            <Route path="/cryptodetails" element={<CryptoDetails />}/>
            </Routes>
            <Routes>
          <Route path="/news" element={<News />}/>
            </Routes>
          </BrowserRouter>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>

    </div>

  )
}

export default App