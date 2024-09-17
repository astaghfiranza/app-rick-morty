import "../App.css";
import TypesExample from "../components/PrimaryButton";

function Menu() {
  return (
    <header className="App-header">
      <img
        src={`${process.env.PUBLIC_URL}/logo_rnm.png`}
        alt="Rick & Morty Logo"
        className="App-logo"
      />
      <h1>Front End Project Assignment</h1>
      <div className="App-wrapper">
        <div className="App-column">
          <h3>Menu</h3>
          <TypesExample title="Character List" />
          <TypesExample title="Character By Location" />
        </div>
      </div>
    </header>
  );
}

export default Menu;
