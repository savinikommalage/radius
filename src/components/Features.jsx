import React, { useState } from 'react'

export default function Features(){
  const items = [
    'Find teams for hackathons',
    "Connect with niche communities",
    "Discover events beyond classes",
    "Log verified attendance"
  ]

  const [index, setIndex] = useState(0)

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative">
        <button
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 z-10"
        >
          ←
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(i => (
            <div key={i} className="p-6 bg-white border rounded">
              <h3 className="font-semibold mb-2">{i}</h3>
              <p className="text-sm text-gray-600">Short description about the benefit.</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIndex(Math.min(items.length - 1, index + 1))}
          disabled={index === items.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 z-10"
        >
          →
        </button>
      </div>
    </section>
  )
}
