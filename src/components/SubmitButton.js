// External Dependencies
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
}));

const SubmitButton = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        color="primary"
        className={classes.button}
        onClick={props.handleSubmit}
        type="submit"
        value="Submit"
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
}

export default SubmitButton;