// External Dependencies
import React from "react";

const formStyles = {
  paddingBottom: 10,
}

// Component Definition
const Form = props => (
  <form style={formStyles}>
    <label>
      Name:&nbsp;
      <input type="text" onChange={props.handleChangeName} />
      <br />
    </label>
    <label>
      Company:&nbsp;
      <input type="text" onChange={props.handleChangeCompany} />
      <br />
    </label>
    <label>
      School:&nbsp;
      <input type="text" onChange={props.handleChangeSchool} />
      <br />
    </label>
    <label>
      Project Name:&nbsp;
      <input type="text" onChange={props.handleChangeProjectName} />
      <br />
    </label>
    <label>
      Project Link:&nbsp;
      <input type="text" onChange={props.handleChangeProjectLink} />
      <br />
    </label>
    <label>
      Project Description:&nbsp;
      <textarea rows="4" cols="50" onChange={props.handleChangeProjectDescription} />
      <br />
    </label>
    <button onClick={props.handleClick}>Submit</button>
  </form>
);

export default Form;
