import React, { Component } from 'react';
import './App.css';

class Card {
    static suites = ['spades', 'clubs', 'diamonds', 'hearts'];
    static ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    constructor(rank, suite) {
        //this.suites = ['spades', 'clubs', 'diamonds', 'hearts'];
        //this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
        this.rank = rank;
        this.suite = suite;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        
        this.Shuffle = () => {
            let cards = [];
            while(this.cards.length > 0){
                let index = Math.floor((Math.random() * this.cards.length));
                cards.push(this.cards[index]);
                this.cards.splice(index, 1);
            }
            this.cards = cards;
        }

        this.dealOne = () => {
            let result = this.cards[this.cards.length-1];
            this.cards.pop();
            return result;
        }

        for (let i = 0; i < Card.suites.length; i++) {
            for (let j = 0; j < Card.ranks.length; j++) {
                this.cards.push(new Card(Card.ranks[j], Card.suites[i]));
            }
        }
        
        this.Shuffle();
    }
}

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: new Deck(),
            test: 1,
            cardsOnTable: []
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        let card = this.state.deck.dealOne();
        this.state.cardsOnTable.push(card);
        this.setState({ cardsOnTable: this.state.cardsOnTable }); //refresh state
    }
    render() {
        return <div>
            <input type="button" value="deal card" onClick={this.handleChange} />
            cardsOnTable:
            {this.state.cardsOnTable.map((card) => <div>{card.rank}, {card.suite}</div>)}
            cardsInDeck: {this.state.deck.cards.length}
        </div>
    }
}

export default CardComponent;

    //handleChange(event) {
    //    this.setState({ test: event.target.value });
    //}
    //render() {
    //    return <div>
    //        //<input type='text' value={this.state.test} onChange={this.handleChange} />
    //        //user {this.state.test}