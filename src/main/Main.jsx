import React from 'react'

import { Footer } from '../shared/Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/Navbar'

export const Main = () => {
  return (
    <div>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>

    </div>
  )
}
