var React = require('react');

function FishForm(props){
    return (
      <div className="container myContainer">
      <form onSubmit={ props.submitFishToServer }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={ props.onNameChange } type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>color</label>
          <input onChange={props.onColorChange}  type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>length</label>
          <input onChange={props.onLengthChange} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={props.onImgChange}  type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="exampleSelect1">Man Eater?</label>
          <select onChange={ props.peopleEaterChange } className="form-control">
            <option>select something</option>
            <option value={ true }>yes</option>
            <option value={ false }>no</option>
          </select>
        </fieldset>

        <button className="btn btn-success-outline" type="submit"> Submit </button>
      </form>
      </div>
      )
};

module.exports = FishForm;