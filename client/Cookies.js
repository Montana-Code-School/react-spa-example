var React = require('react');

var Cookies = React.createClass({
  render: function() {
    return (
      <div className="jumbotron myJumbo">
        <h1 className="display-3">Do you know about cookies?</h1>
        <p className="lead">Well... let me tell you about cookies</p>
        <hr className="m-y-2"/>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg cookie-button" href="#" role="button">Button One</a>
          <a className="btn btn-primary btn-lg cookie-button" href="#" role="button">Button Two</a>
          <a className="btn btn-primary btn-lg cookie-button third-cookie-button" href="#" role="button">Button Three</a>
          <a className="btn btn-primary btn-lg new-cookie-button" href="#" role="button">Button Four </a>
        </p>
      </div>
      )
  }
});

module.exports = Cookies;