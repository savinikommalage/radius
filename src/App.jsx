import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Survey from './pages/Survey'
import { Analytics } from '@vercel/analytics/react'

function getPathname() {
  return window.location.pathname || '/'
}

export default function App() {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    
    if (window.location.pathname === '/') {
      window.history.replaceState({}, '', '/survey')
      setPathname('/survey')
    }

    const handlePopState = () => setPathname(getPathname())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(nextPath) {
    if (nextPath === pathname) {
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
  }

  
  let page;
  if (pathname === '/survey') {
    page = <Survey navigate={navigate} />
  } else {
    page = <Home navigate={navigate} />
  }

  return (
    <div className="page-transition">
      {page}
      <Analytics />
    </div>
  )
}
