
import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../features/habitsSlice'

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch()

  // handlers to change status on click
  const checkStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: 'done',
          },
        ],
      })
    )
  }

  const doneStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: 'fail',
          },
        ],
      })
    )
  }

  const failStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: 'none',
          },
        ],
      })
    )
  }
  return (
    <Row>
      {details.map((detail, index) => (
        <Fragment key={detail.day}>
          <Col>
            <p className='day-headings' style={{ animationDelay: `${index * 0.1}s` }}>{detail.day}</p>

            {detail.status === 'none' && (
              <i
                className='fa-solid fa-check status-icon'
                onClick={() => checkStatusHandler([habit.title, detail.day])}></i>
            )}

            {detail.status === 'done' && (
              <i
                className='fa-lg fa-solid fa-circle-check done status-icon'
                onClick={() => doneStatusHandler([habit.title, detail.day])}></i>
            )}

            {detail.status === 'fail' && (
              <i
                className='fa-lg fa-solid fa-circle-xmark fail status-icon'
                onClick={() => failStatusHandler([habit.title, detail.day])}></i>
            )}
          </Col>
        </Fragment>
      ))}
    </Row>
  )
}

export default HabitDetails
