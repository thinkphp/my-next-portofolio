import React, { ReactNode } from 'react'

type Props = {
  children:ReactNode
}

function SectionsHeading({children}:Props) {
  return (
    <h1 className=' bg-zinc-700 text-center w-fit px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-3 '>
      {children}
    </h1>
  )
}

export default SectionsHeading