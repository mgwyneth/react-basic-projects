import { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
import IconButton from './IconButton'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  const getPerson = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { phone, email } = person
    const {
      login: { password },
    } = person
    const {
      dob: { age },
    } = person
    const { large: image } = person.picture
    const { first, last } = person.name
    const {
      street: { number, name },
    } = person.location
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }

  useEffect(() => {
    getPerson()
  }, [])

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person?.image || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <IconButton
              dataLabel="name"
              icon={<FaUser />}
              handleValue={handleValue}
            />
            <IconButton
              dataLabel="email"
              icon={<FaEnvelopeOpen />}
              handleValue={handleValue}
            />
            <IconButton
              dataLabel="age"
              icon={<FaCalendarTimes />}
              handleValue={handleValue}
            />
            <IconButton
              dataLabel="street"
              icon={<FaMap />}
              handleValue={handleValue}
            />
            <IconButton
              dataLabel="phone"
              icon={<FaPhone />}
              handleValue={handleValue}
            />
            <IconButton
              dataLabel="password"
              icon={<FaLock />}
              handleValue={handleValue}
            />
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
