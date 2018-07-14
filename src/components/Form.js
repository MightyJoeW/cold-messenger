import React from "react";

const Form = props => (
  <form>
    <label>
      Name:
      <input type="text" onChange={props.handleChangeName} />
      <br />
    </label>
    <label>
      Company:
      <input type="text" onChange={props.handleChangeCompany} />
      <br />
    </label>
    <label>
      School:
      <input type="text" onChange={props.handleChangeSchool} />
      <br />
    </label>
    <button onClick={props.handleClick}>Submit</button>
  </form>
);

export default Form;
