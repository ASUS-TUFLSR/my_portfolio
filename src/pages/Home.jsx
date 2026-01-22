import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden' >
        {/* theme toggle */}
        <ThemeToggle/>
        {/* Background effects */}
        <StarBackground/>
        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}
    </div>
  )
}

export default Home