import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Freedom from '../../assets/images/my-projects/3dfreedom.png'
import Filmoteka from '../../assets/images/my-projects/filmoteka.png'
import Todo from '../../assets/images/my-projects/to-do-list.png'
import Registrtration from '../../assets/images/my-projects/registration.png'
import Quiz from '../../assets/images/my-projects/React Quiz.png'
import InfoMovie from '../../assets/images/my-projects/movies-info.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'

const MyWorks = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
  }, [])
  return (
    <>
      <div className="container my-works-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'M',
                'y',
                ' ',
                ' ',
                'p',
                'r',
                'o',
                'j',
                'e',
                'c',
                't',
                's',
              ]}
              idx={15}
            />
          </h1>
        </div>
        <div className="container-3D">
          <input
            type="radio"
            id="swap-left-front"
            name="swapper"
            value="swap-left"
          />
          <input
            type="radio"
            id="swap-right-front"
            name="swapper"
            value="swap-right"
          />
          <input
            type="radio"
            id="swap-up-front"
            name="swapper"
            value="swap-up"
          />
          <input
            type="radio"
            id="swap-down-front"
            name="swapper"
            value="swap-down"
          />
          <input
            type="radio"
            id="swap-left-back"
            name="swapper"
            value="swap-left"
          />
          <input
            type="radio"
            id="swap-right-back"
            name="swapper"
            value="swap-right"
          />
          <input
            type="radio"
            id="swap-up-back"
            name="swapper"
            value="swap-up"
          />
          <input
            type="radio"
            id="swap-down-back"
            name="swapper"
            value="swap-down"
          />
          <input
            type="radio"
            id="swap-left-top"
            name="swapper"
            value="swap-left"
          />
          <input
            type="radio"
            id="swap-right-top"
            name="swapper"
            value="swap-right"
          />
          <input type="radio" id="swap-up-top" name="swapper" value="swap-up" />
          <input
            type="radio"
            id="swap-down-top"
            name="swapper"
            value="swap-down"
          />
          <input
            type="radio"
            id="swap-left-bottom"
            name="swapper"
            value="swap-left"
          />
          <input
            type="radio"
            id="swap-right-bottom"
            name="swapper"
            value="swap-right"
          />
          <input
            type="radio"
            id="swap-up-bottom"
            name="swapper"
            value="swap-up"
          />
          <input
            type="radio"
            id="swap-down-bottom"
            name="swapper"
            value="swap-down"
          />
          <input
            type="radio"
            id="swap-left-left"
            name="swapper"
            value="swap-left"
          />
          <input
            type="radio"
            id="swap-right-left"
            name="swapper"
            value="swap-right"
          />
          <input
            type="radio"
            id="swap-up-left"
            name="swapper"
            value="swap-up"
          />
          <input
            type="radio"
            id="swap-down-left"
            name="swapper"
            value="swap-down"
          />
          <input
            type="radio"
            id="swap-left-right"
            name="swapper"
            value="swap-left"
          />
          <input
            type="radio"
            id="swap-right-right"
            name="swapper"
            value="swap-right"
          />
          <input
            type="radio"
            id="swap-up-right"
            name="swapper"
            value="swap-up"
          />
          <input
            type="radio"
            id="swap-down-right"
            name="swapper"
            value="swap-down"
          />
          <div className="flopper">
            <figure className="back">
              <label htmlFor="swap-left-back">&#8592;</label>
              <label htmlFor="swap-right-back">&#8594;</label>
              <label htmlFor="swap-up-back">&#8593;</label>
              <label htmlFor="swap-down-back">&#8595;</label>

              <div></div>

              <h2>Phonebook</h2>

              <p>
                Phonebook for storing contacts with the ability to register
                users. Using: HTML5 - CSS3 - ReactJs - React Router - Redux
              </p>
              <a
                href="https://phonebook-with-registration.netlify.app"
                target="_blank"
                rel="noreferrer"
                title="Learn More"
              >
                Live
              </a>
            </figure>
            <figure className="top">
              <label htmlFor="swap-left-top">&#8592;</label>
              <label htmlFor="swap-right-top">&#8594;</label>
              <label htmlFor="swap-up-top">&#8593;</label>
              <label htmlFor="swap-down-top">&#8595;</label>

              <div></div>

              <h2>Quiz game</h2>

              <p>
                Quiz game with the ability to choose the number of questions and
                time. Using: HTML5 - CSS3 - ReactJs
              </p>

              <a
                href="https://maksstelmakh.github.io/study-by-tests/"
                target="_blank"
                rel="noreferrer"
                title="Learn More"
              >
                Live
              </a>
            </figure>
            <figure className="bottom">
              <label htmlFor="swap-left-bottom">&#8592;</label>
              <label htmlFor="swap-right-bottom">&#8594;</label>
              <label htmlFor="swap-up-bottom">&#8593;</label>
              <label htmlFor="swap-down-bottom">&#8595;</label>

              <div></div>

              <h2>Todo List</h2>

              <p>
                Todo list using TypeScript and React beautiful dnd library for
                dragging components. Using: HTML5 - CSS3 - React - TypeScript
              </p>

              <a
                href="https://maksstelmakh.github.io/to-do-list-typescript/"
                target="_blank"
                rel="noreferrer"
                title="Learn More"
              >
                Live
              </a>
            </figure>
            <figure className="left">
              <label htmlFor="swap-left-left">&#8592;</label>
              <label htmlFor="swap-right-left">&#8594;</label>
              <label htmlFor="swap-up-left">&#8593;</label>
              <label htmlFor="swap-down-left">&#8595;</label>

              <div></div>

              <h2>3DFREEDOM</h2>

              <p>
                My first project of a mobile-first adaptive multi-page web site
                for a 3d modeling company. Using: HTML5 - SCSS3 - JS - SASS
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://tsimura.github.io/team-1/"
                title="Learn More"
              >
                Live
              </a>
            </figure>
            <figure className="right">
              <label htmlFor="swap-left-right">&#8592;</label>
              <label htmlFor="swap-right-right">&#8594;</label>
              <label htmlFor="swap-up-right">&#8593;</label>
              <label htmlFor="swap-down-right">&#8595;</label>

              <div></div>

              <h2>React filmoteka</h2>

              <p>
                Search for information, reviews and actors for popular movies
                Using HTML5 - SCSS3 - ReactJs - React Router
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://malsstelmakh-react-search-movies.netlify.app"
                title="Learn More"
              >
                Live
              </a>
            </figure>
            <figure className="front">
              <label htmlFor="swap-left-front">&#8592;</label>
              <label htmlFor="swap-right-front">&#8594;</label>
              <label htmlFor="swap-up-front">&#8593;</label>
              <label htmlFor="swap-down-front">&#8595;</label>

              <div></div>

              <h2>Filmoteka</h2>

              <p>
                Website with information about popular films, beautiful design
                and with the ability to search and save your favorite movies.
                Using: HTML5 - SCSS3 - SASS - JS - API
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://tsimura.github.io/team-1-js/"
                title="Learn More"
              >
                Live
              </a>
            </figure>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default MyWorks

