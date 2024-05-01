import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  function handleClick(){
    setIsInCart(!isInCart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick } className={isInCart? "remove" : "add" }>{isInCart?"Remove From Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
