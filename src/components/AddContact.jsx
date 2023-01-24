import { useState } from 'react';
import { Section, Box, Heading, Form, Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';

function AddContact(props){
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("Personal");
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [profileUrl, setProfileUrl] = useState("");
  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e){
    e.preventDefault();
    const id = props.contacts.length + 1;
    const newContact = {
      id: id.toString(),
      name : name,
      mobile : mobile,
      type : type,
      isWhatsapp : isWhatsapp,
      profileUrl : profileUrl
    }
    props.setContacts(prev => [...prev, newContact]);
    setEditMode(true);
  }

  return (
    <Section>
      <Box>
      <Heading size={4} align="center">Add New Contact</Heading>
      <form 
        onSubmit={handleSubmit}
        onChange={() => setEditMode(false)}
        >
        <Form.Field>
          <Form.Label>Name</Form.Label>
          <Form.Control>
            <Form.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              rounded={true}
              color="primary"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Mobile</Form.Label>
          <Form.Control>
            <Form.Input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              rounded={true}
              color="primary"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Type</Form.Label>
          <Form.Field kind="group">
            <Form.Control>
              <Form.Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                rounded={true}
                color="primary"
              >
              <option value="Personal">Personal</option>
              <option value="Office">Office</option>
              </Form.Select>
            </Form.Control>
            <Form.Control fullwidth>
              <Form.Input
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="Profile Picture URL"
                rounded={true}
                color="primary"
              />
            </Form.Control>
          </Form.Field>
        </Form.Field>
        <Form.Field kind="group">
          <Form.Control fullwidth>
            <Form.Checkbox
              checked={isWhatsapp}
              onChange={(e) => setIsWhatsapp(e.target.checked)}
              color="primary"
            >
            On WhatsApp
            </Form.Checkbox>
          </Form.Control>
          <Form.Control align="right">
            <Button color="danger" rounded to={"/"} renderAs={ Link } mr="2">Cancel</Button>
            <Button color="primary" rounded submit disabled={editMode}><strong>Save</strong></Button>
          </Form.Control>
        </Form.Field>
      </form>
      </Box>
    </Section>
  );
}

export default AddContact;
