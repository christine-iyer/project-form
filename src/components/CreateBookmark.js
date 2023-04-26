import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './CreateBookmark.module.scss'

export default function CreateBookmark(props) {
  //State to hold the form data
  const [form, setForm] = useState({
    name: "",
    age: 0,
  })

  // handleChange function
  const handleChange = event => {
    // dynamically update the state using the event object
    // this function always looks the same
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    // prevent page refresh
    event.preventDefault()
    // do what you want with the form data
    console.log(form)
    setForm('')
  }

  // The JSX for the form binding the functions and state to our inputs
  return (

    <Form onSubmit={handleSubmit}>
            <Row>
        <Col>
      <Form.Group controlId='formBasicTitle'>
<Form.Label>Title</Form.Label>
<Form.Control
    onChange={handleChange}
    value={form.name||''}
    name='name'
    type='text'
    placeholder='Name'
/>
</Form.Group>
</Col>
<Col>
<Form.Group controlId='formBasicAge'>
<Form.Label>Title</Form.Label>
<Form.Control
    onChange={handleChange}
    value={form.age||''}
    name='age'
    type='number'
    placeholder='Age'
/>
</Form.Group>
</Col>      </Row>
<Col>      
<Button variant="danger" value="Submit Form" placeholder='Ready?'type="submit">Danger</Button>{' '}
</Col>



    </Form>

)
}

