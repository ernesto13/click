import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./characters.json";
import "./App.css";

let bestScore = 0;
let guessedCorrect = 0;
let unselectedCharacter = 0;

function randomizeFriends() {
    friends.sort(function(a, b) { return 0.5 - Math.random() });
}
randomizeFriends();


class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends,
        bestScore,
        guessedCorrect,
        unselectedCharacter: friends,
        message: ""
    };
    componentDidMount() {
        this.setState({
            message: "Click on your friend!",

        })
    }

    selectCharacter = name => {
        const findCharacter = this.state.unselectedCharacter.find(item => item.name === name);
        if (findCharacter === undefined) {
            this.setState({
                message: "You guessed wrong!",
                guessedCorrect: 0,
                friends: friends,
                unselectedCharacter: friends
            });
        } else {
            const newCharacter = this.state.unselectedCharacter.filter(item => item.name !== name);

            this.setState({
                message: "You got it!",
                guessedCorrect: this.state.guessedCorrect + 1,
                friends: friends,
                unselectedCharacter: newCharacter
            })
        }
        randomizeFriends();
    }

    removeFriend = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const friends = this.state.friends.filter(friend => friend.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ friends });


        if (friends[0].clicked) {

            guessedCorrect = 0;
            message: "Start over!";
        }
    };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return ( < Wrapper >
            <
            Title > Simpsons List < /Title>    <
            h3 className = "score-title" >
            Correct Guesses: { this.state.guessedCorrect } < br / >
            Best Score: { this.state.bestScore } <
            br / > { this.state.message }

            <
            /h3>

            {

                this.state.friends.map(friend => ( < CharacterCard removeFriend = { this.removeFriend }
                    id = { friend.id }
                    key = { friend.id }
                    name = { friend.name }
                    image = { friend.image }

                    />

                ))

            } < /Wrapper>
        );
    }
}

export default App;