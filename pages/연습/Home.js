import React from 'react'
import { Button, 
    Image,
    Dropdown,
    Segment,
    Menu,
    Container,
    } from 'semantic-ui-react'

const Home =() => {
    return (
        <div>
        This is Home
        <br/>
        <Button href='http://localhost:3000/about'> Go to About
        </Button>
        </div>
    );
}
export default Home;
