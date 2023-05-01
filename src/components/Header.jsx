function Header(props) {
  const { setShowForm, shownForm } = props;
  const appTitle = "Học gì hôm nay...";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I learn logo" />
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large btn-share"
        onClick={() => setShowForm((show) => !show)}
      >
        {shownForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
