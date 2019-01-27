import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
 
  state = {
    friends,
    list: [],
    score: 0,
    topScore: 0,
    titleClass: "",
    headTitle:"Click an Image to Begin!"
  };



  flipCards = id => {


    //Random Cards Function
    const friendsRandom = arr => arr.sort(() => Math.random() - 0.5)

    //Random the cards
    const friends = friendsRandom(this.state.friends);

    //set new score to 0 if the id already on clicked array of ids
    const newScore = this.state.list.includes(id) ? 0 : this.state.score + 1

    //Reset my clicked array of ids every time I lost
    const listReset = newScore === 0 ? [] : [...this.state.list, id]

    //keep track on newTopScore evely time my TopScore is behind the currentScore
    const newTopScore = this.state.topScore < newScore ? newScore : this.state.topScore

    this.setState({
      friends,
      list: listReset,
      score: newScore,
      topScore: newTopScore
    });
  
    console.log("First Time" , newScore)
   if ( newScore === 0)  
   { 
    this.setState({ 
      headTitle: "You Guess incorrectly!" ,
   
      })
     console.log("Back")
  
    }   else {
      this.setState({ 
        headTitle: "You Guess correctly!",
    })
    
    this.addColorTitleBack(newScore)
   }
   
  };


  addColorTitle = (score) => {
    
    //Change the color of the title 
    const colorTitle = score === 0 ? "titleChangw" : "titleChange";
   
    this.setState({
      titleClass: colorTitle
    })

  }
  addColorTitleBack = (score) => {
   //change back to white
    const colorTitle = score === 0 ? "titleChange" : "titleChangeBack";

    this.setState({
      titleClass: colorTitle
    })

  }
  
  render() {
    return (
      <Wrapper>

        <Title
          score={this.state.score}
          topScore={this.state.topScore}
          color={this.state.titleClass}
          headTitle={this.state.headTitle}
        >
        </Title>
        <Header></Header>
        <Wrapper className = "container">
          {this.state.friends.map(friend => (
           <FriendCard
            flipCards={this.flipCards}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            addColorTitle={this.addColorTitle}
            addColorTitleBack={this.addColorTitleBack}
            score={this.state.score}

          />

        ))}
   
        </Wrapper>
      </Wrapper>
    );
  }
}

export default App;
