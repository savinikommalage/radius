import React from 'react'

export default function Features(){
  const items = [
    'Find teams for hackathons',
    "Connect with niche communities",
    "Discover events beyond classes",
    "Log verified attendance"
  ]

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(i => (
          <div key={i} className="p-6 bg-white border rounded">
            <h3 className="font-semibold mb-2">{i}</h3>
            <p className="text-sm text-gray-600">Short description about the benefit.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
