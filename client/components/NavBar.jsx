const { Link } = ReactRouter;

NavBar  = class NavBar extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Sound Playground</h1>
        <ul className="nav nav-tabs">
          <li role="presentation">
            <p className="navbar-text navbar-right">
              <Link to="/">Home</Link>
            </p>
          </li>
          <li role="presentation">
            <p className="navbar-text navbar-right">Foo</p>
          </li>
          <li role="presentation">
            <p className="navbar-text navbar-right">
              <Link to='/login'>Login</Link>
            </p>
          </li>
        </ul>
      </div>
    )
  }
}
