import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 500,
    fontFamily: "monospace"
  }
});

function DisplayRecord(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Experience</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localStorage.getItem("employeeData") &&
            JSON.parse(localStorage.getItem("employeeData")).map(
              (row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.uName}
                  </TableCell>
                  <TableCell>{row.uPhone}</TableCell>
                  <TableCell>{row.uJobTitle}</TableCell>
                  <TableCell>{row.uExp}</TableCell>
                  <TableCell>{row.uSalary}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ padding: "3px", fontSize: "13px" }}
                      onClick={() => props.handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </Paper>
  );
}

DisplayRecord.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DisplayRecord);
