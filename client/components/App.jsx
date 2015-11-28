App = React.createClass({
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});
