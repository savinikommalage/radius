import React from 'react'
import heroPlaceholder from '../assets/hero-image.svg'

export default function Hero(){
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            NEVER MISS
            <br />
            <span className="text-purple-700">WHAT MATTERS.</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">one place for everything happening on campus and beyond</p>
        </div>
        <div className="flex justify-center">
          <img src={heroPlaceholder} alt="hero" className="w-48 h-auto" />
        </div>
      </div>
    </section>
  )
}
