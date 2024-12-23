'use client'

import React from 'react'

import FlyingButton from '../(docs)/docs/flyingbutton/flying-button';


const page = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testing Flying Button</h1>
      <FlyingButton
        name="Button"
        color="#ff0000"
        video="/assets/fbutton.mp4"
        link="https://Murtazadev-one.vercel.app"
        icon={<div>🔥</div>}
      />
    </div>
  )
}

export default page