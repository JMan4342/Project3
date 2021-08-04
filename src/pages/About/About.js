import React from 'react'
import Hero from "../../components/Hero/Hero";

export default function About() {
    const image = {
        src: './assets/jennAndI.jpg',
        alt: 'Jenn and I'
    }
    return (
        <div>
            <Hero title="About Me" subtitle="I have a wealth of experience working with people on advanced multi-million dollar platforms in high stress, high tempo environments. I rely on my on my experienced trouble shooting, problem solving, and communication to ensure the mission is always accomplished on time. I am able to do this by constantly developing a utility-belt consisting of: Teamwork and communication, detailed notes, strong fundamentals, decision making, creativity, and resilience. I do my best work with enthusiastic people under stressful situations. My mantra is Lead by example and learn something new everyday." image={image} />
        </div>
    )
}
