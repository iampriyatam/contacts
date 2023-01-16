import { useState } from 'react';
import { Box, Media, Image, Heading, Button, Tag, Modal, Block } from 'react-bulma-components';
import { AiFillPhone, AiFillEdit, AiFillDelete, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Contact(props){
  const contact = props.contact;
  const [ openModal, setOpenModal] = useState(false);

  return (
    <Box key={contact.id}>
      <Media alignItems="center">
        <Media.Item renderAs="figure" align="left">
          <Image rounded="true" size={64} src={contact.profileUrl} alt={contact.name} />
        </Media.Item>
        <Media.Item align="center">
          <Heading size={4}>{contact.name}</Heading>
          <Heading renderAs="h4" subtitle size={5} mb="0"><AiFillPhone/> {contact.mobile}</Heading>
          <Tag>{contact.type}</Tag> {contact.isWhatsapp && <Tag color="success"><AiOutlineWhatsApp/></Tag>}
        </Media.Item>
        <Media.Item align="right">
          <Button to={`/edit-contact/${contact.id}`} renderAs={ Link } color="primary" rounded="true" display='inline-flex' mr="1"><AiFillEdit/></Button>
          <Button onClick={() => setOpenModal(true)} color="danger" rounded="true" display='inline-flex'><AiFillDelete/></Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Card>
              <Modal.Card.Body rounded>
                <Heading renderAs='h2' textAlign="center">Are you sure?</Heading>
                <Block display="flex" justifyContent="space-between">
                  <Button rounded color="light" onClick={() => setOpenModal(false)}>Cancel</Button>
                  <Button rounded color="danger" onClick={() => props.deleteContact(contact.id)}>Delete</Button>
                </Block>
              </Modal.Card.Body>
            </Modal.Card>
          </Modal>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default Contact;
