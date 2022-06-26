import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSushis, setCurrentSushis] = useState([]); 

  function handleMoreClick(e) {
    setCurrentSushis(props.sushis.slice(currentIndex, currentIndex + 4));
    setCurrentIndex(currentIndex + 4);
  }

  function handleEatClick(price) {
    props.subtractMoney(price);
  }

  return (
    <div className="belt">
      {currentSushis.map((sushi) => {
        return <Sushi 
                  key={sushi.id} 
                  name={sushi.name} 
                  img_url={sushi.img_url} 
                  price={sushi.price}
                  onHandleEatClick={handleEatClick}
                  money={props.money}
                />
      })}
      <MoreButton handleMoreClick={ handleMoreClick }/>
    </div>
  );
}

export default SushiContainer;
