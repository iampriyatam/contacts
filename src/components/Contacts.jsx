import { Section, Heading, Button } from 'react-bulma-components';
import Contact from './Contact';
import { Link } from 'react-router-dom';

function Contacts(props){
  const contacts = props.contacts;

  function deleteContact(id){
    const newContactList = contacts.filter(contact => id !== contact.id);
    props.setContacts(newContactList);
  }

  if(contacts.length > 0){
    const contactList = contacts.map((contact) =>
      <Contact 
        key={contact.id} 
        contact={contact}
        deleteContact={deleteContact}
      />
    );

    return (
      <Section>
        {contactList}
      </Section>
    );
    }
  return (
    <Section>
      <Heading subtitle renderAs="h4">No contacts found.</Heading>
      <Button to={"/add-contact"} renderAs={ Link } rounded color="primary">Add New</Button>
    </Section>
  );
}

export default Contacts;
