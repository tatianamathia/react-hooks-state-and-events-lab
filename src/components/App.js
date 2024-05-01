
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, {useState} from "react";

/* eslint-disable no-unused-vars */

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  

  const appClass = isDarkMode ? "App dark" : "App light";
  function handleDarkMode(){
    setIsDarkMode((isDarkMode)=> !isDarkMode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
