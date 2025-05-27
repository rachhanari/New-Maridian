import React from 'react'
import './App.css'
import Category from './components/Category/Category'
import Courses from './components/Courses/Courses'
import Blogs from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import './MediaQuery.css'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <Header />
      <Home/>
      <Category />
      <Courses />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App