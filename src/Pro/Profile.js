import React from "react";

import {  Card,Button } from "react-bootstrap";
import propTypes from "prop-types";


const Profile = props => {
  return (
    <>
<div className="hool">
    <div style={{color:'bleu'}} >
      <h1>Hello From {props.FullName} </h1>
      <h2>My bio is {props.Bio}</h2>
      <h3>I want to be a {props.Profession}</h3>
      <div>{props.Handelevent}</div>
      </div>
      <div>
      <Card style={{ backgroundColor:'white', width: '18rem', BorderBlockEndStyle:'Ridiss' }}>
      <Card.Body>
      {props.children}
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  onClick={() => { props.Handelevent(`My name is ${props.FullName}`) }}>Choose it </Button>

      </Card.Body>
    </Card>
      
    
  
      </div>
      </div>
    </>
  );
}
Profile.defaultProps = {
  FullName: 'Rayen Sassi',
  Bio: 'Designer',
  Profession: 'WebDeveloper',
  Handelevent: () => alert(`My name is Rayen Sassi`),
  children: <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*" />
};

 Profile.propTypes = {
  FullName: propTypes.string,
  Bio: propTypes.string,
  Profession: propTypes.string,
  Handelevent: propTypes.func,
  children:propTypes.node.isRequired,
  
};

export default Profile;
/*<Card style={{width: '18rem', textAlign:"center", }}>
        <Card.Body>

      {props.children}
          <Card.Title>Déstination</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={() => { props.Handelevent(`My name is ${props.FullName}`) }}>Choose it </Button>
        </Card.Body>
      </Card>

      rrt
*/