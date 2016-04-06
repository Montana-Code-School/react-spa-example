var React = require('react');

var Beer = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Do you know about beers?</h1>
        <p className="lead">Well... let me tell you about cookies</p>
        <hr className="m-y-2"/>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-lg beer-button" href="#" role="button">I still do NOTHING</a>
          <a className="btn btn-lg secondary-beer-button" href="#" role="button">I still do NOTHING</a>
        </p>
      </div>
      )
  }
});

module.exports = Beer;