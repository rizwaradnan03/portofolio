import React from 'react'
import Navbar from '../components/Navbar'
import JumboTron from '../components/JumboTron'
import Gallery from '../components/Gallery'

const HomePage = () => {
    document.title = 'Home Page'
    return (
        <>
            <Navbar />
            <div className="relative">
                <JumboTron />
            </div>
            <Gallery />
        </>
    )
}

export default HomePage