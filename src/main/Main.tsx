import React from 'react'

import { Footer } from '../shared/Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/Navbar'
import Upeer from '../shared/Upeer'

export const Main = () => {
  return (
    <div  className='h-full z-50   top-0'>
  <Upeer></Upeer>
  <div className='sticy '>
  <Navbar></Navbar>

  </div>

<div className='container mx-auto '>
<Outlet></Outlet>

</div>

<Footer></Footer>

    </div>
  )
}
