import "../App.css";
import Button from "react-bootstrap/Button";

function TypesExample(props) {
  return (
    <>
      <Button className="Primary-button">{props.title}</Button>{" "}
    </>
  );
}

export default TypesExample;
