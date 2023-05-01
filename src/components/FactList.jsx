import Fact from "./Fact";
function FactList(props) {
  const { facts } = props;

  return (
    <>
      <section>
        <ul className="facts-list">
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </ul>
        <p>There are {facts.length} facts in the database. Add your own!</p>
      </section>
    </>
  );
}

export default FactList;
