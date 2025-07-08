import Header from './components/Header'
import Overview from './components/Overview'
import HabitDisplay from './components/HabitDisplay'
import DebugInfo from './components/DebugInfo'

import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Typed from 'typed.js'

function App() {
  const { habits } = useSelector((state) => state.allHabits)

  // code for typed.js library
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        "...okay. Let's start by tracking a habit for next seven days.",
        "It's never too late to develop good habits.",
        'Good habits formed at youth makes all the difference - Aristotle',
        'Motivation is what gets you started. Habit is what keeps you going.',
        'Habits change into character.',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    })

    // Destroying
    return () => {
      typed.destroy()
    }
  }, [])

  // Debug logging
  useEffect(() => {
    console.log('Current habits:', habits)
  }, [habits])

  return (
    <>
      <DebugInfo />
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col md={3}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <div className='typed-container'>
          <h4 className='text-light d-flex justify-content-center'>
            <span className='tag'></span>
          </h4>
        </div>
      </Container>
    </>
  )
}

export default App
