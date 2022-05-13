import './index.scss'
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

const MyWorks = () => {
  const style = {
    backgroundImage: { Freedom },
  }
  return (
    <>
      <div className="container my-works-page">
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default MyWorks
