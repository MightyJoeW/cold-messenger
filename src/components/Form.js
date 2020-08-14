// External Dependencies
import React from "react";

// Material-UI Dependencies
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import SubmitButton from './SubmitButton';
import TextField from '@material-ui/core/TextField';

// Local Variables
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginRight: 30,
  maxHeight: 600,
  paddingLeft: 15,
  width: '50%',
}

// Component Definition
const Form = props => (
  <Paper style={formStyles}>
    <FormControl>
      <InputLabel required>Name:&nbsp;</InputLabel>
      <Input autoFocus htmlFor="name" id="name" value={props.name} onChange={props.handleChangeName} />
      <FormHelperText id="name-helper-text">The name of the person you are writing to.</FormHelperText>
      <br />
    </FormControl>

    <FormControl>
      <InputLabel required>Company:&nbsp;</InputLabel>
      <Input htmlFor="company" type="text" onChange={props.handleChangeCompany} />
      <FormHelperText id="name-helper-text">The company this person works for.</FormHelperText>
      <br />
    </FormControl>

    <FormControl>
      <InputLabel>School:&nbsp;</InputLabel>
      <Input htmlFor="school" type="text" onChange={props.handleChangeSchool} />
      <FormHelperText id="name-helper-text">The school this person graduated from.</FormHelperText>
      <br />
    </FormControl>

    <FormControl>
      <InputLabel>Project Name:&nbsp;</InputLabel>
      <Input htmlFor="projectName" type="text" onChange={props.handleChangeProjectName} />
      <FormHelperText id="name-helper-text">The name of your best project.</FormHelperText>
      <br />
    </FormControl>

    <FormControl>
      <InputLabel>Project Link:&nbsp;</InputLabel>
      <Input htmlFor="school" type="text" onChange={props.handleChangeProjectLink} />
      <FormHelperText id="name-helper-text">The link to your best project.</FormHelperText>
      <br />
    </FormControl>

    <FormControl>
      <TextField
        id="projDesc"
        label="Project Description"
        value={props.name}
        onChange={props.handleChangeProjectDescription}
        margin="normal"
      />
      <FormHelperText id="name-helper-text">The link to your best project.</FormHelperText>
      <br />
    </FormControl>
    <SubmitButton handleSubmit={props.handleSubmit} />
  </Paper>
);

export default Form;
