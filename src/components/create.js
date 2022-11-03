import axios from "axios";
import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);

    axios.post('https://636365e737f2167d6f784d0d.mockapi.io/fakedata',{
        firstName,
        lastName,
        checkbox
    })
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" onChange={(e) =>setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" onChange={(e) =>setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" onChange={(e) =>setCheckBox(!checkbox)}/>
        </Form.Field>
        <Button type="submit" onClick={postData}>Submit</Button>
      </Form>
    </div>
  );
}