import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TypesExample from "./PrimaryButton";

function CardBasic(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.status}-{props.species}
        </Card.Text>
        <Card.Text>
          Location:
          {props.location}
        </Card.Text>
        <TypesExample />
      </Card.Body>
    </Card>
  );
}

export default CardBasic;
