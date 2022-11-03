import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from 'react-router';

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [id, setID] = useState(null);
  let  navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckBox(localStorage.getItem("Checkbox Value"));
  }, []);
  const updateAPIData = () => {
    axios.put(`https://636365e737f2167d6f784d0d.mockapi.io/fakedata/${id}`, {
      firstName,
      lastName,
      checkbox,
    }).then(()=>{
        navigate('/read')
    })
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(e) => setCheckBox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData} >Update</Button>
      </Form>
    </div>
  );
}
