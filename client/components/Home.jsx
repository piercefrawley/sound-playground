const { Link } = ReactRouter;

// Home Component
Home = class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="page-header">
            <h1>Sound Playground</h1>
            <p className="navbar-text navbar-right">
              <Link to='/login'>Login Page</Link>
            </p>
          </div>
          <div>
            <MidiSynth/>
          </div>
        </div>
      </div>
    );
  }
}
