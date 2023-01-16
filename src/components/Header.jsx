import { Heading, Navbar, Box, Button } from 'react-bulma-components';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <Navbar color="primary">
      <Navbar.Brand>
        <Navbar.Item to={"/"} renderAs={ Link }>
          <Heading>Contacts</Heading>
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align="right" alignItems="center">
          <Button to={"/add-contact"} renderAs={ Link } rounded="true" mx="1">
            <BsPlusLg />
          </Button>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
