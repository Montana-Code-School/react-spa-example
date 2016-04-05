var React = require('react');

function FishDetails(props) {
  console.log(props);
  return (
      <div className="jumbotron">
        <div className="container">
          <img src={ props.oneFish.img }/>
          <h1 className="fish-title">{ props.oneFish.name }</h1>
          <p>color { props.oneFish.color }</p>
          <p>length { props.oneFish.length }</p>
          <p>people eater { props.oneFish.people_eater.toString() }</p>
        </div>
      </div>
    )
};

module.exports = FishDetails;