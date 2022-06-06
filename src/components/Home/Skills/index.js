import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import Loader from 'react-loaders'
import cv from '../../../assets/cv/Stelmakh_Maksym.pdf'
import GlobusFunc from './Globus'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'S',
    'k',
    'i',
    'l',
    'l',
    's',
    ' ',
    '&',
    ' ',
    'E',
    'x',
    'p',
    'e',
    'r',
    'i',
    'e',
    'n',
    'c',
    'e',
  ]

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            Talented developer in front-end development including technologies
            like <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>,{' '}
            <span>TypeScript</span>, <span>React</span>, <span>Redux</span>,{' '}
            <span>SCSS</span>, <span>Parcel</span>, <span>Gulp</span>,{' '}
            <span>Git</span>, <span>Figma</span> etc.
          </p>
          <p>
            I am a persistent developer who solves any problem that may arise in
            front of me, I have 1 year of non-commercial experience in
            development, and I did an internship at InCloudSoft as a Web
            developer. I put special effort into optimizing my code and
            providing the best user experience. I guarantee a commitment during
            work on your project.
          </p>
          <p>
            Visit my{' '}
            <a href="https://www.linkedin.com/in/maksstelmakh/" target="_blank">
              LinkedIn
            </a>{' '}
            profile for more details. Also you can checkout my cv on this{' '}
            <a href={cv} target="_blank">
              link
            </a>
            .
          </p>
        </div>
        <GlobusFunc />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
