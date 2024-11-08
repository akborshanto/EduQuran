import React from 'react'

import { Footer } from '../shared/Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/Navbar'

export const Main = () => {
  return (
    <div >
<Navbar></Navbar>
<div className='container mx-auto'>
<Outlet></Outlet>

</div>

<Footer></Footer>

    </div>
  )
}
