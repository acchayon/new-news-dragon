import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'
import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            <div className='text-center'>
                <h2>Login With</h2>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
                <h3 className='mt-3'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='bg-pic text-center text-white p-2'>
                <h2 className=' pt-4'>Create an Amazing Newspaper</h2>
                <h6 className='p-4'>
                    Discover thousands of options, easy to <br /> customize layouts, one-click to import demo and much more.
                </h6>
                <Button className='mb-3' variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;