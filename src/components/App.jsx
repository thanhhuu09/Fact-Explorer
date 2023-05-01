import { useEffect, useState } from "react";
import "../style.css";
import supabase from "../supabase";

import Header from "./Header";
import NewFactForm from "./NewFactForm";
import CategoryFilter from "./CategoryFilter";
import FactList from "./FactList";
import Loader from "./Loader";

function App() {
  const [shownForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);
      const { data: facts, error } = await supabase
        .from("facts")
        .select("*")
        .order("votesInteresting", { ascending: false })
        .limit(1000);
      setFacts(facts);
      setIsLoading(false);
    }
    getFacts();
  }, []);

  return (
    <>
      <Header shownForm={shownForm} setShowForm={setShowForm} />
      {shownForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className="main">
        <CategoryFilter />
        {isLoading ? <Loader /> : <FactList facts={facts} />}
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
