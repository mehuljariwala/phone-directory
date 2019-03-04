import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  buttonClass: {
    marginTop: "2%"
  }
};
function AddRecord(props) {
  const { classes } = props;
  return (
    <div style={{ marginTop: "2%", width: "50%" }}>
      <TextField
        id="outlined-full-width"
        label="Name:"
        placeholder="Enter Name Here"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        name="uName"
        onChange={props.handleChange}
      />
      <TextField
        id="outlined-full-width"
        label="Phone:"
        placeholder="Enter Phone No Here"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        name="uPhone"
        onChange={props.handleChange}
      />
      <Typography variant="h6" color="inherit" style={{ margin: 8 }}>
        Subscriber to be added:
      </Typography>
      <Typography variant="h6" color="inherit" style={{ margin: 8 }}>
        Name : {props.uName}
      </Typography>
      <Typography variant="h6" color="inherit" style={{ margin: 8 }}>
        Phone : {props.uPhone}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.buttonClass}
        onClick={props.handleAddNew}
      >
        Add
      </Button>
    </div>
  );
}

export default withStyles(styles)(AddRecord);
