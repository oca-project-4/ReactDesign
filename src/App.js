import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import MinPage from './Components/MinPage'
import Footer from './Components/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <Header/>
       <MinPage/>
       <Footer/>
      
      </div>
    )
  }
}
