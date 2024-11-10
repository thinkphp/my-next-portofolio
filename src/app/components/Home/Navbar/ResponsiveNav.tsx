'use client';

import { useState } from "react";
import MobileNav from "./MobileNav"
import Nav from "./Nav"

function ResponsiveNav() {

  const [showNav, setShowNav] = useState(false)

  const showHandlers = () => setShowNav(true)
  const closeHandlers = () => setShowNav(false)


  return (
    <div>
      <Nav openNav={showHandlers} />
      <MobileNav showNav={showNav} closeNav={closeHandlers} />
    </div>
  )
}

export default ResponsiveNav