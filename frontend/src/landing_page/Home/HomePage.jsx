import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Ecosystem from './Ecosystem'
import Media from './Media'


export default function HomePage() {
    return (
        <>
            <Hero />
            <Ecosystem />
            <Media />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    )
}
