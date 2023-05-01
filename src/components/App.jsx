import { useState } from "react";
import "../style.css";

import { initialFacts } from "../data";
import Header from "./Header";
import NewFactForm from "./NewFactForm";
import CategoryFilter from "./CategoryFilter";
import FactList from "./FactList";

function App() {
  const [shownForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    <>
      <Header shownForm={shownForm} setShowForm={setShowForm} />
      {shownForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "40px" }}>{count}</span>
      <button className="btn btn-large" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default App;
