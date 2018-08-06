import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import header from "./components/header";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    hello:friends,
    score: 0,
    highScore: 0,
    selected : [],
    message:"Click an Image To Start!"
  };

  // Set up clickhandler
  // check if its been clicked before 
  // if clicked end game else add to score and shuffle
  // asign let indicate correct guess,default to false
  // assign const map over friends
  // friend.clicked = false;
  // assign const from map to own obj
  // if statement to check obj.id === id
   clickHandler = id => {
    if(this.state.selected.includes(id)){
    // If they select an image that has already been selected
     this.setState({
      hello: this.shuffleArray(this.state.hello),
      score:0,
      selected:[],
      highScore: (this.state.highScore < this.state.score) ? this.state.score + 1 : this.state.highScore,
      message:"Too Bad Try Again Next Time!"
    })
   } else {
      // If they select an image that hasn't been selected
      
      this.setState({
        hello: this.shuffleArray(this.state.hello),
        score: this.state.score +1,
        highScore: (this.state.highScore < this.state.score) ? this.state.score + 1 : this.state.highScore,
        selected:[...this.state.selected,id],
        message:"Good Job keep on Clickn'!"
      })
   
    }
  }

  // set up shuffle function
  // loop through array and shuffle the ids
      // random id 
      shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const { hello, score, highScore, message } = this.state;
    return (
      <Wrapper>
      <Title>SuperSmash The Click Game</Title>
      <header>{message} , Score:{score} , HighScore:{highScore}</header>
      <div>\n</div>
      <div>\n</div>
      <div>\n</div>
        {hello.map(friend => (
           <FriendCard
            clickHandler={this.clickHandler}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
  <footer>
  <p> Click Game By Trenton Ankenbruck </p>
  <p>UNCC Coding Bootcamp</p>

</footer>
      </Wrapper>
)};

}
export default App;