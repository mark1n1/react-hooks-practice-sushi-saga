import React, { useState } from "react";

function Sushi(props) {
  const [isEaten, setIsEaten] = useState(false);

  function handleEatClick() {
    if(props.money >= props.price) {
      setIsEaten(!isEaten);
      props.onHandleEatClick(props.price);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={ handleEatClick }>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={ props.img_url }
            alt={ props.name }
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        { props.name } - ${ props.price }
      </h4>
    </div>
  );
}

export default Sushi;
