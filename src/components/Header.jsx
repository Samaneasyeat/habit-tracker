import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className='header-container' bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <i className='fa-solid fa-calendar-check me-2'></i>
        Loop Habit Tracker
      </Navbar.Brand>
    </Navbar>
  )
}

export default Header
