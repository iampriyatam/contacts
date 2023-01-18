import { useState } from 'react';
import { Section, Box, Heading, Form, Button } from 'react-bulma-components';
import { Link, useParams } from 'react-router-dom';

function EditContact(props){
  const { id } = useParams();
  const contacts = props.contacts;

  const [ editableContact ] = contacts.filter(contact => id === contact.id);

  const [name, setName] = useState(editableContact.name);
  const [mobile, setMobile] = useState(editableContact.mobile);
  const [type, setType] = useState(editableContact.type);
  const [isWhatsapp, setIsWhatsapp] = useState(editableContact.isWhatsapp);
  const [profileUrl, setProfileUrl] = useState(editableContact.profileUrl);

  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e){
    e.preventDefault();
    const newContact = {
      id : id,
      name : name,
      mobile : mobile,
      type : type,
      isWhatsapp : isWhatsapp,
      profileUrl : profileUrl
    }
    const newContactList = contacts.filter(contact => id !== contact.id);
    newContactList.push(newContact);
    props.setContacts(newContactList);
    setEditMode(true);
  }

  return (
    <Section>
      <Box>
      <Heading size={4} align="center">Edit Contact</Heading>
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

export default EditContact;
