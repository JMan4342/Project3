import React from 'react'
import Hero from "../../components/Hero/Hero";

export default function About() {
    const image = {
        src: './assets/reading.jpg',
        alt: 'missing img'
    }
    return (
        <div>
            <Hero title="Camping" subtitle="Welcome to the second week of Project 3! You’ve been working hard on your group project during the past week, collaborating with your fellow developers and creating a real-world MERN stack single-page application that you can showcase to potential employers. This week you will continue to work on your group project to create an interactive full-stack MERN application.
At the end of this week, your group will present the application to your classmates. Because this is a large-scale web application, you should consider concentrating on specific aspects of the project in your presentation, following the principle of the separation of concerns. Though each individual should be able to speak about their own contributions, this is still a group project. Be sure to emphasize how the different parts of your application came together and how you worked as a group!" image={image} />
        </div>
    )
}
