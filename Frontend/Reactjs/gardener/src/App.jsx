import React from 'react'
import Home from './website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/Pages/About'
import Service from './website/Pages/Service'
import Projects from './website/Pages/Projects'
import Feature from './website/Pages/Feature'
import Quota from './website/Pages/Quote'
import Team from './website/Pages/Team'
import Testimonial from './website/Pages/Testimonial'
import Notfound from './website/Pages/Notfound'
import Contact from './website/Pages/Contact'
import Dashbord from './admin/Apages/Dashbord'
import Servicemanage from './admin/Apages/Servicemanage'
import ServiceAdd from './admin/Apages/ServiceAdd'
import Teammanage from './admin/Apages/Teammanage'
import TeamAdd from './admin/Apages/TeamAdd'
import { Bounce, ToastContainer } from 'react-toastify'
import Alogin from './admin/Apages/Alogin'




function App() {
  return (
    <BrowserRouter>

      {/* tostify */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Feature' element={<Feature />} />
          <Route path='/Quote' element={<Quota />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Testimonial' element={<Testimonial />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/Contact' element={<Contact />} />

          {/* Admin */}
          <Route path='/Dashboard' element={<Dashbord />} />
          <Route path='/Servicemanage' element={<Servicemanage />} />
          <Route path='/Serviceadd' element={<ServiceAdd />} />
          <Route path='/Teammanage' element={<Teammanage />} />
          <Route path='/Teamadd' element={<TeamAdd />} />
          <Route path='/alogin' element={<Alogin />} />








        </Routes>


      </div>
    </BrowserRouter>

  )
}

export default App