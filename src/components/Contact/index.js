import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'center',
      y: 'top',
    },
  })
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_w4fncu6',
        'template_xbxxyno',
        refForm.current,
        'pcx2dK2JQFu4lS_Qu'
      )
      .then(
        () => {
          notyf.success('Message succesfully sent!')
          setTimeout(() => {
            window.location.reload(false)
          }, 2000)
        },
        () => {
          notyf.error('Failed to send the message, please try again!')
        }
      )
  }
  const position = [50.4547, 30.5238]
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in hiring opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="from_subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="textarea"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Maxim lives here, I accept invitations for coffee ;)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="info-map">
          Maks Stelmakh
          <br />
          Ukraine,
          <br />
          Kyiv 03134
          <br />
          <a href="mailto:maks.stelmakh2019@gmail.com">
            maks.stelmakh2019
            <wbr />
            @gmail.com
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
