import React, { useState } from "react";
import "../css/App.css";
import "../css/cloudEffect.css";

import Heading from "../components/middleware/heading";

class StarWars extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      height: "",
      mass: "",
      gender: "",
      homeworld: "",
      eyeColor: "",
      species: "",
      image: "",
      born: "",
      hairColor: "",
      skinColor: "",
      id: "",
    };
  }

  GenRandomNumber() {
    const random = Math.floor(Math.random() * 83 + 1);
    return random;
  }
  getNewCharactor() {
    const url = `https://akabab.github.io/starwars-api/api/id/${this.GenRandomNumber()}.json`;
    fetch(url).then((response) =>
      response.json().then(async (data) => {
        try {
          const {
            name,
            height,
            mass,
            eyeColor,
            homeworld,
            image,
            speicies,
            born,
            hairColor,
            skinColor,
            id,
          } = data;
          this.setState({
            name: name,
            height: height,
            mass: mass,
            eyecolor: eyeColor,
            homeworld: homeworld,
            speicies: speicies,
            image: image,
            born: born,
            hairColor: hairColor,
            skinColor: skinColor,
            id: id,
          });
        } catch (e) {
          console.log(
            `server error: ${e}! This could be an internet connection issue`
          );
        }
      })
    );
  }

  render() {
    return (
      <div>
        {/* header component */}
        <div className="main-container ">
          <div className="head-btn-container">
            <Heading className="heading" header="Meet the real heros" />
            <button
              className="btn"
              onClick={() => this.getNewCharactor()}
              type="button"
            >
              next
            </button>
          </div>
          {/* Main container  */}
          <div className="main-section">
            <div className="info-details">
              {/* left side details */}
              <div className="details_1">
                <p key="id"> ID: {this.state.id || "--"}</p>
                <p key="name">Name: {this.state.name || "--"}</p>
                <p key="height">Height: {this.state.height || "--"}</p>
                <p key="mass">Weight: {this.state.mass || "--"}</p>
                <p key="eye">Eye: {this.state.eyeColor || "--"}</p>
              </div>

              {/* Right side details */}
              <div className="details_2">
                <p key="homeworld"> Home: {this.state.homeworld || "--"}</p>
                <p key="speicies">Species: {this.state.speicies || "--"}</p>
                <p key="born">Born: {this.state.born || "--"}</p>
                <p key="hairColor">Hair: {this.state.hairColor || "--"}</p>
                <p key="skinColor">Skin: {this.state.skinColor || "--"}</p>
              </div>
            </div>
            {/* image box */}
            <div className="image-container">
              <img src={this.state.image} className="image-box"></img>
            </div>
            <div className="small_stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StarWars;
