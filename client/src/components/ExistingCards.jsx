import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card"

const ExistingCards = ({ listId }) => {
  const cards = useSelector(state => state.cards);
  const currentCards = cards.filter(card => card.listId === listId);

  return (
    <div id="cards-container" data-id="list-1-cards">
      {currentCards.map(card => {
        return (
          <Card 
            key={card._id}
            card={card} 
          />
        )
      })}
    </div>
  )
}

export default ExistingCards;