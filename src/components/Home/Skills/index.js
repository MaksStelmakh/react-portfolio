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
  //---------------------------------------------------

  // TRANSLATE SVG ELEMENTS TO Path2D

  //---------------------------------------------------
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
            Expert in front-end development including technologies like{' '}
            <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>,{' '}
            <span>TypeScript</span>, <span>React</span>, <span>Redux</span>,{' '}
            <span>SCSS</span>, <span>Parcel</span>, <span>Gulp</span>,{' '}
            <span>Git</span>, etc.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
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
