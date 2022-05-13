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
                <img src={Freedom} />
              </div>
              <div className="back">
                <img src={Freedom} />
                <div className="back-text">
                  <h2>3DFREEDOM</h2>
                  <p>
                    hange it with appropriate styles. Learn more:
                    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                    jsx-a11y/anchor-is-valid
                  </p>
                  <a href="#" type="button">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a href="#" type="button">
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
                <img src={Filmoteka} />
              </div>
              <div className="back">
                <img src={Filmoteka} />
                <div className="back-text">
                  <h2>Freedom</h2>
                  <p>
                    hange it with appropriate styles. Learn more:
                    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                    jsx-a11y/anchor-is-valid
                  </p>
                  <a href="#" type="button">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a href="#" type="button">
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
                <img src={Todo} />
              </div>
              <div className="back">
                <img src={Todo} />
                <div className="back-text">
                  <h2>Freedom</h2>
                  <p>
                    hange it with appropriate styles. Learn more:
                    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                    jsx-a11y/anchor-is-valid
                  </p>
                  <a href="#" type="button">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a href="#" type="button">
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
                <img src={Registrtration} />
              </div>
              <div className="back">
                <img src={Registrtration} />
                <div className="back-text">
                  <h2>Freedom</h2>
                  <p>
                    hange it with appropriate styles. Learn more:
                    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                    jsx-a11y/anchor-is-valid
                  </p>
                  <a href="#" type="button">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a href="#" type="button">
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
                <img src={Quiz} />
              </div>
              <div className="back">
                <img src={Quiz} />
                <div className="back-text">
                  <h2>Freedom</h2>
                  <p>
                    hange it with appropriate styles. Learn more:
                    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                    jsx-a11y/anchor-is-valid
                  </p>
                  <a href="#" type="button">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a href="#" type="button">
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
                <img src={InfoMovie} />
              </div>
              <div className="back">
                <img src={InfoMovie} />
                <div className="back-text">
                  <h2>Freedom</h2>
                  <p>
                    hange it with appropriate styles. Learn more:
                    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                    jsx-a11y/anchor-is-valid
                  </p>
                  <a href="#" type="button">
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    GitHub
                  </a>
                  <a href="#" type="button">
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
