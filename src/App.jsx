import { BrowserRouter as router, Routes, Route } from 'react-router';

import './App.css'
import './index.css'
import {HomePage} from './app/homePage';
import {AboutPage} from './app/about/aboutPage';
import {NotFoundPage} from './app/notFoundPage';
import { NavBar } from './app/component/layout/navBar';
import { Footer } from './app/component/layout/footer';

export default function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
    <NavBar/>
    <Routes>
      <Route  path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}