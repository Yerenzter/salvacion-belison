import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx';
import { Admin, Home, Login, Personnel, System, Error404 } from '../components'
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import '../shared/preference.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='*' element={ <Error404/> } />

        <Route path='/' element={ <Layout /> }>
          <Route path='admin' element={ <Admin /> }/>
          <Route path='login' element={ <Login /> }/>
          <Route path='personnel' element={ <Personnel /> }/>
          <Route path='system' element={ <System /> }/>
          <Route path='home' element={ <Home /> }/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
