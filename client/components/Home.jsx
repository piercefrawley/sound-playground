const { Link } = ReactRouter;

// App component - represents the whole app
Home = class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Sound Playground</h1>
        </div>
        <div>
          <p>This is the home route.</p>
          <Link to='/login'>Login Page</Link>
        </div>
        <div>
          <MidiSynth/>
        </div>
      </div>
    );
  }
}
