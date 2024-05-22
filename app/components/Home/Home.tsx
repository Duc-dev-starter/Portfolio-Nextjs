"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Advantage from './Advantage/Advantage'
import Projects from './Projects/Projects'
import AOS from "aos";
import "aos/dist/aos.css"

const Home = () => {
    useEffect(() => {
        const initAos = async () => {
            await import("aos")
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            })
        }
        initAos();
    }, [])

    return (
        <div>
            <Hero />
            <About />
            <Feature />
            <Advantage />
            <Projects />
        </div>
    )
}

export default Home