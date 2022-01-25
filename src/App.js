import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './image.jpeg'
import { BsCart } from "react-icons/bs";
import React from "react";

class App extends React.Component {
  state = { a: 0 }


  render() {
    const increment = (e) => {
      console.log("working")
      this.setState({ a: this.state.a + 1 });
    }
    return (




      <div >



        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <NavDropdown title="shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">All products</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">Popular Items</NavDropdown.Item>

                  <NavDropdown.Item href="#action5">
                    New Arrivals
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>

              <Button variant="outline-success" >
                <  BsCart />


                <span>&nbsp; &nbsp; &nbsp;{this.state.a}</span></Button>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div class="val pt-5 ">

          Shop in style<br></br>
          with this shop homepage template

        </div>




        <div></div>




         <div class = "pa container-fluid text-center px-5 pt-5 pb-5 row row-cols-1 row-cols-md-1 row-cols-lg-4 row-cols-xl-4 gap-4" >

        <Card style={{ width: '18rem' }} >
          <Card.Img as={Image} src={image} fluid={true} alt="Card image" />

          <Card.Body class="done" >
            <Card.Title class="val1 mt-2"><b>Fancy Product</b></Card.Title>
            <Card.Text class="val1">
              ⭐️⭐️⭐️⭐️⭐️
              <br></br>
              $18.00 -  $15.00
            </Card.Text>

            <div class="text-center">
              <Button variant="primary " onClick={() => increment()}>Add to cart</Button>
            </div>
          </Card.Body>
        </Card>

        <br>
        </br>



        <Card style={{ width: '18rem' }} >
          <Card.Img as={Image} src={image
          } fluid={true} alt="Card image" />

          <Card.Body class="done" >
            <Card.Title class="val1 mt-2"><b>Special Items</b></Card.Title>
            <Card.Text class="val1">
              ⭐️⭐️⭐️⭐️⭐️
              <br></br>
              <s> $20.00</s> 18.00
            </Card.Text>

            <div class="text-center mb-3">
              <Button variant="primary " >Add to cart</Button>
            </div>
          </Card.Body>
        </Card>

        <br>
        </br>



        <Card style={{ width: '18rem' }} >
          <Card.Img as={Image} src={image
          } fluid={true} alt="Card image" />

          <Card.Body class="done" >
            <Card.Title class="val1 mt-2"><b>Sale Items </b></Card.Title>
            <Card.Text class="val1">
              ⭐️⭐️⭐️⭐️⭐️
              <br></br>
              <s> $20.00</s> 18.00
            </Card.Text>

            <div class="text-center">
              <Button variant="primary ">Add to cart</Button>
            </div>
          </Card.Body>
        </Card>

        <br>
        </br>



        <Card style={{ width: '18rem' }} >
          <Card.Img as={Image} src={image
          } fluid={true} alt="Card image" />

          <Card.Body class="done" >
            <Card.Title class="val1 mt-2"><b>Fancy Items</b></Card.Title>
            <Card.Text class="val1">
              ⭐️⭐️⭐️⭐️⭐️
              <br></br>
              <s> $210.00</s> 18.00
            </Card.Text>

            <div class="text-center">
              <Button variant="primary ">Add to cart</Button>
            </div>
          </Card.Body>
        </Card>

        <br>
        </br>



       


          <Card style={{ width: '18rem' }} >
            <Card.Img as={Image} src={image
            } fluid={true} alt="Card image" />

            <Card.Body class="done" >
              <Card.Title class="val1 mt-2"><b>Fancy Product</b></Card.Title>
              <Card.Text class="val1">
                ⭐️⭐️⭐️⭐️⭐️
                <br></br>
                <s> $20.00</s> 18.00
              </Card.Text>

              <div class="text-center">
                <Button variant="primary ">Add to cart</Button>
              </div>
            </Card.Body>
          </Card>

          <br>
          </br>


          <Card style={{ width: '18rem' }} >
            <Card.Img as={Image} src={image
            } fluid={true} alt="Card image" />

            <Card.Body class="done" >
              <Card.Title class="val1 mt-2"><b>Special Items</b></Card.Title>
              <Card.Text class="val1">
                ⭐️⭐️⭐️⭐️⭐️
                <br></br>
                <s> $20.00</s> 18.00
              </Card.Text>

              <div class="text-center">
                <Button variant="primary ">Add to cart</Button>
              </div>
            </Card.Body>
          </Card>

          <br>
          </br>




          <Card style={{ width: '18rem' }} >
            <Card.Img as={Image} src={image
            } fluid={true} alt="Card image" />

            <Card.Body class="done" >
              <Card.Title class="val1 mt-2"><b>Popular Items</b></Card.Title>
              <Card.Text class="val1">
                ⭐️⭐️⭐️⭐️⭐️
                <br></br>
                <s> $19.00</s> 18.00
              </Card.Text>

              <div class="text-center mb-4">
                <Button variant="primary ">Add to cart</Button>
              </div>
            </Card.Body>
          </Card>

          <br>
          </br>


          <Card style={{ width: '18rem' }} >
            <Card.Img as={Image} src={image
            } fluid={true} alt="Card image" />

            <Card.Body class="done" >
              <Card.Title class="val1 mt-2"><b>Sale Item</b></Card.Title>
              <Card.Text class="val1">
                ⭐️⭐️⭐️⭐️⭐️
                <br></br>
                <s> $19.00</s> 18.00
              </Card.Text>

              <div class="text-center">
                <Button variant="primary ">Add to cart</Button>
              </div>
            </Card.Body>
          </Card>

          <br>
          </br>
          </div>
       
        
        <div class="val2 ">

          Copyright © Your Website 2021<br></br>


        </div>

      </div>


    );
  }
}

export default App;