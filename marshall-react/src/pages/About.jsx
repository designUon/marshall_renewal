import React from 'react'
import AboutStory from './AboutStory'
import AboutStore from './AboutStore'
import '../css/about.css'

export default function About() {
  return (
    <div className='about_wrap'>
      <AboutStore/>
      <AboutStory/>
    </div>
  )
}
