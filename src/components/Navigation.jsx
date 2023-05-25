import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { useState } from 'react';

const Navigation = () => {
    let navigate = useNavigate();
    const [keyWord, setKeyWord] = useState('');
    const dispatch = useDispatch();

   

    const search = (e) => {
        if(keyWord == "") {
            return;
        }
        e.preventDefault();
        navigate('/movies');
        dispatch({type : "GET_KEYWORD", payload : {keyWord: keyWord}});
    }


    return (  
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand onClick={()=>navigate('/')} href="#">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                    width={100}
                    alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/' className="nav-item">Home</Link>
                    <Link to='movies' className="nav-item">Movies</Link>

                </Nav>
                <Form onSubmit={search} className="d-flex">
                    <Form.Control
                    value={keyWord}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setKeyWord(e.target.value)}
                    />
                    <Button type='submit' variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );
}

export default Navigation;