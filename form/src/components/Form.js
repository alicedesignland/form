import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import CreatableSelect  from 'react-select/creatable';
import { useState } from 'react';
import './Form.css'

const Form1 = () => {
    const HobbiesOptions = [
        { value: '1', label: 'Swimming' },
        { value: '2', label: 'Dancing' },
        { value: '3', label: 'Travelling' }
      ];
    const [Hobbiesvalue, getvalue] = useState('');
    const Ddlhandle = (e) =>
      {
         getvalue(Array.isArray(e)?e.map(x=>x.label):[]);
      }

    const [state, setState] = React.useState({
        firstName: "",
        lastName: ""
      })

      function handleChange(event) {
        const value = event.target.value.replace(/[^a-z]/gi, '');
        setState({
          ...state,
          [event.target.name]: value
        });
      }

      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('')

      const emailValidation = () => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(regEx.test(email)){
          setMessage("Email is valid");
        }
        else if (!regEx.test(email)){
          setMessage("Email not valid");
        } else {
          setMessage("");
        }
      };
      const handleOnChange = (e)=>{
        setEmail(e.target.value);
      };

      
    return (
      <div class="row">
        <div class="column" >
        <Form>
        <Form.Group className="mb-3" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" 
          name="firstName"
          value={state.firstName} 
          onChange={handleChange} 
          placeholder="Write only letters"
          required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" 
          name="lastName"
          value={state.lastName}
          onChange={handleChange} 
          placeholder="Write only letters"  />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
           class="form-control"
           value={email}
           required
           placeholder='name@example.com'
           onChange={handleOnChange} 
           onClick={emailValidation}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hobbies</Form.Label>
          <CreatableSelect options={HobbiesOptions}
          isMulti
          onChange={Ddlhandle}
          />
        </Form.Group>
      </Form>
      </div>

      <div class="column" >
      <h1>Results from form:</h1>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Email: {email}</p> 
      <p>{message}</p>
      <p>Hobbies: {Hobbiesvalue}</p>
      </div>
      </div>

  );
}

export default Form1