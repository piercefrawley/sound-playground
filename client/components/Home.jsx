const { Link } = ReactRouter;

// App component - represents the whole app
Home = React.createClass({
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <Link to='/login'>Login Page</Link>
          <h1>Sound Playground</h1>
          <p>This is the home route.</p>
        </div>
      </div>
    );
  }
});
