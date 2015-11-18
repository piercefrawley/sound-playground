const { Link } = ReactRouter;

// App component - represents the whole app
Home = class Home extends React.Component {
  render() {
    return (
      <div className='foo'>
        <div>
          <h1>Sound Playground</h1>
        </div>
        <div>
          <p>This is the home route.</p>
          <Link to='/login'>Login Page</Link>
        </div>
        <div>
          <MidiSynth/>
          <div className="btn-group btn-group-lg" role="group" aria-label="...">
            <button type="button" className="btn btn-default">Left</button>
            <button type="button" className="btn btn-default">Middle</button>
            <button type="button" className="btn btn-default">Right</button>
          </div>
        </div>
      </div>
    );
  }
}
