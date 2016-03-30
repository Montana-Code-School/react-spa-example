var React = require('react');

var FishForm = React.createClass({
  render: function() {
    return (
      <div>
      <form>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>color</label>
          <input type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>length</label>
          <input type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>eats people?</label>
          <input type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>img src</label>
          <input type="text" className="form-control"/>
        </fieldset>
      </form>
      </div>
      )
  }
});

module.exports = FishForm;