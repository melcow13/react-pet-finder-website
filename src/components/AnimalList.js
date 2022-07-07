import React from 'react'
import { Card } from "react-bootstrap"


function AnimalList({ animals }) {
  return (
    <div>
      {animals.map(a => (
        <AnimalCard animal={a} key={a.id} />
      ))}
    </div>
  )
}



export default AnimalList

const AnimalCard = ({ animal }) => {
  return (
    <Card>
      <Card.Img variant="top" src={animal.primary_photo_cropped?.small || ""} alt={animal.name} width="100px" height="100px" />
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}