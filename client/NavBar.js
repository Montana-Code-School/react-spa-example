var React = require('react');

var links = ['welcome', 'cookies', 'fish', 'bears', 'beer', 'sass'];

var NavBar = React.createClass({
  render: function() {
    var self = this;
    var link = links.map(function(item){
      return (
          <li className="nav-item" key={item} >
            <a className="nav-link" 
            onClick={ self.props.setActiveComponent.bind(null, item) } >{ item }</a>
          </li>
        )
    });
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">React Is Cool</a>
        <ul className="nav navbar-nav">
          { link }
        </ul>
      </nav>
      )
  }
});

module.exports = NavBar;