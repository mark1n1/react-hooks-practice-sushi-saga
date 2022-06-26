import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(55);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushiData) => setSushis(sushiData));
  }, []);

  function subtractMoney(price) {
    if((money - price) >= 0) setMoney(money - price);
  }
  
  return (
    <div className="app">
      <SushiContainer sushis={sushis} subtractMoney={subtractMoney} money={money}/>
      <Table money={money}/>
    </div>
  );
}

export default App;
