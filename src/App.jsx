import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Survey from './pages/Survey'

function getPathname() {
  return window.location.pathname || '/'
}

export default function App() {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
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

  const page = pathname === '/survey' ? <Survey navigate={navigate} /> : <Home navigate={navigate} />

  return <div className="page-transition">{page}</div>
}
