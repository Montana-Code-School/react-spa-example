var React = require('react');
var EditFishForm = require('./EditFishForm');


var EditFishData = React.createClass({
  /* 1) GET INITIAL STATE */

  getInitialState: function() {
    return {
      name: null,
      color: null,
      people_eater: null,
      length: null,
      img: null
    }
  },

  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },

  /* 2) LOAD A FISH FROM SERVER --> SET STATE */
  loadOneFishFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/fish/one_fish/' + this.props.id,
      method: 'GET',
    }).done(function(data){
      self.setState({
        name: data.name,
        color: data.color,
        people_eater: data.people_eater,
        length: data.length,
        img: data.img
      })
    })
  },

  onFieldChange: function(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  },

  onNameChange: function(event){
    this.setState({ name: event.target.value })
    console.log(this.state.name);
  },
  onColorChange: function(event){
    this.setState({ color: event.target.value })
  },
  onImgChange: function(event){
    this.setState({ img: event.target.value })
  },
  onLengthChange: function(event){
    this.setState({ length: event.target.value })
  },
  peopleEaterChange: function(event){
    console.log("Found PE change", event.target.value)
    this.setState({ people_eater : event.target.value })
  },

  componentDidMount: function() {
    this.loadOneFishFromServer()
  },
  onFishEditSubmit: function(e) {
    e.preventDefault();

    var fishData = {
      name: this.state.name.trim(),
      color: this.state.color.trim(),
      length: this.state.length.trim(),
      img: this.state.img.trim(),
      people_eater: this.state.people_eater
    };

    var self = this;
    $.ajax({
      url: '/api/fish/one_fish/' + this.props.id,
      method: 'PUT',
      data: fishData
    }).done(function(data){
      console.log("Successfully edited fish", data);
      self.props.toggleActiveComp('fish');
      self.context.sendNotification("Modified Fish!!!!!!!!!!!!!");
    });
  },

  /* 3)PASS FISH DATA TO EDIT_FISH_FORM */

  render: function() {
    return this.state.name ? <EditFishForm
                                onFishEditSubmit={this.onFishEditSubmit}
                                onFieldChange={(...args) => this.onFieldChange(...args)} 
                                peopleEaterChange={this.peopleEaterChange} 
                                onLengthChange={this.onLengthChange} 
                                onImgChange={this.onImgChange} 
                                onColorChange={this.onColorChange} 
                                onNameChange={this.onNameChange} 
                                {...this.state} /> : null;
  }

});

module.exports = EditFishData;