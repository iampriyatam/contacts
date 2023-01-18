import { Heading, Block, Button, Notification } from 'react-bulma-components';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <Block mb="0" p="2" className='header'>
      <Heading to={"/"} renderAs={ Link }>Contacts</Heading>
      <Button to={"/add-contact"} renderAs={ Link } rounded="true" pull="right">
        <BsPlusLg />
      </Button>
    </Block>
  );
}

export default Header;
