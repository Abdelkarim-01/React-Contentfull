import React from 'react'
import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                Hi, my name is <strong>Abdelkarim Idrissi</strong>. I am a software engineer studying at FST Settat. This is my React Projects website, where I showcase all my React projects at the moment. These projects are deployed with the help of Netlify, and for this specific project, I used Contentful CMS to store data about each project. I hope you enjoy it!
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className="img" />
            </div>
        </div>
    </section>
  )
}

export default Hero