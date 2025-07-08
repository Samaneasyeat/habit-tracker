import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addHabit } from '../features/habitsSlice'
import { details } from '../features/habitsSlice'

const CreateHabit = (props) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // handle new habits
  const AddHabitHandler = (e) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      setIsLoading(true)
      // Simulate a small delay for better UX
      setTimeout(() => {
        dispatch(addHabit({ title: title.trim(), description: description.trim(), details }))
        setTitle('')
        setDescription('')
        setIsLoading(false)
        props.onHide()
      }, 500)
    }
  }

  return (
    // Modal Component
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Dialog className='modal-sm'>
        <Modal.Body>
          <Form onSubmit={AddHabitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='enter title'
                value={title}
                autoFocus={true}
                required={true}
                disabled={isLoading}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='short description'
                value={description}
                required={true}
                disabled={isLoading}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Modal.Footer>
              <Button 
                type="submit" 
                disabled={isLoading}
                className={isLoading ? 'habit-loading' : ''}>
                {isLoading ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>
                    Adding...
                  </>
                ) : (
                  'Add Habit'
                )}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit
