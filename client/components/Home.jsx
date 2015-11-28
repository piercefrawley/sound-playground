const { Link } = ReactRouter;

// Home Component
Home = class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Sound Playground</h1>
          <ul class="nav nav-tabs">
            <li role="presentation" class="active">
              <p className="navbar-text navbar-right">
                <Link to='/login'>Login Page</Link>
              </p>
            </li>
            <li role="presentation">Foo</li>
          </ul>
        </div>
        <div className="row">
          <div>
            <MidiSynth/>
          </div>
        </div>
      </div>
    );
  }
}
