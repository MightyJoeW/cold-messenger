// External Dependencies
import React from "react";

// Component Definition
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
    <label>
      Project Name:
      <input type="text" onChange={props.handleChangeProjectName} />
      <br />
    </label>
    <label>
      Project Link:
      <input type="text" onChange={props.handleChangeProjectLink} />
      <br />
    </label>
    <label>
      Project Description:
      <textarea rows="4" cols="50" onChange={props.handleChangeProjectDescription} />
      <br />
    </label>
    <button onClick={props.handleClick}>Submit</button>
  </form>
);

export default Form;
