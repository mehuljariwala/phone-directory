import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddRecord from "../../components/AddRecord/AddRecord";
import DisplayRecord from "../../components/DisplayRecord/DisplayRecord";

const styles = {
  buttonClass: {
    marginTop: "2%",
    backgroundColor: "#4CAF50",
    "&:hover": {
      backgroundColor: "#8BC34A"
    }
  }
};

//Use State insted of route because state can update only particular div which concept of virtual dom.
class Home extends Component {
  state = {
    addPage: false,
    employeeData: []
  };

  //handle the add and display state.
  _handleHide = () => {
    this.setState(prevState => ({
      addPage: !prevState.addPage
    }));
  };

  //Make only one function which can handle large number of textbox.
  //But name should be same when you declare texbox.
  _handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //Add new record in state.
  //make copy of existing state and change in that.
  //After change then assign into employeeData.
  _handleAddNew = () => {
    let newData = [...this.state.employeeData];
    let body = {
      uName: this.state.uName,
      uPhone: this.state.uPhone,
      uJobTitle: this.state.uJobTitle,
      uSalary: this.state.uSalary,
      uExp: this.state.uExp
    };
    newData.push(body);
    this.setState({
      employeeData: newData,
      addPage: false,
      uName: "",
      uPhone: "",
      uJobTitle: "",
      uSalary: "",
      uExp: ""
    });
    localStorage.setItem("employeeData", JSON.stringify(newData));
  };

  //Delete filter the record by id from existing state data.
  _handleDelete = uId => {
    let newData = [...this.state.employeeData];
    if (uId > -1) {
      newData.splice(uId, 1);
    }
    this.setState({
      employeeData: newData
    });
    localStorage.setItem("employeeData", JSON.stringify(newData));
  };

  //I am using only function component and 1 parent state component which can handle all data.
  render() {
    const { classes } = this.props;
    const { addPage, employeeData } = this.state;
    return (
      <div>
        <Header />
        <div>
          {addPage ? (
            <Button
              variant="contained"
              color="default"
              onClick={this._handleHide}
              style={{ marginTop: "2%" }}
            >
              Back
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonClass}
              onClick={this._handleHide}
            >
              Add
            </Button>
          )}

          {/**Passing data to child component using props. */}
          {addPage ? (
            <AddRecord
              handleChange={this._handleChange}
              uName={this.state.uName}
              uPhone={this.state.uPhone}
              handleAddNew={this._handleAddNew}
            />
          ) : (
            <DisplayRecord
              employeeData={employeeData}
              handleDelete={uId => this._handleDelete(uId)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
