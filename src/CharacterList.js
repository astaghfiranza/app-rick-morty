import "./App.css";
import { getCharacterList } from "./api";
import { useEffect, useState } from "react";
import CardBasic from "./components/Card";

const CharacterList = () => {
  const [allCharacter, setAllCharacter] = useState([]);

  useEffect(() => {
    getCharacterList().then((result) => {
      setAllCharacter(result);
    });
  }, []);

  const AllCharacterList = () => {
    return allCharacter.map((character, i) => {
      return (
        <div className="Card" key={i}>
          <img className="Card-image" src={character.image} />
          <div className="Text-column">
            <div className="Card-title">{character.name}</div>
            <div className="Text-row">
              <div className="Card-status">{character.status}-</div>
              <div className="Card-species">{character.species}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  // console.log({ popularMovies: popularMovies });
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIRANZA API FETCH</h1>
        <div className="App-container">
          <AllCharacterList />
        </div>
      </header>
    </div>
  );
};

export default CharacterList;