{
  /* <div className="container my-works-page">
        <div className="my-project-zone">
          <div className="element">
            <div className="flip">
              <div className="front">
                <img src={Freedom} alt="Project" />
              </div>
              <div className="back">
                <img src={Freedom} alt="Project" />
                <div className="back-text">
                  <h2>3DFREEDOM</h2>
                  <p>
                    My first project of a mobile-first adaptive multi-page web
                    site for a 3d modeling company.
                  </p>
                  <p>Using: HTML5 - SCSS3 - JS - SASS</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tsimura/team-1"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://tsimura.github.io/team-1/"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSatelliteDish} color="#FFFFFF" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="flip">
              <div className="front">
                <img src={Filmoteka} alt="Project" />
              </div>
              <div className="back">
                <img src={Filmoteka} alt="Project" />
                <div className="back-text">
                  <h2>Filmoteka</h2>
                  <p>
                    Website with information about popular films, beautiful
                    design and with the ability to search and save your favorite
                    movies.
                  </p>
                  <p>Using: HTML5 - SCSS3 - SASS - JS - API</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tsimura/team-1-js"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://tsimura.github.io/team-1-js/"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSatelliteDish} color="#FFFFFF" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="flip">
              <div className="front">
                <img src={Todo} alt="Project" />
              </div>
              <div className="back">
                <img src={Todo} alt="Project" />
                <div className="back-text">
                  <h2>Todo List</h2>
                  <p>
                    Todo list using TypeScript and React beautiful dnd library
                    for dragging components.
                  </p>
                  <p>Using: HTML5 - CSS3 - React - TypeScript</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MaksStelmakh/to-do-list-typescript"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maksstelmakh.github.io/to-do-list-typescript/"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSatelliteDish} color="#FFFFFF" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="second-element">
            <div className="flip">
              <div className="front">
                <img src={Registrtration} alt="Project" />
              </div>
              <div className="back">
                <img src={Registrtration} alt="Project" />
                <div className="back-text">
                  <h2>Phonebook</h2>
                  <p>
                    Phonebook for storing contacts with the ability to register
                    users.
                  </p>
                  <p>Using: HTML5 - CSS3 - ReactJs - React Router - Redux</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MaksStelmakh/goit-react-hw-08-phonebook"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://phonebook-with-registration.netlify.app"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSatelliteDish} color="#FFFFFF" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="second-element">
            <div className="flip">
              <div className="front">
                <img src={Quiz} alt="Project" />
              </div>
              <div className="back">
                <img src={Quiz} alt="Project" />
                <div className="back-text">
                  <h2>Quiz game</h2>
                  <p>
                    Quiz game with the ability to choose the number of questions
                    and time.
                  </p>
                  <p>Using: HTML5 - CSS3 - ReactJs</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MaksStelmakh/study-by-tests"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maksstelmakh.github.io/study-by-tests/"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSatelliteDish} color="#FFFFFF" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="second-element">
            <div className="flip">
              <div className="front">
                <img src={InfoMovie} alt="Project" />
              </div>
              <div className="back">
                <img src={InfoMovie} alt="Project" />
                <div className="back-text">
                  <h2>React movies</h2>
                  <p>
                    Search for information, reviews and actors for popular
                    movies
                  </p>
                  <p>Using HTML5 - SCSS3 - ReactJs - React Router</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MaksStelmakh/goit-react-hw-05-movies"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://malsstelmakh-react-search-movies.netlify.app"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSatelliteDish} color="#FFFFFF" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
