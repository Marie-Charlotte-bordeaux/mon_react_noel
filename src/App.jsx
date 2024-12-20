import { BrowserRouter as  Routes, Route } from 'react-router';

import './App.css'
import './index.css'
import {HomePage} from './app/homePage';
import {AboutPage} from './app/about/aboutPage';
import {NotFoundPage} from './app/notFoundPage';
import { NavBar } from './app/component/layout/navBar';

export default function App() {

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route  path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    <footer className='w-full h-24 bg-primary dark:text-cyan-700'>Pied</footer>
    </>
  )
}