import React from 'react'

import { Footer } from '../shared/Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/Navbar'
import Upeer from '../shared/Upeer'

export const Main = () => {
  return (
    <div  className=''>
  <Upeer></Upeer>
<Navbar></Navbar>
<div className='container mx-auto '>
<Outlet></Outlet>

</div>

<Footer></Footer>

    </div>
  )
}
