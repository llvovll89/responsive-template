import React from 'react'
import { Blog } from '../pages/Blog/Blog'
import { Contact } from '../pages/Contact/Contact'
import { Counter } from '../pages/Counter/Counter'
import { Footer } from '../pages/Footer/Footer'
import { Project } from '../pages/Project/Project'
import { Services } from '../pages/Services/Services'
import { Hero } from './Hero'

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Counter />
      <Project />
      <Blog />
      <Contact />
    </>
  )
}
