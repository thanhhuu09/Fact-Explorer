import { useState } from "react";
import { CATEGORIES } from "../data";

function isValidUrl(urlString) {
  var inputElement = document.createElement("input");
  inputElement.type = "url";
  inputElement.value = urlString;

  if (!inputElement.checkValidity()) {
    return false;
  } else {
    return true;
  }
}

function NewFactForm(props) {
  const { setFacts, setShowForm } = props;

  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function handleSubmit(event) {
    // 1. Prevent browser reload
    event.preventDefault();
    // 2. Check if the data is valid. If so, create a new fact
    if (text && isValidUrl(source) && category && textLength <= 200) {
      console.log("Valid text");

      // 3. Create a new fact object
      const newFact = {
        id: Math.round(Math.random * 10000000),
        text: text,
        source: source,
        category: category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      // 4. Add a new fact to the UI: add the fact to state
      setFacts((facts) => [newFact, ...facts]);

      // 5.Reset input fields
      setText("");
      setSource("");
      setCategory("");
      // 6. Close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share the fact with the world..."
        value={text}
        onChange={(event) => setText(event.target.value.toString())}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(event) => setSource(event.target.value.toString())}
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value.toString())}
      >
        <option value="">Choose category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

export default NewFactForm;
